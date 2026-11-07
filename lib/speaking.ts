/** Speaking data shared by the homepage Speaking section and the /speaking page. */

/** Starting fee shown on the speaker profile. Edit this one value to change the rate everywhere. */
export const SPEAKING_FEE = "USD $10,000";

export const BOOKING_EMAIL = "chanleong@skribble.me";

/** mailto link that pre-fills the details an organiser needs to send for a quote. */
export const bookingHref = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
  "Speaking Inquiry: Teng Chan Leong",
)}&body=${encodeURIComponent(
  [
    "Hi Chan Leong,",
    "",
    "We'd like to invite you to speak at our event.",
    "",
    "Event name:",
    "Organisation:",
    "Date(s):",
    "City / venue (or virtual):",
    "Format (keynote, panel, fireside chat, workshop):",
    "Audience size and profile:",
    "Topic of interest:",
    "Budget:",
    "",
    "Thank you,",
  ].join("\n"),
)}`;

export const topics = [
  "Digital Transformation",
  "PropTech & Real Estate",
  "Regional Marketing",
  "Agency Leadership",
  "SME Growth",
  "AI & Digital Economy",
  "Brand Strategy",
  "Southeast Asia Expansion",
];

export const photos = [
  { src: "/images/speaking/rehda-dmti.jpeg",    event: "Rehda DMTI 2025",           location: "Kuala Lumpur" },
  { src: "/images/speaking/hkftw.jpg",          event: "HK FinTech Week 2024",      location: "Hong Kong" },
  { src: "/images/speaking/beyondfest.jpeg",    event: "BeyondFest (AWS)",          location: "Kuala Lumpur" },
  { src: "/images/speaking/alpha-galaxy.jpeg",  event: "Alpha Galaxy × HLB",        location: "Kuala Lumpur" },
  { src: "/images/speaking/beyondfest2.jpeg",   event: "Re:source APAC Conference", location: "Kuala Lumpur" },
  { src: "/images/speaking/axiata.jpg",         event: "Axiata Challenge 2025",     location: "Kuala Lumpur" },
];

const R2 = "https://pub-4a51606b717f484cb62b009072283a76.r2.dev/CL%20Shortlisted%20videos";

export const videos = [
  { src: `${R2}/Rehda%20Sharing%20Nov%202025.mp4`,    title: "Rehda Institute Sharing", subtitle: "Digital Marketing Transformation, Nov 2025" },
  { src: `${R2}/Resource%20Conference%20Panel.mp4`,   title: "Re:source APAC Panel",    subtitle: "Malaysia to ASEAN: Replicating What Works" },
  { src: `${R2}/Galaxy%20Exchange%20Event.mp4`,       title: "Galaxy Exchange Event",   subtitle: "Brand Launch for Galaxy Avenue" },
];

export const pastEngagements = [
  "HK FinTech Week 2024 — Digital Banking Panel",
  "Rehda DMTI 2025 — Digital Marketing",
  "BeyondFest (AWS KL) — Keynote",
  "Astro Niaga Awani — SME Digital Transformation",
  "BFM 89.9 — Enterprise Explores (5×)",
  "Re:source APAC Conference — Malaysia to ASEAN",
  "Juwai IQI — Global Connections in Malaysia",
  "The Proptech Academy — Industry Elevation",
  "Tenaga Nasional Berhad — Fireside (CIO)",
  "Alpha Galaxy × Hong Leong Bank — Brand Launch",
  "AUAM — Women Empowerment Panel",
  "Malaysia Property Development Process 2026",
];

/** Signature talks for the speaker profile. Each can be tailored to the audience. */
export const keynotes = [
  {
    title: "Rivals to Partners: Going Regional in Southeast Asia",
    tagline: "Why the next regional champion is an alliance, not a giant",
    tag: "Regional Marketing",
    summary:
      "Southeast Asia is not one market with several languages. Drawing on founding the Strategic Asia Marketing Alliance (SAMA), Chan Leong shows how independent businesses expand across borders by collaborating with local experts instead of competing with them.",
    takeaways: [
      "Why local excellence wins regional work",
      "Building trust and discoverability across markets",
      "Partnership models that work beyond a single pitch",
    ],
  },
  {
    title: "Digital Transformation That Actually Ships",
    tagline: "From strategy deck to real results",
    tag: "Digital Transformation",
    summary:
      "Most transformation programmes stall between the strategy deck and the shop floor. A practical view, from an operator who runs a digital agency, of where SMEs and enterprises should start, what to measure, and how to bring teams along.",
    takeaways: [
      "Choosing the first three moves",
      "Turning digital spend into measurable growth",
      "Leading change without losing the core business",
    ],
  },
  {
    title: "Marketing Property in a Digital-First Market",
    tagline: "How today's buyers discover, compare and commit",
    tag: "PropTech & Real Estate",
    summary:
      "Built on years of work with Malaysian developers and the REHDA Institute's digital marketing research, this talk covers how buyers now discover, compare and commit, and what developers must change to keep up.",
    takeaways: [
      "The new property buyer journey",
      "Where launch budgets are wasted",
      "Data and creative that move units",
    ],
  },
  {
    title: "AI and the Future of Creative Work",
    tagline: "Preparing your people for the new standard",
    tag: "AI & Digital Economy",
    summary:
      "Generative AI is resetting the standard for creative and marketing teams. Chan Leong shares how Skribble is putting AI to work, which skills are rising in value, and how leaders should prepare their people.",
    takeaways: [
      "Where AI adds value and where it doesn't",
      "Reskilling teams without stalling delivery",
      "New job standards for the creative industry",
    ],
  },
  {
    title: "Building a Culture People Choose",
    tagline: "The talent playbook behind an award-winning agency",
    tag: "Agency Leadership",
    summary:
      "Skribble won Gold for Best Agency Culture and Silver for Best Employer in 2024. The playbook behind it covers hiring, growing and keeping talent in a competitive services business.",
    takeaways: [
      "Culture as a growth strategy",
      "Systems that scale with the team",
      "Leading the next generation of talent",
    ],
  },
];

export const formats = [
  { name: "Keynote",            detail: "30–60 minute keynote, tailored to your audience and theme." },
  { name: "Panel & Moderation", detail: "Panellist or moderator for industry and leadership discussions." },
  { name: "Fireside Chat",      detail: "A guided conversation with your host, CEO or audience." },
  { name: "Workshop",           detail: "Half-day or full-day working sessions for leadership and marketing teams." },
  { name: "Virtual",            detail: "Live-streamed keynotes and sessions for remote and hybrid events." },
];

export const faqs = [
  {
    q: "How do I book Teng Chan Leong for my event?",
    a: "Send a speaking inquiry with your event name, date, location, format and audience. You'll get a reply confirming availability, followed by a briefing on your event goals and the booking details.",
  },
  {
    q: "How much does it cost to book Teng Chan Leong as a speaker?",
    a: `Fees start from ${SPEAKING_FEE} per engagement. The final fee depends on format, length, location, date and the amount of tailoring required. Send your event details for a firm quote.`,
  },
  {
    q: "Is Chan Leong available for virtual events?",
    a: "Yes. He is available for virtual keynotes, fireside chats and moderated conversations for remote, hybrid and regional audiences.",
  },
  {
    q: "Does Chan Leong travel for events?",
    a: "Yes. Chan Leong is based in Kuala Lumpur and speaks across Southeast Asia and beyond. For events outside Kuala Lumpur, travel and accommodation are quoted separately.",
  },
  {
    q: "Can the talk be tailored to our event?",
    a: "Every engagement is tailored. Before the event, Chan Leong holds a briefing call with the organiser to understand the audience, theme and goals.",
  },
];

/** "Why people book" pillars. */
export const whyBook = [
  {
    verb: "To Lead",
    line: "In a Digital-First Economy",
    detail: "He runs the transformation work he talks about, so audiences get decisions and trade-offs, not theory.",
  },
  {
    verb: "To Grow",
    line: "Across Southeast Asia",
    detail: "As founder of SAMA, he shows how businesses scale across borders by partnering with the best local players.",
  },
  {
    verb: "To Win",
    line: "With Brand and Talent",
    detail: "From PropTech launches to award-winning culture, he shares the playbooks that turn marketing and people into growth.",
  },
];
