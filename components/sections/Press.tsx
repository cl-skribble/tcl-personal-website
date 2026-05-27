"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

type TextOutlet = {
  name: string;
  abbr: string;
  color: string;
  style: "serif" | "condensed" | "bold" | "italic";
  sub?: string;
  image?: undefined;
};

type ImageOutlet = {
  name: string;
  image: string;
  imgSize?: string;
  abbr?: undefined;
  color?: undefined;
  style?: undefined;
  sub?: undefined;
};

type Outlet = TextOutlet | ImageOutlet;

const outlets: Outlet[] = [
  {
    name: "Business Times",
    abbr: "BUSINESS TIMES",
    color: "#1A3A5C",
    style: "serif",
  },
  {
    name: "The Edge Malaysia",
    image: "/images/press/the-edge.png",
  },
  {
    name: "BFM 89.9",
    image: "/images/press/bfm.png",
    imgSize: "h-20",
  },
  {
    name: "Prestige Malaysia",
    image: "/images/press/prestige.png",
  },
  {
    name: "Bangkok Post",
    image: "/images/press/BangkokPost.png",
  },
  {
    name: "Marketech APAC",
    image: "/images/press/marketech.png",
  },
  {
    name: "Marketing Interactive",
    image: "/images/press/marketing-interactive.png",
  },
  {
    name: "Astro Awani",
    image: "/images/press/astro-awani.png",
  },
  {
    name: "Free Malaysia Today",
    image: "/images/press/fmt.png",
  },
  {
    name: "Focus Malaysia",
    image: "/images/press/focus-malaysia.png",
  },
  {
    name: "Berita Harian",
    image: "/images/press/berita-harian.png",
  },
  {
    name: "Enterprise Zone",
    abbr: "ENTERPRISE",
    color: "#374151",
    style: "condensed",
    sub: "ZONE",
  },
];

const features = [
  {
    outlet: "Bangkok Post",
    year: "2025",
    headline: "The Future of Marketing Agencies Lies in Collaboration, Not Competition",
    excerpt:
      "Chan Leong's vision for borderless marketing in Southeast Asia — building SAMA as a force for regional agency collaboration.",
  },
  {
    outlet: "The Edge Malaysia",
    year: "2024",
    headline: "Gen AI Setting New Job Standards for Creative Industry",
    excerpt:
      "How Skribble Group is navigating the wave of AI-driven transformation in Malaysia's creative and marketing sector.",
  },
  {
    outlet: "BFM 89.9",
    year: "2024",
    headline: "The Strategic Asia Marketing Alliance — Where Rivals and Partners Unite",
    excerpt:
      "Marketing Mojo features Chan Leong on how SAMA is redefining the relationship between competing agencies in the region.",
  },
  {
    outlet: "Enterprise Zone",
    year: "2025",
    headline: "Chan Leong Teng — CEO of Skribble Malaysia & Founder of SAMA",
    excerpt:
      "An in-depth profile on CL's journey from corporate digital transformation leader to building one of SEA's most innovative marketing groups.",
  },
];

function ImageOutletLogo({ outlet }: { outlet: ImageOutlet & { imgSize?: string } }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex items-center justify-center px-4 py-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-carbon/30">
          {outlet.name}
        </span>
      </div>
    );
  }

  return (
    <div
      className="group flex items-center justify-center rounded-xl px-3 py-3 cursor-default transition-all duration-300 hover:scale-105"
      title={outlet.name}
    >
      <img
        src={outlet.image}
        alt={outlet.name}
        onError={() => setError(true)}
        className={`${outlet.imgSize ?? "h-9"} w-auto max-w-full object-contain grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
      />
    </div>
  );
}

function TextOutletLogo({ outlet }: { outlet: TextOutlet }) {
  return (
    <div
      className="group flex flex-col items-center justify-center rounded-xl px-4 py-4 cursor-default transition-all duration-300 hover:scale-105"
      title={outlet.name}
    >
      <div className="flex flex-col items-center gap-0.5 transition-all duration-300 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100">
        <span
          className={`font-black text-sm leading-none tracking-tight ${
            outlet.style === "italic" ? "italic" : ""
          }`}
          style={{
            color: outlet.color,
            fontFamily: outlet.style === "serif" ? "Georgia,serif" : "inherit",
            letterSpacing: outlet.style === "condensed" ? "0.05em" : undefined,
          }}
        >
          {outlet.abbr}
        </span>
        {outlet.sub && (
          <span
            className="text-[9px] font-semibold tracking-widest uppercase leading-none"
            style={{ color: outlet.color, opacity: 0.7 }}
          >
            {outlet.sub}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Press() {
  return (
    <section id="press" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-magenta text-xs font-semibold uppercase tracking-[0.2em] mb-4">Press & Media</p>
            <h2 className="text-4xl lg:text-5xl font-black text-carbon">
              Quoted.<br />Featured.<br />Cited.
            </h2>
          </div>
        </FadeIn>

        {/* Logo grid */}
        <FadeIn delay={0.1}>
          <div className="mb-16 border-y border-carbon/8 py-8">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {outlets.map((o) =>
                o.image !== undefined ? (
                  <ImageOutletLogo key={o.name} outlet={o as ImageOutlet} />
                ) : (
                  <TextOutletLogo key={o.name} outlet={o as TextOutlet} />
                )
              )}
            </div>
          </div>
        </FadeIn>

        {/* Featured articles */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.headline} delay={i * 0.1}>
              <div className="border border-carbon/10 rounded-2xl p-7 hover:border-magenta/30 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-cream text-carbon/60 text-xs font-semibold px-3 py-1 rounded-full">{f.outlet}</span>
                  <span className="text-carbon/30 text-xs">{f.year}</span>
                </div>
                <h3 className="text-carbon font-bold text-base leading-snug mb-3 group-hover:text-magenta transition-colors">
                  {f.headline}
                </h3>
                <p className="text-carbon/50 text-sm leading-relaxed">{f.excerpt}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Coverage years summary */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-cream rounded-2xl p-7">
            <p className="text-carbon/40 text-xs font-semibold uppercase tracking-wider mb-4">Media Coverage Timeline</p>
            <div className="grid grid-cols-3 gap-6 text-center">
              {["2022–2023", "2024", "2025–2026"].map((period, i) => (
                <div key={period}>
                  <p className="text-carbon font-black text-2xl">{["5+", "10+", "8+"][i]}</p>
                  <p className="text-carbon/40 text-xs mt-1">{period}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
