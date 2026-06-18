import { useMemo, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { portfolioItems, type PortfolioCategory } from "@/data/portfolio";
import { Reveal, SectionTag } from "./primitives";

const filters: ("All" | PortfolioCategory)[] = ["All", "Shorts", "Gaming", "Long Form", "TikTok", "Instagram", "YouTube"];

export function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [modal, setModal] = useState<string | null>(null);

  const filtered = useMemo(
    () => active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active),
    [active]
  );

  const featured = portfolioItems.slice(0, 6);
  const modalItem = portfolioItems.find((p) => p.id === modal);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * scrollerRef.current.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <>
      {/* Featured horizontal scroller */}
      <section id="featured" className="relative px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <SectionTag>Featured Projects</SectionTag>
                <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  Recent <span className="text-aurora">edits</span>.
                </h2>
              </div>
              <div className="flex gap-2">
                <button onClick={() => scrollBy(-1)} aria-label="Scroll left" className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button onClick={() => scrollBy(1)} aria-label="Scroll right" className="glass rounded-full h-10 w-10 grid place-items-center hover:bg-white/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-4 sm:px-[max(1rem,calc((100vw-80rem)/2))] pb-6"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`#featured div::-webkit-scrollbar{display:none}`}</style>
          {featured.map((p) => (
            <CinematicCard key={p.id} item={p} onOpen={() => setModal(p.id)} />
          ))}
        </div>
      </section>

      {/* Filterable grid */}
      <section id="portfolio" className="relative px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-center text-center gap-4">
              <SectionTag>Full Archive</SectionTag>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Past <span className="italic text-aurora">work</span>
              </h2>
              <p className="max-w-xl text-muted-foreground">Filter by category to dig in.</p>
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
                      ? "text-white font-semibold"
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <CinematicCard item={p} onOpen={() => setModal(p.id)} compact />
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
                      <h3 className="mt-1 font-display font-bold text-2xl">{modalItem.title}</h3>
                      <p className="mt-2 text-muted-foreground">{modalItem.description}</p>
                    </div>
                    <button onClick={() => setModal(null)} aria-label="Close" className="glass rounded-full h-9 w-9 grid place-items-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                    </button>
                  </div>
                  <a href={modalItem.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 inline-flex text-sm">View on YouTube ↗</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

function CinematicCard({
  item,
  onOpen,
  compact = false,
}: {
  item: (typeof portfolioItems)[number];
  onOpen: () => void;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 10;
    el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      className={`snap-start group relative cursor-pointer rounded-3xl overflow-hidden glass-strong shrink-0 transition-[transform,box-shadow] duration-300 ${
        compact ? "w-full" : "w-[78vw] sm:w-[58vw] lg:w-[42vw] xl:w-[36vw]"
      }`}
      style={{
        boxShadow:
          "0 20px 60px -10px rgba(0,0,0,0.7), 0 0 80px rgba(0, 217, 255, 0.10)",
      }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (item.thumbnailFallback && img.src !== item.thumbnailFallback) {
              img.src = item.thumbnailFallback;
            }
          }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Color spill */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(168,85,247,0.45), rgba(0,217,255,0.20) 40%, transparent 70%)",
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85))" }}
        />
        <div className="absolute top-3 left-3">
          <span className="glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest">
            {item.category}
          </span>
        </div>
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div
            className="rounded-full h-14 w-14 grid place-items-center"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: "0 0 30px rgba(109,93,254,0.7)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-xl tracking-tight">{item.title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">View project</span>
          <span className="text-brand text-sm">→</span>
        </div>
      </div>
    </div>
  );
}
