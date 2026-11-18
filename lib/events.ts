export type EventRsvp = {
  /** Show the RSVP form on the event page. */
  required: boolean;
  /** Max seats. Omit for unlimited. Enforced by the sheet script. */
  capacity?: number;
  /** ISO date; form closes after this. Omit to stay open until the event. */
  deadline?: string;
  /** Max seats one RSVP can take (default 4). 1 hides the seats picker: each guest RSVPs for themselves. */
  maxSeats?: number;
  /**
   * Show a public "Who's joining" list (name + company) on the event page. Turns on required company and job
   * title in the form, plus a notice that name and company are listed. Needs the Apps Script `attendees` feed.
   */
  listAttendees?: boolean;
};

export type GalleryPhoto = {
  /** Path in /public. */
  src: string;
  /** Describes the photo for screen readers. */
  alt: string;
  /** Short line shown under the photo in the full-size view. */
  caption?: string;
  /** Width / height. Default 4:3. */
  ratio?: number;
  /** Which part stays in view when the photo is cropped (CSS object-position), e.g. "50% 80%" to keep the bottom. */
  focus?: string;
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
  /** Replaces the single date on the detail page, for multi-day events, e.g. "9 – 12 November 2026". */
  dateLabel?: string;
  /** Past events show "What guests said" and a feedback link. Set false for events with no attendees to ask (e.g. a delegation trip). */
  testimonials?: boolean;
  /** Event photos, shown as a gallery on the detail page. Keep files in /public/images/events/<slug>/. */
  gallery?: GalleryPhoto[];
  /** Past events: optional recap link (LinkedIn post, album, slides). */
  recapUrl?: string;
  /** Dummy entries, delete when real events replace them. */
  placeholder?: boolean;
};

export const events: SiteEvent[] = [
  {
    slug: "propel-property-roundtable-nov-2026",
    title: "PROPEL: Property Roundtable Dinner",
    tagline:
      "PROPEL, the Property Roundtable Of Partners, Experts & Leaders: an early-dinner roundtable for real estate and the services around it. 30 seats.",
    description: [
      "PROPEL stands for Property Roundtable Of Partners, Experts & Leaders. It brings together people in real estate and the services that keep it moving: developers, real estate managers and suppliers.",
      "This is a small, closed-circle evening for people Chan Leong knows well and trusts, not open networking. The idea is simple: put recent contacts who would benefit from each other at the same table.",
      "**How the evening works**",
      "- 5:00 PM start, so we get there before the evening jam",
      "- A short sharing discussion around the table",
      "- Proper time to network, in a small group",
      "- Then dinner together",
      "**Good to know**",
      "- Limited to 30 guests, one seat per person. Everyone RSVPs for themselves",
      "- RM100 per person, only to cover food and drinks",
      "- Venue: De.Wan 1958 by Chef Wan at Bangsar Shopping Centre",
      "RSVP below to hold your seat. We will message you on WhatsApp with payment details once your seat is confirmed.",
    ],
    start: "2026-11-30T17:00:00+08:00",
    end: "2026-11-30T21:00:00+08:00",
    timeLabel: "5:00 PM · early dinner",
    venueName: "De.Wan 1958 by Chef Wan",
    venueAddress: "Bangsar Shopping Centre, Bangsar, Kuala Lumpur",
    venueUrl: "https://www.google.com/maps/search/?api=1&query=De.Wan+1958+by+Chef+Wan+Bangsar+Shopping+Centre",
    audience: "Developers, real estate managers & suppliers. Close circle.",
    fee: "RM100 per person (food & drinks)",
    rsvp: {
      required: true,
      capacity: 30,
      deadline: "2026-11-29T23:59:59+08:00",
      maxSeats: 1,
      listAttendees: true,
    },
    poster: "/images/events/propel-roundtable-poster.jpg",
  },

  {
    slug: "conclave-cmo-fireside-nov-2026",
    title: "Conclave: Fireside Dinner with a Regional CMO",
    tagline:
      "An evening of candid leadership lessons from a CMO who has spent well over a decade building one business.",
    description: [
      "Conclave brings leaders from marketing, consulting, finance, healthcare, tech and startups to one table for an honest conversation with a guest.",
      "This edition's guest was a regional CMO who joined as the very first marketing hire and grew with the business for well over a decade. The session ran under Chatham House rules, so here are the lessons rather than the quotes.",
      "**Nine lessons I took home:**",
      "- Will matters more than skill. Skill can be taught. Will can't.",
      "- Marketing is the art of building the business. Know the P&L, or you're just running campaigns.",
      "- Don't chase awards. Celebrate results, but when the team wins one, let them enjoy it.",
      "- Operate at your level. The more senior you get, the less your job is the campaign.",
      "- Write down what your role needs, then ask honestly whether you're still the right person for it.",
      "- You can't force growth on people. Help them see it for themselves, and help them hire better.",
      "- For some founders, the company is a calling. Respect it, and watch for burnout in yourself and your team.",
      "- There's a difference between objecting and standing in front of the bus.",
      "- Even at the top, the honest sentiment is: we could have done better.",
      "The conversation also went into AI and the future of large operational teams, brand crises on social media, and blending culture after an acquisition.",
      "Thank you to Akram for organising Conclave, and to our guest for the candour.",
    ],
    start: "2026-11-18T18:15:00+08:00",
    end: "2026-11-18T23:00:00+08:00",
    venueName: "Private dinner venue",
    audience: "Invite only",
    rsvp: { required: false },
    testimonials: false,
    gallery: [
      { src: "/images/events/conclave-cmo-fireside-nov-2026/01-guest-speaking.jpg", alt: "The guest CMO answering a question with a microphone at the dinner table", caption: "Our guest in conversation", ratio: 3 / 4, focus: "55% 45%" },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/02-guest-listening.jpg", alt: "The guest smiling while seated with other attendees along the table", caption: "Around the table", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/03-floor-question.jpg", alt: "An attendee standing with a microphone asking a question", caption: "Questions from the floor", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/04-attendee-sharing.jpg", alt: "An attendee in a batik shirt sharing a view into the microphone", caption: "Everyone had a view to share", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/05-round-table.jpg", alt: "An attendee speaking while two others listen at the long table", caption: "Leaders from across industries", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/06-after-the-session.jpg", alt: "Two attendees smiling for a selfie in front of the Conclave screen", caption: "Catching up after the session" },
    ],
  },

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
    rsvp: { required: true, deadline: "2026-10-28T23:59:59+08:00" },
    poster: "/images/events/getting-started-with-ai-poster.jpg",
    gallery: [
      { src: "/images/events/getting-started-with-ai/02-packed-room.jpg", alt: "A full room of attendees facing the screen at the Skribble office", caption: "A full room at the Skribble office" },
      { src: "/images/events/getting-started-with-ai/03-thomas-demo.jpg", alt: "Guest speaker Thomas Au explaining an image workflow on screen", caption: "Thomas Au on AI content creation", ratio: 3 / 4 },
      { src: "/images/events/getting-started-with-ai/04-thomas-workflow.jpg", alt: "Thomas Au walking the room through a node-based image workflow", caption: "Walking through a node-based image workflow" },
      { src: "/images/events/getting-started-with-ai/05-chan-leong.jpg", alt: "Chan Leong presenting in front of the screen", caption: "Chan Leong on running a business with AI", ratio: 3 / 4 },
      { src: "/images/events/getting-started-with-ai/06-room-chan-leong.jpg", alt: "View from the back of the room during Chan Leong's segment", caption: "Real use cases from Skribble and SAMA" },
      { src: "/images/events/getting-started-with-ai/07-platforms.jpg", alt: "Chan Leong pointing at a slide while attendees watch", caption: "Two platforms, one vision", ratio: 3 / 4 },
      { src: "/images/events/getting-started-with-ai/08-question.jpg", alt: "An attendee asking a question from her seat", caption: "Questions from the floor", ratio: 3 / 4 },
      { src: "/images/events/getting-started-with-ai/09-audience.jpg", alt: "Attendees listening closely", caption: "Business owners, team leads and professionals" },
      { src: "/images/events/getting-started-with-ai/10-after.jpg", alt: "Chan Leong talking with an attendee after the session", caption: "Following up after the session", ratio: 3 / 4 },
      { src: "/images/events/getting-started-with-ai/11-networking.jpg", alt: "Attendees chatting in small groups after the session", caption: "Staying back to talk" },
      { src: "/images/events/getting-started-with-ai/01-class-photo.jpg", alt: "Group photo of the session attendees at the Skribble office", caption: "The 29 October class" },
    ],
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
    gallery: [
      { src: "/images/events/beyondfest-2026/01-group-photo.jpg", alt: "BeyondFest 2026 group photo on stage at Greybox GMBB", caption: "BeyondFest 2026 at Greybox GMBB", ratio: 1600 / 967 },
      { src: "/images/events/beyondfest-2026/02-speakers.jpg", alt: "Speakers and organisers in front of the BeyondFest banners", caption: "Speakers and organisers" },
    ],
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
    slug: "seoul-business-mission-nov-2026",
    title: "Seoul Business Mission 2026",
    tagline:
      "Four days in Seoul with the Skribble team, meeting Korean trade bodies, investors and partners on moving brands between Korea and Southeast Asia.",
    description: [
      "In November 2026 Chan Leong led a six-person Skribble delegation to Seoul, at the invitation of SnE Company, the Korean agri-tech firm Skribble supports on its entry into Malaysia.",
      "Over four days the team met trade associations, investors, consultants and Malaysia's trade office in Korea, all around one question: how to help brands move in both directions, Korean brands into Southeast Asia and Malaysian brands into Korea. Chan Leong also introduced SAMA, the Strategic Asia Marketing Alliance, as a regional partner for Korean companies looking south.",
      "**Who we met**",
      "- **SnE Company**, our hosts, at their Seoul office",
      "- **MATRADE Seoul**, the Malaysia Trade & Investment Centre at the Embassy of Malaysia, on government support for cross-border brands",
      "- **KOIMA**, the Korea Importers Association, organisers of the Korea Import Expo (KIE 2027 at COEX, 30 June to 2 July 2027)",
      "- **KAR**, introduced through MATRADE Seoul",
      "- **HBT Consulting**, who bring Korean F&B and retail brands to Malaysia",
      "- **Artyz**, which runs Korea and Japan business programmes",
      "- **Bigbang Angels** and **Pancras Partners**, on supporting startups entering Southeast Asia and Korea",
      "- **Bgood**, our Korean partner, who opened several of these doors",
      "**What comes next**",
      "Follow-ups are under way with MATRADE Seoul, KOIMA and KAR, and Malaysian companies interested in exhibiting at KIE 2027 can reach out to Skribble.",
    ],
    start: "2026-11-09T06:30:00+09:00",
    end: "2026-11-12T11:00:00+09:00",
    dateLabel: "9 – 12 November 2026",
    timeLabel: "Four days",
    venueName: "Seoul, South Korea",
    venueAddress: "Gangnam and Jongno",
    audience: "Skribble delegation",
    rsvp: { required: false },
    testimonials: false,
    poster: "/images/events/korea-2026/01-matrade-seoul.jpg",
    posterRatio: 4 / 3,
    gallery: [
      { src: "/images/events/korea-2026/01-matrade-seoul.jpg", alt: "The Skribble delegation with the MATRADE Seoul team at the Embassy of Malaysia", caption: "With MATRADE Seoul at the Embassy of Malaysia" },
      { src: "/images/events/korea-2026/02-sne-office.jpg", alt: "The Skribble team with SnE Company staff holding SNE signs in their office", caption: "At the SnE Company office" },
      { src: "/images/events/korea-2026/03-global-startup-center.jpg", alt: "The group in front of a curved screen reading Welcome to Global Startup Center", caption: "Global Startup Center, Seoul" },
      { src: "/images/events/korea-2026/04-k-startup-wall.jpg", alt: "The group pointing at Southeast Asian flags on the K-Startup Grand Challenge world map", caption: "Pointing south at the K-Startup Grand Challenge wall" },
      { src: "/images/events/korea-2026/05-handshake.jpg", alt: "Two men shaking hands in front of the K-Startup Grand Challenge map", caption: "Shaking on it" },
      { src: "/images/events/korea-2026/06-gift-exchange.jpg", alt: "Two men exchanging gift bags in a meeting room", caption: "Exchanging gifts with our hosts", ratio: 3 / 4 },
      { src: "/images/events/korea-2026/07-working-session.jpg", alt: "Around a meeting table with laptops and coffee", caption: "Working session in Seoul" },
      { src: "/images/events/korea-2026/12-heads-down.jpg", alt: "The team working on laptops around a long meeting table", caption: "Heads down between meetings" },
      { src: "/images/events/korea-2026/08-team-photo.jpg", alt: "Nine people making finger-heart gestures outside a meeting room", caption: "After the session" },
      { src: "/images/events/korea-2026/10-dinner.jpg", alt: "Group selfie with Korean hosts around a dinner table", caption: "Dinner with our Korean hosts" },
      { src: "/images/events/korea-2026/11-lunch.jpg", alt: "The team at lunch over bowls of samgyetang", caption: "Samgyetang lunch" },
      { src: "/images/events/korea-2026/09-gwanghwamun.jpg", alt: "Team selfie in front of Gwanghwamun gate", caption: "Gwanghwamun, between meetings", ratio: 3 / 4 },
    ],
  },

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
    gallery: [
      { src: "/images/events/sme-ceo-forum-2026/01-panel-stage.jpg", alt: "Panel II on stage under the Future-Proofing Your Business with AI and Tech screen", caption: "Panel II: Future-Proofing Your Business with AI and Tech", focus: "50% 85%" },
      { src: "/images/events/sme-ceo-forum-2026/02-hall.jpg", alt: "View of the panel from the audience at PJPAC", caption: "The hall at PJPAC", ratio: 3 / 4 },
      { src: "/images/events/sme-ceo-forum-2026/03-panel-speaking.jpg", alt: "Panellists on stage, one speaking into a microphone", caption: "On the panel", ratio: 3 / 4 },
      { src: "/images/events/sme-ceo-forum-2026/05-backdrop.jpg", alt: "Three people at the SME CEO Forum 2026 backdrop", caption: "At the SME CEO Forum 2026 backdrop" },
      { src: "/images/events/sme-ceo-forum-2026/04-panel-closeup.jpg", alt: "Close-up of the panellists on stage", caption: "Talking AI for SMEs", ratio: 3 / 4 },
    ],
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
