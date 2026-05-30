"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

type TextOutlet = { name: string; abbr: string; color: string; style: "serif" | "condensed" | "bold" | "italic"; sub?: string; image?: undefined };
type ImageOutlet = { name: string; image: string; imgSize?: string; abbr?: undefined; color?: undefined; style?: undefined; sub?: undefined };
type Outlet = TextOutlet | ImageOutlet;

const outlets: Outlet[] = [
  { name: "Business Times",       abbr: "BUSINESS TIMES",  color: "#1A3A5C", style: "serif" },
  { name: "The Edge Malaysia",    image: "/images/press/the-edge.png" },
  { name: "BFM 89.9",            image: "/images/press/bfm.png", imgSize: "h-20" },
  { name: "Prestige Malaysia",    image: "/images/press/prestige.png" },
  { name: "Bangkok Post",         image: "/images/press/BangkokPost.png" },
  { name: "Marketech APAC",       image: "/images/press/marketech.png" },
  { name: "Marketing Interactive",image: "/images/press/marketing-interactive.png" },
  { name: "Astro Awani",          image: "/images/press/astro-awani.png" },
  { name: "Free Malaysia Today",  image: "/images/press/fmt.png" },
  { name: "Focus Malaysia",       image: "/images/press/focus-malaysia.png" },
  { name: "Berita Harian",        image: "/images/press/berita-harian.png" },
  { name: "Enterprise Zone",      abbr: "ENTERPRISE", color: "#374151", style: "condensed", sub: "ZONE" },
];

/* ── Featured articles — real stories with live links ── */
const featured = [
  {
    outlet:    "The Edge Malaysia",
    logo:      "/images/press/the-edge.png",
    year:      "2024",
    headline:  "Gen AI Setting New Job Standards for Creative Industry",
    excerpt:   "How Skribble Group is navigating the wave of AI-driven transformation in Malaysia's creative and marketing sector.",
    url:       "https://theedgemalaysia.com/node/727331",
  },
  {
    outlet:    "BFM 89.9",
    logo:      "/images/press/bfm.png",
    year:      "2025",
    headline:  "3 Branding Lessons from Disney's Snow White Remake",
    excerpt:   "Enterprise Explores — Chan Leong shares how brands can learn from Disney's live-action remake strategy.",
    url:       "https://www.bfm.my/content/podcast/3-branding-lessons-from-disneys-snow-white-remake",
  },
  {
    outlet:    "Astro Awani",
    logo:      "/images/press/astro-awani.png",
    year:      "2024",
    headline:  "Pantau Belanjawan: SMEs & Industry 4.0 Transformative Journey",
    excerpt:   "Chan Leong discusses how Malaysian SMEs and local businesses are navigating the Budget and Industry 4.0 transformation.",
    url:       "https://www.astroawani.com/videos/video-terkini-x7sio1/pantau-belanjawan-smes-local-businesses-industry-40-transformative-journey-x8vz86s",
  },
  {
    outlet:    "Free Malaysia Today",
    logo:      "/images/press/fmt.png",
    year:      "2024",
    headline:  "Agencies Get Creative to Boost Marketing Industry",
    excerpt:   "Chan Leong on the SAMA Alliance launch in Indonesia and how marketing agencies across APAC are rewriting the rules of collaboration.",
    url:       "https://www.freemalaysiatoday.com/category/nation/2024/08/29/agencies-get-creative-to-boost-marketing-industry/",
  },
];

/* ── Full press coverage list (from slide deck) ── */
const allCoverage = [
  /* ── 2023 ── */
  { category: "2023", outlet: "Business Times Malaysia", title: "Consider Critical Aspects in Budget 2024 to Drive 4IR Adoption", url: "https://www.nst.com.my/business/economy/2023/10/966379/consider-critical-aspects-budget-2024-drive-4ir-adoption" },
  { category: "2023", outlet: "BFM 89.9", title: "Dos & Don'ts When Planning Business Strategies for the New Year", url: "https://www.bfm.my/content/podcast/dos-and-donts-when-planning-business-strategies-for-the-new-year" },
  { category: "2023", outlet: "Focus Malaysia", title: "4IR Adoption: A Toss-up Between a Baseline and Transformational Agenda", url: "https://focusmalaysia.my/4ir-adoption-a-toss-up-between-a-baseline-and-transformational-agenda/" },
  /* ── 2024 ── */
  { category: "2024", outlet: "The Edge Malaysia", title: "Gen AI Setting New Job Standards for Creative Industry", url: "https://theedgemalaysia.com/node/727331" },
  { category: "2024", outlet: "Prestige Online", title: "Prestige 40 Under 40 — Teng Chan Leong", url: "https://www.prestigeonline.com/my/people/40-under-40/teng-chan-leong/" },
  { category: "2024", outlet: "Berita Harian", title: "Guna Pakai Digital Penting untuk Pertumbuhan Perniagaan", url: "https://www.bharian.com.my/bisnes/lain-lain/2024/03/1228000/guna-pakai-digital-penting-untuk-pertumbuhan-perniagaan" },
  { category: "2024", outlet: "Astro Awani", title: "Pantau Belanjawan: SMEs & Industry 4.0 Transformative Journey", url: "https://www.astroawani.com/videos/video-terkini-x7sio1/pantau-belanjawan-smes-local-businesses-industry-40-transformative-journey-x8vz86s" },
  { category: "2024", outlet: "BFM 89.9", title: "Skribbling Ideas to Stay Ahead of Competition", url: "https://www.bfm.my/content/podcast/skribbling-ideas-to-stay-ahead-of-competition" },
  { category: "2024", outlet: "BFM 89.9", title: "Trust Me, This is Good Content", url: "https://www.bfm.my/content/podcast/trust-me-this-is-good-content" },
  { category: "2024", outlet: "BFM 89.9", title: "The Strategic Asia Marketing Alliance — Where Rivals and Partners Unite", url: "https://www.bfm.my/podcast/enterprise/marketing-mojo/the-strategic-asia-marketing-alliance-where-rivals-and-partners-unite" },
  { category: "2024", outlet: "Malaysia SME", title: "Minimum Wage Increase Could Fuel Cross-Regional Growth for SMEs in SEA", url: "https://www.malaysiasme.com.my/minimum-wage-increase-could-fuel-cross-regional-growth-for-smes-in-southeast-asia/" },
  { category: "2024", outlet: "Marketech APAC", title: "Cutting Through the Noise: Why SAMA Aims to Elevate Industry Standards", url: "https://marketech-apac.com/cutting-through-the-noise-why-sama-aims-to-elevate-industry-standards-in-the-region/" },
  { category: "2024", outlet: "Free Malaysia Today", title: "Agencies Get Creative to Boost Marketing Industry", url: "https://www.freemalaysiatoday.com/category/nation/2024/08/29/agencies-get-creative-to-boost-marketing-industry/" },
  { category: "2024", outlet: "Marketing Interactive", title: "New Coalition of Agencies Form Across SG, MY, ID and TH", url: "https://www.marketing-interactive.com/new-coalition-of-agencies-form-across-sg-my-id-and-th" },
  { category: "2024", outlet: "The Sun Malaysia", title: "Strategic Asia Marketing Alliance Sets Up Malaysia-Singapore Chapters", url: "https://thesun.my/business-news/strategic-asia-marketing-alliance-sets-up-malaysia-singapore-chapters-OI13287999" },
  { category: "2024", outlet: "Marketing Magazine", title: "Skribble Malaysia Launches SAMA", url: "https://marketingmagazine.com.my/skribble-malaysia-launches-strategic-asia-marketing-alliance-sama/" },
  { category: "2024", outlet: "Free Malaysia Today", title: "Ad Agencies Expected to Get a Boost from Wider Collaboration", url: "https://www.freemalaysiatoday.com/category/nation/2024/11/14/ad-agencies-expected-to-get-a-boost-from-wider-collaboration/" },
  /* ── 2025 ── */
  { category: "2025", outlet: "Bangkok Post", title: "The Future of Marketing Agencies Lies in Collaboration, Not Competition", url: "https://www.bangkokpost.com/thailand/pr/2989841/the-future-of-marketing-agencies-lies-in-collaboration-not-competition" },
  { category: "2025", outlet: "Enterprise Zone", title: "Chan Leong Teng — CEO of Skribble Malaysia & Founder of SAMA", url: "https://enterprisezone.cc/chan-leong-teng-ceo-of-skribble-malaysia-founder-of-sama/" },
  { category: "2025", outlet: "BFM 89.9", title: "3 Branding Lessons from Disney's Snow White Remake", url: "https://www.bfm.my/content/podcast/3-branding-lessons-from-disneys-snow-white-remake" },
  { category: "2025", outlet: "The Exchange Asia", title: "Thailand Launch Propels SAMA to Forefront of Asia's Independent Marketing Network", url: "https://theexchangeasia.com/thailand-launch-propels-sama-to-the-forefront-of-asias-independent-marketing-network/" },
  { category: "2025", outlet: "Marketing Magazine", title: "SAMA's Game-Changing Marketing Alliance Reshaping Southeast Asia's Advertising Landscape", url: "https://marketingmagazine.com.my/samas-game-changing-marketing-alliance-is-reshaping-southeast-asias-advertising-landscape/" },
  { category: "2025", outlet: "Nation Thailand", title: "SAMA Alliance Expanding Regional Marketing Network", url: "https://www.nationthailand.com/business/economy/40047895" },
  { category: "2025", outlet: "Martech Asia", title: "Transforming the Agency Culture?", url: "https://martechasia.net/features/transforming-the-agency-culture/" },
];

function ImageOutletLogo({ outlet }: { outlet: ImageOutlet & { imgSize?: string } }) {
  const [error, setError] = useState(false);
  if (error) return (
    <div className="flex items-center justify-center px-4 py-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-gray/30">{outlet.name}</span>
    </div>
  );
  return (
    <div className="group flex items-center justify-center rounded-xl px-3 py-3 cursor-default transition-all duration-300 hover:scale-105" title={outlet.name}>
      <img src={outlet.image} alt={outlet.name} onError={() => setError(true)}
        className={`${outlet.imgSize ?? "h-9"} w-auto max-w-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-300`}/>
    </div>
  );
}

function TextOutletLogo({ outlet }: { outlet: TextOutlet }) {
  return (
    <div className="group flex flex-col items-center justify-center rounded-xl px-4 py-4 cursor-default transition-all duration-300 hover:scale-105" title={outlet.name}>
      <div className="flex flex-col items-center gap-0.5 transition-all duration-300 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-85">
        <span className={`font-black text-sm leading-none tracking-tight ${outlet.style === "italic" ? "italic" : ""}`}
          style={{ color: outlet.color, fontFamily: outlet.style === "serif" ? "Georgia,serif" : "inherit", letterSpacing: outlet.style === "condensed" ? "0.05em" : undefined }}>
          {outlet.abbr}
        </span>
        {outlet.sub && (
          <span className="text-[9px] font-semibold tracking-widest uppercase leading-none" style={{ color: outlet.color, opacity: 0.7 }}>{outlet.sub}</span>
        )}
      </div>
    </div>
  );
}

export default function Press() {
  const [showAll, setShowAll] = useState(false);

  const categories = ["2023", "2024", "2025"];

  return (
    <section id="press" className="py-24 lg:py-32 bg-warm-white blueprint-grid-fine relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <FadeIn>
          <div className="mb-14">
            <p className="text-catalyst-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">Press &amp; Media</p>
            <h2 className="text-4xl lg:text-5xl font-black text-catalyst-navy">
              Quoted.<br />Featured.<br />Cited.
            </h2>
            <div className="h-px w-12 bg-catalyst-blue mt-5"/>
          </div>
        </FadeIn>

        {/* Logo grid */}
        <FadeIn delay={0.1}>
          <div className="mb-16 border-y border-slate-gray/12 py-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {outlets.map((o) =>
                o.image !== undefined
                  ? <ImageOutletLogo key={o.name} outlet={o as ImageOutlet}/>
                  : <TextOutletLogo  key={o.name} outlet={o as TextOutlet}/>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Featured articles — real stories, logo instead of pill */}
        <FadeIn delay={0.1}>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-gray/45 mb-5">Featured Coverage</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((f, i) => (
            <FadeIn key={f.headline} delay={i * 0.08}>
              <a href={f.url} target="_blank" rel="noopener noreferrer"
                className="block border border-slate-gray/12 rounded-2xl p-6 hover:border-catalyst-blue/35 hover:shadow-sm transition-all group bg-white">
                {/* Outlet logo + year */}
                <div className="flex items-center justify-between mb-4">
                  <img src={f.logo} alt={f.outlet}
                    className="h-8 w-auto max-w-[120px] object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"/>
                  <span className="text-slate-gray/40 text-xs font-semibold">{f.year}</span>
                </div>
                <h3 className="text-catalyst-navy font-bold text-base leading-snug mb-3 group-hover:text-catalyst-blue transition-colors">
                  {f.headline}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">{f.excerpt}</p>
                <p className="text-catalyst-blue text-xs font-semibold mt-4 flex items-center gap-1">
                  Read article <span>→</span>
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Expandable full list */}
        <FadeIn delay={0.35}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white border border-slate-gray/15 rounded-2xl hover:border-catalyst-blue/35 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-catalyst-navy">
                {showAll ? "Hide full press list" : `See all ${allCoverage.length}+ articles & media appearances`}
              </span>
              <span className="text-xs bg-catalyst-blue/10 text-catalyst-blue font-semibold px-2.5 py-0.5 rounded-full">
                {allCoverage.length}
              </span>
            </div>
            <span className={`text-slate-gray/50 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}>▾</span>
          </button>

          {showAll && (
            <div className="mt-4 bg-white border border-slate-gray/12 rounded-2xl overflow-hidden">
              {categories.map((cat) => {
                const items = allCoverage.filter((a) => a.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat} className="border-b border-slate-gray/8 last:border-b-0">
                    <div className="px-6 py-3 bg-slate-gray/4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-gray/50">{cat}</span>
                    </div>
                    <div className="divide-y divide-slate-gray/6">
                      {items.map((item) => (
                        <a
                          key={item.url}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 px-6 py-3.5 hover:bg-catalyst-blue/3 transition-colors group/item"
                        >
                          <div className="w-1 h-1 rounded-full bg-catalyst-blue shrink-0 mt-2"/>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-slate-gray/50 mb-0.5">{item.outlet}</p>
                            <p className="text-sm text-catalyst-navy leading-snug group-hover/item:text-catalyst-blue transition-colors">
                              {item.title}
                            </p>
                          </div>
                          <span className="text-catalyst-blue/40 text-xs shrink-0 mt-0.5 group-hover/item:text-catalyst-blue transition-colors">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </FadeIn>

      </div>
    </section>
  );
}
