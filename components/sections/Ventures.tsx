"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const skribbleEntities = [
  { name: "Skribble Me", desc: "Full-service digital marketing agency" },
  { name: "Skribble Lab", desc: "Technology & innovation arm" },
  { name: "Skribble Ventures", desc: "Investment & startup ecosystem" },
  { name: "Skribble Media", desc: "Content & media production" },
];

const samaStats = [
  { value: "50+", label: "Partner Agencies" },
  { value: "200+", label: "Clients Served" },
  { value: "8", label: "Markets" },
];

const samaMarkets = [
  "Malaysia", "Thailand", "Indonesia", "Singapore",
  "Vietnam", "Hong Kong", "Australia", "Philippines",
];

export default function Ventures() {
  const [samaLogoError, setSamaLogoError] = useState(false);

  return (
    <section id="ventures" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#0c0c0f" }}>
      {/* Background blobs for glass effect */}
      <div className="absolute top-[-80px] left-[5%] w-96 h-96 rounded-full opacity-40 blur-[80px]" style={{ background: "#B71E6C" }} />
      <div className="absolute bottom-[-60px] left-[15%] w-80 h-80 rounded-full opacity-30 blur-[70px]" style={{ background: "#00BBBE" }} />
      <div className="absolute top-[30%] left-[35%] w-64 h-64 rounded-full opacity-20 blur-[60px]" style={{ background: "#B71E6C" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-teal text-xs font-semibold uppercase tracking-[0.2em] mb-4">What I Build</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              Two Platforms,<br />One Vision.
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Skribble Group — Liquid Glass ── */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-3xl p-8 lg:p-10 h-full flex flex-col relative overflow-hidden"
              style={{
                background: "rgba(183, 30, 108, 0.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(183, 30, 108, 0.35)",
                boxShadow: "0 8px 40px rgba(183,30,108,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              {/* Glass shimmer highlight */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, transparent 60%)" }}
              />
              {/* Teal accent blob inside card */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-30 blur-3xl" style={{ background: "#00BBBE" }} />

              <div className="relative flex items-start justify-between mb-8">
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Role</p>
                  <p className="text-teal text-sm font-semibold">Chief Executive Officer</p>
                </div>
                <svg className="w-10 h-12 shrink-0 opacity-30" viewBox="-0.5 -0.5 13.5 16" fill="white">
                  <path d="M2.15386 14.4778C3.34233 14.4778 4.30577 13.4671 4.30577 12.2203C4.30577 10.9736 3.34233 9.96289 2.15386 9.96289C0.965395 9.96289 0.00195312 10.9736 0.00195312 12.2203C0.00195312 13.4671 0.965395 14.4778 2.15386 14.4778Z"/>
                  <path d="M4.67377 4.49901C4.67377 4.01643 5.09428 3.61527 6.41647 3.61527C7.58485 3.61527 8.82943 3.95722 10.1502 4.66036L11.5091 1.22459C10.1121 0.400062 8.25511 -0.00109863 6.45457 -0.00109863C2.29891 -0.00109863 0.211914 2.12757 0.211914 4.73881C0.211914 9.98203 7.62295 8.55502 7.62295 10.3225C7.62295 10.8051 7.16293 11.0863 5.88025 11.0863C5.62344 11.0863 5.36097 11.0656 5.09569 11.0375C5.22974 11.4046 5.30735 11.8028 5.30735 12.2202C5.30735 13.1632 4.92918 14.0129 4.32523 14.6154C4.82476 14.6716 5.33416 14.7027 5.84356 14.7027C9.99922 14.7027 12.0862 12.5326 12.0862 9.9613C12.0862 4.77878 4.67518 6.18506 4.67518 4.49752L4.67377 4.49901Z"/>
                </svg>
              </div>

              <h3 className="relative text-white text-3xl lg:text-4xl font-black mb-3">Skribble Group</h3>
              <p className="relative text-white/60 text-sm leading-relaxed mb-8">
                A multi-entity marketing and technology group building impactful brands and optimised campaigns
                for clients across Southeast Asia.
              </p>

              <div className="relative grid grid-cols-2 gap-3 mt-auto">
                {skribbleEntities.map((e) => (
                  <div
                    key={e.name}
                    className="rounded-2xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <p className="text-white font-semibold text-sm mb-1">{e.name}</p>
                    <p className="text-white/40 text-xs leading-snug">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── SAMA Alliance — Flame bg + Orange ── */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl p-8 lg:p-10 h-full flex flex-col relative overflow-hidden">
              {/* Flame background image — drop flame.jpg / flame.png into public/images/ */}
              {/* Replace the gradient below with: style={{ backgroundImage: "url('/images/flame.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, #FF8C00 0%, #E85D04 40%, #C94A00 75%, #8B2A00 100%)",
                }}
              />
              {/* Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* SAMA flame logo — drop sama-flame.png into public/images/ */}
              {!samaLogoError && (
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/sama-flame.png"
                    alt="SAMA Alliance"
                    fill
                    className="object-cover"
                    onError={() => setSamaLogoError(true)}
                  />
                </div>
              )}

              <div className="relative mb-8">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Role</p>
                <p className="text-white font-semibold text-sm">Founder & Regional President</p>
              </div>

              <h3 className="relative text-white text-3xl lg:text-4xl font-black mb-1">SAMA Alliance</h3>
              <p className="relative text-white/70 text-sm font-medium mb-3">Strategic Asia Marketing Alliance</p>
              <p className="relative text-white/70 text-sm leading-relaxed mb-8">
                Launched in Jakarta in August 2024, SAMA unites independent marketing agencies across APAC,
                championing borderless marketing and hyper-local solutions for clients everywhere.
              </p>

              {/* Stats */}
              <div className="relative grid grid-cols-3 gap-4 mb-8">
                {samaStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-white text-3xl font-black">{s.value}</p>
                    <p className="text-white/60 text-xs font-medium mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div className="relative mt-auto">
                <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-3">Markets</p>
                <div className="flex flex-wrap gap-2">
                  {samaMarkets.map((m) => (
                    <span key={m} className="text-white text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
                      {m}
                    </span>
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
