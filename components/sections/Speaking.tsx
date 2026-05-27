"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import FadeIn from "@/components/FadeIn";

const topics = [
  "Digital Transformation",
  "PropTech & Real Estate",
  "Regional Marketing",
  "Agency Leadership",
  "SME Growth",
  "AI & Digital Economy",
  "Brand Strategy",
  "Southeast Asia Expansion",
];

const events = [
  { src: "/images/speaking/rehda-dmti.jpeg", event: "Rehda DMTI 2025", location: "Kuala Lumpur" },
  { src: "/images/speaking/hkftw.jpg", event: "HK FinTech Week 2024", location: "Hong Kong" },
  { src: "/images/speaking/beyondfest.jpeg", event: "BeyondFest (AWS)", location: "Kuala Lumpur" },
  { src: "/images/speaking/alpha-galaxy.jpeg", event: "Alpha Galaxy × HLB", location: "Kuala Lumpur" },
  { src: "/images/speaking/beyondfest2.jpeg", event: "Re:source APAC Conference", location: "Kuala Lumpur" },
  { src: "/images/speaking/axiata.jpg", event: "Axiata Challenge 2025", location: "Kuala Lumpur" },
];

const videos = [
  { src: "/videos/rehda-sharing.mp4", title: "Rehda Institute Sharing", subtitle: "Digital Marketing Transformation, Nov 2025" },
  { src: "/videos/resource-conference.mp4", title: "Re:source APAC Panel", subtitle: "Malaysia to ASEAN: Replicating What Works" },
  { src: "/videos/galaxy-exchange.mp4", title: "Galaxy Exchange Event", subtitle: "Brand Launch for Galaxy Avenue" },
];

function VideoCard({ src, title, subtitle }: { src: string; title: string; subtitle: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-carbon cursor-pointer" onClick={toggle}>
      <video
        ref={ref}
        src={src}
        className="w-full aspect-[9/16] object-cover"
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      {/* Play overlay */}
      {!playing && (
        <div className="absolute inset-0 bg-carbon/40 flex items-center justify-center group-hover:bg-carbon/30 transition-colors">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 text-carbon translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-carbon/90 to-transparent p-4">
        <p className="text-white font-semibold text-sm leading-tight">{title}</p>
        <p className="text-white/60 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-magenta text-xs font-semibold uppercase tracking-[0.2em] mb-4">Speaker Profile</p>
            <h2 className="text-4xl lg:text-5xl font-black text-carbon mb-3">
              On Stages<br />Across Asia.
            </h2>
            <p className="text-carbon/50 text-base max-w-xl">
              From Kuala Lumpur to Hong Kong — keynotes, panels, and fireside chats on the topics shaping Southeast Asia's business landscape.
            </p>
          </div>
        </FadeIn>

        {/* Topics */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-14">
            {topics.map((t) => (
              <span
                key={t}
                className="bg-white text-carbon/70 border border-carbon/10 text-sm font-medium px-4 py-2 rounded-full hover:border-magenta hover:text-magenta transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {events.map((e, i) => (
            <FadeIn key={e.event} delay={i * 0.07}>
              <div className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
                <Image
                  src={e.src}
                  alt={e.event}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm leading-tight">{e.event}</p>
                  <p className="text-white/60 text-xs">{e.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Videos */}
        <FadeIn delay={0.1}>
          <h3 className="text-carbon text-2xl font-black mb-6">Watch CL in Action</h3>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {videos.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <VideoCard {...v} />
            </FadeIn>
          ))}
        </div>

        {/* Past engagements list */}
        <FadeIn delay={0.2}>
          <div className="mt-14 border-t border-carbon/10 pt-10">
            <p className="text-carbon/40 text-xs font-semibold uppercase tracking-wider mb-5">Past Engagements</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm text-carbon/60">
              {[
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
              ].map((e) => (
                <div key={e} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0" />
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
