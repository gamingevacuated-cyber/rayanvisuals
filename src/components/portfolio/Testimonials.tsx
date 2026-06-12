import { testimonials } from "@/data/portfolio";
import { Reveal, SectionTag } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Testimonials</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">What clients <em className="italic text-aurora">are saying</em>.</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div className="glass-strong rounded-3xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={idx < t.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={idx < t.rating ? "text-aurora" : "text-muted-foreground"} style={idx < t.rating ? { color: "oklch(0.82 0.16 200)" } : undefined}>
                      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-base leading-relaxed flex-1">"{t.review}"</p>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
