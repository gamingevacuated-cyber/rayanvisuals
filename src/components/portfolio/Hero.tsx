import { Counter } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </span>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div>
            <h1
              className="animate-fade-up font-display font-black leading-[0.88] tracking-[-0.04em] text-[clamp(3.5rem,11vw,9rem)]"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-aurora">RAYAN</span>
            </h1>

            <p
              className="animate-fade-up mt-4 font-display font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-2xl"
              style={{ animationDelay: "220ms" }}
            >
              Editing videos people actually <span className="italic text-brand">finish watching</span>.
            </p>

            <p
              className="animate-fade-up mt-5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-muted-foreground"
              style={{ animationDelay: "340ms" }}
            >
              Gaming • Shorts • Motion Design • Cinematics
            </p>

            <p
              className="animate-fade-up mt-6 max-w-xl text-base text-muted-foreground leading-relaxed"
              style={{ animationDelay: "460ms" }}
            >
              7 years inside Premiere Pro and After Effects. Retention-engineered cuts, cinematic grades,
              and motion that earns the next scroll.
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "580ms" }}>
              <a href="#portfolio" className="btn-primary inline-flex items-center gap-2">
                See the Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-glass inline-flex items-center gap-2">Hire Me</a>
            </div>

            <div
              className="animate-fade-up mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
              style={{ animationDelay: "700ms" }}
            >
              {[
                { value: <><Counter to={10} />M+</>, label: "Views generated" },
                { value: <><Counter to={7} />+</>, label: "Years editing" },
                { value: <><Counter to={300} />+</>, label: "Videos delivered" },
                { value: "24h", label: "Typical turnaround" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-aurora">{s.value}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Workstation />
          </div>
        </div>
      </div>
    </section>
  );
}

function Workstation() {
  const tracks = [
    { name: "V3 · Title", color: "#A855F7", w: "60%" },
    { name: "V2 · Cam A", color: "#6D5DFE", w: "92%" },
    { name: "V1 · B-roll", color: "#00D9FF", w: "78%" },
    { name: "A1 · VO", color: "#6D5DFE", w: "85%" },
    { name: "A2 · Music", color: "#A855F7", w: "100%" },
  ];

  const wave = Array.from({ length: 36 }).map((_, i) => ({
    h: 12 + Math.abs(Math.sin(i * 0.7)) * 36,
    delay: (i % 9) * 0.08,
  }));

  return (
    <div className="relative" style={{ perspective: "1400px" }}>
      {/* Glow halo */}
      <div
        className="absolute -inset-10 rounded-[40px] -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 30%, rgba(109,93,254,0.45), transparent 70%), radial-gradient(50% 60% at 80% 70%, rgba(0,217,255,0.35), transparent 70%)",
        }}
      />

      {/* Monitor */}
      <div
        className="glass-strong rounded-[28px] p-3 relative overflow-hidden"
        style={{
          transform: "rotateY(-11deg) rotateX(6deg)",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 90px rgba(109,93,254,0.25), inset 0 1px 0 rgba(255,255,255,0.18)",
        }}
      >
        {/* Bezel chrome line */}
        <div className="flex items-center justify-between px-3 pb-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Premiere · 4K · 60fps
          </span>
        </div>

        {/* Screen */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #0a0f24 0%, #14112e 45%, #0a0f24 100%)",
          }}
        >
          {/* Program monitor */}
          <div className="aspect-video relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 60% at 30% 30%, rgba(109,93,254,0.35), transparent 70%), radial-gradient(50% 50% at 75% 70%, rgba(168,85,247,0.30), transparent 70%), radial-gradient(40% 40% at 50% 50%, rgba(0,217,255,0.20), transparent 70%)",
              }}
            />
            {/* Scanline / grade hint */}
            <div
              className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(255,255,255,0.04) 3px)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div
                className="animate-pulse-scale grid place-items-center rounded-full h-16 w-16"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 0 40px rgba(109,93,254,0.6)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[10px] font-mono text-white/70">
              <span>00:00:12:04</span>
              <span>REC ●</span>
            </div>
          </div>

          {/* Waveform */}
          <div className="px-4 py-3 border-t border-white/5">
            <div className="flex items-end justify-between gap-[2px] h-10">
              {wave.map((w, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm animate-wave-bar"
                  style={{
                    height: `${w.h}px`,
                    background: "linear-gradient(180deg, #00D9FF, #6D5DFE)",
                    animationDelay: `${w.delay}s`,
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Timeline tracks */}
          <div className="px-4 py-3 space-y-1.5 border-t border-white/5">
            {tracks.map((t, i) => (
              <div
                key={t.name}
                className="animate-clip-grow flex items-center gap-2"
                style={{ animationDelay: `${600 + i * 120}ms` }}
              >
                <div className="w-16 font-mono text-[9px] uppercase tracking-wider text-muted-foreground truncate">
                  {t.name}
                </div>
                <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden relative">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: t.w,
                      background: `linear-gradient(90deg, ${t.color}, ${t.color}55)`,
                      boxShadow: `0 0 10px ${t.color}88`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RGB reflections */}
        <div
          className="absolute -bottom-6 left-6 right-6 h-12 rounded-[40%] blur-2xl opacity-60 -z-10"
          style={{
            background:
              "linear-gradient(90deg, #6D5DFE, #A855F7, #00D9FF)",
          }}
        />
      </div>

      {/* Floating Premiere icon */}
      <div
        className="animate-float-y-up absolute -left-6 top-12 glass-strong rounded-2xl p-3 hidden sm:flex items-center gap-2"
        style={{ animationDelay: "0.2s" }}
      >
        <span
          className="grid place-items-center h-9 w-9 rounded-lg font-display font-black text-sm"
          style={{ background: "linear-gradient(135deg, #00005B, #2A0A4F)", color: "#EA77FF" }}
        >
          Pr
        </span>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Premiere</div>
          <div className="text-xs font-medium">Editing.prproj</div>
        </div>
      </div>

      {/* Floating AE icon */}
      <div
        className="animate-float-y-down absolute -right-4 top-32 glass-strong rounded-2xl p-3 hidden sm:flex items-center gap-2"
        style={{ animationDelay: "0.6s" }}
      >
        <span
          className="grid place-items-center h-9 w-9 rounded-lg font-display font-black text-sm"
          style={{ background: "linear-gradient(135deg, #0B033B, #2A0A4F)", color: "#D497FF" }}
        >
          Ae
        </span>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">After FX</div>
          <div className="text-xs font-medium">Comp 01</div>
        </div>
      </div>

      {/* Render progress */}
      <div
        className="animate-float-y-up absolute -bottom-6 -left-2 sm:-left-6 glass-strong rounded-2xl p-4 min-w-[170px]"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Rendering</span>
          <span className="font-display font-bold text-sm text-aurora">98%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "98%",
              background: "linear-gradient(90deg, #6D5DFE, #A855F7, #00D9FF)",
              boxShadow: "0 0 12px rgba(109,93,254,0.7)",
            }}
          />
        </div>
        <div className="mt-1.5 font-mono text-[10px] text-muted-foreground">final_master.mp4</div>
      </div>

      {/* Online dot */}
      <div
        className="animate-float-y-down absolute -top-3 right-8 glass-strong rounded-full px-3 py-1.5 flex items-center gap-1.5"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-wider">Live Session</span>
      </div>
    </div>
  );
}
