"use client";

import { useState } from "react";
import { QUOTE_MAX, hasHan } from "@/lib/testimonials";

type Status = "idle" | "sending" | "received" | "duplicate" | "error";

const field =
  "w-full rounded-lg bg-catalyst-navy border border-white/15 px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-blueprint-cyan focus:ring-1 focus:ring-blueprint-cyan";
const label = "block text-xs font-semibold uppercase tracking-widest text-white/60 mb-2";

const EXAMPLES = [
  { tag: "EN", text: "I left with three ideas I used the very next day." },
  { tag: "BM", text: "Sesi yang praktikal, terus boleh guna di pejabat." },
  { tag: "中文", text: "内容很实用，第二天就用上了。" },
];

export default function TestimonialForm({ eventSlug, eventTitle }: { eventSlug: string; eventTitle: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, eventSlug }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus(json.status === "duplicate" ? "duplicate" : "received");
      } else {
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "received" || status === "duplicate") {
    return (
      <div className="rounded-2xl border border-blueprint-cyan/40 bg-catalyst-navy-l p-8 sm:p-10 text-center" role="status">
        <div className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-white">
          Thank you <span className="text-white/40">·</span> Terima kasih <span className="text-white/40">·</span> <span lang="zh">谢谢</span>
        </div>
        <p className="mt-4 text-white/65 text-[15px] max-w-md mx-auto">
          {status === "received"
            ? `Your feedback on ${eventTitle} is in. It will appear on the event page once it has been reviewed.`
            : "We already have feedback from you for this event, so nothing more to do."}
        </p>
      </div>
    );
  }

  const left = QUOTE_MAX - quote.length;

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-catalyst-blue/40 bg-catalyst-navy-l p-6 sm:p-8 space-y-6">
      {/* Language notice: make it obvious all three are welcome */}
      <div className="rounded-xl border border-blueprint-cyan/30 bg-blueprint-cyan/[0.06] p-4 sm:p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-blueprint-cyan mb-2">Any language is fine</p>
        <ul className="space-y-1 text-[14px] text-white/80 leading-snug">
          <li>Write in English, Bahasa Melayu or Chinese, whichever feels natural.</li>
          <li>Boleh tulis dalam Bahasa Melayu, English atau Cina.</li>
          <li lang="zh">可以用中文、英文或马来文填写，我们会按原文展示。</li>
        </ul>
      </div>

      <div>
        <label className={label} htmlFor="quote">Your one-line feedback</label>
        <p className="-mt-1 mb-3 text-[13px] text-white/45">
          Maklum balas satu ayat <span className="text-white/25">·</span> <span lang="zh">一句话感想</span>
        </p>
        <textarea
          id="quote" name="quote" required rows={3} maxLength={QUOTE_MAX}
          value={quote} onChange={(e) => setQuote(e.target.value)}
          lang={hasHan(quote) ? "zh" : undefined}
          placeholder="What stayed with you from the session?"
          className={`${field} text-[17px] leading-relaxed resize-none`}
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2" aria-label="Examples">
            {EXAMPLES.map((x) => (
              <button
                key={x.tag} type="button"
                onClick={() => setQuote(x.text)}
                title={`Use example: ${x.text}`}
                className="text-[12px] text-white/50 border border-white/10 rounded-full px-3 py-1 hover:border-white/30 hover:text-white/80 transition-colors"
              >
                <span className="font-semibold text-blueprint-cyan mr-1.5">{x.tag}</span>
                <span lang={x.tag === "中文" ? "zh" : undefined}>{x.text.length > 26 ? `${x.text.slice(0, 26)}…` : x.text}</span>
              </button>
            ))}
          </div>
          <span className={`shrink-0 text-xs tabular-nums ${left < 20 ? "text-amber-300" : "text-white/40"}`}>{left}</span>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="name">Full name</label>
        <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="title">Job title</label>
          <input id="title" name="title" required maxLength={120} autoComplete="organization-title" placeholder="e.g. Head of Marketing" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="company">Company</label>
          <input id="company" name="company" required maxLength={160} autoComplete="organization" className={field} />
        </div>
      </div>

      <label className="flex items-start gap-3 text-[14px] text-white/70 leading-snug cursor-pointer">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[#0ea5e9]" />
        <span>
          You may show my feedback with my <strong className="text-white">name, job title and company</strong>{" "}on
          tengchanleong.com and in materials about Chan Leong&apos;s events.
        </span>
      </label>

      {/* Honeypot: hidden from people, bots fill it in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && <p role="alert" className="text-sm text-red-300">{message}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-catalyst-blue text-white font-semibold text-[15px] px-6 py-3.5 rounded-full hover:bg-catalyst-blue-l transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send feedback"}
      </button>
    </form>
  );
}
