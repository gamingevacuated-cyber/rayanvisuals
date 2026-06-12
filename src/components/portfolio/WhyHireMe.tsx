import { Reveal, SectionTag } from "./primitives";

const reasons = [
  { title: "7 Years of Experience", desc: "Edited through every algorithm shift since 2018." },
  { title: "Affordable Pricing", desc: "Fair rates that scale with project complexity, not ego." },
  { title: "Fast Communication", desc: "Replies in hours, not days. Discord-first." },
  { title: "Professional Workflow", desc: "Clean exports, organized projects, smooth handoffs." },
  { title: "Shorts Specialist", desc: "Hook, payoff, loop — engineered for full watch-through." },
  { title: "Gaming Content Expertise", desc: "Roblox to Valorant — I speak the audience's language." },
  { title: "High Retention Editing", desc: "Cuts paced for the algorithm and the viewer." },
  { title: "Flexible Pricing", desc: "Project-based, package, or per-edit — your call." },
  { title: "Reliable Delivery", desc: "Deadlines respected. Always." },
  { title: "Creative Problem Solving", desc: "Bad footage? Limited B-roll? I find a way." },
];

export function WhyHireMe() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Why hire me</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Editors are easy to find. <em className="italic text-aurora">The right one</em> isn't.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 5) * 0.06}>
              <div className="glass rounded-2xl p-5 h-full group hover:glass-strong transition">
                <div className="grid h-9 w-9 place-items-center rounded-xl mb-4" style={{ background: "var(--gradient-aurora)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-background"><path d="M5 12l5 5L20 7" /></svg>
                </div>
                <h3 className="font-display text-lg leading-tight">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
