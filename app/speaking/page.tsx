import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/events/PageShell";
import VideoCard from "@/components/speaking/VideoCard";
import { SITE_URL, jsonLdString } from "@/lib/site";
import {
  BOOKING_EMAIL, SPEAKING_FEE, bookingHref, faqs, formats, keynotes,
  pastEngagements, photos, topics, videos, whyBook,
} from "@/lib/speaking";

export const metadata: Metadata = {
  title: "Book Teng Chan Leong | Keynote Speaker on Digital Transformation & Southeast Asia",
  description:
    `Book Teng Chan Leong, CEO of Skribble Group and Founder of SAMA, for keynotes, panels, fireside chats and workshops on digital transformation, regional marketing, PropTech and AI. Fees from ${SPEAKING_FEE} per engagement.`,
  alternates: { canonical: "/speaking" },
};

/** In-page tabs, in the order the sections appear. */
const sections = [
  { id: "about",   label: "About" },
  { id: "topics",  label: "Speech Topics" },
  { id: "reel",    label: "Speaking Reel" },
  { id: "why",     label: "Why Book" },
  { id: "stages",  label: "Past Stages" },
  { id: "faq",     label: "FAQ" },
];

const facts = [
  { label: "Speaking fee",  value: `From ${SPEAKING_FEE}`, note: "per engagement" },
  { label: "Travels from",  value: "Kuala Lumpur",          note: "Available across Asia and worldwide" },
  { label: "Formats",       value: formats.map((f) => f.name).join(" · ") },
];

const proof = [
  { stat: "10+",  label: "years building businesses across Southeast Asia" },
  { stat: `${pastEngagements.length}+`, label: "conference stages, panels and broadcasts" },
  { stat: "40U40", label: "Prestige Malaysia 40 Under 40, 2024" },
  { stat: "AOTY", label: "Agency Leader of the Year, Bronze, 2023" },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-3">{eyebrow}</p>
      <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-white mb-8">{title}</h2>
    </>
  );
}

function BookButton({ label = "Book Chan Leong", className = "" }: { label?: string; className?: string }) {
  return (
    <a href={bookingHref}
      className={`inline-flex justify-center items-center bg-catalyst-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-catalyst-blue-l transition-colors ${className}`}>
      {label} →
    </a>
  );
}

export default function SpeakingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Book Teng Chan Leong as a Speaker",
      url: `${SITE_URL}/speaking`,
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
        "@type": "Person",
        name: "Teng Chan Leong",
        jobTitle: "Chief Executive Officer, Skribble Group",
        knowsAbout: topics,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <PageShell eyebrow="Keynote Speaker · Kuala Lumpur" title={<>Teng<br />Chan Leong</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />

      {/* ── Sticky in-page tabs ── */}
      <nav aria-label="On this page" className="sticky top-16 z-40 bg-catalyst-navy/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center gap-6 h-12">
          <div className="flex-1 min-w-0 flex gap-6 overflow-x-auto whitespace-nowrap [scrollbar-width:none]">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-white/65 text-sm font-medium hover:text-blueprint-cyan transition-colors">
                {s.label}
              </a>
            ))}
          </div>
          <a href="#book" className="hidden sm:inline-flex shrink-0 text-blueprint-cyan text-sm font-semibold hover:text-white transition-colors">
            Book Now →
          </a>
        </div>
      </nav>

      {/* ── About: photo, bio, quick facts ── */}
      <section id="about" className="scroll-mt-28 bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-[2fr_3fr] gap-10 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <Image src="/images/profile.jpg" alt="Teng Chan Leong" fill priority
              sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>

          <div>
            <p className="text-blueprint-cyan text-sm font-semibold mb-5">
              CEO of Skribble Group · Founder of the Strategic Asia Marketing Alliance (SAMA) · Prestige 40 Under 40
            </p>
            <div className="space-y-4 text-white/70 leading-relaxed mb-8">
              <p>
                <span className="text-white font-semibold">Teng Chan Leong</span> is an entrepreneur and operator who has spent more
                than a decade building businesses across Southeast Asia. He speaks on digital transformation, regional growth and the
                business of marketing from where they meet: inside the companies doing the work.
              </p>
              <p>
                As CEO of Skribble Group he leads an award-winning digital agency, named Gold for Best Agency Culture and Silver for
                Best Employer in 2024. As founder of SAMA he unites independent agencies across the region so they can compete for
                regional work as one.
              </p>
              <details className="group">
                <summary className="list-none cursor-pointer text-blueprint-cyan text-sm font-semibold hover:text-white transition-colors">
                  <span className="group-open:hidden">Read more</span>
                  <span className="hidden group-open:inline">Read less</span>
                </summary>
                <div className="space-y-4 mt-4">
                  <p>
                    On stage he brings what audiences rarely get: first-hand experience. His talks come from running the work, not
                    reporting on it, and every session is tailored to the room so audiences leave with moves they can act on the next
                    morning.
                  </p>
                  <p>
                    He has spoken at HK FinTech Week, the REHDA Institute, AWS BeyondFest and the Re:source APAC Conference, and is a
                    regular guest on BFM 89.9 and Astro Awani. A Carnegie Mellon University graduate, he also advises the INTI Industry
                    Advisory Board and mentors students through USAPPS Education.
                  </p>
                </div>
              </details>
            </div>

            <dl className="rounded-2xl border border-white/10 bg-catalyst-navy-l divide-y divide-white/10 mb-8">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-5 py-4">
                  <dt className="text-white/45 text-xs font-semibold uppercase tracking-wider sm:w-32 shrink-0">{f.label}</dt>
                  <dd>
                    <span className="text-white font-semibold">{f.value}</span>
                    {f.note && <span className="text-white/45 text-sm"> {f.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>

            <BookButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* ── Proof points ── */}
      <section className="bg-catalyst-navy-l border-y border-white/10 py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {proof.map((p) => (
            <div key={p.label}>
              <p className="font-display font-extrabold text-4xl text-blueprint-cyan">{p.stat}</p>
              <p className="text-white/60 text-sm leading-snug mt-1">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Speech topics ── */}
      <section id="topics" className="scroll-mt-28 bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Signature Keynotes" title="Speech Topics" />
          <div className="space-y-4">
            {keynotes.map((k) => (
              <details key={k.title} className="group rounded-2xl border border-white/10 bg-catalyst-navy-l open:border-blueprint-cyan/40 transition-colors">
                <summary className="list-none cursor-pointer p-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-widest mb-2">{k.tag}</p>
                    <h3 className="text-white text-xl font-bold leading-snug">{k.title}</h3>
                    <p className="text-white/55 mt-1">{k.tagline}</p>
                  </div>
                  <span className="shrink-0 text-blueprint-cyan text-sm font-semibold mt-6 whitespace-nowrap">
                    <span className="group-open:hidden">Read more +</span>
                    <span className="hidden group-open:inline">Close −</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-white/65 text-sm leading-relaxed mb-4 max-w-3xl">{k.summary}</p>
                  <p className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-2">Audiences will learn</p>
                  <ul className="space-y-1.5">
                    {k.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="w-1 h-1 rounded-full bg-blueprint-cyan mt-2 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <p className="text-white/45 text-sm mt-6">
            Also available on: {topics.join(" · ")}.
          </p>
        </div>
      </section>

      {/* ── Speaking reel ── */}
      <section id="reel" className="scroll-mt-28 bg-catalyst-navy py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Watch" title="Speaking Reel" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            {videos.map((v) => <VideoCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── Why people book ── */}
      <section id="why" className="scroll-mt-28 bg-catalyst-navy-l py-16 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Why People Book" title="Why Book Chan Leong" />
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {whyBook.map((w) => (
              <div key={w.verb} className="border-t-2 border-blueprint-cyan pt-5">
                <p className="font-display font-extrabold uppercase text-3xl text-white leading-none">{w.verb}</p>
                <p className="text-blueprint-cyan font-semibold mt-1 mb-3">{w.line}</p>
                <p className="text-white/65 text-sm leading-relaxed">{w.detail}</p>
              </div>
            ))}
          </div>
          <BookButton label="Book Chan Leong Now" />
        </div>
      </section>

      {/* ── Past stages ── */}
      <section id="stages" className="scroll-mt-28 bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="On Stage" title="Past Stages" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((p) => (
              <figure key={p.event} className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
                <Image src={p.src} alt={p.event} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-catalyst-navy/90 to-transparent p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{p.event}</p>
                  <p className="text-white/60 text-xs">{p.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-5">Past Engagements</p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm text-white/65">
              {pastEngagements.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-catalyst-blue mt-2 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((f) => (
              <div key={f.name} className="rounded-2xl border border-white/10 bg-catalyst-navy-l p-5">
                <h3 className="text-white font-bold mb-1">{f.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-catalyst-blue/50 bg-catalyst-blue/15 p-5">
              <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-widest mb-1">Fee</p>
              <p className="text-white font-bold text-xl">From {SPEAKING_FEE}</p>
              <p className="text-white/60 text-sm">per engagement. Quoted by format, location and date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-28 bg-catalyst-navy py-16 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Planning" title="Frequently Asked Questions" />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-white font-semibold">
                  {f.q}
                  <span className="text-blueprint-cyan transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-white/65 text-sm leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section id="book" className="scroll-mt-28 bg-catalyst-blue py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-white mb-3">Bring Chan Leong to Your Event</h2>
            <p className="text-white/80 max-w-xl leading-relaxed">
              Share your event name, date, location, format and audience. Expect a reply with availability and a quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <a href={bookingHref}
              className="inline-flex justify-center bg-white text-catalyst-blue font-bold text-sm px-6 py-4 rounded-2xl hover:bg-warm-white transition-colors">
              Send a speaking inquiry →
            </a>
            <p className="text-white/70 text-xs text-center">or email {BOOKING_EMAIL}</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
