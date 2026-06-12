import { motion } from "motion/react";
import { Counter, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Reveal delay={0.05}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95]">
                Turning <em className="italic text-aurora">raw footage</em> into content people actually <span className="text-ember">watch</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Professional Video Editor &nbsp;•&nbsp; 7 Years of Experience
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                I specialize in gaming content, TikTok edits, Instagram Reels, YouTube Shorts, and long-form videos.
                Using Premiere Pro and After Effects, I create edits designed to maximize engagement, retention, and viewer satisfaction.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#portfolio" className="btn-primary inline-flex items-center gap-2">
                  View Portfolio
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#contact" className="btn-glass inline-flex items-center gap-2">Hire Me</a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
            </Reveal>
          </div>

          <Reveal delay={0.3} y={40}>
            <FloatingTimeline />
          </Reveal>
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
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong rounded-3xl p-5 sm:p-6 relative overflow-hidden"
      >
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
              <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="glass-strong rounded-full h-16 w-16 grid place-items-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </motion.div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, oklch(0 0 0 / 0.5))" }} />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-mono text-white/70">
              <span>00:00:12</span>
              <span>04K • 60fps</span>
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            {clips.map((c, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="flex items-center gap-2"
              >
                <div className="w-20 sm:w-24 font-mono text-[10px] text-muted-foreground truncate">{c.label}</div>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden relative">
                  <div className="h-full rounded-full" style={{ width: c.w, background: `linear-gradient(90deg, ${c.color}, transparent)`, opacity: 0.8 }} />
                </div>
              </motion.div>
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
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -left-4 sm:-left-8 glass-strong rounded-2xl p-4 hidden sm:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Render</div>
        <div className="mt-1 font-display text-2xl text-aurora">98%</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-6 -right-2 sm:-right-6 glass-strong rounded-2xl px-4 py-3 hidden sm:flex items-center gap-2"
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-medium">Project Live</span>
      </motion.div>
    </div>
  );
}
