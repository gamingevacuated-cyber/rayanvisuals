import { useState } from "react";
import { Reveal, SectionTag } from "./primitives";

const DISCORD = "@979589726250074152";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Contact</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl max-w-3xl">
              Let's create <em className="italic text-aurora">something great</em>.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              If you're looking for an editor who understands engagement, pacing, storytelling, and retention, I'd love to work with you. I aim to ensure every client leaves satisfied with the final product.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-5">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
              }}
              className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Project type" placeholder="Shorts, Gaming, Long-form…" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Tell me about your project</label>
                <textarea
                  required
                  rows={5}
                  placeholder="What are you working on?"
                  className="mt-2 w-full rounded-2xl glass border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? "✓ Message sent" : "Send message"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 h-full flex flex-col">
              <div className="glass-strong rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-50" style={{ background: "radial-gradient(circle, #5865F2, transparent 70%)" }} />
                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Discord — fastest reply</div>
                  <div className="mt-2 font-display text-xl break-all">{DISCORD}</div>
                  <button
                    onClick={() => navigator.clipboard?.writeText(DISCORD)}
                    className="btn-glass mt-4 text-sm inline-flex items-center gap-2"
                  >
                    Copy Discord ID
                  </button>
                </div>
              </div>

              <div className="glass-strong rounded-3xl p-6 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Direct hire</div>
                <p className="mt-2 text-sm text-muted-foreground">Ready to start? Skip the chat and lock in a project slot.</p>
                <a href={`https://discord.com/users/979589726250074152`} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 inline-flex text-sm">Hire Me Now</a>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Find me online</div>
                <div className="flex gap-2">
                  {[
                    { label: "YT", href: "#" },
                    { label: "TT", href: "#" },
                    { label: "IG", href: "#" },
                    { label: "X", href: "#" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} className="grid h-11 w-11 place-items-center rounded-full glass hover:glass-strong transition font-mono text-xs">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...props}
        className="mt-2 w-full rounded-2xl glass border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}
