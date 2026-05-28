"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const skribbleEntities = [
  { name: "Skribble Me",       desc: "Full-service digital marketing agency" },
  { name: "Skribble Lab",      desc: "Technology & innovation arm" },
  { name: "Skribble Ventures", desc: "Investment & startup ecosystem" },
  { name: "Skribble Media",    desc: "Content & media production" },
];

const samaStats  = [
  { value: "50+", label: "Partner Agencies" },
  { value: "200+", label: "Clients Served" },
  { value: "8",   label: "Markets" },
];

const samaMarkets = ["Malaysia","Thailand","Indonesia","Singapore","Vietnam","Hong Kong","Australia","Philippines"];

/* ── Blueprint: circuit routing paths for Skribble card ── */
function CircuitBlueprint() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Horizontal bus lines */}
      <line x1="0"   y1="60"  x2="400" y2="60"  stroke="#4a5568" strokeWidth="0.4" opacity="0.18"/>
      <line x1="0"   y1="150" x2="400" y2="150" stroke="#4a5568" strokeWidth="0.4" opacity="0.18"/>
      <line x1="0"   y1="240" x2="400" y2="240" stroke="#4a5568" strokeWidth="0.4" opacity="0.18"/>
      {/* Vertical channels */}
      <line x1="80"  y1="0"   x2="80"  y2="300" stroke="#4a5568" strokeWidth="0.3" opacity="0.14"/>
      <line x1="200" y1="0"   x2="200" y2="300" stroke="#4a5568" strokeWidth="0.3" opacity="0.14"/>
      <line x1="320" y1="0"   x2="320" y2="300" stroke="#4a5568" strokeWidth="0.3" opacity="0.14"/>
      {/* Routing paths */}
      <polyline points="30,60 30,40 90,40 90,100 160,100 160,60"
        fill="none" stroke="#0052cc" strokeWidth="0.6" opacity="0.25"/>
      <polyline points="200,60 200,30 280,30 280,90 350,90 350,150"
        fill="none" stroke="#0052cc" strokeWidth="0.6" opacity="0.2"/>
      <polyline points="40,150 40,180 120,180 120,240"
        fill="none" stroke="#0052cc" strokeWidth="0.5" opacity="0.18"/>
      {/* Via nodes */}
      <rect x="87.5" y="97.5" width="5" height="5" fill="#0052cc" opacity="0.3"/>
      <rect x="277.5" y="87.5" width="5" height="5" fill="#0052cc" opacity="0.25"/>
      <rect x="117.5" y="177.5" width="5" height="5" fill="#0052cc" opacity="0.2"/>
      {/* Terminal circles */}
      <circle cx="30"  cy="60"  r="3.5" fill="none" stroke="#0052cc" strokeWidth="0.7" opacity="0.3"/>
      <circle cx="350" cy="150" r="3.5" fill="none" stroke="#0052cc" strokeWidth="0.7" opacity="0.25"/>
    </svg>
  );
}

/* ── Kinetic glow nodes for SAMA card ── */
function GlowNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute glow-pulse" style={{ top: "10%", left: "5%", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(255,140,0,0.2) 0%, transparent 65%)", borderRadius: "50%" }}/>
      <div className="absolute glow-pulse" style={{ animationDelay: "1.5s", bottom: "5%", right: "10%", width: "140px", height: "140px", background: "radial-gradient(circle, rgba(255,100,0,0.15) 0%, transparent 65%)", borderRadius: "50%" }}/>
      <div className="absolute glow-pulse" style={{ animationDelay: "3s", top: "40%", right: "5%", width: "100px", height: "100px", background: "radial-gradient(circle, rgba(255,60,0,0.12) 0%, transparent 65%)", borderRadius: "50%" }}/>
    </div>
  );
}

export default function Ventures() {
  const [samaLogoError, setSamaLogoError] = useState(false);

  return (
    <section id="ventures" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#08111e" }}>

      {/* Background ambient orbs */}
      <div className="absolute top-[-80px] left-[5%]  w-96 h-96 rounded-full opacity-35 blur-[80px] glow-pulse pointer-events-none" style={{ background: "#0052cc" }}/>
      <div className="absolute bottom-[-60px] left-[15%] w-80 h-80 rounded-full opacity-25 blur-[70px] glow-pulse pointer-events-none" style={{ animationDelay: "2s", background: "#0ea5e9" }}/>
      <div className="absolute top-[30%] right-[5%] w-64 h-64 rounded-full opacity-15 blur-[60px] pointer-events-none" style={{ background: "#0052cc" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-4">What I Build</p>
            <h2 className="text-4xl lg:text-5xl font-black text-warm-white">
              Two Platforms,<br />One Vision.
            </h2>
            <div className="h-px w-12 bg-catalyst-blue mx-auto mt-5"/>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── Skribble Group — Glassmorphism + Circuit Blueprint ── */}
          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-8 lg:p-10 h-full flex flex-col relative overflow-hidden"
              style={{
                background: "rgba(0,82,204,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(0,82,204,0.35)",
                boxShadow: "0 8px 40px rgba(0,82,204,0.20), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}>
              {/* Circuit blueprint background */}
              <CircuitBlueprint />
              {/* Glass shimmer */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)" }}/>

              <div className="relative flex items-start justify-between mb-8">
                <div>
                  <p className="text-warm-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Role</p>
                  <p className="text-blueprint-cyan text-sm font-semibold">Chief Executive Officer</p>
                </div>
                {/* Skribble S mark */}
                <svg className="w-10 h-12 shrink-0 opacity-25" viewBox="-0.5 -0.5 13.5 16" fill="white">
                  <path d="M2.15386 14.4778C3.34233 14.4778 4.30577 13.4671 4.30577 12.2203C4.30577 10.9736 3.34233 9.96289 2.15386 9.96289C0.965395 9.96289 0.00195312 10.9736 0.00195312 12.2203C0.00195312 13.4671 0.965395 14.4778 2.15386 14.4778Z"/>
                  <path d="M4.67377 4.49901C4.67377 4.01643 5.09428 3.61527 6.41647 3.61527C7.58485 3.61527 8.82943 3.95722 10.1502 4.66036L11.5091 1.22459C10.1121 0.400062 8.25511 -0.00109863 6.45457 -0.00109863C2.29891 -0.00109863 0.211914 2.12757 0.211914 4.73881C0.211914 9.98203 7.62295 8.55502 7.62295 10.3225C7.62295 10.8051 7.16293 11.0863 5.88025 11.0863C5.62344 11.0863 5.36097 11.0656 5.09569 11.0375C5.22974 11.4046 5.30735 11.8028 5.30735 12.2202C5.30735 13.1632 4.92918 14.0129 4.32523 14.6154C4.82476 14.6716 5.33416 14.7027 5.84356 14.7027C9.99922 14.7027 12.0862 12.5326 12.0862 9.9613C12.0862 4.77878 4.67518 6.18506 4.67518 4.49752L4.67377 4.49901Z"/>
                </svg>
              </div>

              <h3 className="relative text-warm-white text-3xl lg:text-4xl font-black mb-3">Skribble Group</h3>
              <p className="relative text-warm-white/55 text-sm leading-relaxed mb-8">
                A multi-entity marketing and technology group building impactful brands and optimised campaigns for clients across Southeast Asia.
              </p>

              <div className="relative grid grid-cols-2 gap-3 mt-auto">
                {skribbleEntities.map((e) => (
                  <div key={e.name} className="rounded-2xl p-4"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
                    <p className="text-warm-white font-semibold text-sm mb-1">{e.name}</p>
                    <p className="text-warm-white/40 text-xs leading-snug">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── SAMA Alliance — Kinetic flame + orange ── */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl p-8 lg:p-10 h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #FF8C00 0%, #E85D04 40%, #C94A00 75%, #8B2A00 100%)" }}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"/>
              <GlowNodes />

              {!samaLogoError && (
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/sama-flame.png" alt="SAMA Alliance" fill className="object-cover"
                    onError={() => setSamaLogoError(true)}/>
                </div>
              )}

              <div className="relative mb-8">
                <p className="text-white/55 text-xs font-semibold uppercase tracking-wider mb-2">Role</p>
                <p className="text-white font-semibold text-sm">Founder &amp; Regional President</p>
              </div>

              <h3 className="relative text-white text-3xl lg:text-4xl font-black mb-1">SAMA Alliance</h3>
              <p className="relative text-white/65 text-sm font-medium mb-3">Strategic Asia Marketing Alliance</p>
              <p className="relative text-white/65 text-sm leading-relaxed mb-8">
                Launched in Jakarta in August 2024, SAMA unites independent marketing agencies across APAC,
                championing borderless marketing and hyper-local solutions for clients everywhere.
              </p>

              {/* Stats */}
              <div className="relative grid grid-cols-3 gap-4 mb-8">
                {samaStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-white text-3xl font-black">{s.value}</p>
                    <p className="text-white/55 text-xs font-medium mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div className="relative mt-auto">
                <p className="text-white/45 text-[10px] font-semibold uppercase tracking-wider mb-3">Markets</p>
                <div className="flex flex-wrap gap-2">
                  {samaMarkets.map((m) => (
                    <span key={m} className="text-white text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.15)" }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
