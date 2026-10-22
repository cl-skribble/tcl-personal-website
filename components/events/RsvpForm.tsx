"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "confirmed" | "duplicate" | "full" | "error";

const field =
  "w-full rounded-lg bg-catalyst-navy border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-blueprint-cyan focus:ring-1 focus:ring-blueprint-cyan";
const label = "block text-xs font-semibold uppercase tracking-widest text-white/60 mb-2";

export default function RsvpForm({ eventSlug, eventTitle }: { eventSlug: string; eventTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, eventSlug }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus(json.status);
      } else {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "confirmed" || status === "duplicate") {
    return (
      <div className="rounded-2xl border border-blueprint-cyan/40 bg-catalyst-navy-l p-8 text-center" role="status">
        <div className="font-display font-extrabold uppercase text-3xl text-white">
          {status === "confirmed" ? "You're in." : "Already registered."}
        </div>
        <p className="mt-3 text-white/65 text-[15px]">
          {status === "confirmed"
            ? `Your RSVP for ${eventTitle} is recorded. We'll message you on WhatsApp with details closer to the date.`
            : "We already have an RSVP with these details, so nothing more to do."}
        </p>
      </div>
    );
  }

  if (status === "full") {
    return (
      <div className="rounded-2xl border border-white/15 bg-catalyst-navy-l p-8 text-center" role="status">
        <div className="font-display font-extrabold uppercase text-3xl text-white">Fully booked</div>
        <p className="mt-3 text-white/65 text-[15px]">
          All seats are taken. Message us on WhatsApp and we&apos;ll add you to the waitlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-catalyst-blue/40 bg-catalyst-navy-l p-6 sm:p-8 space-y-5">
      <div className="font-display font-extrabold uppercase text-2xl text-white">Reserve your seat</div>

      <div>
        <label className={label} htmlFor="name">Full name</label>
        <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="phone">WhatsApp number</label>
          <input id="phone" name="phone" type="tel" required maxLength={25} placeholder="+60 12 345 6789" autoComplete="tel" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className={field} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="company">Company</label>
          <input id="company" name="company" maxLength={160} autoComplete="organization" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="guests">Seats</label>
          <select id="guests" name="guests" defaultValue="1" className={field}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="notes">Anything we should know? (optional)</label>
        <textarea id="notes" name="notes" rows={3} maxLength={500} className={field} />
      </div>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-300">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-catalyst-blue text-white font-semibold text-[15px] px-6 py-3.5 rounded-full hover:bg-catalyst-blue-l transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Confirm RSVP"}
      </button>
    </form>
  );
}
