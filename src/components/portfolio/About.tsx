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
            <div className="mt-8 glass-strong rounded-3xl p-2 overflow-hidden">
              <div className="aspect-square rounded-2xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.25 0.1 295), oklch(0.2 0.08 220))" }}>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-[14rem] leading-none text-aurora opacity-90">R</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Rayan</div>
                    <div className="text-xs text-muted-foreground">Video Editor • Freelance</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">7+ YRS</div>
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
