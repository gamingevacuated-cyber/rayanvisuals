import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { portfolioItems, type PortfolioCategory } from "@/data/portfolio";
import { Reveal, SectionTag } from "./primitives";

const filters: ("All" | PortfolioCategory)[] = ["All", "Shorts", "Gaming", "Long Form", "TikTok", "Instagram", "YouTube"];

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [modal, setModal] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = useMemo(
    () => active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active),
    [active]
  );

  const modalItem = portfolioItems.find((p) => p.id === modal);

  return (
    <section id="portfolio" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Portfolio</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">Past <em className="italic text-aurora">work</em></h2>
            <p className="max-w-xl text-muted-foreground">A selection of recent edits across formats. Filter by category to dig in.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === f
                    ? "text-background font-semibold"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
                style={active === f ? { background: "var(--gradient-aurora)" } : undefined}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-strong rounded-3xl overflow-hidden group cursor-pointer"
                onClick={() => setModal(p.id)}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered((h) => (h === p.id ? null : h))}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (p.thumbnailFallback && img.src !== p.thumbnailFallback) {
                        img.src = p.thumbnailFallback;
                      }
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {hovered === p.id && p.embedUrl && (
                    <iframe
                      src={`${p.embedUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${p.embedUrl.split("/").pop()}&modestbranding=1&playsinline=1`}
                      title={p.title}
                      className="absolute inset-0 h-full w-full pointer-events-none"
                      allow="autoplay; encrypted-media; picture-in-picture"
                    />
                  )}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0 0 0 / 0.8))" }} />
                  <div className="absolute top-3 left-3">
                    <span className="glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-light">{p.category}</span>
                  </div>
                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="glass-strong rounded-full h-14 w-14 grid place-items-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 font-light">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-light">View project</span>
                    <span className="text-brand text-sm">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/80 backdrop-blur-md p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-4xl w-full overflow-hidden"
            >
              <div className="aspect-video bg-black relative">
                {modalItem.embedUrl ? (
                  <iframe src={modalItem.embedUrl} title={modalItem.title} className="h-full w-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : (
                  <img src={modalItem.thumbnail} alt={modalItem.title} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{modalItem.category}</span>
                    <h3 className="mt-1 font-display text-2xl">{modalItem.title}</h3>
                    <p className="mt-2 text-muted-foreground">{modalItem.description}</p>
                  </div>
                  <button onClick={() => setModal(null)} aria-label="Close" className="glass rounded-full h-9 w-9 grid place-items-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                  </button>
                </div>
                <a href={modalItem.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 inline-flex text-sm">View Project ↗</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
