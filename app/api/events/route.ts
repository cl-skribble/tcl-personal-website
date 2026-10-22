import { events } from "@/lib/events";

// Public, read-only list of the events on this site (the same facts the /events pages already show).
// Other tools read it so they always match what is deployed: the SKBL command centre's RSVP sync joins each
// RSVP sheet tab (named by slug) to an event date here, so an event added to lib/events.ts needs no extra step.
export function GET() {
  return Response.json({
    events: events
      .filter((e) => !e.placeholder)
      .map((e) => ({
        slug: e.slug,
        title: e.title,
        start: e.start,
        end: e.end,
        venueName: e.venueName,
        timeTbc: Boolean(e.timeTbc),
        rsvp: { required: e.rsvp.required, capacity: e.rsvp.capacity ?? null, deadline: e.rsvp.deadline ?? null },
      })),
  });
}
