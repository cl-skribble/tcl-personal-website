export type EventRsvp = {
  /** Show the RSVP form on the event page. */
  required: boolean;
  /** Max seats. Omit for unlimited. Enforced by the sheet script. */
  capacity?: number;
  /** ISO date; form closes after this. Omit to stay open until the event. */
  deadline?: string;
};

export type SiteEvent = {
  slug: string;
  title: string;
  /** Short line for list cards. */
  tagline: string;
  /** Paragraphs for the detail page. */
  description: string[];
  /** Start / end as ISO with timezone. Upcoming vs past is derived from `end`. */
  start: string;
  end: string;
  venueName: string;
  /** Street address, shown under the venue name. */
  venueAddress?: string;
  venueUrl?: string;
  /** Time not announced yet: hides the clock time and the calendar link. */
  timeTbc?: boolean;
  /** Event hosted elsewhere: detail page gets a button linking out. */
  externalUrl?: string;
  externalLabel?: string;
  /** e.g. "Members", "Open to all", "Invite only" */
  audience: string;
  rsvp: EventRsvp;
  /** Past events: optional recap link (LinkedIn post, album, slides). */
  recapUrl?: string;
  /** Dummy entries, delete when real events replace them. */
  placeholder?: boolean;
};

export const events: SiteEvent[] = [
  {
    slug: "ai-in-marketing-from-prompts-to-practice",
    title: "AI in Marketing: From Prompts to Practice",
    tagline:
      "How to use AI in everyday marketing workflows without losing the human touch.",
    description: [
      "AI is changing the way we approach marketing, from content creation and campaign planning to data analysis, creative development, and day-to-day operations.",
      "But the real question is: how do we use AI effectively in our everyday marketing workflows without losing the human touch?",
      "Join us for an insightful session exploring how AI can be integrated into daily marketing operations, where it adds the most value, and how marketing professionals can navigate this evolving landscape to work smarter, move faster, and create greater impact.",
      "Whether you're a marketer, agency professional, business owner, or part of a marketing team, this session is an opportunity to rethink how you work, discover practical applications of AI, and stay ahead in an increasingly AI-driven industry.",
      "Come curious. Leave with new perspectives on putting AI to work.",
    ],
    start: "2026-10-29T14:00:00+08:00",
    end: "2026-10-29T16:00:00+08:00",
    venueName: "Skribble Office",
    venueAddress: "Unit E-15-02, Level 15, Plaza Mont Kiara, No. 2, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Mont+Kiara+No.+2+Jalan+Kiara+50480+Kuala+Lumpur",
    audience: "Marketers, agencies & business owners",
    rsvp: { required: true },
  },

  {
    slug: "beyondfest-2026",
    title: "BeyondFest 2026",
    tagline: "Speaking at BeyondFest: one day in Kuala Lumpur for founders building a business worth selling.",
    description: [
      "BeyondFest 2026 is a one-day festival in Kuala Lumpur for founders building a business worth selling, not just a job with better hours.",
      "Teng Chan Leong joins as Speaker 4 of 19, sharing the story of building two companies, Skribble and SAMA, with real numbers.",
      "Passes, the full speaker line-up and the programme are on the official event website.",
    ],
    start: "2026-11-13T09:00:00+08:00",
    end: "2026-11-13T18:00:00+08:00",
    timeTbc: true,
    venueName: "Greybox GMBB",
    venueAddress: "Bukit Bintang, Kuala Lumpur",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=Greybox+GMBB+Bukit+Bintang+Kuala+Lumpur",
    audience: "Founders",
    rsvp: { required: false },
    externalUrl: "https://www.thebeyondfest.com",
    externalLabel: "Get passes on thebeyondfest.com",
  },

  /* ── Placeholders below: structure demo only. Replace or delete. ── */
  {
    slug: "sample-upcoming-founders-roundtable",
    title: "Sample: Founders Roundtable",
    tagline: "Placeholder for a future invite-only discussion.",
    description: [
      "This is a placeholder event used to demonstrate the layout of an upcoming event with a capped guest list.",
      "Replace this entry in lib/events.ts with a real event.",
    ],
    start: "2026-12-04T19:30:00+08:00",
    end: "2026-12-04T22:00:00+08:00",
    venueName: "Kuala Lumpur (venue TBC)",
    audience: "Invite only",
    rsvp: { required: true, capacity: 20, deadline: "2026-11-27T23:59:00+08:00" },
    placeholder: true,
  },
  {
    slug: "sample-past-keynote",
    title: "Sample: Industry Keynote",
    tagline: "Placeholder for a past talk with a recap link.",
    description: ["Placeholder past event with a recap link."],
    start: "2026-08-12T10:00:00+08:00",
    end: "2026-08-12T11:00:00+08:00",
    venueName: "Kuala Lumpur Convention Centre",
    audience: "Open to all",
    rsvp: { required: false },
    recapUrl: "https://linkedin.com/in/tengchanleong",
    placeholder: true,
  },
  {
    slug: "sample-past-workshop",
    title: "Sample: Team Workshop",
    tagline: "Placeholder for a past workshop.",
    description: ["Placeholder past event."],
    start: "2026-05-27T14:00:00+08:00",
    end: "2026-05-27T17:00:00+08:00",
    venueName: "Skribble HQ, Kuala Lumpur",
    audience: "Members",
    rsvp: { required: true },
    placeholder: true,
  },
];

export const isPast = (e: SiteEvent, now = new Date()) =>
  new Date(e.end).getTime() < now.getTime();

export const rsvpOpen = (e: SiteEvent, now = new Date()) =>
  e.rsvp.required &&
  !isPast(e, now) &&
  (!e.rsvp.deadline || new Date(e.rsvp.deadline).getTime() >= now.getTime());

export function splitEvents(now = new Date()) {
  const upcoming = events
    .filter((e) => !isPast(e, now))
    .sort((a, b) => +new Date(a.start) - +new Date(b.start));
  const past = events
    .filter((e) => isPast(e, now))
    .sort((a, b) => +new Date(b.start) - +new Date(a.start));
  return { upcoming, past };
}

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

const TZ = "Asia/Kuala_Lumpur";

export const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ,
  }).format(new Date(iso));

export const fmtTime = (iso: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric", minute: "2-digit", timeZone: TZ,
  }).format(new Date(iso));

export const dateParts = (iso: string) => {
  const d = new Date(iso);
  const f = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-GB", { ...o, timeZone: TZ }).format(d);
  return { day: f({ day: "2-digit" }), month: f({ month: "short" }).toUpperCase(), year: f({ year: "numeric" }) };
};

/** Google Calendar "add event" link. */
export function calendarUrl(e: SiteEvent) {
  const z = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${z(e.start)}/${z(e.end)}`,
    details: e.tagline,
    location: e.venueUrl ?? e.venueName,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}
