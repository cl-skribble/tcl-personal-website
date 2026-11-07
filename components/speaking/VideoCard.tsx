"use client";

import { useRef, useState } from "react";

export default function VideoCard({ src, title, subtitle }: { src: string; title: string; subtitle: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else          { ref.current.play(); setPlaying(true); }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-catalyst-navy cursor-pointer border border-catalyst-blue/15 hover:border-catalyst-blue/35 transition-colors" onClick={toggle}>
      <video ref={ref} src={src} className="w-full aspect-[9/16] object-cover"
        playsInline preload="metadata" onEnded={() => setPlaying(false)}/>
      {!playing && (
        <div className="absolute inset-0 bg-catalyst-navy/50 flex items-center justify-center group-hover:bg-catalyst-navy/35 transition-colors backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-warm-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-catalyst-blue/20">
            <svg className="w-5 h-5 text-catalyst-navy translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-catalyst-navy/95 to-transparent p-4">
        <p className="text-warm-white font-semibold text-sm leading-tight">{title}</p>
        <p className="text-warm-white/50 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}
