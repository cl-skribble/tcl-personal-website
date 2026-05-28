"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const awards = [
  {
    year: "2024",
    medal: "Gold",
    medalColor: "#F59E0B",
    title: "Best Agency Culture",
    org: "Agency of the Year Awards 2024",
    orgShort: "AOTY",
    image: "/images/awards/aoty-2024.png",
    imgBg: "#1a0203",
  },
  {
    year: "2024",
    medal: "40 Under 40",
    medalColor: "#B71E6C",
    title: "Prestige 40 Under 40",
    org: "Prestige Malaysia",
    orgShort: "PRESTIGE",
    image: "/images/awards/prestige-40u40.png",
    imgBg: "#000000",
  },
  {
    year: "2024",
    medal: "Silver",
    medalColor: "#9CA3AF",
    title: "Best Employer",
    org: "Star Outstanding Business Awards",
    orgShort: "SOBA",
    image: "/images/awards/soba.png",
    imgBg: "#A01525",
  },
  {
    year: "2023",
    medal: "Bronze",
    medalColor: "#B45309",
    title: "Agency Leader of the Year",
    org: "Agency of the Year Awards 2023",
    orgShort: "AOTY",
    image: "/images/awards/aoty-2023.png",
    imgBg: "#1a0203",
  },
  {
    year: "2022",
    medal: "Bronze",
    medalColor: "#B45309",
    title: "Best in Marketing Innovation",
    org: "The Appies Awards",
    orgShort: "APPIES",
    image: "/images/awards/appies.png",
    imgBg: "#f0f0f0",
  },
];

function AwardCard({ a, delay }: { a: typeof awards[0]; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="min-w-[200px] lg:min-w-0 snap-start border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/25 transition-colors group">
        {/* Award masthead image / fallback — square for equal dimensions */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ background: a.imgBg, aspectRatio: "1" }}
        >
          {!imgError ? (
            <img
              src={a.image}
              alt={a.org}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Fallback when image file not yet dropped */
            <p
              className="font-black text-xl tracking-widest opacity-30"
              style={{ color: a.medalColor }}
            >
              {a.orgShort}
            </p>
          )}
        </div>

        {/* Award details */}
        <div className="bg-white/5 flex flex-col gap-3 p-5 flex-1">
          <span
            className="self-start text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `${a.medalColor}22`, color: a.medalColor }}
          >
            {a.medal}
          </span>
          <div>
            <p className="text-white font-bold text-sm leading-snug mb-1">{a.title}</p>
            <p className="text-white/40 text-xs leading-snug">{a.org}</p>
          </div>
          <p className="mt-auto text-white/25 text-[10px] font-semibold">{a.year}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="py-24 lg:py-32 bg-carbon overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">Recognition</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Serial Award Winner.
            </h2>
            <p className="text-white/40 text-base mt-3 max-w-xl">
              Recognised by industry peers and institutions across marketing, business, and leadership.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible snap-x snap-mandatory lg:snap-none -mx-6 px-6 lg:mx-0 lg:px-0">
            {awards.map((a, i) => (
              <AwardCard key={a.title} a={a} delay={i * 0.08} />
            ))}
          </div>
          {/* Right-fade scroll hint — mobile only */}
          <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-carbon to-transparent pointer-events-none lg:hidden" />
        </div>

        <FadeIn delay={0.4}>
          <p className="text-white/25 text-xs mt-8 text-center">
            + 5× finalist at AOTY 2023 including Best Agency Culture, Full Service Agency of the Year, Best in Customer Service
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
