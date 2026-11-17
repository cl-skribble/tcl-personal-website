"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryPhoto } from "@/lib/events";

/**
 * Event photos: lead photo wide, the rest in a grid that keeps each photo's shape.
 * Click opens a full-size view with arrow-key / swipe navigation; Esc closes.
 */
export default function Gallery({ photos, title }: { photos: GalleryPhoto[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const show = (i: number) => { setOpen(i); dialog.current?.showModal(); };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const [lead, ...rest] = photos;
  const current = open === null ? null : photos[open];

  return (
    <>
      <Tile p={lead} i={0} total={photos.length} onOpen={show} wide />
      {rest.length > 0 && (
        <div className="mt-3 sm:mt-4 columns-2 sm:columns-3 gap-3 sm:gap-4">
          {rest.map((p, j) => (
            <div key={p.src} className="mb-3 sm:mb-4 break-inside-avoid">
              <Tile p={p} i={j + 1} total={photos.length} onOpen={show} />
            </div>
          ))}
        </div>
      )}

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        aria-label={`${title} photos`}
        className="m-0 h-full max-h-none w-full max-w-none bg-black/95 p-0 backdrop:bg-black/80"
      >
        {current && (
          <div
            className="relative flex h-full w-full flex-col items-center justify-center px-4 py-14 sm:px-16"
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            <div className="relative h-full w-full">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" priority />
            </div>
            <p className="mt-4 text-center text-sm text-white/75">
              {current.caption ?? current.alt}
              <span className="ml-3 text-white/40 tabular-nums">{(open ?? 0) + 1} / {photos.length}</span>
            </p>

            <button type="button" onClick={close} aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
              ✕
            </button>
            {photos.length > 1 && (
              <>
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-xl text-white hover:bg-white/20">
                  ‹
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-xl text-white hover:bg-white/20">
                  ›
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}

function Tile({ p, i, total, onOpen, wide = false }: {
  p: GalleryPhoto; i: number; total: number; onOpen: (i: number) => void; wide?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(i)}
      style={{ aspectRatio: wide ? 16 / 9 : p.ratio ?? 4 / 3 }}
      className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-cyan"
      aria-label={`Open photo ${i + 1} of ${total}: ${p.caption ?? p.alt}`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes={wide ? "(min-width: 1024px) 960px, 100vw" : "(min-width: 640px) 320px, 50vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {p.caption && (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-2.5 pt-8 text-left text-[13px] text-white/90 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
          {p.caption}
        </span>
      )}
    </button>
  );
}
