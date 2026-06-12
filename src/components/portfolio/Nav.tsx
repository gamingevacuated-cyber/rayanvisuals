import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={false}
        animate={{ width: scrolled ? "min(900px, 95%)" : "min(1100px, 100%)" }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="glass-nav flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6"
      >
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: "var(--gradient-aurora)" }}>
            <span className="font-display text-lg text-background">R</span>
          </span>
          <span className="font-display text-lg hidden sm:inline">Rayan</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden sm:inline-flex text-sm !py-2 !px-4">Hire Me</a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="lg:hidden grid h-9 w-9 place-items-center rounded-full glass"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li><a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 block text-center">Hire Me</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
