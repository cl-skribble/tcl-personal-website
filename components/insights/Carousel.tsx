"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

/** Swipeable 4:5 card deck: scroll-snap on touch, arrow buttons and keys on desktop. All cards are in the HTML for crawlers. */
export default function Carousel({ slides, title }: { slides: Slide[]; title: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  /** Card a button click is heading to; ignore scroll events until the smooth scroll arrives there. */
  const target = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(0, Math.min(slides.length - 1, i));
    const card = el.children[n] as HTMLElement | undefined;
    if (!card) return;
    target.current = n;
    setIndex(n);
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, [slides.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const w = (el.children[0] as HTMLElement | undefined)?.offsetWidth ?? 1;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      const at = atEnd ? el.children.length - 1 : Math.round(el.scrollLeft / (w + 16));
      if (target.current !== null) {
        if (at !== target.current) return;
        target.current = null;
      }
      setIndex(at);
    };
    const onEnd = () => { target.current = null; onScroll(); };
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", onEnd);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", onEnd);
    };
  }, []);

  const btn =
    "h-11 w-11 shrink-0 rounded-full border border-white/20 text-white text-lg flex items-center justify-center hover:border-blueprint-cyan hover:text-blueprint-cyan disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white transition-colors";

  return (
    <section aria-roledescription="carousel" aria-label={`${title}: carousel cards`}>
      <div
        ref={track}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
        }}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 outline-none focus-visible:ring-2 focus-visible:ring-blueprint-cyan rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <figure
            key={s.src}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            className="snap-start shrink-0 w-[82%] sm:w-[58%] md:w-[46%]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={1080}
              height={1351}
              sizes="(min-width: 768px) 360px, 82vw"
              className="w-full h-auto rounded-xl border border-white/10"
              priority={i === 0}
            />
          </figure>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 mt-4">
        <p className="text-white/50 text-sm tabular-nums" aria-live="polite">
          {Math.min(index + 1, slides.length)} / {slides.length}
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {slides.map((s, i) => (
            <span key={s.src} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-blueprint-cyan" : "w-1.5 bg-white/25"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" className={btn} onClick={() => go(index - 1)} disabled={index <= 0} aria-label="Previous card">←</button>
          <button type="button" className={btn} onClick={() => go(index + 1)} disabled={index >= slides.length - 1} aria-label="Next card">→</button>
        </div>
      </div>
    </section>
  );
}
