import { getEvent, isPast } from "@/lib/events";
import { QUOTE_MAX } from "@/lib/testimonials";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots move on.
  if (clean(body.website, 50)) return Response.json({ ok: true, status: "received" });

  const event = getEvent(clean(body.eventSlug, 120));
  if (!event || !isPast(event) || event.testimonials === false) {
    return Response.json({ ok: false, error: "Feedback is not open for this event." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const title = clean(body.title, 120);
  const company = clean(body.company, 160);
  const quote = clean(body.quote, QUOTE_MAX);

  if (!name || !title || !company || quote.length < 3) {
    return Response.json({ ok: false, error: "Please fill in your feedback, name, job title and company." }, { status: 400 });
  }
  if (clean(body.consent, 5) !== "yes") {
    return Response.json({ ok: false, error: "Please tick the box so we can show your feedback on the website." }, { status: 400 });
  }

  const row = {
    secret: process.env.RSVP_WEBHOOK_SECRET ?? "",
    kind: "testimonial",
    // Deliberately not "eventSlug": an Apps Script deployment without the testimonial branch then fails on
    // d.eventSlug and writes nothing, instead of filing this as an RSVP in the event's guest tab.
    event: event.slug,
    eventName: event.title,
    name, title, company, quote,
  };

  const url = process.env.RSVP_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[testimonial:dev] RSVP_WEBHOOK_URL not set, not stored:", { ...row, secret: "***" });
      return Response.json({ ok: true, status: "received" });
    }
    console.error("[testimonial] RSVP_WEBHOOK_URL is not configured");
    return Response.json({ ok: false, error: "Feedback is temporarily unavailable. Please message us on WhatsApp." }, { status: 503 });
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
    if (out.ok && (out.status === "received" || out.status === "duplicate")) {
      return Response.json({ ok: true, status: out.status });
    }
    console.error("[testimonial] sheet rejected:", out);
  } catch (err) {
    console.error("[testimonial] webhook failed:", err);
  }
  return Response.json({ ok: false, error: "Could not save your feedback. Please try again." }, { status: 502 });
}
