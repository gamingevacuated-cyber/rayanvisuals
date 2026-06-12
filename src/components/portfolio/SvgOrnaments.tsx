import { motion } from "motion/react";

/* A collection of decorative SVG paths used as section ornaments and ambient art. */

export function GridLines({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} preserveAspectRatio="none">
      <defs>
        <pattern id="grid-fine" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="oklch(1 0 0 / 0.05)" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="grid-mask" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-fade">
          <rect width="100%" height="100%" fill="url(#grid-mask)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-fine)" mask="url(#grid-fade)" />
    </svg>
  );
}

export function WavePath({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1200 200" className={`pointer-events-none absolute inset-x-0 h-32 w-full ${className}`}>
      <defs>
        <linearGradient id="wave-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.22 295)" stopOpacity="0.5" />
          <stop offset="50%" stopColor="oklch(0.7 0.2 250)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,100 C200,40 400,160 600,100 C800,40 1000,160 1200,100"
        fill="none"
        stroke="url(#wave-grad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <motion.path
        d="M0,120 C220,60 420,180 620,120 C820,60 1020,180 1200,120"
        fill="none"
        stroke="url(#wave-grad)"
        strokeWidth="1"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.8, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}

export function OrbitRings({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 600" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="orbit-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.22 295)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "300px 300px" }}
      >
        <ellipse cx="300" cy="300" rx="280" ry="110" fill="none" stroke="url(#orbit-grad)" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="220" ry="80" fill="none" stroke="url(#orbit-grad)" strokeWidth="0.8" />
        <ellipse cx="300" cy="300" rx="160" ry="55" fill="none" stroke="url(#orbit-grad)" strokeWidth="0.6" />
        <circle cx="580" cy="300" r="3" fill="oklch(0.82 0.16 200)" />
        <circle cx="520" cy="300" r="2" fill="oklch(0.72 0.22 295)" />
      </motion.g>
    </svg>
  );
}

export function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={className}>
      <defs>
        <linearGradient id="play-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.22 295)" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 200)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#play-grad)" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="1" />
      <path d="M85 70 L140 100 L85 130 Z" fill="url(#play-grad)" opacity="0.9" />
    </svg>
  );
}

export function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 80 80" className={className}>
      <path d="M2 30 L2 2 L30 2" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M78 50 L78 78 L50 78" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="78" cy="78" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function NoiseFilter() {
  return (
    <svg aria-hidden className="pointer-events-none fixed inset-0 z-[2] h-full w-full opacity-[0.025] mix-blend-overlay">
      <filter id="noise-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}

export function FilmStrip({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 80" className={className}>
      <rect x="0" y="10" width="400" height="60" rx="4" fill="oklch(1 0 0 / 0.04)" stroke="oklch(1 0 0 / 0.1)" />
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i}>
          <rect x={10 + i * 40} y="14" width="6" height="6" rx="1" fill="oklch(1 0 0 / 0.15)" />
          <rect x={10 + i * 40} y="60" width="6" height="6" rx="1" fill="oklch(1 0 0 / 0.15)" />
          <rect x={20 + i * 40} y="22" width="28" height="36" rx="2" fill="oklch(1 0 0 / 0.06)" />
        </g>
      ))}
    </svg>
  );
}

export function GlassEdge({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <linearGradient id="edge-top" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(1 0 0)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="2" fill="url(#edge-top)" />
    </svg>
  );
}
