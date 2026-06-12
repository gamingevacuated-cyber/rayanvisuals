import { Reveal, SectionTag } from "./primitives";

const skills = [
  "Animated Text", "Motion Graphics", "Masking", "Meme Editing", "Sound Design",
  "Sound Effects", "Cinematic Editing", "Color Grading", "3D Elements", "Fast-Paced Editing",
  "Subtitles", "Visual Effects", "Retention Editing", "Storytelling", "YouTube Editing",
  "TikTok Editing", "Instagram Reels", "Gaming Content", "Content Repurposing", "Much More",
];

export function Skills() {
  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4">
            <SectionTag>Skills</SectionTag>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              A full toolkit for <em className="italic text-aurora">scroll-stopping</em> content.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {skills.map((s, i) => (
            <Reveal key={s} delay={(i % 8) * 0.04}>
              <div className="group glass rounded-2xl px-5 py-3 transition hover:scale-105 hover:glass-strong cursor-default relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg, oklch(0.72 0.22 295 / 0.15), oklch(0.82 0.16 200 / 0.1))" }}
                />
                <span className="relative font-medium text-sm sm:text-base">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 overflow-hidden glass rounded-3xl py-6">
          <div className="flex gap-12 animate-scroll-x whitespace-nowrap">
            {[...skills, ...skills].map((s, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/60">{s} ✦</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
