import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regional Marketing for Independent Agencies | Teng Chan Leong",
  description:
    "Why independent agencies should collaborate instead of compete to go regional in Southeast Asia, and how SAMA works. Views from Teng Chan Leong, CEO of Skribble Group and founder of the Strategic Asia Marketing Alliance, with links to every source.",
  alternates: { canonical: "/regional-marketing" },
};

const MSME = "https://www.malaysiasme.com.my/building-a-regional-force-how-sama-is-redefining-cross-border-marketing-for-southeast-asias-independent-agencies/";
const MARKETECH = "https://marketech-apac.com/cutting-through-the-noise-why-sama-aims-to-elevate-industry-standards-in-the-region/";
const FMT = "https://www.freemalaysiatoday.com/category/nation/2024/08/29/agencies-get-creative-to-boost-marketing-industry/";
const BFM = "https://www.bfm.my/content/podcast/the-strategic-asia-marketing-alliance-where-rivals-and-partners-unite";
const SUN = "https://thesun.my/business/local-business/new-marketing-landscape-emerging-in-southeast-asia-as-agencies-step-up-collaboration/";
const BKKPOST = "https://www.bangkokpost.com/thailand/pr/2989841/the-future-of-marketing-agencies-lies-in-collaboration-not-competition";

type Quote = { text: string; source: string; href: string };

const challenges: Quote[] = [
  { text: "What global brand assumes is one region, with several languages, couldn't be further from the truth.", source: "Marketech APAC, Sept 2024", href: MARKETECH },
  { text: "No 1 agency can claim to be the best in every region.", source: "Marketech APAC, Sept 2024", href: MARKETECH },
  { text: "Competency doesn't equal regional readiness.", source: "Malaysia SME", href: MSME },
  { text: "There are agencies in Malaysia with 20 years of experience that have never done business outside the country.", source: "Malaysia SME", href: MSME },
];

const idea: Quote[] = [
  { text: "It's no longer David versus Goliath. It's a bunch of Davids working together.", source: "Malaysia SME", href: MSME },
  { text: "Local excellence can only be delivered by local excellence.", source: "Marketech APAC, Sept 2024", href: MARKETECH },
  { text: "SAMA isn't just trying to solve the trust issue. We're solving discoverability.", source: "Malaysia SME", href: MSME },
  { text: "If I connect my client in Malaysia with my partner agency in Indonesia, my reputation is on the line.", source: "Malaysia SME", href: MSME },
];

const howItWorks = [
  "Member agencies are vetted and already successful in their local markets. Applicants are tested on size, experience and reputation.",
  "Partnerships are ongoing alliances, not consortia formed for a single pitch.",
  "Staff rotations: people spend two weeks inside a partner agency in another country, with housing and onboarding provided.",
  "Informal meetups and regional events carry no fee. In his words: “There's no fee. You just need to show up.”",
  "Shared ethical guidelines and quality standards for all members, announced at launch.",
  "More than 50 independent agencies are in the alliance today.",
];

const checklist: { step: string; quote: string }[] = [
  { step: "Start the conversation early.", quote: "If you want to expand into a new country, that conversation should have started three years ago." },
  { step: "Have real contacts there.", quote: "You need context. You need relationships. You need someone on your WhatsApp." },
  { step: "Don't force it.", quote: "Don't rush. Don't try to force your way into a market you don't understand. Just have the conversation." },
  { step: "Choose a few trusted partners, not many.", quote: "We don't need ten social media agencies in Jakarta. We need a few really good, trustworthy ones." },
  { step: "Stay invested after the handover.", quote: "We don't just hand over a brief. We stay invested in the outcome." },
  { step: "Look at where decisions get made.", quote: "A lot of global contracts originate from Hong Kong or Tokyo." },
];

const appearances = [
  { date: "Aug 2024", outlet: "Free Malaysia Today", what: "Coverage of the Jakarta launch", role: "Quoted as Skribble CEO", href: FMT },
  { date: "Sep 2024", outlet: "Marketech APAC", what: "Why SAMA aims to elevate industry standards", role: "Quoted as CEO, Skribble", href: MARKETECH },
  { date: "2024", outlet: "BFM 89.9", what: "Podcast: The Strategic Asia Marketing Alliance, Where Rivals and Partners Unite", role: "Guest", href: BFM },
  { date: "2025", outlet: "Bangkok Post", what: "The future of marketing agencies lies in collaboration, not competition (PR section)", role: "Named in the piece", href: BKKPOST },
  { date: "Mar 2026", outlet: "The Sun Malaysia", what: "SunBiz: new marketing landscape emerging in Southeast Asia", role: "Interviewee", href: SUN },
  { date: "Undated", outlet: "Malaysia SME", what: "Building a Regional Force: how SAMA is redefining cross-border marketing", role: "Interviewee", href: MSME },
];

const faq = [
  { q: "What is SAMA?", a: "The Strategic Asia Marketing Alliance is a network of independent marketing agencies across Southeast Asia, founded by Teng Chan Leong and launched in Jakarta in August 2024." },
  { q: "Who founded SAMA?", a: "Teng Chan Leong, Chief Executive Officer of Skribble Group." },
  { q: "How is SAMA different from a network agency?", a: "Members are independent, locally rooted and vetted, and they partner on an ongoing basis rather than sitting under one holding company." },
  { q: "How does an agency join SAMA?", a: "Agencies must meet strict criteria on size, experience and reputation. To enquire, contact chanleong@skribble.me or visit samaalliance.com." },
  { q: "Where can I find interviews with Teng Chan Leong?", a: "See the appearances table on this page and the full press library at /press." },
  { q: "Is SAMA the same as Skribble?", a: "No. Skribble Group, a Malaysian marketing and technology group, founded SAMA. SAMA's members are separate independent agencies." },
];

function QuoteList({ items }: { items: Quote[] }) {
  return (
    <ul className="space-y-5">
      {items.map((q) => (
        <li key={q.text} className="border-l-2 border-blueprint-cyan/60 pl-5">
          <p className="text-white text-lg leading-snug">&ldquo;{q.text}&rdquo;</p>
          <p className="text-white/45 text-xs mt-1.5">
            <a href={q.href} target="_blank" rel="noopener noreferrer" className="hover:text-blueprint-cyan">{q.source} ↗</a>
          </p>
        </li>
      ))}
    </ul>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-white mb-6">{children}</h2>;
}

export default function RegionalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Regional marketing for independent agencies",
    url: `${SITE_URL}/regional-marketing`,
    author: { "@id": `${SITE_URL}/#person` },
    about: [
      { "@id": "https://samaalliance.com/#organization" },
      { "@type": "Thing", name: "Cross-border marketing in Southeast Asia" },
    ],
    mainEntityOfPage: `${SITE_URL}/regional-marketing`,
  };

  return (
    <PageShell eyebrow="Regional Marketing · SAMA" title={<>Regional Marketing</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />

      <section className="bg-catalyst-navy py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Teng Chan Leong is Chief Executive Officer of Skribble Group and founder of the Strategic Asia Marketing
            Alliance (SAMA), a network of independent marketing agencies across Southeast Asia.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            His view: independent agencies grow further when they collaborate instead of compete. The agencies that
            win regional work are not the biggest in their home market but the best bridge to another one, and that
            bridge is built through trusted relationships, not pitches.
          </p>
          <p className="text-white/45 text-sm mt-6">For agency owners and marketing professionals. Every quote links to its original source.</p>
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>Why going regional is hard for independent agencies</H2>
          <QuoteList items={challenges} />
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>The idea behind SAMA</H2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Founded in 2024 and launched in Jakarta in August 2024, SAMA is an alliance of independent agencies
            offered as an alternative to traditional network agencies.
          </p>
          <QuoteList items={idea} />
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>How SAMA works</H2>
          <ul className="space-y-3 text-white/75 leading-relaxed list-disc pl-6 marker:text-blueprint-cyan">
            {howItWorks.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>A checklist before entering a new market</H2>
          <p className="text-white/55 text-sm mb-6">
            Drawn from Teng Chan Leong&apos;s interview with{" "}
            <a href={MSME} target="_blank" rel="noopener noreferrer" className="underline hover:text-blueprint-cyan">Malaysia SME</a>.
            It is advice from his experience, not a guarantee of results.
          </p>
          <ol className="space-y-6">
            {checklist.map((c, i) => (
              <li key={c.step} className="flex gap-4">
                <span className="font-display font-extrabold text-3xl text-blueprint-cyan/70 leading-none w-8 shrink-0">{i + 1}</span>
                <div>
                  <p className="text-white font-semibold">{c.step}</p>
                  <p className="text-white/60 mt-1">&ldquo;{c.quote}&rdquo;</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>Appearances and sources</H2>
          <ul className="divide-y divide-white/8">
            {appearances.map((a) => (
              <li key={a.href}>
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 py-3.5 group">
                  <span className="text-xs font-semibold text-white/40 w-16 shrink-0 mt-1">{a.date}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white/45 mb-0.5">{a.outlet} · {a.role}</p>
                    <p className="text-white group-hover:text-blueprint-cyan transition-colors leading-snug">{a.what}</p>
                  </div>
                  <span className="text-white/30 group-hover:text-blueprint-cyan shrink-0">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm"><a href="/press" className="text-blueprint-cyan font-semibold hover:underline">Full press library →</a></p>
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>Questions</H2>
          <dl className="space-y-6">
            {faq.map((f) => (
              <div key={f.q}>
                <dt className="text-white font-semibold mb-1">{f.q}</dt>
                <dd className="text-white/65 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-catalyst-navy py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <H2>For agency owners</H2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Interested in joining a network of independent agencies, or in a conversation about expanding into
            Southeast Asia?
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://samaalliance.com" target="_blank" rel="noopener noreferrer"
              className="bg-[#0052cc] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#0047b3] transition-colors">
              Visit SAMA ↗
            </a>
            <a href="mailto:chanleong@skribble.me?subject=SAMA enquiry"
              className="border border-white/30 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:border-white/60 transition-colors">
              Email Teng Chan Leong
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
