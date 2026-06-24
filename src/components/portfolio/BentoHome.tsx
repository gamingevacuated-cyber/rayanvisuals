import { motion } from "motion/react";
import { useState } from "react";
import { portfolioItems } from "@/data/portfolio";

/* ---------- shared tile primitives ---------- */

function Tile({
  children,
  className = "",
  delay = 0,
  hover = true,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  const Comp: any = href ? "a" : onClick ? "button" : "div";
  const props: any = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
    : onClick
      ? { onClick, type: "button" }
      : {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -3 } : undefined}
      className={`group relative ${className}`}
    >
      <Comp
        {...props}
        className="block h-full w-full text-left rounded-3xl glass overflow-hidden relative transition-[border-color,background] duration-300 hover:border-white/15"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(109,93,254,0.18), transparent 40%)",
          }}
        />
        {children}
      </Comp>
    </motion.div>
  );
}

/* ---------- individual tiles ---------- */

function HeroTile() {
  return (
    <Tile className="md:col-span-4 md:row-span-2 min-h-[420px] md:min-h-[520px]" hover={false}>
      <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Booking — Jan 2026
        </div>

        <div>
          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight">
            Rayan.
            <br />
            <span className="text-aurora">Cuts that hit.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            I edit videos that hold attention. Seven years quietly turning raw
            footage into stuff people actually watch — for gaming creators,
            short-form, and long-form storytellers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reel" className="btn-primary">Watch the reel</a>
            <a href="#contact" className="btn-glass">Start a project</a>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-32 -bottom-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
             style={{ background: "var(--gradient-aurora)" }} />
      </div>
    </Tile>
  );
}

function StatTile({ value, label, sub, delay }: { value: string; label: string; sub?: string; delay: number }) {
  return (
    <Tile className="md:col-span-2 min-h-[160px]" delay={delay}>
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="font-display text-4xl md:text-5xl tracking-tight">{value}</div>
        <div>
          <div className="text-sm font-medium">{label}</div>
          {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
        </div>
      </div>
    </Tile>
  );
}

function NowPlayingTile() {
  const [hover, setHover] = useState(false);
  return (
    <Tile className="md:col-span-2 md:row-span-2 min-h-[340px]" delay={0.05}>
      <div
        className="relative h-full p-6 flex flex-col justify-between"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Now editing</span>
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        </div>

        {/* waveform */}
        <div className="flex items-end justify-center gap-1 h-32 my-6">
          {Array.from({ length: 32 }).map((_, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-[var(--brand)] to-[var(--accent)]"
              style={{
                height: `${20 + Math.abs(Math.sin(i * 0.7 + (hover ? Date.now() / 200 : 0))) * 80}%`,
                animation: `wave-bar ${0.6 + (i % 5) * 0.12}s ease-in-out ${i * 0.04}s infinite`,
              }}
            />
          ))}
        </div>

        <div>
          <div className="font-display text-2xl leading-tight">Cinematic short — sport edit</div>
          <div className="text-sm text-muted-foreground mt-1">Premiere Pro · 24 fps · 4K</div>
          <div className="mt-4 h-1 w-full rounded-full bg-white/5 overflow-hidden">
            <div className="h-full w-[68%] rounded-full" style={{ background: "var(--gradient-aurora)" }} />
          </div>
          <div className="mt-2 flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <span>00:01:42</span>
            <span>68%</span>
            <span>00:02:30</span>
          </div>
        </div>
      </div>
    </Tile>
  );
}

function ToolkitTile() {
  const tools = [
    { name: "Premiere Pro", short: "Pr", color: "#9999FF" },
    { name: "After Effects", short: "Ae", color: "#D291FF" },
    { name: "Photoshop", short: "Ps", color: "#31A8FF" },
    { name: "DaVinci", short: "Dv", color: "#FF6B6B" },
  ];
  return (
    <Tile className="md:col-span-2 min-h-[200px]" delay={0.1}>
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Daily drivers</div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {tools.map((t) => (
            <div key={t.name} className="aspect-square rounded-xl grid place-items-center font-display text-lg transition-transform hover:scale-110"
                 style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}35` }}>
              {t.short}
            </div>
          ))}
        </div>
        <div className="text-xs text-muted-foreground mt-3">Edit · motion · color · sound — handled in-house.</div>
      </div>
    </Tile>
  );
}

function ReelTile({ item, delay, size = "sm" }: { item: typeof portfolioItems[number]; delay: number; size?: "sm" | "lg" }) {
  return (
    <Tile
      href={item.videoUrl}
      delay={delay}
      className={size === "lg" ? "md:col-span-3 min-h-[280px]" : "md:col-span-2 min-h-[220px]"}
    >
      <div className="relative h-full">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          onError={(e) => {
            if (item.thumbnailFallback) (e.currentTarget as HTMLImageElement).src = item.thumbnailFallback;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full glass">
            {item.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center glass opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="font-display text-lg leading-tight">{item.title}</div>
          <div className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.description}</div>
        </div>
      </div>
    </Tile>
  );
}

function ServiceTile() {
  const services = [
    { name: "Short-form", desc: "Reels · Shorts · TikTok" },
    { name: "Long-form", desc: "YouTube · commentary · gaming" },
    { name: "Motion", desc: "Titles · transitions · VFX" },
    { name: "Color & sound", desc: "Grade · mix · master" },
  ];
  return (
    <Tile className="md:col-span-3 min-h-[260px]" delay={0.05}>
      <div className="p-6 md:p-8 h-full">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">What I do</div>
        <ul className="mt-5 divide-y divide-white/5">
          {services.map((s) => (
            <li key={s.name} className="flex items-center justify-between py-3 group/row">
              <div>
                <div className="font-display text-xl">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.desc}</div>
              </div>
              <span className="h-8 w-8 rounded-full grid place-items-center border border-white/10 transition-all group-hover/row:bg-[var(--brand)] group-hover/row:border-transparent">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Tile>
  );
}

function ContactTile() {
  return (
    <Tile className="md:col-span-3 min-h-[260px]" delay={0.1} href="#contact">
      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Let's make something</div>
        <div>
          <div className="font-display text-3xl md:text-5xl leading-[1] tracking-tight">
            Got a project?
            <br />
            <span className="text-aurora">Slide into the inbox.</span>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <span className="btn-primary">Start a conversation</span>
            <span className="text-xs text-muted-foreground">replies within 24h</span>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-40 blur-3xl"
             style={{ background: "var(--gradient-ember)" }} />
      </div>
    </Tile>
  );
}

function SocialTile({ label, handle, href, delay }: { label: string; handle: string; href: string; delay: number }) {
  return (
    <Tile className="md:col-span-2 min-h-[140px]" delay={delay} href={href}>
      <div className="p-5 h-full flex flex-col justify-between">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="flex items-end justify-between">
          <div className="font-display text-xl truncate">{handle}</div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </div>
      </div>
    </Tile>
  );
}

/* ---------- page ---------- */

export function BentoHome() {
  const reels = portfolioItems.slice(0, 6);
  return (
    <main
      id="home"
      className="relative z-10 px-4 md:px-8 pt-28 pb-20 max-w-[1400px] mx-auto"
      onMouseMove={(e) => {
        const target = e.target as HTMLElement;
        const tile = target.closest(".group") as HTMLElement | null;
        if (!tile) return;
        const r = tile.getBoundingClientRect();
        tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
        tile.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <section className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(0,auto)] gap-4">
        <HeroTile />
        <StatTile value="7+" label="Years editing" sub="since 2018" delay={0.05} />
        <StatTile value="10M+" label="Views generated" sub="across clients" delay={0.1} />
        <NowPlayingTile />
        <ToolkitTile />
        <StatTile value="300+" label="Videos shipped" sub="and counting" delay={0.15} />
      </section>

      <section id="reel" className="mt-16">
        <div className="flex items-end justify-between mb-6 px-1">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">The reel</div>
            <h2 className="font-display text-3xl md:text-5xl mt-2 tracking-tight">Recent cuts.</h2>
          </div>
          <a href="https://www.youtube.com/@nanexaep" target="_blank" rel="noreferrer" className="hidden md:inline-flex btn-glass text-sm">
            All work on YouTube →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <ReelTile item={reels[0]} delay={0} size="lg" />
          <ReelTile item={reels[1]} delay={0.05} size="sm" />
          <ServiceTile />
          <ReelTile item={reels[2]} delay={0.05} size="sm" />
          <ReelTile item={reels[3]} delay={0.1} size="sm" />
          <ReelTile item={reels[4]} delay={0.15} size="sm" />
          <ReelTile item={reels[5]} delay={0.1} size="lg" />
        </div>
      </section>

      <section id="contact" className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <ContactTile />
          <SocialTile label="YouTube" handle="@nanexaep" href="https://www.youtube.com/@nanexaep" delay={0.05} />
          <SocialTile label="Email" handle="hello@rayan.dev" href="mailto:hello@rayan.dev" delay={0.1} />
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Rayan — Quietly cutting since 2018.</div>
        <div className="font-mono uppercase tracking-widest">Made with Premiere · After Effects · obsession</div>
      </footer>
    </main>
  );
}
