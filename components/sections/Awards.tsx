"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const awards = [
  { year: "2024", medal: "Gold",      medalColor: "#F59E0B", title: "Best Agency Culture",         org: "Agency of the Year Awards 2024", orgShort: "AOTY",    image: "/images/awards/aoty-2024.png",       imgBg: "#1a0203" },
  { year: "2024", medal: "40 Under 40", medalColor: "#0052cc", title: "Prestige 40 Under 40",       org: "Prestige Malaysia",             orgShort: "PRESTIGE", image: "/images/awards/prestige-40u40.png", imgBg: "#000000" },
  { year: "2024", medal: "Silver",    medalColor: "#9CA3AF", title: "Best Employer",               org: "Star Outstanding Business Awards", orgShort: "SOBA",  image: "/images/awards/soba.png",           imgBg: "#A01525" },
  { year: "2023", medal: "Bronze",    medalColor: "#B45309", title: "Agency Leader of the Year",   org: "Agency of the Year Awards 2023", orgShort: "AOTY",    image: "/images/awards/aoty-2023.png",       imgBg: "#1a0203" },
  { year: "2022", medal: "Bronze",    medalColor: "#B45309", title: "Best in Marketing Innovation", org: "The Appies Awards",             orgShort: "APPIES",   image: "/images/awards/appies.png",          imgBg: "#f0f0f0" },
];

/* ── Blueprint: isometric structural frame backdrop ── */
function BlueprintIsometric() {
  return (
    <svg
      className="absolute bottom-0 right-0 w-96 h-80 pointer-events-none"
      viewBox="0 0 300 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Isometric cube — top face */}
      <polygon points="150,46 214,82 150,118 86,82"
        fill="none" stroke="#4a5568" strokeWidth="0.8" opacity="0.32"/>
      {/* Front-left face */}
      <polygon points="86,82 150,118 150,182 86,146"
        fill="none" stroke="#4a5568" strokeWidth="0.8" opacity="0.32"/>
      {/* Front-right face */}
      <polygon points="150,118 214,82 214,146 150,182"
        fill="none" stroke="#4a5568" strokeWidth="0.8" opacity="0.32"/>
      {/* Top face grid (horizontal) */}
      <line x1="118" y1="57"  x2="182" y2="57"  stroke="#4a5568" strokeWidth="0.35" opacity="0.22"/>
      <line x1="104" y1="68"  x2="196" y2="68"  stroke="#4a5568" strokeWidth="0.35" opacity="0.22"/>
      <line x1="118" y1="57"  x2="118" y2="107" stroke="#4a5568" strokeWidth="0.3"  opacity="0.18"/>
      <line x1="182" y1="57"  x2="182" y2="107" stroke="#4a5568" strokeWidth="0.3"  opacity="0.18"/>
      {/* Front-left grid */}
      <line x1="86"  y1="103" x2="150" y2="139" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      <line x1="86"  y1="125" x2="150" y2="161" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      <line x1="107" y1="93"  x2="107" y2="157" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      {/* Front-right grid */}
      <line x1="150" y1="139" x2="214" y2="103" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      <line x1="193" y1="93"  x2="193" y2="157" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      {/* Blueprint corners (accent) */}
      <path d="M 222 76 L 232 76 L 232 70" fill="none" stroke="#0052cc" strokeWidth="0.7" opacity="0.3"/>
      <path d="M 78 186 L 78 194 L 84 194" fill="none" stroke="#0052cc" strokeWidth="0.7" opacity="0.3"/>
      {/* Focal crosshair */}
      <line x1="143" y1="118" x2="157" y2="118" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <line x1="150" y1="111" x2="150" y2="125" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="150" cy="118" r="1.5" fill="#0052cc" opacity="0.3"/>
    </svg>
  );
}

function AwardCard({ a, delay }: { a: typeof awards[0]; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="min-w-[200px] lg:min-w-0 snap-start rounded-2xl overflow-hidden flex flex-col
        border border-catalyst-blue/15 hover:border-catalyst-blue/35 transition-colors group
        bg-catalyst-navy-l backdrop-blur-sm">
        {/* Award image */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ background: a.imgBg, aspectRatio: "1" }}
        >
          {!imgError ? (
            <img src={a.image} alt={a.org} onError={() => setImgError(true)}
              className="w-full h-full object-cover"/>
          ) : (
            <p className="font-black text-xl tracking-widest opacity-30" style={{ color: a.medalColor }}>
              {a.orgShort}
            </p>
          )}
          {/* Glassmorphism overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(0,82,204,0.08)", backdropFilter: "blur(2px)" }}/>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3 p-5 flex-1" style={{ background: "rgba(15,35,64,0.6)" }}>
          <span
            className="self-start text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${a.medalColor}22`, color: a.medalColor }}
          >
            {a.medal}
          </span>
          <div>
            <p className="text-warm-white font-bold text-sm leading-snug mb-1">{a.title}</p>
            <p className="text-warm-white/40 text-xs leading-snug">{a.org}</p>
          </div>
          <p className="mt-auto text-warm-white/20 text-[10px] font-semibold">{a.year}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-24 lg:py-32 relative overflow-hidden blueprint-grid"
      style={{ background: "#060e1c" }}>

      <BlueprintIsometric />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 blur-[80px] glow-pulse pointer-events-none"
        style={{ background: "#0052cc" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-catalyst-blue-l text-xs font-semibold uppercase tracking-[0.2em] mb-4">Recognition</p>
            <h2 className="text-4xl lg:text-5xl font-black text-warm-white">
              Serial Award Winner.
            </h2>
            <div className="h-px w-12 bg-catalyst-blue mt-4"/>
            <p className="text-warm-white/38 text-base mt-4 max-w-xl">
              Recognised by industry peers and institutions across marketing, business, and leadership.
            </p>
          </div>
        </FadeIn>

        {/* Scroll-carousel on mobile, grid on desktop */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible snap-x snap-mandatory lg:snap-none -mx-6 px-6 lg:mx-0 lg:px-0">
            {awards.map((a, i) => (
              <AwardCard key={a.title} a={a} delay={i * 0.08}/>
            ))}
          </div>
          {/* Right-fade scroll hint on mobile */}
          <div className="absolute top-0 right-0 bottom-4 w-16 pointer-events-none lg:hidden"
            style={{ background: "linear-gradient(to left, #060e1c, transparent)" }}/>
        </div>

        <FadeIn delay={0.4}>
          <p className="text-warm-white/20 text-xs mt-8 text-center">
            + 5× finalist at AOTY 2023 including Best Agency Culture, Full Service Agency of the Year, Best in Customer Service
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
