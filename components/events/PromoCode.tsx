"use client";

import { useState } from "react";

export default function PromoCode({ code, note }: { code: string; note?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the code is still selectable on screen */
    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-blueprint-cyan/70 bg-blueprint-cyan/[0.07] p-5">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-blueprint-cyan mb-2">
        Promo code{note ? ` · ${note}` : ""}
      </p>
      <div className="flex items-center justify-between gap-4">
        <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-wider text-white select-all">
          {code}
        </span>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 text-sm font-semibold text-white bg-catalyst-blue hover:bg-catalyst-blue-l transition-colors rounded-full px-4 py-2"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-2 text-white/60 text-sm">Enter this code at checkout when you get your pass.</p>
    </div>
  );
}
