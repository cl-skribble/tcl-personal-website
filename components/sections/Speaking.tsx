"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import VideoCard from "@/components/speaking/VideoCard";
import { SPEAKING_FEE, pastEngagements, photos, topics, videos } from "@/lib/speaking";

/* ── Blueprint: network constellation for upper-right background ── */
function BlueprintNetwork() {
  return (
    <svg
      className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Edges */}
      {[
        [140,140, 70,55],  [140,140, 210,55],  [140,140, 248,150],
        [140,140, 200,220],[140,140, 80,215],   [140,140, 42,148],
        [70,55,  210,55],  [210,55, 248,150],  [248,150,200,220],
        [200,220, 80,215], [80,215,  42,148],   [42,148,  70,55],
        [70,55,  42,30],   [210,55, 255,30],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#4a5568" strokeWidth="0.55" opacity="0.28"/>
      ))}
      {/* Hub */}
      <circle cx="140" cy="140" r="7"  fill="none" stroke="#0052cc" strokeWidth="1" opacity="0.4"/>
      <circle cx="140" cy="140" r="3"  fill="#0052cc" opacity="0.4"/>
      <circle cx="140" cy="140" r="16" fill="none" stroke="#0052cc" strokeWidth="0.4" opacity="0.18"/>
      {/* Primary nodes */}
      {[[70,55],[210,55],[248,150],[200,220],[80,215],[42,148]].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5"   fill="none" stroke="#4a5568" strokeWidth="0.8" opacity="0.55"/>
          <circle cx={cx} cy={cy} r="2"   fill="#4a5568" opacity="0.4"/>
        </g>
      ))}
      {/* Satellite nodes */}
      {[[42,30],[255,30]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#4a5568" opacity="0.3"/>
      ))}
      {/* Pulse rings */}
      <circle cx="140" cy="140" r="32" fill="none" stroke="#0052cc" strokeWidth="0.4" opacity="0.12"/>
      <circle cx="140" cy="140" r="55" fill="none" stroke="#0052cc" strokeWidth="0.3" opacity="0.08"/>
    </svg>
  );
}

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 lg:py-32 bg-catalyst-navy relative overflow-hidden blueprint-grid">
      <BlueprintNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-catalyst-blue-l text-xs font-semibold uppercase tracking-[0.2em] mb-4">Speaker Profile</p>
            <h2 className="text-4xl lg:text-5xl font-black text-warm-white mb-3">
              On Stages<br />Across Asia.
            </h2>
            <p className="text-warm-white/45 text-base max-w-xl">
              From Kuala Lumpur to Hong Kong — keynotes, panels, and fireside chats on the topics shaping Southeast Asia&apos;s business landscape.
            </p>
          </div>
        </FadeIn>

        {/* Topics */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-14">
            {topics.map((t) => (
              <span key={t}
                className="bg-catalyst-navy-l text-warm-white/65 border border-catalyst-blue/20 text-sm font-medium px-4 py-2 rounded-full hover:border-catalyst-blue/55 hover:text-warm-white transition-colors">
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Photo grid — captions always visible on mobile, hover on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {photos.map((e, i) => (
            <FadeIn key={e.event} delay={i * 0.07}>
              <div className="relative rounded-2xl overflow-hidden group aspect-[4/3] border border-catalyst-blue/10 hover:border-catalyst-blue/30 transition-colors">
                <Image src={e.src} alt={e.event} fill className="object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-catalyst-navy/85 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity"/>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
                  <p className="text-warm-white font-semibold text-sm leading-tight">{e.event}</p>
                  <p className="text-warm-white/55 text-xs">{e.location}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Videos */}
        <FadeIn delay={0.1}>
          <h3 className="text-warm-white text-2xl font-black mb-2">Watch CL in Action</h3>
          <div className="h-px w-12 bg-catalyst-blue mb-6"/>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {videos.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <VideoCard {...v}/>
            </FadeIn>
          ))}
        </div>

        {/* Past engagements */}
        <FadeIn delay={0.2}>
          <div className="mt-14 border-t border-catalyst-blue/15 pt-10">
            <p className="text-warm-white/30 text-xs font-semibold uppercase tracking-wider mb-5">Past Engagements</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm text-warm-white/50">
              {pastEngagements.map((e) => (
                <div key={e} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-catalyst-blue mt-2 shrink-0"/>
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Link to the full speaker profile */}
        <FadeIn delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
            <a href="/speaking"
              className="inline-flex justify-center bg-catalyst-blue text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-catalyst-blue-l transition-colors">
              Speaker profile, topics &amp; fees →
            </a>
            <p className="text-warm-white/45 text-sm">Keynotes from {SPEAKING_FEE} per engagement.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
