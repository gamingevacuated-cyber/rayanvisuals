import { Counter, Reveal, SectionTag } from "./primitives";

const stats = [
  { value: <><Counter to={7} />+</>, label: "Years Editing Experience", caption: "Since 2018" },
  { value: <><Counter to={10} />M+</>, label: "Views Generated", caption: "Across platforms" },
  { value: "Shorts", label: "Format Specialist", caption: "Reels • TikTok • YT Shorts" },
  { value: "Telanthric", label: "Featured Client", caption: "Long-term collaboration" },
];

export function Results() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Results</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Numbers that <em className="italic text-aurora">speak louder</em> than a portfolio.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass-strong rounded-3xl p-6 sm:p-8 h-full relative overflow-hidden group">
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.22 295 / 0.3), transparent 60%)" }}
                />
                <div className="relative">
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-aurora">{s.value}</div>
                  <div className="mt-4 font-medium">{s.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.caption}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
