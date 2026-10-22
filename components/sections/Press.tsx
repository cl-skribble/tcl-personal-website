"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { allCoverage, pressCategories } from "@/lib/press";

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

  const categories = pressCategories;

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
                            {item.note && <p className="text-xs text-slate-gray/60 mt-0.5">{item.note}</p>}
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
          <p className="mt-6 text-center text-sm">
            <a href="/press" className="text-catalyst-blue font-semibold hover:underline">
              Open the full press library →
            </a>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
