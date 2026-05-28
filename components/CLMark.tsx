interface CLMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * CL logomark — transparent SVG, colour-configurable.
 * Replicates the cl-mark.png design: rounded-square stamp frame + CL parallel tracks.
 * Use this everywhere the PNG produces a white/black box on dark backgrounds.
 */
export default function CLMark({ size = 64, color = "white", className = "" }: CLMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CL — Teng Chan Leong"
    >
      {/* Outer rounded-square stamp frame */}
      <rect x="10" y="10" width="180" height="180" rx="28"
        fill="none" stroke={color} strokeWidth="8.5" strokeOpacity="0.9"/>

      {/* Inner inset border (depth) */}
      <rect x="20" y="20" width="160" height="160" rx="20"
        fill="none" stroke={color} strokeWidth="1.2" strokeOpacity="0.22"/>

      {/* C — rounded parallel-track letterform */}
      {/* Outer rail */}
      <path d="M 104 58 Q 44 58 44 100 Q 44 142 104 142"
        fill="none" stroke={color} strokeWidth="17" strokeLinecap="round" strokeOpacity="0.95"/>
      {/* Inner channel (creates the dual-rail visual) */}
      <path d="M 104 58 Q 44 58 44 100 Q 44 142 104 142"
        fill="none" stroke={color} strokeWidth="5.5" strokeLinecap="round" strokeOpacity="0.18"/>

      {/* L — angular parallel-track letterform */}
      <path d="M 120 58 L 120 142 L 163 142"
        fill="none" stroke={color} strokeWidth="17" strokeLinecap="square" strokeLinejoin="miter" strokeOpacity="0.95"/>
      <path d="M 120 58 L 120 142 L 163 142"
        fill="none" stroke={color} strokeWidth="5.5" strokeLinecap="square" strokeLinejoin="miter" strokeOpacity="0.18"/>

      {/* Synergy node */}
      <circle cx="112" cy="100" r="3.5" fill={color} fillOpacity="0.5"/>
    </svg>
  );
}
