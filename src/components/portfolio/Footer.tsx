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
    <footer className="relative px-4 pt-16 pb-10">
      <div className="mx-auto max-w-7xl glass-strong rounded-[2rem] p-8 sm:p-12">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--gradient-aurora)" }}>
                <span className="font-display text-lg text-background">R</span>
              </span>
              <span className="font-display text-2xl">Rayan</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Professional video editor — 7+ years turning raw footage into content people actually watch.
            </p>
            <a href="#contact" className="btn-primary mt-6 inline-flex text-sm">Start a project</a>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Navigation</div>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Social</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">YouTube</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">TikTok</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Instagram</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Discord</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Rayan. All rights reserved.</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Edited with ❤ in Premiere Pro</span>
        </div>
      </div>
    </footer>
  );
}
