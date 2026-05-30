"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Heritage Gate — removed, assets archived in /heritage elements/ */
function _HeritageGateRemoved() {
  // PNG: 1587×2245, building at y=509-1268 (759px), canvas margins 47px each side.
  // aspectRatio 1587:759 → container height exactly matches the building.
  // objectPosition 22.7% → roofline sits flush at container top.
  // margin -3% removes canvas margins so adjacent roof tips connect.
  // mix-blend-mode:screen dissolves dark navy bg, keeps white linework.
  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 22.7%",
    opacity: 0.28,   // halved from previous 0.52 → delicate, thin-looking strokes
  };

  const buildingStyle: React.CSSProperties = {
    flex: "0 0 auto",
    aspectRatio: "1587 / 759",
    width: "clamp(240px, 21vw, 290px)",
    // margin must be % of element width, not container — use calc() to multiply
    // canvas margin (44+40)/1587/2 ≈ 2.65% of element width
    // If we wrote -2.65% it'd be relative to viewport (1440px), overshooting ~4×.
    margin: "0 calc(clamp(240px, 21vw, 290px) * -0.0265)",
  };

  const count = 7; // enough to fill + slightly overrun — edges clip naturally

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 pointer-events-none flex items-end overflow-hidden"
      style={{ gap: 0 }}
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={buildingStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/neo-building.png" alt="" style={imgStyle} />
        </div>
      ))}
    </div>
  );
}

/* UNUSED — kept for reference only */
function _HeritageGateSVG() {
  const h   = 320;
  const vw  = 1440;
  const W   = "rgba(255,255,255,";   // white stroke helper
  const bL  = 70;                    // building left edge
  const bR  = 1370;                  // building right edge
  const bMx = 720;                   // building horizontal midpoint

  // ── Center gateway: 3 arched bays ──────────────────────────
  const cpw      = 16;
  const cPillars = [370, 598, 826, 1054] as const;
  const cArches  = [[386,598],[614,826],[842,1054]] as [number,number][];
  const cSY      = 215;   // center arch spring y
  const cCY      = 128;   // center arch bezier control y → peak ≈ y 124

  // ── Wing colonnades: 2 bays each side ──────────────────────
  const wpw      = 12;
  const lwP      = [70, 223, 370]  as const;   // left pillar left-edges
  const lwA      = [[82,223],[237,370]] as [number,number][];
  const rwP      = [1070,1217,1358] as const;  // right pillar left-edges
  const rwA      = [[1082,1217],[1229,1358]] as [number,number][];
  const wSY      = 228;   // wing spring y
  const wCY      = 148;   // wing control y → peak ≈ y 140

  // ── Entablature & body y-positions ─────────────────────────
  const entTop = 100;    // entablature top (also body bottom)
  const entBot = 116;    // entablature bottom (arch zone starts)

  return (
    <svg
      aria-hidden="true"
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{ height: h }}
      viewBox={`0 0 ${vw} ${h}`}
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ═══════════════════════════════════════════════════
          ROOFLINES
          ═══════════════════════════════════════════════ */}

      {/* CENTER — Tier 1: main ridge + finial */}
      <path d={`M${bMx-375} 20 Q${bMx} 3 ${bMx+375} 20`}
        fill="none" stroke={W+"0.52)"} strokeWidth="1.3"/>
      <path d={`M${bMx-375} 20 Q${bMx-420} 34 ${bMx-448} 54`}
        fill="none" stroke={W+"0.46)"} strokeWidth="1.1"/>
      <path d={`M${bMx+375} 20 Q${bMx+420} 34 ${bMx+448} 54`}
        fill="none" stroke={W+"0.46)"} strokeWidth="1.1"/>
      <circle cx={bMx} cy={5} r={4.5} fill="none" stroke={W+"0.55)"} strokeWidth="1.1"/>
      <circle cx={bMx} cy={5} r={1.8} fill={W+"0.45)"}/>
      <line x1={bMx} y1={10} x2={bMx} y2={23} stroke={W+"0.38)"} strokeWidth="1.0"/>

      {/* CENTER — Tier 2: mid roof arc */}
      <path d={`M${bMx-265} 36 Q${bMx} 24 ${bMx+265} 36`}
        fill="none" stroke={W+"0.40)"} strokeWidth="1.0"/>
      <path d={`M${bMx-265} 36 Q${bMx-302} 48 ${bMx-322} 62`}
        fill="none" stroke={W+"0.32)"} strokeWidth="0.9"/>
      <path d={`M${bMx+265} 36 Q${bMx+302} 48 ${bMx+322} 62`}
        fill="none" stroke={W+"0.32)"} strokeWidth="0.9"/>

      {/* CENTER — Tier 3: lowest fascia */}
      <line x1={bMx-185} y1={54} x2={bMx+185} y2={54}
        stroke={W+"0.32)"} strokeWidth="0.95"/>
      <line x1={bMx-192} y1={62} x2={bMx+192} y2={62}
        stroke={W+"0.22)"} strokeWidth="0.65"/>
      {/* Corner drops */}
      <line x1={bMx-185} y1={54} x2={bMx-196} y2={68}
        stroke={W+"0.26)"} strokeWidth="0.8"/>
      <line x1={bMx+185} y1={54} x2={bMx+196} y2={68}
        stroke={W+"0.26)"} strokeWidth="0.8"/>

      {/* WINGS — 2-tier roofs, lower */}
      {/* Left wing */}
      <path d={`M${bL+8} 46 Q${(bL+370)/2} 33 ${370-5} 46`}
        fill="none" stroke={W+"0.35)"} strokeWidth="0.95"/>
      <path d={`M${bL+8} 46 Q${bL-14} 58 ${bL-24} 72`}
        fill="none" stroke={W+"0.28)"} strokeWidth="0.85"/>
      <line x1={bL} y1={64} x2={370} y2={64}
        stroke={W+"0.25)"} strokeWidth="0.75"/>
      <line x1={bL-2} y1={72} x2={370+2} y2={72}
        stroke={W+"0.16)"} strokeWidth="0.55"/>
      {/* Right wing */}
      <path d={`M${1070+5} 46 Q${(1070+bR)/2} 33 ${bR-8} 46`}
        fill="none" stroke={W+"0.35)"} strokeWidth="0.95"/>
      <path d={`M${bR-8} 46 Q${bR+14} 58 ${bR+24} 72`}
        fill="none" stroke={W+"0.28)"} strokeWidth="0.85"/>
      <line x1={1070} y1={64} x2={bR} y2={64}
        stroke={W+"0.25)"} strokeWidth="0.75"/>
      <line x1={1070-2} y1={72} x2={bR+2} y2={72}
        stroke={W+"0.16)"} strokeWidth="0.55"/>

      {/* ═══════════════════════════════════════════════════
          UPPER BODY — horizontal banding full building width
          ═══════════════════════════════════════════════ */}
      {([80,86,91,95,entTop-6,entTop-2] as number[]).map((y, i) => (
        <line key={`bd-${i}`} x1={bL} y1={y} x2={bR} y2={y}
          stroke={W+(i===0||i===3||i===5 ? "0.30)" : "0.18)")}
          strokeWidth={i===0||i===3 ? "0.9" : "0.45"}/>
      ))}

      {/* Frieze: row of small rectangular panels above entablature */}
      {Array.from({length:38}, (_,i) => {
        const x = bL + 6 + i * 35;
        return x + 23 <= bR
          ? <rect key={`fz-${i}`} x={x} y={entTop-14} width={23} height={10}
              fill="none" stroke={W+"0.19)"} strokeWidth="0.5"/>
          : null;
      })}

      {/* ═══════════════════════════════════════════════════
          ENTABLATURE — thick white cornice
          ═══════════════════════════════════════════════ */}
      <rect x={bL-4} y={entTop} width={bR-bL+8} height={entBot-entTop}
        fill={W+"0.10)"} stroke={W+"0.48)"} strokeWidth="1.3"/>
      <line x1={bL-2} y1={entTop+4}    x2={bR+2} y2={entTop+4}
        stroke={W+"0.28)"} strokeWidth="0.6"/>
      <line x1={bL-2} y1={entBot-4}    x2={bR+2} y2={entBot-4}
        stroke={W+"0.28)"} strokeWidth="0.6"/>

      {/* ═══════════════════════════════════════════════════
          CENTER PILLARS — 4 × shaft + capital + plinth
          ═══════════════════════════════════════════════ */}
      {cPillars.map((x) => (
        <g key={`cp-${x}`}>
          <rect x={x} y={entBot} width={cpw} height={h-entBot}
            fill={W+"0.05)"} stroke={W+"0.44)"} strokeWidth="1.4"/>
          <rect x={x-4} y={entBot} width={cpw+8} height={8}
            fill="none" stroke={W+"0.30)"} strokeWidth="0.8"/>
          <line x1={x-3} y1={cSY} x2={x+cpw+3} y2={cSY}
            stroke={W+"0.22)"} strokeWidth="0.8"/>
          <rect x={x-6} y={h-22} width={cpw+12} height={22}
            fill={W+"0.05)"} stroke={W+"0.28)"} strokeWidth="0.9"/>
        </g>
      ))}

      {/* ═══════════════════════════════════════════════════
          CENTER ARCHES — 3 bays
          ═══════════════════════════════════════════════ */}
      {cArches.map(([lx, rx]) => {
        const mx = (lx+rx)/2;
        return (
          <g key={`ca-${lx}`}>
            <path d={`M${lx} ${h} L${lx} ${cSY} C${lx} ${cCY} ${rx} ${cCY} ${rx} ${cSY} L${rx} ${h}`}
              fill="none" stroke={W+"0.42)"} strokeWidth="1.5"/>
            <path d={`M${lx+13} ${h} L${lx+13} ${cSY+9} C${lx+13} ${cCY+24} ${rx-13} ${cCY+24} ${rx-13} ${cSY+9} L${rx-13} ${h}`}
              fill="none" stroke={W+"0.17)"} strokeWidth="0.7"/>
            <circle cx={mx} cy={cCY+26} r={7}
              fill="none" stroke={W+"0.44)"} strokeWidth="1.0"/>
            <circle cx={mx} cy={cCY+26} r={3}
              fill="none" stroke={W+"0.26)"} strokeWidth="0.7"/>
            <circle cx={mx} cy={cCY+26} r={1.2} fill={W+"0.38)"}/>
          </g>
        );
      })}

      {/* ═══════════════════════════════════════════════════
          WING PILLARS & ARCHES
          ═══════════════════════════════════════════════ */}
      {/* Left pillars */}
      {lwP.map((x) => (
        <g key={`lwp-${x}`}>
          <rect x={x} y={entBot} width={wpw} height={h-entBot}
            fill={W+"0.04)"} stroke={W+"0.36)"} strokeWidth="1.1"/>
          <rect x={x-3} y={entBot} width={wpw+6} height={6}
            fill="none" stroke={W+"0.24)"} strokeWidth="0.7"/>
          <rect x={x-4} y={h-18} width={wpw+8} height={18}
            fill={W+"0.04)"} stroke={W+"0.22)"} strokeWidth="0.75"/>
        </g>
      ))}
      {/* Left arches */}
      {lwA.map(([lx,rx]) => {
        const mx=(lx+rx)/2;
        return (
          <g key={`lwa-${lx}`}>
            <path d={`M${lx} ${h} L${lx} ${wSY} C${lx} ${wCY} ${rx} ${wCY} ${rx} ${wSY} L${rx} ${h}`}
              fill="none" stroke={W+"0.34)"} strokeWidth="1.1"/>
            <circle cx={mx} cy={wCY+21} r={5}
              fill="none" stroke={W+"0.34)"} strokeWidth="0.85"/>
            <circle cx={mx} cy={wCY+21} r={1.8} fill={W+"0.28)"}/>
          </g>
        );
      })}
      {/* Right pillars */}
      {rwP.map((x) => (
        <g key={`rwp-${x}`}>
          <rect x={x} y={entBot} width={wpw} height={h-entBot}
            fill={W+"0.04)"} stroke={W+"0.36)"} strokeWidth="1.1"/>
          <rect x={x-3} y={entBot} width={wpw+6} height={6}
            fill="none" stroke={W+"0.24)"} strokeWidth="0.7"/>
          <rect x={x-4} y={h-18} width={wpw+8} height={18}
            fill={W+"0.04)"} stroke={W+"0.22)"} strokeWidth="0.75"/>
        </g>
      ))}
      {/* Right arches */}
      {rwA.map(([lx,rx]) => {
        const mx=(lx+rx)/2;
        return (
          <g key={`rwa-${lx}`}>
            <path d={`M${lx} ${h} L${lx} ${wSY} C${lx} ${wCY} ${rx} ${wCY} ${rx} ${wSY} L${rx} ${h}`}
              fill="none" stroke={W+"0.34)"} strokeWidth="1.1"/>
            <circle cx={mx} cy={wCY+21} r={5}
              fill="none" stroke={W+"0.34)"} strokeWidth="0.85"/>
            <circle cx={mx} cy={wCY+21} r={1.8} fill={W+"0.28)"}/>
          </g>
        );
      })}

      {/* ═══════════════════════════════════════════════════
          GROUND LINE
          ═══════════════════════════════════════════════ */}
      <line x1={bL-12} y1={h-0.5} x2={bR+12} y2={h-0.5}
        stroke={W+"0.42)"} strokeWidth="2.0"/>
    </svg>
  );
}

/* Precision crosshair — bottom right corner annotation */
function PrecisionMark() {
  return (
    <svg
      aria-hidden="true"
      className="absolute bottom-28 right-10 w-[68px] h-[68px] pointer-events-none hidden md:block"
      viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="34" r="17" stroke="#0052cc" strokeWidth="0.5" opacity="0.30"/>
      <circle cx="34" cy="34" r="1.4" fill="#0052cc" opacity="0.45"/>
      <line x1="34" y1="0"  x2="34" y2="21" stroke="#0052cc" strokeWidth="0.4" opacity="0.38"/>
      <line x1="34" y1="47" x2="34" y2="68" stroke="#0052cc" strokeWidth="0.4" opacity="0.38"/>
      <line x1="0"  y1="34" x2="21" y2="34" stroke="#0052cc" strokeWidth="0.4" opacity="0.38"/>
      <line x1="47" y1="34" x2="68" y2="34" stroke="#0052cc" strokeWidth="0.4" opacity="0.38"/>
      <path d="M51 17 L57 17 L57 23" stroke="#0052cc" strokeWidth="0.6" opacity="0.30"/>
      <path d="M17 51 L17 57 L23 57" stroke="#0052cc" strokeWidth="0.6" opacity="0.30"/>
    </svg>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced  = useReducedMotion() ?? false;

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced) return;
    v.muted = true;
    v.play().catch(() => {});
    const handler = () => { v.muted = true; v.play().catch(() => {}); };
    v.addEventListener("canplay", handler);
    return () => v.removeEventListener("canplay", handler);
  }, [reduced]);

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden"
      style={{ background: "#060e1c" }}
    >
      {/* Cinematic video backdrop */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="metadata"
        src="/videos/hero-cinematic.mp4"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] opacity-55"
      />

      {/* Left vignette — text legibility, right side breathes open */}
      <div aria-hidden="true" className="absolute inset-0" style={{
        background: "linear-gradient(to right, #060e1c 26%, rgba(6,14,28,0.82) 52%, rgba(6,14,28,0.10) 100%)",
      }}/>
      {/* Bottom fade — very light so the building shows through */}
      <div aria-hidden="true" className="absolute inset-0" style={{
        background: "linear-gradient(to top, rgba(6,14,28,0.25) 0%, rgba(6,14,28,0.05) 15%, transparent 30%)",
      }}/>

      {/* KL coordinate annotation — top right */}
      <div aria-hidden="true"
        className="absolute top-20 right-8 hidden md:flex flex-col items-end gap-1.5 pointer-events-none select-none">
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase"
          style={{ color: "rgba(255,255,255,0.17)" }}>
          3.1390° N · 101.6869° E
        </span>
        <div className="h-px w-7" style={{ background: "rgba(255,255,255,0.09)" }}/>
      </div>

      {/* Precision crosshair */}
      <PrecisionMark />

      {/* ── Content ── */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

          {/* Role line */}
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduced ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduced ? {} : { duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-5 h-px shrink-0" style={{ background: "#0052cc" }}/>
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase"
              style={{ color: "#0ea5e9" }}>
              CEO · Skribble Group &nbsp;·&nbsp; Founder · SAMA Alliance
            </span>
          </motion.div>

          {/* Name — stacked Barlow Condensed 800 */}
          <h1 className="mb-7" style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 800,
            lineHeight: 0.87,
            letterSpacing: "-0.025em",
          }}>
            {(["Teng", "Chan", "Leong"] as const).map((line, i) => (
              <motion.span
                key={line}
                className="block text-white uppercase"
                style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}
                initial={reduced ? false : { opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduced ? {} : {
                  duration: 0.75, delay: 0.30 + i * 0.09, ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            className="text-lg font-light italic mb-10"
            style={{ color: "rgba(255,255,255,0.52)", letterSpacing: "0.01em" }}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduced ? {} : { duration: 0.6, delay: 0.65 }}
          >
            Global Minds, Eastern Roots.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduced ? {} : { duration: 0.6, delay: 0.76 }}
          >
            <a href="#contact"
              className="bg-[#0052cc] text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-[#0047b3] transition-colors">
              Let&apos;s Connect
            </a>
            <a href="#about"
              className="border border-white/25 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/[0.08] hover:border-white/45 transition-colors">
              Discover More
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reduced ? {} : { duration: 1, delay: 1.3 }}
      >
        <span className="text-[9px] uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-[#0052cc]/50 to-transparent"
          style={reduced ? {} : { animation: "scroll-bounce 1.5s ease-in-out infinite" }}/>
      </motion.div>

    </section>
  );
}
