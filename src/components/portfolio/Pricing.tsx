import { Reveal, SectionTag } from "./primitives";

const notes = [
  "Additional charges apply for revisions beyond included revisions",
  "Motion graphics may increase pricing",
  "Color grading may increase pricing",
  "Subtitles may increase pricing",
  "Special requests may increase pricing",
  "Final price is confirmed after reviewing project requirements",
  "Pricing is negotiable depending on project scope",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Pricing</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Honest, <em className="italic text-aurora">flexible</em> pricing.</h2>
            <p className="max-w-2xl text-muted-foreground">
              Pricing depends on the complexity of the edit, not just the duration. Some short videos may cost more than longer videos if they require advanced effects, motion graphics, or intensive editing.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 glass-strong rounded-[2rem] p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-50" style={{ background: "radial-gradient(circle, var(--violet), transparent 70%)" }} />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-40" style={{ background: "radial-gradient(circle, var(--cyan), transparent 70%)" }} />

            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Base pricing • starting at</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-7xl sm:text-8xl text-aurora">$30</span>
                  <span className="font-mono text-sm text-muted-foreground">USD</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Partial up-front payment
                </div>
              </div>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-base">
                Request A Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className="relative mt-10 pt-8 border-t border-white/10">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Important notes</div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {notes.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 rounded-full bg-white/40 shrink-0" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
