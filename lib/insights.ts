/**
 * Insights: long-form articles by Teng Chan Leong.
 *
 * Each article is plain data. Body blocks support light inline markup:
 *   **bold**  and  [link text](https://url or /internal-path)
 *
 * SEO / GEO conventions used on every article:
 * - `summary` is the answer-first paragraph (40 to 70 words) shown at the top and used as the meta description fallback.
 * - H2s are phrased as the questions people actually ask, so answer engines can lift a section.
 * - `faq` renders on the page and as FAQPage JSON-LD. Keep answers short and self-contained.
 * - `sources` lists the public pages or events the article draws on. Never cite private notes.
 */

import { digestArticles } from "./digest";
import type { GalleryPhoto } from "./events";

export type Topic = "regional-business" | "marketing" | "leadership" | "digital" | "ai" | "mental-models";

export const topics: Record<Topic, { label: string; title: string; intro: string; keywords: string[] }> = {
  "regional-business": {
    label: "Regional Business",
    title: "Regional Business in Southeast Asia",
    intro:
      "How companies and agencies grow across Southeast Asia and into North Asia: cross-border partnerships, market entry, and why trusted relationships beat pitches. Drawn from founding SAMA, the Strategic Asia Marketing Alliance, and leading Skribble delegations abroad.",
    keywords: ["Southeast Asia business", "regional expansion", "cross-border marketing", "Malaysia Korea trade", "SAMA"],
  },
  marketing: {
    label: "Marketing",
    title: "Marketing and Brand Building",
    intro:
      "Brand, media and creative work as it is practised in Malaysia and the region: retail media, measurement, AI-assisted content, and why brand building still matters when every channel promises instant sales.",
    keywords: ["marketing Malaysia", "brand strategy", "retail media", "creative agency", "marketing measurement"],
  },
  leadership: {
    label: "Leadership",
    title: "Leadership and Strategy",
    intro:
      "Notes on running a company from someone who runs two: strategy versus planning, resilience, team culture, and the peer circles that keep founders honest.",
    keywords: ["leadership", "business strategy", "CEO", "founder", "business resilience"],
  },
  digital: {
    label: "Digital",
    title: "Digital Transformation",
    intro:
      "Practical digital transformation for SMEs and personal brands: automating the work nobody enjoys, building dashboards people actually use, and being findable by search engines and AI assistants.",
    keywords: ["digital transformation", "SME digitalisation", "automation", "SEO", "generative engine optimisation"],
  },
  "mental-models": {
    label: "Daily Digest",
    title: "Daily Digest: Mental Models for Leaders",
    intro:
      "One thinking tool at a time, from Chan Leong's daily digest of business, strategy and personal development concepts: where each idea comes from, how it shows up in agencies and marketing teams, and one thing to try this week. Each comes with the carousel cards he shares on LinkedIn.",
    keywords: ["mental models", "mental models for leaders", "decision making", "thinking tools", "leadership"],
  },
  ai: {
    label: "AI",
    title: "AI for Business",
    intro:
      "AI without the hype: what it costs, what it is worth, and where business owners and marketers should start. AI is an amplifier, not a fix.",
    keywords: ["AI for business", "generative AI", "AI Malaysia", "AI marketing", "AI adoption SME"],
  },
};

export const topicOrder: Topic[] = ["regional-business", "marketing", "leadership", "digital", "ai", "mental-models"];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string; href?: string }
  | { type: "callout"; title: string; text: string };

export type Source = { label: string; href?: string };

export type Article = {
  slug: string;
  title: string;
  /** SEO title (under ~60 chars before the " | Teng Chan Leong" suffix). Defaults to title. */
  seoTitle?: string;
  /** Meta description, 140 to 160 characters. */
  description: string;
  /** Primary topic first. */
  topics: Topic[];
  /** ISO date (YYYY-MM-DD). */
  published: string;
  updated?: string;
  /** Answer-first paragraph at the top of the article. */
  summary: string;
  takeaways: string[];
  body: Block[];
  faq: { q: string; a: string }[];
  sources: Source[];
  keywords: string[];
  /** Hero image in /public (optional). */
  image?: { src: string; alt: string };
  /** Related event slug on /events. */
  event?: string;
  /** Carousel cards (4:5 slides in /public). Shown as a swipeable deck near the top. */
  carousel?: { src: string; alt: string }[];
  /** Event-style photo gallery, shown after the body. Same shape as event galleries. */
  gallery?: GalleryPhoto[];
  /** Daily digest date, for mental-model pieces. */
  digestDate?: string;
};

const coreArticles: Article[] = [
  /* ───────────────────────── Leadership ───────────────────────── */
  {
    slug: "will-beats-skill-leadership-lessons-from-a-cmo",
    title: "Will Beats Skill: 9 Leadership Lessons From a CMO's Fireside Dinner",
    seoTitle: "Will Beats Skill: 9 Leadership Lessons From a CMO",
    description:
      "Nine leadership lessons from a Conclave fireside dinner with a regional CMO: will over skill, operating at your level, and when to stand in front of the bus.",
    topics: ["leadership", "marketing"],
    published: "2026-11-19",
    summary:
      "The strongest leaders hire for will before skill, treat marketing as the work of building the business, and keep asking whether they are still the right person for their own role. Those were the threads of a Conclave fireside dinner with a regional CMO in November 2026, held under Chatham House rules. Here are the nine lessons I took home.",
    takeaways: [
      "Will matters more than skill. Skill can be taught; will can't.",
      "Marketing is the art of building the business. Know the P&L, or you're only running campaigns.",
      "Operate at your level, and write down what your role needs, then ask honestly whether you still fit it.",
      "There is a difference between objecting and standing in front of the bus. Know which one the moment needs.",
    ],
    body: [
      { type: "p", text: "Some evenings you leave with a page of notes. This was one of them." },
      { type: "p", text: "Conclave brings leaders from marketing, consulting, finance, healthcare, tech and startups to one long table for an honest conversation with a guest. This edition's guest was a regional CMO who joined a fast-growing company as its very first marketing hire and grew with it for well over a decade. Their remit now reaches well beyond marketing." },
      { type: "p", text: "The session ran under Chatham House rules, so this piece shares the ideas, not the quotes or the names. The lessons below are mine to carry; any mistakes in them are mine too." },

      { type: "h2", text: "Why does will matter more than skill?" },
      { type: "p", text: "Because in a company that is growing faster than its people, nobody arrives with the skills for what comes next. The ones who make it are the ones who keep turning up, keep learning, and keep taking the hard assignment." },
      { type: "p", text: "Skill can be taught. Will can't. If you are hiring for a business that is still finding its shape, hire for will first and train the rest." },

      { type: "h2", text: "What does it mean for marketing to build the business?" },
      { type: "p", text: "It means marketers should own and understand the business numbers, including the P&L, rather than waiting for a brief. If you can't explain how your work moves revenue or margin, you are running campaigns, not marketing." },
      { type: "p", text: "It also means having the confidence to push back on requests from other teams when they don't serve the customer, and having an independent read of what customers actually think." },
      { type: "p", text: "The same logic applies to awards. **Don't chase them.** Celebrating work that didn't move the business sends the wrong signal to the team. But when good work does win, let the team enjoy it. Recognition matters to the people who did the work." },

      { type: "h2", text: "What does operating at your level look like?" },
      { type: "p", text: "The more senior you are, the less your job is the campaign. A senior marketer should be thinking about the questions nobody else is asking yet: what AI does to jobs in the organisation, how search is changing as people ask AI assistants instead of search engines, where the business needs to be in three years." },
      { type: "p", text: "The guest described the job at the top as almost entirely management: set the strategy, secure the resources, clear the path, and build a bench of people who could step up." },

      { type: "h2", text: "How often should a leader ask whether they're still right for the role?" },
      { type: "p", text: "Regularly. The suggestion at the table was every six months. Write down what your role actually needs from the person in it. Then read it back and ask, honestly, whether that person is still you." },
      { type: "p", text: "The surprising part is what writing it down does. Describing the ideal person for your own job turns into a self-review, and it makes you better at the job even if the answer is that you should stay." },

      { type: "h2", text: "How do you help someone grow when they can't see the gap?" },
      { type: "p", text: "You can't force it. People need awareness that something has to change, the ability to change it, and the will to do it. Without the first, the other two don't matter." },
      { type: "ul", items: [
        "Help them see it for themselves. A simple capability grid for their managers often does more than feedback.",
        "Check whether they have the team to succeed. A leader who keeps jumping into problems is sometimes a leader without a ready team underneath.",
        "Help them hire better. Often the fix is not the person, it is the people around them.",
        "If resistance stays, make the hard call early so the pain isn't prolonged.",
      ] },

      { type: "h2", text: "What happens when the company is someone's life calling?" },
      { type: "p", text: "For some founders, the company is not a job. It is what they believe they were put here to do. That conviction is a large part of why great companies get built." },
      { type: "p", text: "Respect it, and work with it. But watch for what it can do to people: overwork in yourself and in your team. Work-life balance was described as never really in balance. It comes in seasons, so be open with your peers about which season you're in." },

      { type: "h2", text: "When should you object, and when should you stand in front of the bus?" },
      { type: "p", text: "This was the line that stayed with me longest. There is a difference between objecting and standing in front of the bus." },
      { type: "p", text: "Objecting is saying your piece, getting it on record, and stepping aside. Standing in front of the bus means you are willing to pay a price to stop a decision you believe is wrong." },
      { type: "p", text: "Most of us object. Most of the time, that is the right call. But there are a few decisions a leader will look back on, and those are the ones where objecting was not enough." },
      { type: "callout", title: "A question to sit with", text: "The last time a decision really mattered, did you object, or did you stand in front of the bus?" },

      { type: "h2", text: "Why do even successful companies say they could have done better?" },
      { type: "p", text: "Because the honest ones keep score against what was possible, not against competitors. Even at the top of a market, the sentiment in the room was simple: we could have done better." },
      { type: "p", text: "I find that reassuring. If leaders at that scale still hold themselves to that standard, the rest of us have no excuse for complacency." },

      { type: "h2", text: "What questions did the room leave open?" },
      { type: "ul", items: [
        "**AI and large operational teams.** What should leaders do for the hundreds or thousands of people in contact centres and middle management whose work AI will change? Views ranged from retraining and soft landings to backing people as micro-entrepreneurs. Most agreed that companies have a civic duty to help with the transition.",
        "**Judgement in fresh graduates.** If AI gives everyone the same first answer, judgement and ownership become the difference. How do young people build judgement when organisations tolerate so few mistakes?",
        "**Brand attacks on social media.** Start with a good product and service, then build listening and a crisis response. Nobody claimed to have the full answer.",
      ] },
      { type: "p", text: "Thank you to Akram for organising Conclave and bringing the right people to the same table, and to our guest for the candour." },
    ],
    faq: [
      { q: "What does 'will beats skill' mean in hiring?", a: "It means hiring for drive, persistence and willingness to learn ahead of current skills, especially in a fast-growing business where nobody yet has the skills for what comes next. Skill can be taught; will can't." },
      { q: "What does 'operating at your level' mean?", a: "Doing the work only your level can do. For a senior leader that means strategy, resources, clearing the path and building successors, plus thinking ahead about issues like AI's effect on jobs, rather than running day-to-day campaigns." },
      { q: "What is the difference between objecting and standing in front of the bus?", a: "Objecting is voicing disagreement and stepping aside. Standing in front of the bus is being willing to pay a personal price to stop a decision you believe is wrong. Leaders need to know which one a moment calls for." },
      { q: "Should marketers chase awards?", a: "Not as a goal. Celebrating work that didn't move the business sends the wrong signal. When good work does win, though, the team should enjoy the recognition." },
      { q: "What is Conclave?", a: "Conclave is a community dinner series where leaders from different industries meet a guest for a candid conversation, held under Chatham House rules." },
    ],
    sources: [
      { label: "Conclave fireside dinner, 18 November 2026: event page and photos", href: "/events/conclave-cmo-fireside-nov-2026" },
    ],
    keywords: ["leadership lessons", "CMO", "will over skill", "operating at your level", "marketing leadership", "Conclave"],
    image: { src: "/images/insights/cmo-fireside-hero.jpg", alt: "The guest CMO answering a question with a microphone at the Conclave dinner table" },
    event: "conclave-cmo-fireside-nov-2026",
    gallery: [
      { src: "/images/events/conclave-cmo-fireside-nov-2026/01-guest-speaking.jpg", alt: "The guest CMO answering a question with a microphone at the dinner table", caption: "Our guest in conversation", ratio: 3 / 4, focus: "55% 45%" },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/02-guest-listening.jpg", alt: "The guest smiling while seated with other attendees along the table", caption: "Around the table", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/03-floor-question.jpg", alt: "An attendee standing with a microphone asking a question", caption: "Questions from the floor", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/04-attendee-sharing.jpg", alt: "An attendee in a batik shirt sharing a view into the microphone", caption: "Everyone had a view to share", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/05-round-table.jpg", alt: "An attendee speaking while two others listen at the long table", caption: "Leaders from across industries", ratio: 3 / 4 },
      { src: "/images/events/conclave-cmo-fireside-nov-2026/06-after-the-session.jpg", alt: "Two attendees smiling for a selfie in front of the Conclave screen", caption: "Catching up after the session" },
    ],
  },

  /* ───────────────────────── Regional business ───────────────────────── */
  {
    slug: "independent-agencies-collaborate-to-go-regional",
    title: "Why Independent Agencies Should Collaborate, Not Compete, to Go Regional in Southeast Asia",
    seoTitle: "How Independent Agencies Go Regional in Southeast Asia",
    description:
      "Southeast Asia is not one market. Teng Chan Leong, founder of SAMA, explains why independent agencies win regional work by collaborating, and how to start.",
    topics: ["regional-business", "marketing"],
    published: "2026-11-18",
    summary:
      "Independent agencies go regional faster by partnering with trusted, locally rooted agencies in each market than by opening offices or chasing pitches alone. Southeast Asia is many markets, not one, and local excellence can only be delivered by local teams. That is the idea behind SAMA, the Strategic Asia Marketing Alliance I founded in 2024.",
    takeaways: [
      "Southeast Asia is a set of distinct markets with different languages, media habits and decision makers. Treating it as one region is the most common and most expensive mistake.",
      "Being excellent at home does not make an agency ready abroad. Regional readiness is about relationships and context, not capability.",
      "A few trusted partners per market beat a long list of vendors. Your reputation travels with every referral.",
      "Start the conversation about a new market years before you need it.",
    ],
    body: [
      { type: "p", text: "There are agencies in Malaysia with 20 years of experience that have never done a single project outside the country. They are not short of talent. They are short of a bridge." },
      { type: "p", text: "I have spent the last few years building that bridge, first through Skribble's own regional work and then through SAMA, the Strategic Asia Marketing Alliance, which we launched in Jakarta in August 2024. This piece sets out what I have learned about why independent agencies struggle to go regional, and what actually works." },

      { type: "h2", text: "Why is going regional so hard for independent agencies?" },
      { type: "p", text: "Because clients, and sometimes agencies themselves, assume that \"Southeast Asia\" is one market. It is not. What a global brand assumes is one region, with several languages, could not be further from the truth. Consumers in Jakarta, Manila, Bangkok, Ho Chi Minh City and Kuala Lumpur respond to different media, different humour, different cultural cues, and different price signals." },
      { type: "p", text: "That creates three problems for an independent agency that wants to grow beyond home:" },
      { type: "ol", items: [
        "**No single agency is best everywhere.** No one agency can honestly claim to be the best in every market in the region. Clients know this, which is why so much regional work still defaults to the big network groups.",
        "**Competency is not readiness.** An agency can be world class in its home market and still have no idea how procurement works in Vietnam, or who really makes the decision in a Philippine conglomerate.",
        "**Trust is hard to transfer.** A client who loves you in Kuala Lumpur has no reason to trust an unknown partner you found online in Jakarta.",
      ] },

      { type: "h2", text: "What is the alternative to the network agency model?" },
      { type: "p", text: "The network agency model solves the regional problem by owning offices everywhere under one holding company. That works, but it is expensive, slow, and often means the local office is a satellite rather than a market leader." },
      { type: "p", text: "The alternative is an alliance of independents. In my words when we launched SAMA: it is no longer David versus Goliath. It is a bunch of Davids working together." },
      { type: "quote", text: "Local excellence can only be delivered by local excellence.", cite: "Marketech APAC, September 2024", href: "https://marketech-apac.com/cutting-through-the-noise-why-sama-aims-to-elevate-industry-standards-in-the-region/" },
      { type: "p", text: "Each member agency is already strong in its own market. Together they can offer a client regional coverage with local depth, without anyone pretending to be something they are not." },

      { type: "h2", text: "What problems does an agency alliance actually solve?" },
      { type: "p", text: "Two: trust and discoverability. Most people assume the hard part is trust. It is, but the bigger hidden problem is that good independent agencies simply cannot find each other. A brilliant social agency in Manila and a strong performance shop in Kuala Lumpur may never meet, even though their clients would benefit." },
      { type: "p", text: "Trust is earned through repetition. When I connect a Malaysian client with a partner agency in Indonesia, my reputation is on the line. That is exactly why the network has to be vetted, small enough to know each other, and built on relationships rather than transactions." },

      { type: "h2", text: "How does SAMA work in practice?" },
      { type: "ul", items: [
        "**Vetted members.** Agencies are already successful in their home markets and are assessed on size, experience and reputation.",
        "**Ongoing partnerships, not pitch consortia.** Members work together continuously rather than teaming up for a single tender and then disappearing.",
        "**Staff rotations.** People spend two weeks inside a partner agency in another country, with housing and onboarding provided. Nothing builds context faster.",
        "**Show up, no fee.** Informal meetups and regional gatherings carry no fee. You just need to show up.",
        "**Shared standards.** Members agree to common ethical guidelines and quality standards.",
      ] },
      { type: "p", text: "Today the alliance has more than 50 independent agencies. Some of my most useful days this year were spent simply in a room with them, at the [Hypergrowth Summit in Singapore](/insights/make-your-ai-show-me-the-money) and at our own SAMA & Friends evenings in Kuala Lumpur." },

      { type: "h2", text: "What should an agency owner do before entering a new market?" },
      { type: "p", text: "Here is the checklist I give agency owners who ask me about expansion. It is drawn from years of doing it, and from the mistakes I have watched others make." },
      { type: "ol", items: [
        "**Start the conversation early.** If you want to expand into a new country, that conversation should have started three years ago.",
        "**Have real contacts there.** You need context. You need relationships. You need someone on your WhatsApp.",
        "**Do not force it.** Do not rush into a market you do not understand. Just have the conversation first.",
        "**Choose a few trusted partners, not many.** Nobody needs ten social media agencies in Jakarta. You need a few really good, trustworthy ones.",
        "**Stay invested after the handover.** Do not just pass on a brief. Stay invested in the outcome, because your name is on it.",
        "**Look at where decisions are made.** A lot of regional contracts originate from Hong Kong, Singapore or Tokyo, not from the market where the work runs.",
      ] },

      { type: "h2", text: "Is collaboration really better than competition?" },
      { type: "p", text: "For independents, yes. The agencies that win regional work are rarely the biggest in their home market. They are the best bridge to another one. And bridges are built through trusted relationships, not pitches." },
      { type: "p", text: "If you run an independent agency and you are thinking about Southeast Asia, start with one conversation this month. Not a proposal. A conversation." },
      { type: "callout", title: "Go deeper", text: "For every quote and source on SAMA in one place, see the [regional marketing hub](/regional-marketing). For the full press library, see [/press](/press)." },
    ],
    faq: [
      { q: "What is SAMA?", a: "SAMA, the Strategic Asia Marketing Alliance, is a network of more than 50 independent marketing agencies across Southeast Asia. It was founded by Teng Chan Leong and launched in Jakarta in August 2024." },
      { q: "How can an independent agency expand into Southeast Asia?", a: "Partner with a small number of vetted, locally strong agencies in each target market, build the relationship years before you need it, and stay invested in the outcome after you hand over the brief." },
      { q: "How is an agency alliance different from a network agency?", a: "Network agencies own offices under one holding company. In an alliance, each member stays independent and locally owned, and members partner on an ongoing basis." },
      { q: "Is Southeast Asia one market?", a: "No. It is a set of distinct markets with different languages, media habits, cultural cues and decision makers, which is why local partners matter." },
    ],
    sources: [
      { label: "Malaysia SME: Building a Regional Force, how SAMA is redefining cross-border marketing", href: "https://www.malaysiasme.com.my/building-a-regional-force-how-sama-is-redefining-cross-border-marketing-for-southeast-asias-independent-agencies/" },
      { label: "Marketech APAC: Why SAMA aims to elevate industry standards in the region (Sept 2024)", href: "https://marketech-apac.com/cutting-through-the-noise-why-sama-aims-to-elevate-industry-standards-in-the-region/" },
      { label: "BFM 89.9: The Strategic Asia Marketing Alliance, where rivals and partners unite", href: "https://www.bfm.my/content/podcast/the-strategic-asia-marketing-alliance-where-rivals-and-partners-unite" },
      { label: "The Sun: New marketing landscape emerging in Southeast Asia (Mar 2026)", href: "https://thesun.my/business/local-business/new-marketing-landscape-emerging-in-southeast-asia-as-agencies-step-up-collaboration/" },
    ],
    keywords: ["independent agencies Southeast Asia", "regional marketing", "SAMA Strategic Asia Marketing Alliance", "agency alliance", "cross-border marketing Malaysia"],
  },

  {
    slug: "korea-southeast-asia-business-mission-lessons",
    title: "Korea and Southeast Asia: What a Seoul Business Mission Taught Us About Moving Brands Both Ways",
    seoTitle: "Korea to Southeast Asia: Lessons from a Seoul Business Mission",
    description:
      "Lessons from Skribble's November 2026 Seoul business mission on helping Korean brands enter Southeast Asia and Malaysian brands enter Korea.",
    topics: ["regional-business"],
    published: "2026-11-18",
    summary:
      "Korean brands entering Southeast Asia, and Malaysian brands entering Korea, need the same three things: a trusted local partner, the right government and trade bodies on side, and patience. In November 2026 I led a six-person Skribble delegation to Seoul to build exactly those links, with MATRADE Seoul, the Korea Importers Association and investors.",
    takeaways: [
      "Cross-border brand growth now runs in both directions: Korea into Southeast Asia, and Southeast Asia into Korea.",
      "Government trade offices and import associations are the fastest route to credibility in a new market. Start there.",
      "A local partner who opens doors is worth more than any market report.",
      "Trade expos such as the Korea Import Expo are a practical first step for Malaysian brands testing Korea.",
    ],
    image: { src: "/images/events/korea-2026/01-matrade-seoul.jpg", alt: "The Skribble delegation with the MATRADE Seoul team at the Embassy of Malaysia" },
    event: "seoul-business-mission-nov-2026",
    body: [
      { type: "p", text: "Most conversations about Korea and Southeast Asia run one way. Korean beauty, food and entertainment brands look south at a young, digital, fast-growing region of more than 600 million people." },
      { type: "p", text: "That flow is real. But on our business mission to Seoul from 9 to 12 November 2026, the more interesting question kept coming back the other way too: how do Malaysian brands get into Korea?" },
      { type: "p", text: "Here is what four days of meetings taught me about building a two-way corridor." },

      { type: "h2", text: "Why did a Malaysian agency go to Seoul?" },
      { type: "p", text: "We went at the invitation of SnE Company, a Korean agri-tech firm that Skribble supports on its entry into Malaysia. A client relationship became a door into a whole ecosystem: trade bodies, investors, consultants and Malaysia's own trade office in Korea." },
      { type: "p", text: "That is the first lesson. Market entry rarely starts with a strategy deck. It starts with one trusted relationship that introduces you to the next ten." },

      { type: "h2", text: "Who should a company meet when entering Korea or Southeast Asia?" },
      { type: "p", text: "The mix of meetings we had is a useful template for any company planning a cross-border move:" },
      { type: "ul", items: [
        "**Your government's trade office in the market.** We met MATRADE Seoul, the Malaysia Trade & Investment Centre at the Embassy of Malaysia, on the support available for cross-border brands.",
        "**The import association.** KOIMA, the Korea Importers Association, organises the Korea Import Expo. Importers know what sells and who buys.",
        "**Market-entry specialists.** HBT Consulting brings Korean F&B and retail brands to Malaysia. Artyz runs Korea and Japan business programmes.",
        "**Investors.** Bigbang Angels and Pancras Partners, on how startups entering Southeast Asia and Korea get funded.",
        "**A local partner.** Bgood, our Korean partner, opened several of these doors for us.",
      ] },
      { type: "p", text: "Notice that only one of those is a potential client. The rest are the people who make it possible to serve clients well." },

      { type: "h2", text: "What do Korean companies need to succeed in Southeast Asia?" },
      { type: "p", text: "The same thing every company needs abroad: local context. Southeast Asia is not one market. A Korean brand that wins in Singapore can still stumble in Malaysia or Indonesia, where language, religion, price points and media habits are different." },
      { type: "p", text: "That is why I introduced SAMA, the Strategic Asia Marketing Alliance, to the Korean companies we met. Instead of one agency claiming to cover the region, SAMA connects them with vetted independent agencies that already lead in each market. I wrote more about that model in [why independent agencies should collaborate to go regional](/insights/independent-agencies-collaborate-to-go-regional)." },

      { type: "h2", text: "How can Malaysian brands enter the Korean market?" },
      { type: "p", text: "Start small and visible. Trade expos give a brand a low-risk way to meet importers and test interest before committing to a full launch. The next Korea Import Expo, KIE 2027, runs at COEX in Seoul from 30 June to 2 July 2027, and Malaysian companies interested in exhibiting can reach out to Skribble." },
      { type: "p", text: "Then use the institutions. MATRADE exists to help Malaysian exporters, and its people in Seoul know the market far better than any desk research." },

      { type: "h2", text: "What did the mission change for us?" },
      { type: "p", text: "Three things." },
      { type: "ol", items: [
        "**Corridors beat campaigns.** One campaign for one brand is a project. A trusted corridor between two markets, with trade bodies, partners and investors on both sides, is a business.",
        "**Showing up matters.** Nothing replaces sitting across the table, sharing a samgyetang lunch, and exchanging gifts with your hosts. Trust in Korea, as in Malaysia, is personal.",
        "**Follow-up is the real work.** We are following up with MATRADE Seoul, KOIMA and KAR. The trip was the start, not the result.",
      ] },
      { type: "p", text: "Southeast Asia's next growth chapter will be written by companies that build bridges in both directions. Korea is one of the most promising of those bridges." },
    ],
    faq: [
      { q: "How can a Korean company enter the Malaysian market?", a: "Work with a trusted local partner, use trade bodies such as MATRADE and the Korea Importers Association, and plan marketing market by market rather than treating Southeast Asia as one region." },
      { q: "When is the Korea Import Expo 2027?", a: "KIE 2027 runs at COEX in Seoul from 30 June to 2 July 2027. It is organised by KOIMA, the Korea Importers Association." },
      { q: "What is MATRADE Seoul?", a: "MATRADE Seoul is the Malaysia Trade & Investment Centre at the Embassy of Malaysia in Korea. It supports Malaysian exporters and cross-border brands." },
    ],
    sources: [
      { label: "Event page: Seoul Business Mission 2026", href: "/events/seoul-business-mission-nov-2026" },
    ],
    keywords: ["Korea Southeast Asia business", "Korean brands Malaysia", "Malaysian brands Korea", "MATRADE Seoul", "Korea Import Expo 2027", "market entry"],
  },

  /* ───────────────────────── Marketing ───────────────────────── */
  {
    slug: "retail-media-malaysia-brand-building-at-point-of-purchase",
    title: "Retail Media in Malaysia: Where Brand Building Meets the Moment of Purchase",
    seoTitle: "Retail Media in Malaysia: What Brands Should Know",
    description:
      "What retail media is, why it is growing in Malaysia, and how brands should measure it. Takeaways from Retail Media Unlocked at MYDIN USJ, November 2026.",
    topics: ["marketing"],
    published: "2026-11-18",
    summary:
      "Retail media is advertising inside a retailer's own spaces, in store and online, reaching shoppers at the moment they are ready to buy. It is one of the most visible ad spaces there is, but it does not replace brand building. The brands that win will test it against a baseline and measure true incremental sales.",
    takeaways: [
      "Retail media reaches people who are already in the store, basket in hand. Few channels are closer to the sale.",
      "In a noisy, low-trust online world, the physical shelf still earns trust.",
      "Online builds the reason to buy. The shelf helps the shopper choose which one.",
      "Measure incrementality: test a campaign store against a baseline store before you scale.",
      "Without brand building there is no sustainability. Retail media is where brand meets the moment of purchase, not a substitute for it.",
    ],
    body: [
      { type: "p", text: "Retail media does not get talked about much in Malaysian marketing circles. That is strange, because it may be one of the most visible ad spaces there is." },
      { type: "p", text: "Think about it. The shopper is already in the store. Basket in hand. Ready to spend." },
      { type: "p", text: "On 4 November 2026 I joined Retail Media Unlocked, hosted by RMN at MYDIN USJ in Subang Jaya. The panel brought together a retailer, a consumer brand, a media agency and a former bank CMO. Here is what I took away, and what I think it means for brands and agencies planning 2027." },

      { type: "h2", text: "What is retail media?" },
      { type: "p", text: "Retail media is advertising sold by a retailer on its own channels: screens and displays in physical stores, shelves and end caps, and the retailer's website, app and loyalty programmes. Brands pay to reach shoppers inside the retail environment, close to the point of purchase." },
      { type: "p", text: "Globally it has become one of the fastest-growing parts of advertising. In Malaysia it is earlier, and the hypermarket floor is where much of the action is." },

      { type: "h2", text: "Why does the physical store still matter in a digital world?" },
      { type: "p", text: "Dato' Ameer Ali Mydin of MYDIN made a point that stuck with me. With so much noise and fake news online, people go back to the fundamentals. A physical store is a trusted place. A shelf you can touch still earns a kind of trust that a feed cannot." },
      { type: "p", text: "For brands, that trust transfers. Being present, visible and credible in a store the shopper already trusts is a brand signal, not only a sales tactic." },

      { type: "h2", text: "How should brands split budget between awareness and the shelf?" },
      { type: "p", text: "Bryan Loo of Tealive shared that he puts roughly 80% of budget into discovery and the rest in store. That is his split, not a rule, but the logic is sound: online explains why to buy, and the shelf helps you choose which one." },
      { type: "p", text: "In other words, retail media works best when there is already demand to capture. It is the last metre of the funnel, not the whole funnel." },

      { type: "h2", text: "How do you measure whether retail media works?" },
      { type: "p", text: "This was the sharpest challenge of the morning, from Sani Abdul Murad, a former bank CMO: is it incremental? It is easy for any channel close to the sale to take credit for purchases that would have happened anyway." },
      { type: "p", text: "The fix is old-fashioned and powerful:" },
      { type: "ol", items: [
        "Pick a campaign store and a comparable baseline store.",
        "Run the activation in one, not the other.",
        "Compare the uplift, not the raw sales.",
        "Only then scale.",
      ] },
      { type: "p", text: "If an agency or media owner cannot show you a test like this, be careful with the numbers you are shown." },

      { type: "h2", text: "Does retail media replace brand building?" },
      { type: "p", text: "No. Darren Yuen of Omnicom Media said it plainly: without building the brand, there is no sustainability." },
      { type: "p", text: "This matches what I see across our clients at Skribble. Every new channel is sold as the shortcut to sales, whether it is search, social, influencers or now retail media. None of them work for long without a brand people already know and like. Retail media is not a replacement for brand building. It is where brand building meets the moment of purchase." },

      { type: "h2", text: "What should Malaysian brands and agencies do next?" },
      { type: "ul", items: [
        "**Brands:** add one retail media test to your 2027 plan, with a baseline store and a clear incrementality metric agreed upfront.",
        "**Agencies:** learn the retail environment. Creative that works on a phone does not automatically work on a hypermarket screen three metres away.",
        "**Everyone:** stop asking \"should we?\" and start asking \"how do we measure what it really does?\"",
      ] },
      { type: "p", text: "Thank you to the RMN team and MYDIN for a sharp morning, and to Sailendra of Visual Retale, whose work with MYDIN has taken retail media in Malaysia to a new level." },
    ],
    faq: [
      { q: "What is retail media?", a: "Retail media is advertising sold by retailers on their own channels, such as in-store screens, shelves, websites, apps and loyalty programmes, so brands can reach shoppers close to the point of purchase." },
      { q: "How do you measure retail media effectiveness?", a: "Test for incrementality: run the campaign in one store, keep a comparable baseline store without it, and compare the uplift before scaling." },
      { q: "Does retail media replace brand advertising?", a: "No. Retail media captures demand at the shelf. Brand building creates that demand. Without it, retail media results do not last." },
      { q: "Is retail media growing in Malaysia?", a: "Yes, it is an emerging channel in Malaysia, led by hypermarket and grocery retailers that are opening their in-store and digital spaces to brands." },
    ],
    sources: [
      { label: "Retail Media Unlocked (RMN x MYDIN), MYDIN USJ, Subang Jaya, 4 November 2026. Panel attended in person; speaker points are paraphrased." },
    ],
    keywords: ["retail media Malaysia", "retail media network", "in-store advertising", "MYDIN retail media", "marketing measurement incrementality", "brand building"],
  },

  {
    slug: "ai-image-video-for-marketers-build-dont-reprompt",
    title: "AI Image and Video for Marketers: Build, Don't Re-prompt",
    seoTitle: "AI Image and Video for Marketers: A Practical Workflow",
    description:
      "How marketing teams can use AI to create realistic campaign images and video: build step by step, brief like a director, and edit the story first.",
    topics: ["marketing", "ai"],
    published: "2026-11-18",
    summary:
      "Marketing teams get better AI images and video by building them step by step on a visual canvas, people first, then environment, message and branding, instead of re-prompting one image in a chat. Brief AI video like a director, edit the story before the footage, and keep humans in charge of what good looks like.",
    takeaways: [
      "Build images in layers on a canvas: people, environment, message, then branding and formats.",
      "Cinematic AI video is now a brief. Specify focal length, camera movement and depth of field.",
      "Do a paper edit of transcripts before cutting footage. Story first, pixels second.",
      "The tools are the easy part. Quality still comes from people who know their industry.",
      "When anyone can make anything look real, trust becomes the brand asset.",
    ],
    image: { src: "/images/events/getting-started-with-ai/03-thomas-demo.jpg", alt: "Guest speaker Thomas Au explaining an AI image workflow on screen" },
    event: "getting-started-with-ai",
    body: [
      { type: "p", text: "I watched someone create a realistic photo and video campaign in minutes. I am still processing it." },
      { type: "p", text: "It happened at our [Getting Started with AI](/events/getting-started-with-ai) session at the Skribble office in Kuala Lumpur on 29 October 2026. Our guest speaker, Thomas Au of A22A, a creative director who trains marketing teams on AI content creation, walked a room of Malaysian business owners from property, solar, travel, F&B, publishing, finance and automotive through his workflow." },
      { type: "p", text: "As someone who has run a creative agency for years, here is what I think every marketing team should take from it." },

      { type: "h2", text: "Why does re-prompting the same image not work?" },
      { type: "p", text: "Most people use AI image tools like a slot machine. Type a prompt, get an image, type a slightly different prompt, get another image, repeat until frustrated. Every new attempt changes things you did not want changed." },
      { type: "p", text: "The better approach is to build, not re-prompt. Thomas built images step by step on a visual, node-based canvas, where each stage is its own block you can adjust without breaking the rest:" },
      { type: "ol", items: [
        "**People first.** Who is in the scene, and how do they look and feel?",
        "**Then the environment.** Where are they, what time of day, what mood?",
        "**Then the message.** What is the image actually trying to say?",
        "**Then branding, text and formats.** Logos, headlines and the crops for each channel.",
      ] },
      { type: "p", text: "One example: a family savings campaign featuring Malay, Chinese and Indian families, laid out as a grid of nine consistent images with space left for graphics. That is a real Malaysian campaign brief, done in a fraction of the usual time." },

      { type: "h2", text: "How do you brief AI to create cinematic video?" },
      { type: "p", text: "Brief it the way you would brief a director of photography. Cinematic AI video is now a brief, not a technical feat:" },
      { type: "ul", items: [
        "**Focal length:** a wide establishing shot or a tight portrait?",
        "**Camera movement:** a slow push in, a pan, a drone pull back?",
        "**Depth of field:** what is sharp, what is soft?",
      ] },
      { type: "p", text: "The use cases are immediate: property walkthroughs, presenters speaking in any language, app promos. Even better, you can give the AI normal editing feedback, such as \"move this shot\" or \"make the text bigger\", and it does it." },

      { type: "h2", text: "What is a paper edit, and why does it matter for AI video?" },
      { type: "p", text: "A paper edit means editing the story from the transcript before touching any footage. Thomas showed six hours of interviews turned into five distinct story ideas this way." },
      { type: "p", text: "This is an old documentary technique, and AI makes it fast. It also changes the economics. Thomas estimated that a revision can cost somewhere around RM0.50 to RM1. Weeks of back and forth become rapid drafts." },

      { type: "h2", text: "If AI can make anything, what is the marketer's job now?" },
      { type: "p", text: "This is the part that stayed with me most. The tools are the easy part. The quality still comes from people who know their industry and can say what \"good\" looks like." },
      { type: "p", text: "A property marketer knows which details make a buyer trust a show unit. A bank marketer knows which family images feel inclusive rather than tokenistic. AI amplifies that judgement. It does not replace it. I have said it many times: AI is an amplifier, not a fix." },

      { type: "h2", text: "What are the risks of realistic AI content for brands?" },
      { type: "p", text: "When anyone can make anything look real, trust becomes the brand asset. Audiences will increasingly ask whether what they are seeing is genuine." },
      { type: "p", text: "So the question for every brand is no longer \"can we make it?\" It is \"should we, and does it still sound like us?\" Brands that are open about how they use AI, and that keep real people and real proof at the centre, will earn more trust than those that use it to fake what they have not done." },
      { type: "callout", title: "Want this for your team?", text: "We run practical AI sessions for business owners and marketing teams. See upcoming sessions on [/events](/events) or [invite me to speak](/speaking#book)." },
    ],
    faq: [
      { q: "How can marketers use AI to create campaign images?", a: "Build images in stages on a visual canvas: define the people, then the environment, then the message, then branding and formats, adjusting each stage separately instead of re-prompting one image." },
      { q: "How do you write a prompt for AI video?", a: "Write it like a cinematography brief: specify focal length, camera movement and depth of field, then give normal editing feedback on the result." },
      { q: "Will AI replace creative agencies?", a: "AI makes production faster and cheaper, but quality still depends on people who understand the industry, the audience and what good looks like. It amplifies creative judgement rather than replacing it." },
    ],
    sources: [
      { label: "Event page: Getting Started with AI, 29 October 2026", href: "/events/getting-started-with-ai" },
    ],
    keywords: ["AI image generation marketing", "AI video marketing", "generative AI creative", "AI for marketers Malaysia", "AI content creation workflow"],
  },

  /* ───────────────────────── Leadership ───────────────────────── */
  {
    slug: "strategy-vs-planning-building-a-resilient-business",
    title: "Strategy Is Not Planning: How to Build a Resilient Business",
    seoTitle: "Strategy vs Planning: How to Build a Resilient Business",
    description:
      "Strategy is choosing the game you want to win; planning is how you get there. Teng Chan Leong on resilience, scenario planning and the CEO's real job.",
    topics: ["leadership"],
    published: "2026-11-18",
    summary:
      "Strategy is choosing the game you want to win. Planning is working backwards from that destination: who does what, by when. Plan without the right strategy and you execute perfectly in the wrong direction. Resilient businesses know where they stand, train their people, stress-test scenarios, and let the CEO focus on direction rather than speed.",
    takeaways: [
      "Strategy chooses the game. Planning works backwards from the goal. Do not confuse the two.",
      "Know where you are before you plan where to go. A PESTLE analysis, done honestly, is a good start.",
      "Your organisation moves at the speed of its slowest members. Training is how you keep pace.",
      "The CEO's real job is direction, not speed.",
      "Scenario analysis is a stress test, not a forecast.",
    ],
    body: [
      { type: "p", text: "Strategy and planning are not the same thing. I was reminded of that in a recent session on building a resilient business, and it is worth writing down why it matters so much for founders and CEOs in Malaysia and the region right now." },

      { type: "h2", text: "What is the difference between strategy and planning?" },
      { type: "p", text: "Strategy is choosing the game you want to win. Which customers, which markets, which position, and just as important, what you will not do." },
      { type: "p", text: "Planning is working backwards from that destination. Who does what, by when, with what resources." },
      { type: "p", text: "Most businesses are full of plans. Far fewer have a clear strategy. And a plan without the right strategy simply means you execute perfectly in the wrong direction." },

      { type: "h2", text: "How do you know where your business really stands?" },
      { type: "p", text: "\"Know your enemy and know yourself.\" Sun Tzu said it centuries ago, and it is still the first step." },
      { type: "p", text: "In the session we ran a PESTLE analysis on our own businesses, looking at political, economic, social, technological, legal and environmental forces, using AI to produce the first draft. Then came the important part: we challenged what it missed. AI is good at the obvious. Leaders have to supply the local, the political and the uncomfortable." },
      { type: "p", text: "I recommend this to every business owner. Use AI to get a fast first pass. Then spend your time arguing with it." },

      { type: "h2", text: "Why is training your team a strategic decision?" },
      { type: "p", text: "Your organisation moves at the speed of its slowest members. That is not a criticism of people. It is a description of how organisations work." },
      { type: "p", text: "Training is not a cost. It is how you keep your team and how you grow. This is especially true now, when AI is changing what every role looks like. A company that invests in its people's skills compounds. One that does not slowly falls behind, however good its plan." },

      { type: "h2", text: "What is the CEO's real job?" },
      { type: "p", text: "Direction, not speed. A CEO who is the fastest operator in the company has a problem, because nobody is looking up." },
      { type: "p", text: "Hire people who run operations faster than you. Then use the time to spot risks, read the market, and decide where the company should go next. Running two companies, Skribble and SAMA, has taught me that the hardest discipline is stepping out of the work so you can see the work." },

      { type: "h2", text: "How should businesses use scenario planning?" },
      { type: "p", text: "Scenario analysis is a stress test, not a forecast. The point is not to predict the future. The point is to ask: if this happens, are we ready?" },
      { type: "ul", items: [
        "What if our biggest client leaves?",
        "What if a new technology makes our core service cheaper by 80%?",
        "What if the currency moves sharply, or a key regulation changes?",
        "What if our best people are hired away?",
      ] },
      { type: "p", text: "For each one, write down what you would do in the first week. The gaps you find are your real risks." },

      { type: "h2", text: "What can Kodak and Fujifilm teach us about resilience?" },
      { type: "p", text: "Both faced the same disruption when digital photography arrived. Kodak famously shelved the digital camera its own engineer had invented, to protect its film business. Fujifilm took a hard look at its core capabilities in optics and chemistry and used them to move into new areas, including cosmetics and healthcare." },
      { type: "p", text: "Same threat, different strategy. One chose to defend the old game. The other chose a new game it could win with what it already knew." },
      { type: "p", text: "There is a line I keep coming back to: it takes a lot of change not to change. Staying relevant, staying the same company at your core, requires constant change on the surface." },

      { type: "h2", text: "Where should you start?" },
      { type: "p", text: "Pick one scenario your business has never stress-tested. Put it on the agenda of your next leadership meeting. That single conversation will tell you more about your resilience than any plan." },
    ],
    faq: [
      { q: "What is the difference between strategy and planning?", a: "Strategy is choosing the game you want to win: your customers, markets and position. Planning works backwards from that goal to set who does what, by when." },
      { q: "What is scenario planning in business?", a: "Scenario planning is a stress test that asks how ready the business is if a specific event happens, such as losing a major client or a technology shift. It is not a forecast." },
      { q: "What is a PESTLE analysis?", a: "A PESTLE analysis reviews the political, economic, social, technological, legal and environmental forces affecting a business, to understand where it stands before planning." },
      { q: "What is the main job of a CEO?", a: "Setting direction: deciding where the company should go and spotting risks early, while hiring people who run day-to-day operations faster than the CEO could." },
    ],
    sources: [],
    keywords: ["strategy vs planning", "business resilience", "scenario planning", "CEO role", "PESTLE analysis", "Kodak Fujifilm"],
  },

  {
    slug: "the-people-around-you-decide-how-far-you-go",
    title: "The People Around You Decide How Far You Go: Why Founders Need a Trusted Circle",
    seoTitle: "Why Founders and Leaders Need a Trusted Circle",
    description:
      "Entrepreneurship is lonely. Teng Chan Leong on why trusted peers, team culture and genuine networks decide how far a founder goes, and how to build them.",
    topics: ["leadership", "regional-business"],
    published: "2026-11-18",
    summary:
      "A founder's trusted circle, the team, peers and partners who tell the truth and pick up the phone when it is hard, matters more to long-term success than most tools or tactics. You can buy software and hire talent, but you cannot buy people who have your back. Build that circle before you need it, and be that person for others.",
    takeaways: [
      "The real wins in business usually trace back to an introduction, an honest peer, or a partner who showed up.",
      "Trust inside a team is built in moments that have nothing to do with work.",
      "Small, closed-circle gatherings create deeper relationships than large networking events.",
      "Build your circle before you need it, and be someone others can rely on.",
    ],
    body: [
      { type: "p", text: "No strategy deck will tell you this, but the people around you decide how far you go." },
      { type: "p", text: "I was reminded of it during one ordinary week at the end of October 2026. Nothing in it would show up on a P&L. All of it mattered." },

      { type: "h2", text: "Why is entrepreneurship so lonely?" },
      { type: "p", text: "Because the decisions that keep you up at night are the ones you cannot easily share. Not with your team, who need you to be steady. Not always with your family, who worry. Founders carry cash flow, people, clients and their own doubts, often alone." },
      { type: "p", text: "That loneliness is one of the least discussed risks in business. Leaders without honest peers make worse decisions, and they make them slower." },

      { type: "h2", text: "Where does trust inside a team actually come from?" },
      { type: "p", text: "That week started with the whole Skribble team in costume for our Halloween party, laughing at things that had nothing to do with work. That is where trust gets built. Not in town halls or value statements, but in the moments when people see each other as people." },
      { type: "p", text: "Agency culture has been recognised in awards for us, including Best Agency Culture at the Agency of the Year Awards. But the truth is less glamorous: culture is a thousand small moments where people decide whether they trust each other." },

      { type: "h2", text: "What makes a room of business owners valuable?" },
      { type: "p", text: "The next afternoon we hosted a room of business owners learning how to use AI. What struck me was how openly people admitted what they did not know yet. That honesty is rare, and it is valuable. Learning only happens in rooms where nobody needs to pretend." },
      { type: "p", text: "That evening was SAMA & Friends on a Bangsar rooftop: agency founders, partners and friends, with no agenda beyond showing up for each other. The next day, lunch with one of our SAMA partner teams." },

      { type: "h2", text: "Where do the real wins in business come from?" },
      { type: "p", text: "Look closely at your best results over the last few years. I suspect many trace back to one of these:" },
      { type: "ul", items: [
        "**The introduction that was made for you.** Someone vouched for you when you were not in the room.",
        "**The founder who told you the truth.** Not what you wanted to hear, but what you needed to hear.",
        "**The partner who picked up the phone when it was hard.** When a project went wrong, or cash was tight, or a client walked.",
      ] },
      { type: "p", text: "You can buy tools. You can hire talent. You cannot buy people who have your back." },

      { type: "h2", text: "How do you build a trusted business network?" },
      { type: "p", text: "Not by collecting business cards. A few things that have worked for me:" },
      { type: "ol", items: [
        "**Keep rooms small.** Large networking events create contacts. Small tables create relationships. That is why I host closed-circle evenings such as [PROPEL](/events/propel-property-roundtable-nov-2026), a 30-seat roundtable dinner for property developers, managers and suppliers I know and trust.",
        "**Introduce people who would benefit from each other,** with nothing in it for you. It always comes back.",
        "**Show up without an agenda.** Some of SAMA's most valuable connections came from gatherings with no fee and no pitch.",
        "**Be honest early.** The fastest way to earn a truthful peer is to be one.",
        "**Build the circle before you need it.** When you need help, it is too late to start.",
      ] },

      { type: "h2", text: "What should leaders do this week?" },
      { type: "p", text: "Think of one person in your network who showed up for you this year. Tell them. Then ask yourself who could say the same about you." },
      { type: "p", text: "Build your circle before you need it. And be the person someone else can rely on." },
    ],
    faq: [
      { q: "Why do founders need a peer group?", a: "Founders face decisions they cannot easily share with their team or family. Honest peers help them see blind spots, decide faster and cope with the loneliness of leadership." },
      { q: "How do you build a strong business network?", a: "Favour small gatherings over large events, make introductions with nothing in it for you, show up without an agenda, and build relationships well before you need help." },
      { q: "How do you build trust in a team?", a: "Trust is built through many small, human moments, including time together that has nothing to do with work, not through value statements alone." },
    ],
    sources: [
      { label: "Event page: Getting Started with AI, 29 October 2026", href: "/events/getting-started-with-ai" },
      { label: "Event page: PROPEL Property Roundtable Dinner", href: "/events/propel-property-roundtable-nov-2026" },
      { label: "Agency of the Year Awards 2024 winners (Best Agency Culture)", href: "https://awards.marketing-interactive.com/agency-of-the-year-my/2024-aoty-winners/" },
    ],
    keywords: ["founder loneliness", "business network", "peer support for CEOs", "leadership", "team culture", "entrepreneur Malaysia"],
  },

  /* ───────────────────────── Digital ───────────────────────── */
  {
    slug: "where-business-owners-should-start-with-ai-and-automation",
    title: "Where Business Owners Should Start With AI and Automation: Real Use Cases, Not Hype",
    seoTitle: "AI for Business Owners: Where to Start (Real Use Cases)",
    description:
      "A practical guide for SME owners in Malaysia on where to start with AI and automation: email triage, dashboards, workflows and content, with real examples.",
    topics: ["digital", "ai"],
    published: "2026-11-18",
    summary:
      "Business owners should start with AI where the work is repetitive and the result is easy to check: email triage, contact and directory syncing, reports and dashboards, recurring workflows and first-draft content. Start with your messiest process, not the flashiest tool, and judge every AI project by money made or time saved.",
    takeaways: [
      "Start with your messiest, most repetitive process, not with a tool.",
      "Good first projects: email triage, contact syncing, dashboards, reports, client portals and content drafts.",
      "Use AI across the whole business, not just marketing. Finance and operations often see the fastest return.",
      "Keep a human in charge of anything that leaves the building.",
      "Measure it: if it cannot show money made or time saved, it is a toy.",
    ],
    image: { src: "/images/events/getting-started-with-ai/05-chan-leong.jpg", alt: "Teng Chan Leong presenting real AI use cases at the Skribble office" },
    event: "getting-started-with-ai",
    body: [
      { type: "p", text: "Most business owners know AI is a big deal. Far fewer know where to actually start." },
      { type: "p", text: "That was the one question in the room at our [Getting Started with AI](/events/getting-started-with-ai) session in Kuala Lumpur on 29 October 2026, and on the SME CEO Forum 2026 panel I joined a week earlier, \"Future-Proofing Your Business with AI and Tech\". Property, solar, travel, F&B, finance: different industries, same question." },
      { type: "p", text: "Here is the answer I give, based on how we actually use AI to run Skribble and SAMA day to day." },

      { type: "h2", text: "Where should a small business start with AI?" },
      { type: "p", text: "Start with your messiest process, not the flashiest tool. Look for work that is:" },
      { type: "ul", items: [
        "**Repetitive:** it happens every day or every week.",
        "**Rule-based:** a smart junior could do it with a checklist.",
        "**Easy to check:** you can tell quickly whether the output is right.",
        "**Annoying:** nobody on your team enjoys it.",
      ] },
      { type: "p", text: "If a task ticks all four, it is a strong first AI project. If it involves judgement, relationships or brand risk, keep a human firmly in charge and use AI only for the first draft." },

      { type: "h2", text: "What are real AI use cases for SMEs?" },
      { type: "p", text: "These are the use cases we walked through, all of which are running in real businesses today:" },
      { type: "h3", text: "1. Email triage" },
      { type: "p", text: "Your inbox should not run your day. AI can sort unread mail into what needs a reply, what is just for information, and what is noise, then draft replies for you to check. The key word is draft. Nothing should send without a person approving it." },
      { type: "h3", text: "2. Contact cards and directories" },
      { type: "p", text: "Every business owner collects business cards and WhatsApp contacts. AI can read a name card photo, create the contact, and keep a clean directory of clients, partners and suppliers that the whole team can search." },
      { type: "h3", text: "3. Dashboards for finance, operations and performance" },
      { type: "p", text: "Most SMEs have the data they need scattered across spreadsheets, accounting software and chat groups. Connecting it into one simple dashboard, cash, receivables, pipeline, project margins, is one of the highest-return digital projects an owner can do." },
      { type: "h3", text: "4. Automating repetitive workflows" },
      { type: "p", text: "Quotations from a template, invoice reminders, meeting scheduling, weekly status reports. Each one saves a little. Together they give a team back days every month." },
      { type: "h3", text: "5. Reports and client portals" },
      { type: "p", text: "Clients want to see progress without chasing you. Automated reports and simple client portals reduce the back-and-forth and make a small company look and feel bigger." },
      { type: "h3", text: "6. Social media and content creation" },
      { type: "p", text: "AI is excellent at first drafts, repurposing one idea into many formats, and producing visuals. It is poor at knowing what your brand should sound like. Use it for speed, and keep your own voice. I wrote more about this in [AI image and video for marketers](/insights/ai-image-video-for-marketers-build-dont-reprompt)." },

      { type: "h2", text: "Is AI only for the marketing team?" },
      { type: "p", text: "No, and this is the most common mistake I see. Many companies hand AI to marketing and stop there. In my experience the fastest returns often come from finance and operations, where work is repetitive and errors are expensive. Think across the whole business." },

      { type: "h2", text: "How do you know if an AI project is worth it?" },
      { type: "p", text: "Use the test I picked up at the Hypergrowth Summit in Singapore: make your AI \"show me the money\". If it cannot point to money made or time saved, it is a toy. I explain that test in [Make your AI show me the money](/insights/make-your-ai-show-me-the-money)." },
      { type: "p", text: "Before you start, write down how long the task takes today and what it costs. Check again after a month. Keep what works and drop what does not." },

      { type: "h2", text: "What are the risks of using AI in a small business?" },
      { type: "ul", items: [
        "**Sending without checking.** Keep approval steps for anything that goes to a client, a regulator or the public.",
        "**Leaking data.** Know where your data goes and which tools are allowed to see client information.",
        "**Over-building.** A simple setup that people actually use beats a complex one nobody opens.",
        "**Forgetting the people.** Train your team. A tool nobody understands is a cost, not an asset.",
      ] },

      { type: "h2", text: "What should you do this week?" },
      { type: "p", text: "Pick one process. Time it. Try automating it with a tool you already pay for. Measure the result in a month." },
      { type: "p", text: "That is how digital transformation actually happens in an SME. Not with a big programme, but with one messy process at a time." },
      { type: "callout", title: "Run a session for your team", text: "I share these use cases at forums, company sessions and associations. [Invite me to speak](/speaking#book) or see upcoming sessions on [/events](/events)." },
    ],
    faq: [
      { q: "Where should a small business start with AI?", a: "Start with a repetitive, rule-based task that is easy to check, such as email triage, contact syncing, reporting or invoice reminders, and measure the time saved." },
      { q: "What are examples of AI use cases for SMEs?", a: "Common examples are email triage and reply drafts, reading business cards into a contact directory, finance and operations dashboards, automated reports and client portals, workflow automation, and first-draft social content." },
      { q: "How do you measure the ROI of AI in a business?", a: "Record how long a task takes and what it costs before automating it, then compare after a month. If the project cannot show money made or time saved, stop or change it." },
      { q: "Is AI safe for small businesses to use?", a: "Yes, with guardrails: keep human approval for anything sent externally, control which tools can see client data, and train the team on how the tools work." },
    ],
    sources: [
      { label: "Event page: Getting Started with AI, 29 October 2026", href: "/events/getting-started-with-ai" },
      { label: "Event page: SME CEO Forum 2026, Panel II: Future-Proofing Your Business with AI and Tech", href: "/events/sme-ceo-forum-2026" },
    ],
    keywords: ["AI for small business", "AI use cases SME Malaysia", "business automation", "digital transformation SME", "email triage AI", "AI dashboards"],
  },

  {
    slug: "how-to-be-found-by-ai-search-personal-brand",
    title: "How Leaders Get Found by AI Search: A Practical Guide to GEO for Your Personal Brand",
    seoTitle: "How to Be Found by AI Search: GEO for Leaders",
    description:
      "ChatGPT, Gemini and Perplexity now answer 'who is' questions about you. A practical guide to generative engine optimisation (GEO) for founders and leaders.",
    topics: ["digital", "marketing"],
    published: "2026-11-18",
    summary:
      "Generative engine optimisation (GEO) is making sure AI assistants such as ChatGPT, Gemini, Perplexity and Google AI Overviews describe you accurately and cite your sources. For leaders it comes down to five things: an entity home you control, one consistent name, a crawlable proof library, structured data, and regular testing of what AI actually says.",
    takeaways: [
      "AI assistants increasingly answer 'who is' and 'who is the best' questions before anyone visits your site.",
      "You need an entity home: one site you control that states who you are, plainly.",
      "Pick one display name, keep your aliases, and use them consistently everywhere.",
      "Make your proof crawlable: interviews, awards and talks on dated, linkable pages.",
      "Test what AI says about you, save the answers, and re-test after changes.",
    ],
    body: [
      { type: "p", text: "A few weeks ago I asked AI search engines a simple question: who is Teng Chan Leong?" },
      { type: "p", text: "The good news: they got the basics right. CEO of Skribble, founder of SAMA. The less good news: my own website was not cited in any of the five answers I tested. One answer picked up a namesake from another country. Another repeated a wrong detail about where Skribble is headquartered. And when I asked where to find my interviews, the engines could not find them." },
      { type: "p", text: "I run an agency that does SEO and GEO for clients. If it happens to me, it is happening to most founders and leaders. So here is what I learned and what we changed." },

      { type: "h2", text: "What is generative engine optimisation (GEO)?" },
      { type: "p", text: "Generative engine optimisation, or GEO, is the practice of making sure AI-powered answer engines, such as ChatGPT, Gemini, Perplexity and Google AI Overviews, understand who you are, describe you accurately, and cite your sources. SEO is about ranking a page. GEO is about being the answer." },
      { type: "p", text: "For a business leader this matters because the first impression is moving. Event organisers, journalists, investors and clients increasingly ask an AI assistant about you before they ever visit your site." },

      { type: "h2", text: "Why do AI assistants get people wrong?" },
      { type: "p", text: "Because they assemble answers from whatever sources they can find and trust. If your best proof sits behind a button, inside a PDF, or only on social media, they may never see it. If your name appears in different orders on different sites, they may not connect the dots. And if someone else shares your name, or your company's name, they may blend you together. (My company name, Skribble, is shared with an unrelated Swiss firm, which causes exactly this problem.)" },

      { type: "h2", text: "How do you make AI search describe you correctly?" },
      { type: "h3", text: "1. Build an entity home" },
      { type: "p", text: "An entity home is one website you control that states plainly who you are: full name, aliases, role, companies, location and links to your official profiles. For me that is [tengchanleong.com](/). Write the first paragraph so that an AI could quote it word for word." },
      { type: "h3", text: "2. Use one name, and keep your aliases" },
      { type: "p", text: "Pick a display name and use it everywhere: your site, LinkedIn, speaker bios, press releases. List your aliases once, clearly. In my case the display name is Teng Chan Leong, also written Chan Leong Teng." },
      { type: "h3", text: "3. Make your proof crawlable" },
      { type: "p", text: "Interviews, podcasts, awards and talks are your strongest evidence, but only if machines can read them. Put them on a dedicated, dated page with clear labels such as \"interviewed guest\", \"quoted\" or \"award result\", and link to the original source. Ours is the [press library](/press)." },
      { type: "h3", text: "4. Add structured data" },
      { type: "p", text: "Schema.org markup tells machines what a page is about. At minimum, a leader's site should have Person markup (name, alternate name, job title, employer, the topics you know about, and links to your profiles), Organization markup for your companies, and Article markup on anything you publish. Make sure the visible text matches the markup." },
      { type: "h3", text: "5. Publish your own thinking" },
      { type: "p", text: "AI engines prefer sources that answer questions directly. Long-form articles in your own voice, with clear headings, short answers up front and a few FAQs, give them something worth citing. That is why this [Insights](/insights) section exists." },
      { type: "h3", text: "6. Add the basics crawlers look for" },
      { type: "p", text: "A robots.txt file, an XML sitemap, canonical URLs, an RSS feed, and optionally an llms.txt file that summarises who you are and where your best sources live. None of these guarantee citations, but missing them makes it harder." },

      { type: "h2", text: "How do you measure GEO results?" },
      { type: "p", text: "Write down five questions people actually ask about you. For example: Who is [your name]? What does [your company] do? Where can I find interviews with [your name]? Who are the leading experts on [your topic] in [your country]?" },
      { type: "p", text: "Ask them in ChatGPT, Gemini, Perplexity and Google. Save the answers, the date and the cited links. Make your changes. Re-test four to six weeks later. Score identity (did it get you right?) and discovery (did it find your best proof?) separately." },

      { type: "h2", text: "Does GEO guarantee you will be cited?" },
      { type: "p", text: "No. Nobody can promise rankings or AI citations, and you should be wary of anyone who does. What you can control is clarity, consistency and evidence. Those make it much more likely that when someone asks an AI about you, the answer is accurate and points back to sources you trust." },
      { type: "p", text: "Your reputation is already being summarised by machines. The only question is whether you give them good material to work with." },
    ],
    faq: [
      { q: "What is GEO (generative engine optimisation)?", a: "GEO is the practice of helping AI answer engines such as ChatGPT, Gemini, Perplexity and Google AI Overviews understand, describe and cite a person, brand or business accurately." },
      { q: "What is the difference between SEO and GEO?", a: "SEO aims to rank web pages in search results. GEO aims to make your information the source that AI assistants use and cite when they generate an answer." },
      { q: "What is an entity home?", a: "An entity home is a website you control that clearly states who a person or organisation is, including name, aliases, role, location and official profile links, so search engines and AI can identify them." },
      { q: "How can I check what AI says about me?", a: "Ask the same five questions about yourself in ChatGPT, Gemini, Perplexity and Google, save the answers and cited links with the date, then re-test after making changes." },
    ],
    sources: [
      { label: "Schema.org: Person", href: "https://schema.org/Person" },
      { label: "Google Search Central: Introduction to structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
      { label: "Press library: Teng Chan Leong", href: "/press" },
    ],
    keywords: ["generative engine optimisation", "GEO personal brand", "AI search optimisation", "entity SEO", "how to appear in ChatGPT answers", "personal branding for CEOs"],
  },

  /* ───────────────────────── AI ───────────────────────── */
  {
    slug: "make-your-ai-show-me-the-money",
    title: "Make Your AI \"Show Me the Money\": Lessons from Singapore's Hypergrowth Summit",
    seoTitle: "Make Your AI Show Me the Money: Measuring AI Value",
    description:
      "A simple test for AI in business: if it cannot show money made or time saved, it is a toy. Lessons from Hypergrowth Summit 2026 and Dennis Yu's AI workshop.",
    topics: ["ai", "leadership"],
    published: "2026-11-18",
    summary:
      "The best test for any AI project is simple: make it \"show me the money\". If it cannot point to money made or time saved, it is a toy. Useful AI setups do not have to be complicated. They need a shared knowledge base, an improvement loop, and capable people using them, because the same tools give very different results in different hands.",
    takeaways: [
      "Useful AI setups are usually simpler than you think. Over-building is a common failure.",
      "A good setup has two parts: a shared knowledge base and an improvement loop.",
      "The tool matters less than the person using it.",
      "Judge every AI project by money made or time saved.",
      "The best learning at a conference often happens in the corridor, not on stage.",
    ],
    body: [
      { type: "p", text: "I flew to Singapore expecting to learn about AI. I came back having unlearned something instead." },
      { type: "p", text: "In October 2026 I spent two days at Hypergrowth Summit, at Suntec Convention Centre on 15 October, and at a hands-on AI workshop with Dennis Yu the day before. I went with a group of SAMA agency founders. Here is what changed how I work." },

      { type: "h2", text: "Why do so many AI projects fail to deliver value?" },
      { type: "p", text: "In my experience, mostly because they are over-built. I had been doing it myself: designing elaborate systems that looked impressive but were used less than they should have been." },
      { type: "p", text: "Dennis Yu, one of the most practical AI practitioners I have met, generous with what he knows and allergic to fluff, showed how much you can get done with something simple that actually gets used. Adoption beats sophistication every time." },

      { type: "h2", text: "What does a good AI setup look like?" },
      { type: "p", text: "Two things:" },
      { type: "ol", items: [
        "**A shared knowledge base.** What the team knows lives in one place: your clients, your processes, your tone of voice, your past work. AI is only as good as the context you give it.",
        "**An improvement loop.** Every time the system runs, you capture what went wrong and fix it, so the next run is better. Over months, that loop compounds into a real advantage.",
      ] },
      { type: "p", text: "That is it. Not a dozen tools. Not a complex architecture. Knowledge plus a loop." },

      { type: "h2", text: "Does the AI tool you choose matter?" },
      { type: "p", text: "Less than you think. The same tools give very different results. The difference is the user." },
      { type: "p", text: "That has real implications for leaders. Spending on licences without investing in people's skills is wasted money. The companies that get the most from AI will be the ones that train their people to think clearly, give good context and judge the output. AI is an amplifier, not a fix. It amplifies good thinking and bad thinking equally." },

      { type: "h2", text: "How should businesses measure AI value?" },
      { type: "p", text: "At the summit, Atiba de Souza said something that stuck with me: make your AI \"show me the money\"." },
      { type: "p", text: "That is now my test. If an AI project cannot point to money made or time saved, it is a toy. Fun, maybe. Impressive in a demo, perhaps. But a toy." },
      { type: "p", text: "In practice, that means asking three questions before starting any AI project:" },
      { type: "ul", items: [
        "**What does this cost today,** in hours or ringgit?",
        "**What will it cost after,** realistically, including the time to check the output?",
        "**How will we know in 30 days** whether it worked?",
      ] },
      { type: "p", text: "I took that straight back to Skribble and SAMA. Every AI workflow we run now has to earn its place against that test. For a practical list of where to start, see [where business owners should start with AI and automation](/insights/where-business-owners-should-start-with-ai-and-automation)." },

      { type: "h2", text: "Why go to conferences at all, if everything is online?" },
      { type: "p", text: "Because the best part of a trip like this is rarely the stage. It is the conversations in the corridor, over dinner and at the bar." },
      { type: "p", text: "I met founders working on exactly the same questions I am. I spent time with SAMA members from across the region, which made the alliance feel real in a way no video call can. And I made new connections I would never have found on LinkedIn." },
      { type: "p", text: "Thank you to Vernon and the Chimera Collective team for bringing that room together." },

      { type: "h2", text: "What would your AI do if it had to show you the money?" },
      { type: "p", text: "Ask that of every AI project on your list this quarter. The ones with a clear answer deserve your time. The rest can wait." },
    ],
    faq: [
      { q: "How do you measure the value of AI in a business?", a: "Compare the cost of a task in hours or money before and after AI, including the time to check the output, and review the result after about 30 days. If it shows no money made or time saved, it is not delivering value." },
      { q: "What makes a good AI setup for a team?", a: "A shared knowledge base that holds the team's context, and an improvement loop that captures mistakes and fixes them so each run gets better." },
      { q: "Why do AI projects fail?", a: "Common reasons are over-complicated setups that people do not use, poor context for the AI, no clear measure of value, and too little investment in training the people using the tools." },
    ],
    sources: [
      { label: "Hypergrowth Summit 2026, Suntec Convention Centre, Singapore, 15 October 2026 (attended in person)" },
    ],
    keywords: ["AI ROI", "measure AI value", "AI in business", "Hypergrowth Summit Singapore", "Dennis Yu AI", "AI adoption"],
  },
];

export const articles: Article[] = [...coreArticles, ...digestArticles];

/* ───────────────────────── Helpers ───────────────────────── */

export const sortedArticles = () =>
  [...articles].sort((a, b) => b.published.localeCompare(a.published) || articles.indexOf(a) - articles.indexOf(b));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const articlesForTopic = (t: Topic) => sortedArticles().filter((a) => a.topics.includes(t));

export const isTopic = (s: string): s is Topic => s in topics;

/** Strips inline markup to plain text (for word counts, feeds and JSON-LD). */
export const plain = (s: string) =>
  s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function articleText(a: Article) {
  const parts: string[] = [a.summary];
  for (const b of a.body) {
    if (b.type === "ul" || b.type === "ol") parts.push(...b.items);
    else parts.push(b.text);
  }
  return plain(parts.join(" "));
}

export const wordCount = (a: Article) => articleText(a).split(/\s+/).filter(Boolean).length;

export const readingMinutes = (a: Article) => Math.max(1, Math.round(wordCount(a) / 220));

/** Related articles: shared topics first, then most recent. */
export function related(a: Article, n = 3) {
  return sortedArticles()
    .filter((x) => x.slug !== a.slug)
    .map((x) => ({ x, score: x.topics.filter((t) => a.topics.includes(t)).length + (x.topics[0] === a.topics[0] ? 1 : 0) }))
    .sort((p, q) => q.score - p.score)
    .slice(0, n)
    .map((p) => p.x);
}

export const fmtArticleDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kuala_Lumpur" })
    .format(new Date(`${iso}T12:00:00+08:00`));
