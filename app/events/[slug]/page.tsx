import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/components/events/PageShell";
import RsvpForm from "@/components/events/RsvpForm";
import PromoCode from "@/components/events/PromoCode";
import {
  calendarUrl, events, fmtDate, fmtTime, getEvent, isPast, rsvpOpen,
} from "@/lib/events";

export const revalidate = 3600;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return {
    title: `${e.title} | Teng Chan Leong`,
    description: e.tagline,
    openGraph: { title: e.title, description: e.tagline, type: "website" },
  };
}

function Fact({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-blueprint-cyan mb-1">{k}</dt>
      <dd className="text-white text-[15px]">{children}</dd>
    </div>
  );
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) notFound();

  const past = isPast(e);
  const open = rsvpOpen(e);

  return (
    <PageShell eyebrow={past ? "Past event" : "Upcoming event"} title={e.title}>
      <section className="bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_420px] gap-12">
          <div>
            <div className="space-y-5 text-white/75 text-[17px] leading-relaxed">
              {e.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            {e.poster && (
              <a href={e.poster} target="_blank" rel="noopener noreferrer"
                style={{ aspectRatio: e.posterRatio ?? 0.8 }}
                className="group relative block mt-10 w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10"
                aria-label={`Open ${e.title} poster full size`}>
                <Image
                  src={e.poster}
                  alt={`${e.title} poster`}
                  fill
                  sizes="420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>
            )}
            {past && e.recapUrl && (
              <a href={e.recapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-8 bg-catalyst-blue text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-catalyst-blue-l transition-colors">
                View recap
              </a>
            )}
          </div>

          <aside className="space-y-6">
            <dl className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
              <Fact k="Date">{fmtDate(e.start)}</Fact>
              <Fact k="Time">{e.timeLabel ?? (e.timeTbc ? "To be announced" : `${fmtTime(e.start)} – ${fmtTime(e.end)} (MYT)`)}</Fact>
              <Fact k="Venue">
                {e.venueUrl ? (
                  <a href={e.venueUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                    {e.venueName}
                  </a>
                ) : e.venueName}
                {e.venueAddress && <span className="block text-white/60 text-sm mt-1">{e.venueAddress}</span>}
              </Fact>
              <Fact k="Who it's for">{e.audience}</Fact>
              {!past && !e.timeTbc && (
                <a href={calendarUrl(e)} target="_blank" rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-blueprint-cyan hover:text-white transition-colors">
                  + Add to Google Calendar
                </a>
              )}
            </dl>

            {e.promoCode && !past && <PromoCode code={e.promoCode} note={e.promoNote} />}
            {e.externalUrl && (
              <a href={e.externalUrl} target="_blank" rel="noopener noreferrer"
                className="block text-center bg-catalyst-blue text-white font-semibold text-[15px] px-6 py-3.5 rounded-full hover:bg-catalyst-blue-l transition-colors">
                {e.externalLabel ?? "Event website"} ↗
              </a>
            )}
            {open && <RsvpForm eventSlug={e.slug} eventTitle={e.title} />}
            {!past && e.rsvp.required && !open && (
              <p className="text-white/60 text-[15px]">RSVP for this event has closed.</p>
            )}
            {!past && !e.rsvp.required && (
              <p className="text-white/60 text-[15px]">{e.externalUrl ? "No RSVP with us needed. Register on the event website." : "No RSVP needed. Just turn up."}</p>
            )}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
