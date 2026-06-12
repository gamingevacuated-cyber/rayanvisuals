import { Reveal, SectionTag } from "./primitives";

const timeline = [
  { year: "2018", title: "Started Editing", description: "Began the journey into video editing as a self-taught craft." },
  { year: "2020", title: "Professional Freelance Editor", description: "Transitioned to full-time freelance work for creators worldwide." },
  { year: "2022", title: "Millions of Views Generated", description: "Edits accumulated millions of views across YouTube, TikTok, and Instagram." },
  { year: "2024", title: "Worked With Telanthric", description: "Collaborated on high-performing content for established YouTube creators." },
  { year: "Today", title: "7+ Years Experience", description: "Specialized in retention-engineered short-form and cinematic long-form edits." },
];

export function Achievements() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Achievements</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">A <em className="italic text-aurora">cinematic</em> timeline.</h2>
          </div>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, var(--violet), var(--cyan), transparent)" }} />

          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`relative grid md:grid-cols-2 items-center gap-6 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-strong rounded-3xl p-6 inline-block w-full md:w-auto">
                      <div className="font-mono text-xs uppercase tracking-widest text-aurora">{t.year}</div>
                      <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full" style={{ background: "var(--gradient-aurora)" }} />
                      <div className="absolute inset-0 h-4 w-4 rounded-full animate-pulse-glow" style={{ background: "var(--gradient-aurora)", filter: "blur(8px)" }} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
