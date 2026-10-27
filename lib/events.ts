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
  /** Promo code shown on the card and detail page. */
  promoCode?: string;
  /** What the code gives, e.g. "15% off your pass". */
  promoNote?: string;
  /** Ticket price shown on card and detail page, e.g. "Free". Omit if not applicable. */
  fee?: string;
  /** e.g. "Members", "Open to all", "Invite only" */
  audience: string;
  rsvp: EventRsvp;
  /** Optional poster in /public. Cards and detail page adapt when absent. */
  poster?: string;
  /** Poster width / height. Default 0.8 (4:5 portrait); use 1 for square. */
  posterRatio?: number;
  /** Replaces the "start – end" clock text when the exact range isn't known. */
  timeLabel?: string;
  /** Past events: optional recap link (LinkedIn post, album, slides). */
  recapUrl?: string;
  /** Dummy entries, delete when real events replace them. */
  placeholder?: boolean;
};

export const events: SiteEvent[] = [
  {
    slug: "getting-started-with-ai",
    title: "Getting Started with AI: Real Use Cases for Real Businesses",
    tagline:
      "A practical intro to using AI across your whole business, with real examples you can copy.",
    description: [
      "Most people know AI is a big deal. Fewer know where to actually start.",
      "This is a hands-on session on how AI can be used across a business, not just in marketing. Chan Leong shares real use cases from running Skribble and SAMA day to day, and you get to try them yourself, then pick what fits your own work.",
      "**What we could explore hands-on:**",
      "- Contact card syncing and building directories",
      "- Automating repetitive workflows",
      "- Email triage, so your inbox stops running your day",
      "- Dashboards for finance, operations and performance",
      "- Reports and client portals",
      "- Social media management and content creation",
      "**Guest speaker: Thomas Au**",
      "Thomas is a creative director who helps marketing teams master AI content creation.",
      "His teaching blends professional film industry standards, creative direction principles, and the latest AI tools to deliver productivity outcomes.",
      "Whether you run a business, lead a team or work in marketing, operations or finance, you'll leave with something you can use the next day.",
      "Bring your laptop. And bring your messiest process.",
    ],
    start: "2026-10-29T14:00:00+08:00",
    end: "2026-10-29T16:00:00+08:00",
    venueName: "Skribble Office",
    venueAddress: "Unit E-15-02, Level 15, Plaza Mont Kiara, No. 2, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Mont+Kiara+No.+2+Jalan+Kiara+50480+Kuala+Lumpur",
    audience: "Business owners, team leads & professionals",
    fee: "Free",
    rsvp: { required: true },
    poster: "/images/events/getting-started-with-ai-poster.jpg",
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
    promoCode: "BF26SAMA15",
    promoNote: "15% off your pass",
    poster: "/images/events/beyondfest-2026-poster.jpg",
  },

  {
    slug: "the-franchise-insider-brand-edition",
    title: "The Franchise Insider: Brand Edition",
    tagline:
      "Malaysia's first event built for franchise brands: 10 roundtables, 100 brand owners, no sales pitches.",
    description: [
      "The Franchise Insider: Brand Edition is the event built for franchise brands. 100 brand owners. 10 roundtables. One handpicked expert at every table, and no sales pitches. A full day built around the challenges franchise brands are actually facing.",
      "Most franchise events are expo floors and sales pitches. The Brand Edition is built around facilitated roundtables, where ten business owners sit with one expert partner and work through a challenge they all share.",
      "**Teng Chan Leong is sharing on Franchise Branding & Marketing.**",
      "**How the day works**",
      "- Learn on stage in the morning, with 7 curated stage sessions through the day",
      "- Pick two roundtable topics. Round 1 is 45 minutes with ten business owners and one expert at your table",
      "- The bell rings and you swap. Round 2 is 45 minutes with ten new conversations",
      "- Meet 10 handpicked vendors, one partner per category, never competing at the next table",
      "**Roundtable topics (subject to change)**",
      "- Selling your first 10 locations",
      "- Brand fund vs local marketing: who pays, who controls?",
      "- Bankable franchisees: making your brand easy to fund",
      "- Getting paid: royalty leakage and cross-border cash",
      "- The key metrics to work on in preparation for an IPO",
      "- Supply chain: your margin or your franchisees'?",
      "- Increasing customer lifetime value and average spend",
      "- Consistency at scale",
      "- Protecting your brand when legal issues arise",
      "- The staffing crisis: foreign workers and frontliners",
      "**Also on the tentative programme:** a session on how franchise development is changing and whether your brand is ready for 2027, a panel on AI for Franchising, and a fireside chat on the Road to IPO. Registration and networking coffee from 8:30am.",
      "**Who it's for:** franchise brand owners and their senior team, business owners planning to expand through franchising, and business owners curious whether franchising suits them. Not for those only looking to buy a franchise, and partner places are by invitation only.",
      "**Tickets:** early bird RM297 until 10 November 2026 (RM349 from 11 November). MFA members RM267 (RM314 from 20 November). Food and refreshments included. Limited to 100 seats, and each table is capped at ten.",
      "Organised by MYFranchiseGuide with the Malaysian Franchise Association (MFA). Partners include HELP University, Skribble, RakanSales, Gamuda, LPP Law and USEA.",
    ],
    start: "2026-12-03T09:00:00+08:00",
    end: "2026-12-03T17:30:00+08:00",
    venueName: "HELP University",
    venueAddress: "Subang campus",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=HELP+University+Subang+Jaya",
    audience: "Franchise brand owners & senior teams",
    fee: "From RM267",
    rsvp: { required: false },
    externalUrl: "https://asiafranchiseguide.com/tfi-brand-edition",
    externalLabel: "Get tickets",
    poster: "/images/events/franchise-insider-brand-edition-poster.jpg",
    posterRatio: 0.75,
  },

  /* Past events */
  {
    slug: "sme-ceo-forum-2026",
    title: "SME CEO Forum 2026",
    tagline: "Panellist: Future-Proofing Your Business with AI and Tech.",
    description: [
      "The SME CEO Forum 2026, organised by SAMENTA (Small and Medium Enterprises Association), ran under the theme \"The SME Structural Pivot: From Survival to Greatness\".",
      "Teng Chan Leong joined as a panellist on Panel II, Future-Proofing Your Business with AI and Tech, alongside sessions on ESG and global market access, a policy makers vs SMEs dialogue, and real lessons in scaling to greatness.",
    ],
    start: "2026-10-21T09:00:00+08:00",
    end: "2026-10-21T17:00:00+08:00",
    timeLabel: "9:00 AM onwards · Panel II at 12:15 PM",
    venueName: "PJPAC",
    venueAddress: "Petaling Jaya Performing Arts Center, Petaling Jaya",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=Petaling+Jaya+Performing+Arts+Centre",
    audience: "SME owners & CEOs",
    rsvp: { required: false },
    externalUrl: "https://ceoforum.asia",
    externalLabel: "Event website",
    poster: "/images/events/sme-ceo-forum-2026-poster.jpg",
    posterRatio: 1,
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
