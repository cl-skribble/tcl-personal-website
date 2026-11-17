import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/events/PageShell";
import TestimonialForm from "@/components/events/TestimonialForm";
import { events, fmtDate, getEvent, isPast } from "@/lib/events";

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
    title: `Share your feedback: ${e.title} | Teng Chan Leong`,
    description: `A one-line note on ${e.title}, in English, Bahasa Melayu or Chinese.`,
    robots: { index: false, follow: false }, // shared by link with attendees only
  };
}

export default async function FeedbackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e || e.testimonials === false) notFound();

  return (
    <PageShell eyebrow="Attendee feedback" title={e.title}>
      <section className="bg-catalyst-navy py-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="text-white/60 text-sm mb-3">{fmtDate(e.start)} · {e.venueName}</p>
          <p className="text-white/80 text-[17px] leading-relaxed mb-10">
            Thank you for coming. If you have a minute, tell us in one line what you took away from the session.
            Approved feedback appears on the event page with your name, job title and company.
          </p>
          {isPast(e) ? (
            <TestimonialForm eventSlug={e.slug} eventTitle={e.title} />
          ) : (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-white/70 text-[15px]">
              Feedback opens after the event ends. See you there.
            </p>
          )}
          <Link href={`/events/${e.slug}`} className="inline-block mt-8 text-sm text-white/60 hover:text-white transition-colors">
            ← Back to event page
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
