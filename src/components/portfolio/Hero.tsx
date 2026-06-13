import { Counter } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=60"
        >
          <source src="https://cdn.pixabay.com/video/2020/09/08/49375-459421068_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.13 0.025 280 / 0.4) 0%, oklch(0.13 0.025 280 / 0.7) 60%, var(--background) 100%)" }} />
      </div>
      <div className="mx-auto max-w-7xl">

        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground" style={{ animationDelay: "0ms" }}>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </span>

        <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <h1 className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95]" style={{ animationDelay: "150ms" }}>
              Turning <em className="italic text-aurora">raw footage</em> into content people actually <span className="text-ember">watch</span>
            </h1>

            <p className="animate-fade-up mt-6 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground" style={{ animationDelay: "300ms" }}>
              Professional Video Editor &nbsp;•&nbsp; 7 Years of Experience
            </p>

            <p className="animate-fade-up mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ animationDelay: "450ms" }}>
              I specialize in gaming content, TikTok edits, Instagram Reels, YouTube Shorts, and long-form videos.
              Using Premiere Pro and After Effects, I create edits designed to maximize engagement, retention, and viewer satisfaction.
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "600ms" }}>
              <a href="#portfolio" className="btn-primary inline-flex items-center gap-2">
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn-glass inline-flex items-center gap-2">Hire Me</a>
            </div>

            <div className="animate-fade-up mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ animationDelay: "750ms" }}>
              {[
                { value: <><Counter to={7} />+</>, label: "Years Experience" },
                { value: <><Counter to={10} />M+</>, label: "Views Generated" },
                { value: "100%", label: "Shorts Specialist" },
                { value: "Pro", label: "Major Creators" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="font-display text-2xl sm:text-3xl text-aurora">{s.value}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "450ms" }}>
            <FloatingTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingTimeline() {
  const clips = [
    { label: "01_intro.mp4", color: "var(--violet)", w: "80%" },
    { label: "02_hook.mp4", color: "var(--cyan)", w: "55%" },
    { label: "03_beat.mp4", color: "var(--blue)", w: "70%" },
    { label: "04_punch.mp4", color: "var(--ember)", w: "40%" },
    { label: "audio_master.wav", color: "var(--cyan)", w: "95%" },
  ];
  return (
    <div className="relative">
      <div className="animate-float-y-up glass-strong rounded-3xl p-5 sm:p-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-50" style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }} />
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Premiere Pro</span>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, oklch(0.2 0.05 280), oklch(0.15 0.04 250))" }}>
            <div className="absolute inset-0 grid place-items-center">
              <div className="animate-pulse-scale glass-strong rounded-full h-16 w-16 grid place-items-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0 0 0 / 0.5))" }} />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-mono text-white/70">
              <span>00:00:12</span>
              <span>04K • 60fps</span>
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {clips.map((c, i) => (
              <div
                key={i}
                className="animate-clip-grow flex items-center gap-2"
                style={{ animationDelay: `${800 + i * 150}ms` }}
              >
                <div className="w-20 sm:w-24 font-mono text-[10px] text-muted-foreground truncate">{c.label}</div>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden relative">
                  <div className="h-full rounded-full" style={{ width: c.w, background: `linear-gradient(90deg, ${c.color}, transparent)`, opacity: 0.8 }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Timeline</span>
            <div className="flex gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1 rounded-full bg-white/20" style={{ height: 4 + Math.abs(Math.sin(i)) * 14 }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="animate-float-y-down absolute -bottom-8 -left-4 sm:-left-8 glass-strong rounded-2xl p-4 hidden sm:block">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Render</div>
        <div className="mt-1 font-display text-2xl text-aurora">98%</div>
      </div>

      <div className="animate-float-y-up absolute -top-6 -right-2 sm:-right-6 glass-strong rounded-2xl px-4 py-3 hidden sm:flex items-center gap-2" style={{ animationDelay: "1s" }}>
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-medium">Project Live</span>
      </div>
    </div>
  );
}
