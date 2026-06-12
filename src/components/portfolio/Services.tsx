import { Reveal, SectionTag } from "./primitives";

const services = [
  {
    title: "Shorts & Reels Editing",
    tag: "Most popular",
    icon: "📱",
    bestFor: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    features: ["Captions", "Motion Graphics", "Sound Effects", "Retention Editing", "Fast-Paced Editing", "Trend Optimization"],
    color: "var(--violet)",
  },
  {
    title: "Gaming Video Editing",
    tag: "Specialty",
    icon: "🎮",
    bestFor: ["Roblox", "Minecraft", "Valorant", "Fortnite", "Gaming Creators"],
    features: ["Funny Edits", "Zoom Effects", "Memes", "Sound Design", "Highlight Editing", "Retention Optimization"],
    color: "var(--ember)",
  },
  {
    title: "Long-Form Editing",
    tag: "High-impact",
    icon: "🎬",
    bestFor: ["YouTube Videos", "Podcasts", "Commentary Videos", "Documentary Style"],
    features: ["Smooth Storytelling", "Motion Graphics", "Audio Cleanup", "Color Grading", "Retention Techniques"],
    color: "var(--cyan)",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Services</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Built for the way <em className="italic text-aurora">you create</em>.
            </h2>
            <p className="max-w-xl text-muted-foreground">Pick the format. I'll handle the edit, the polish, and the retention strategy that makes it land.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="glass-strong rounded-3xl p-7 h-full flex flex-col relative overflow-hidden group">
                <div
                  className="absolute -top-24 -right-24 h-60 w-60 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle, ${s.color}, transparent 70%)` }}
                />
                <div className="relative flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{s.icon}</div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground glass rounded-full px-2 py-1">{s.tag}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl">{s.title}</h3>

                  <div className="mt-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Best for</div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.bestFor.map((b) => (
                        <span key={b} className="text-xs glass rounded-full px-2.5 py-1">{b}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Features</div>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm">
                          <span className="grid place-items-center h-4 w-4 rounded-full" style={{ background: s.color, opacity: 0.9 }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12l5 5L20 7" /></svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="#contact" className="btn-glass mt-7 text-center text-sm">Discuss this →</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
