import Image from "next/image";
import Link from "next/link";
import { dateParts, fmtTime, rsvpOpen, type SiteEvent } from "@/lib/events";

export default function EventCard({ event, past = false }: { event: SiteEvent; past?: boolean }) {
  const { day, month, year } = dateParts(event.start);
  const open = rsvpOpen(event);

  return (
    <Link
      href={`/events/${event.slug}`}
      className={`group relative flex flex-col sm:flex-row gap-6 sm:gap-8 rounded-2xl border p-6 sm:p-8 transition-colors ${
        past
          ? "border-white/10 bg-white/[0.02] hover:border-white/25"
          : "border-catalyst-blue/40 bg-catalyst-navy-l hover:border-blueprint-cyan"
      }`}
    >
      <div className="flex gap-6 sm:gap-8 min-w-0 flex-1">
      {/* Date block */}
      <div className="shrink-0 w-20 sm:w-24 text-center border-r border-white/10 pr-6 sm:pr-8">
        <div className={`font-display font-extrabold text-5xl sm:text-6xl leading-none ${past ? "text-white/50" : "text-white"}`}>
          {day}
        </div>
        <div className={`font-display font-bold text-lg tracking-[0.2em] mt-1 ${past ? "text-white/40" : "text-blueprint-cyan"}`}>
          {month}
        </div>
        <div className="text-xs text-white/40 mt-1">{year}</div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60 border border-white/15 rounded-full px-3 py-1">
            {event.audience}
          </span>
          {open && (
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white bg-catalyst-blue rounded-full px-3 py-1">
              RSVP open
            </span>
          )}
          {event.placeholder && (
            <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-300/80 border border-amber-300/30 rounded-full px-3 py-1">
              Sample
            </span>
          )}
        </div>

        <h3 className={`font-display font-extrabold uppercase tracking-tight leading-[1.05] text-2xl sm:text-3xl ${past ? "text-white/80" : "text-white"}`}>
          {event.title}
        </h3>
        <p className="mt-3 text-white/60 text-[15px] leading-relaxed max-w-xl">{event.tagline}</p>

        <p className="mt-4 text-sm text-white/45">
          {event.timeTbc ? "Time TBC" : `${fmtTime(event.start)} – ${fmtTime(event.end)}`} · {event.venueName}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blueprint-cyan group-hover:gap-3 transition-all">
          {past ? (event.recapUrl ? "View recap" : "Details") : open ? "Details & RSVP" : event.externalUrl ? "Details & event site" : "Details"}
          <span aria-hidden="true">→</span>
        </span>
      </div>
      </div>

      {/* Poster: only when the event has one. Full-width on mobile, 4:5 thumbnail on desktop. */}
      {event.poster && (
        <div className={`relative shrink-0 w-full max-w-[300px] sm:w-[200px] sm:max-w-none aspect-[4/5] self-center sm:self-start overflow-hidden rounded-xl border border-white/10 ${past ? "opacity-70 group-hover:opacity-100" : ""} transition-opacity`}>
          <Image
            src={event.poster}
            alt={`${event.title} poster`}
            fill
            sizes="(min-width: 640px) 200px, 300px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
    </Link>
  );
}
