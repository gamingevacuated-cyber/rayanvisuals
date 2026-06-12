import { Reveal, SectionTag } from "./primitives";

const expertise = [
  "Gaming Videos",
  "YouTube Shorts",
  "TikTok Content",
  "Instagram Reels",
  "Long-Form YouTube Videos",
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionTag>About</SectionTag>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl">
              Who <em className="italic text-aurora">am I?</em>
            </h2>
            <div className="mt-8 glass-strong rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-40" style={{ background: "var(--gradient-aurora)" }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Status</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Available</span>
                  </div>
                </div>
                <div className="mt-6 font-display text-4xl">Rayan</div>
                <div className="mt-1 text-sm text-muted-foreground">Video Editor • Freelance</div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="glass rounded-2xl p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Experience</div>
                    <div className="mt-1 font-display text-2xl text-aurora">7+ YRS</div>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Specialty</div>
                    <div className="mt-1 font-display text-lg">Short-form</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              My name is <span className="text-foreground font-medium">Rayan</span>, and I've been editing videos professionally for over <span className="text-aurora font-semibold">7 years</span>.
            </p>
            <p className="text-muted-foreground">
              Premiere Pro is my preferred editing software, while After Effects is used whenever advanced effects, motion graphics, or smoother visual results are needed.
            </p>

            <div className="glass rounded-3xl p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">My expertise</div>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {expertise.map((e) => (
                  <li key={e} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gradient-aurora)" }} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-foreground">
              Short-form content is my specialty, but I am equally comfortable editing long-form content.
              I've contributed to projects that have generated <span className="text-foreground">millions of views</span>, including work for YouTuber <span className="text-aurora font-medium">Telanthric</span>.
            </p>

            <div className="glass-strong rounded-3xl p-6 border-l-2" style={{ borderImage: "var(--gradient-aurora) 1" }}>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">My goal</div>
              <p className="mt-2 font-display text-2xl sm:text-3xl">
                Create engaging videos that help creators grow — while keeping pricing <em className="italic text-aurora">fair and accessible</em>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
