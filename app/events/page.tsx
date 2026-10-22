import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";
import EventCard from "@/components/events/EventCard";
import { splitEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Teng Chan Leong",
  description: "Upcoming and past sessions, talks and workshops hosted by Teng Chan Leong.",
};

// Re-evaluate upcoming vs past at most once an hour.
export const revalidate = 3600;

export default function EventsPage() {
  const { upcoming, past } = splitEvents();

  return (
    <PageShell eyebrow="Sessions · Talks · Workshops" title={<>Events</>}>
      <section className="bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-extrabold uppercase text-3xl text-white mb-8">Upcoming</h2>
          {upcoming.length ? (
            <div className="space-y-5">
              {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
            </div>
          ) : (
            <p className="text-white/55">Nothing scheduled right now. Check back soon.</p>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section className="bg-catalyst-navy py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold uppercase text-3xl text-white/70 mb-8">Past</h2>
            <div className="space-y-5">
              {past.map((e) => <EventCard key={e.slug} event={e} past />)}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
