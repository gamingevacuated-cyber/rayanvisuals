import { useMemo } from "react";

/**
 * Layered background:
 * - Near-black base (set on body)
 * - Aurora blobs (already in body radial gradients)
 * - Tiny twinkling stars
 * - Slow-moving light beam (Vision-Pro-ish)
 * - Subtle SVG grain overlay
 */
export function BackgroundFX() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: `${(i * 73) % 100}%`,
        left: `${(i * 137) % 100}%`,
        size: (i % 3) === 0 ? 2 : 1,
        delay: `${(i % 9) * 0.5}s`,
        opacity: 0.3 + ((i * 17) % 70) / 100,
      })),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              opacity: s.opacity,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Moving light beam */}
      <div className="absolute -top-1/3 left-0 right-0 h-[200vh] animate-light-beam">
        <div
          className="h-full w-[40vw]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(168,85,247,0.18), rgba(0,217,255,0.10), transparent)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
