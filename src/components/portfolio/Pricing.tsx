import { Reveal, SectionTag } from "./primitives";

const tiers = [
  {
    name: "Short Form",
    price: "$30",
    tagline: "TikTok, Reels, Shorts",
    features: [
      "Up to 60 seconds",
      "Beat-synced cuts & SFX",
      "Captions & basic motion graphics",
      "2 revisions included",
      "Delivery in 2–4 days",
    ],
    cta: "Start a short",
  },
  {
    name: "Creator Plus",
    price: "$120",
    tagline: "Most popular for YouTubers",
    popular: true,
    features: [
      "Up to 10 minutes long form",
      "Story-driven pacing & B-roll",
      "Advanced motion graphics",
      "Cinematic color grade",
      "4 revisions included",
      "Priority delivery (3–5 days)",
    ],
    cta: "Book Creator Plus",
  },
  {
    name: "Signature",
    price: "Custom",
    tagline: "Long form & branded series",
    features: [
      "10+ minute long form",
      "Full VFX & 3D elements",
      "Sound design pass",
      "Unlimited revisions",
      "Dedicated turnaround",
    ],
    cta: "Request a quote",
  },
];

const notes = [
  "Motion graphics, color grading, or subtitles may increase pricing",
  "Final price confirmed after reviewing project requirements",
  "Partial up-front payment required to start",
  "Pricing is negotiable depending on project scope",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Pricing</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Honest, <em className="italic text-brand">flexible</em> pricing.</h2>
            <p className="max-w-2xl text-muted-foreground font-light">
              Pricing scales with complexity, not just duration. Pick the tier that fits — or request a custom quote.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-3xl p-7 sm:p-8 flex flex-col ${
                  t.popular ? "glass-strong" : "glass"
                }`}
                style={t.popular ? { border: "1.5px solid var(--brand)", boxShadow: "0 20px 60px -20px var(--brand-glow)" } : undefined}
              >
                {t.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white"
                    style={{ background: "var(--brand)" }}
                  >
                    Most Popular
                  </span>
                )}
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground font-light">{t.tagline}</div>
                <h3 className="mt-2 font-display text-2xl">{t.name}</h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className={`font-display text-5xl sm:text-6xl ${t.popular ? "text-brand" : ""}`}>{t.price}</span>
                  {t.price.startsWith("$") && <span className="font-mono text-xs text-muted-foreground">USD</span>}
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-light">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.popular ? "var(--brand)" : "currentColor"} strokeWidth="2.5">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 inline-flex justify-center items-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    t.popular ? "btn-primary" : "btn-glass"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 glass rounded-2xl p-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-light mb-3">Important notes</div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {notes.map((n) => (
                <li key={n} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light">
                  <span className="mt-2 h-1 w-1 rounded-full bg-white/40 shrink-0" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
