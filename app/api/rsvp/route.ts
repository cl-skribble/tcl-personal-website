import { getEvent, rsvpOpen } from "@/lib/events";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots move on.
  if (clean(body.website, 50)) return Response.json({ ok: true, status: "confirmed" });

  const event = getEvent(clean(body.eventSlug, 120));
  if (!event || !rsvpOpen(event)) {
    return Response.json({ ok: false, error: "RSVP is not open for this event." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 25);
  const email = clean(body.email, 160).toLowerCase();
  const guests = Math.min(4, Math.max(1, parseInt(clean(body.guests, 2), 10) || 1));

  if (!name || !/^\+?[0-9 ()-]{7,20}$/.test(phone) || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json({ ok: false, error: "Please check your name, WhatsApp number and email." }, { status: 400 });
  }

  const row = {
    secret: process.env.RSVP_WEBHOOK_SECRET ?? "",
    eventSlug: event.slug,
    eventTitle: event.title,
    capacity: event.rsvp.capacity ?? 0,
    name, phone, email,
    company: clean(body.company, 160),
    guests,
    notes: clean(body.notes, 500),
  };

  const url = process.env.RSVP_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[rsvp:dev] RSVP_WEBHOOK_URL not set, not stored:", { ...row, secret: "***" });
      return Response.json({ ok: true, status: "confirmed" });
    }
    console.error("[rsvp] RSVP_WEBHOOK_URL is not configured");
    return Response.json({ ok: false, error: "RSVP is temporarily unavailable. Please message us on WhatsApp." }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" }, // Apps Script web apps reject JSON preflight
      body: JSON.stringify(row),
      redirect: "follow",
      cache: "no-store",
    });
    const out = await res.json();
    if (out.ok) return Response.json({ ok: true, status: out.status });
    console.error("[rsvp] sheet rejected:", out);
  } catch (err) {
    console.error("[rsvp] webhook failed:", err);
  }
  return Response.json({ ok: false, error: "Could not save your RSVP. Please try again or message us on WhatsApp." }, { status: 502 });
}
