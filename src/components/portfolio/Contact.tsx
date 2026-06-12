import { useState } from "react";
import { Reveal, SectionTag } from "./primitives";
import { DiscordCard } from "./DiscordCard";

const YOUTUBE_URL = "https://www.youtube.com/@nanexaep";

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
              <DiscordCard />

              <div className="glass rounded-3xl p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Find me online</div>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass inline-flex items-center gap-3 text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                  </svg>
                  YouTube — @nanexaep
                </a>
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
