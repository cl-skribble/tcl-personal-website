"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    // Try immediately (handles already-loaded case)
    v.play().catch(() => {});
    // Also try on canplay in case video data wasn't ready yet
    const onCanPlay = () => {
      v.muted = true;
      v.play().catch(() => {});
    };
    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Cinematic video background — Ken Burns drift across HK skyline */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/videos/hero-cinematic.mp4"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
      />

      {/* Gradient overlay — dark on left, fading right */}
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/70 to-carbon/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-teal text-xs font-semibold uppercase tracking-[0.25em] mb-5"
            >
              CEO · Skribble Group &nbsp;·&nbsp; Founder · SAMA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            >
              Teng<br />Chan Leong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/75 text-xl md:text-2xl font-light leading-relaxed mb-10"
            >
              From Budak Taiping<br />
              <span className="text-white font-medium">to the World Stage.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-magenta text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-magenta-light transition-colors"
              >
                Collaborate
              </a>
              <a
                href="https://linkedin.com/in/tengchanleong"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white/70 transition-colors"
              >
                LinkedIn ↗
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
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
