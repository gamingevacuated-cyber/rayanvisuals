import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionTag } from "./primitives";

const faqs = [
  { q: "What software do you use?", a: "Premiere Pro and After Effects." },
  { q: "Do you edit long-form content?", a: "Yes." },
  { q: "Can pricing be negotiated?", a: "Yes, depending on project scope." },
  { q: "How long does delivery take?", a: "Depends on project complexity." },
  { q: "Do you offer revisions?", a: "Yes, revisions are included, with extra revisions charged separately." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>FAQ</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Quick <em className="italic text-aurora">answers</em>.</h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-display text-lg sm:text-xl">{f.q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full glass shrink-0 transition-transform" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
