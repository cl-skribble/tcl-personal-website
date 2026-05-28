"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Blueprint: scattered network nodes for hero backdrop ── */
const nodes = [
  { cx: 72,  cy: 18,  r: 2.5 }, { cx: 18,  cy: 52,  r: 1.8 },
  { cx: 145, cy: 25,  r: 2   }, { cx: 88,  cy: 78,  r: 1.5 },
  { cx: 32,  cy: 88,  r: 2   }, { cx: 168, cy: 68,  r: 1.8 },
  { cx: 112, cy: 42,  r: 1.5 }, { cx: 55,  cy: 60,  r: 2.2 },
  { cx: 185, cy: 38,  r: 1.5 }, { cx: 22,  cy: 120, r: 1.8 },
  { cx: 135, cy: 95,  r: 1.5 }, { cx: 178, cy: 105, r: 2   },
  { cx: 60,  cy: 130, r: 1.5 }, { cx: 100, cy: 110, r: 2   },
  { cx: 155, cy: 140, r: 1.5 }, { cx: 40,  cy: 160, r: 1.8 },
];
const edges = [
  [0,2],[0,7],[1,7],[1,3],[2,5],[3,7],[4,7],[4,1],
  [5,8],[6,2],[6,3],[9,7],[9,13],[10,13],[11,14],[12,9],[13,14],
];

function BlueprintHero() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Engineering grid */}
      <defs>
        <pattern id="hgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4a5568" strokeWidth="0.35"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#hgrid)" opacity="0.12"/>

      {/* Network edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#4a5568" strokeWidth="0.4" opacity="0.25"
        />
      ))}

      {/* Network nodes */}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
          fill="none" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      ))}

      {/* Catalyst Blue accent nodes */}
      <circle cx="72"  cy="18"  r="1.2" fill="#0052cc" opacity="0.5"/>
      <circle cx="168" cy="68"  r="1.2" fill="#0052cc" opacity="0.4"/>
      <circle cx="100" cy="110" r="1.5" fill="#0ea5e9" opacity="0.4"/>
    </svg>
  );
}

/* ── Kinetic light sweep ── */
function KineticSweep() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glow orb 1 */}
      <div
        className="absolute glow-pulse"
        style={{
          top: "-15%", left: "-10%",
          width: "55%", height: "55%",
          background: "radial-gradient(circle, rgba(0,82,204,0.18) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      {/* Glow orb 2 */}
      <div
        className="absolute glow-pulse"
        style={{
          animationDelay: "2s",
          bottom: "-20%", right: "5%",
          width: "45%", height: "45%",
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      {/* Thin sweeping light path */}
      <div
        className="absolute"
        style={{
          top: "50%", left: "50%",
          width: "120%", height: "120%",
          marginTop: "-60%", marginLeft: "-60%",
          background: "conic-gradient(from 200deg at 40% 45%, transparent 0deg, rgba(0,82,204,0.06) 18deg, rgba(14,165,233,0.09) 36deg, transparent 54deg)",
          animation: "kinetic-sweep 10s linear infinite",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    const onCanPlay = () => { v.muted = true; v.play().catch(() => {}); };
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-catalyst-navy">

      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="metadata"
        src="/videos/hero-cinematic.mp4"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] opacity-35"
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-catalyst-navy/98 via-catalyst-navy/80 to-catalyst-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-catalyst-navy/70 via-transparent to-transparent" />

      {/* Blueprint network backdrop */}
      <BlueprintHero />

      {/* Kinetic light */}
      <KineticSweep />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-2xl">

            {/* CL mark + role line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <Image
                src="/images/cl-mark.png"
                alt="CL"
                width={88}
                height={88}
                className="object-contain opacity-90"
              />
              <span className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.25em]">
                CEO · Skribble Group &nbsp;·&nbsp; Founder · SAMA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-warm-white text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-5"
            >
              Teng<br />Chan Leong
            </motion.h1>

            {/* Thin blueprint rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-px w-48 bg-gradient-to-r from-catalyst-blue to-transparent mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-warm-white/70 text-xl md:text-2xl font-light leading-relaxed mb-3 italic"
            >
              Global Minds, Eastern Roots.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-warm-white/50 text-base font-light leading-relaxed mb-10"
            >
              Foundational Strength. Digital Innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-catalyst-blue text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-catalyst-blue-l transition-colors"
              >
                Invite to Speak
              </a>
              <a
                href="#about"
                className="border border-warm-white/25 text-warm-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/8 hover:border-warm-white/50 transition-colors"
              >
                Discover More
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-warm-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div
          className="w-px h-8 bg-gradient-to-b from-catalyst-blue/50 to-transparent"
          style={{ animation: "scroll-bounce 1.5s ease-in-out infinite" }}
        />
      </motion.div>

    </section>
  );
}
