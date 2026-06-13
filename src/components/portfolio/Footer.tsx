const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative px-4 pt-24 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-[2.5rem] px-6 sm:px-12 py-16 sm:py-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full opacity-50"
            style={{ background: "radial-gradient(circle, var(--brand-glow), transparent 70%)" }}
          />

          <div className="relative text-center max-w-4xl mx-auto">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-light">
              Let's make something
            </div>
            <h2 className="mt-5 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
              Got footage?<br />
              <span className="text-brand italic font-light">Let's edit.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-light max-w-xl mx-auto">
              Available for new projects. Reply within 24 hours.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="https://www.youtube.com/@nanexaep" target="_blank" rel="noopener noreferrer" className="btn-glass">View YouTube</a>
            </div>
          </div>

          <div className="relative mt-20 pt-10 border-t border-white/10 grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand">
                  <span className="font-display text-lg text-white">R</span>
                </span>
                <span className="font-display text-2xl">Rayan</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-light max-w-sm">
                Professional video editor — 7+ years turning raw footage into content people actually watch.
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-light mb-4">Navigation</div>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground font-light hover:text-brand transition">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-light mb-4">Elsewhere</div>
              <ul className="space-y-2">
                <li><a href="https://www.youtube.com/@nanexaep" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground font-light hover:text-brand transition">YouTube</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground font-light hover:text-brand transition">Discord</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground font-light hover:text-brand transition">Email</a></li>
              </ul>
            </div>
          </div>

          <div
            aria-hidden
            className="relative mt-14 font-display text-center leading-none select-none"
            style={{
              fontSize: "clamp(4rem, 18vw, 16rem)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.05em",
            }}
          >
            RAYAN
          </div>

          <div className="relative mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground font-light">© {new Date().getFullYear()} Rayan. All rights reserved.</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-light">Edited with care in Premiere Pro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
