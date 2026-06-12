// Edit this file to add or update portfolio projects and testimonials.
import telanthricPfp from "@/assets/telanthric.jpg.asset.json";
import guhhreenPfp from "@/assets/guhhreen.jpg.asset.json";
import aisarPfp from "@/assets/aisar.jpg.asset.json";
import mannyPfp from "@/assets/manny.jpg.asset.json";

export type PortfolioCategory = "Shorts" | "Gaming" | "Long Form" | "TikTok" | "Instagram" | "YouTube";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string;
  videoUrl: string;
  embedUrl?: string;
};

const yt = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}`;

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Telanthric — Featured Long Form",
    category: "Long Form",
    description: "Full-length Roblox commentary edit with paced storytelling, B-roll, and sound design.",
    thumbnail: yt("P8us0eeWmQc"),
    videoUrl: "https://youtu.be/P8us0eeWmQc",
    embedUrl: ytEmbed("P8us0eeWmQc"),
  },
  {
    id: "p2",
    title: "Telanthric — Long Form Edit",
    category: "Long Form",
    description: "Cinematic pacing with meme cuts, layered VFX, and crisp audio mixing.",
    thumbnail: yt("GLiRqZuNOQg"),
    videoUrl: "https://youtu.be/GLiRqZuNOQg",
    embedUrl: ytEmbed("GLiRqZuNOQg"),
  },
  {
    id: "p3",
    title: "YouTube Short — Hook Edit",
    category: "Shorts",
    description: "Retention-engineered short with zoom punches and clean captions.",
    thumbnail: yt("MIKEE186Ywc"),
    videoUrl: "https://www.youtube.com/shorts/MIKEE186Ywc",
    embedUrl: ytEmbed("MIKEE186Ywc"),
  },
  {
    id: "p4",
    title: "YouTube Short — Trend Edit",
    category: "Shorts",
    description: "Hook-first short with quick cuts, motion graphics, and SFX.",
    thumbnail: yt("x8fR685l_Ts"),
    videoUrl: "https://www.youtube.com/shorts/x8fR685l_Ts",
    embedUrl: ytEmbed("x8fR685l_Ts"),
  },
  {
    id: "p5",
    title: "Gaming Commentary",
    category: "Gaming",
    description: "Punchy gaming edit with synced beats and layered overlays.",
    thumbnail: yt("1IQKgQ1ABO4"),
    videoUrl: "https://youtu.be/1IQKgQ1ABO4",
    embedUrl: ytEmbed("1IQKgQ1ABO4"),
  },
  {
    id: "p6",
    title: "Gaming Edit — Long Form",
    category: "Gaming",
    description: "Story-driven gaming video with cinematic color grade and B-roll.",
    thumbnail: yt("A1NDj0Pd2BA"),
    videoUrl: "https://www.youtube.com/watch?v=A1NDj0Pd2BA",
    embedUrl: ytEmbed("A1NDj0Pd2BA"),
  },
  {
    id: "p7",
    title: "YouTube Long Form",
    category: "Long Form",
    description: "Smooth storytelling, audio cleanup, and pace-perfect cutting.",
    thumbnail: yt("dS1MHzSa_9E"),
    videoUrl: "https://www.youtube.com/watch?v=dS1MHzSa_9E",
    embedUrl: ytEmbed("dS1MHzSa_9E"),
  },
  {
    id: "p8",
    title: "Featured Commentary Edit",
    category: "YouTube",
    description: "Long-form YouTube edit with chapter pacing and motion graphics.",
    thumbnail: yt("LyTOTMbkJe8"),
    videoUrl: "https://www.youtube.com/watch?v=LyTOTMbkJe8&t=332s",
    embedUrl: ytEmbed("LyTOTMbkJe8"),
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  photo: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Telanthric",
    role: "YouTube Creator • 2.1M+ subs",
    photo: telanthricPfp.url,
    review: "Clean, simple editing that just works — and he always delivers on time.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Guhhreen",
    role: "YouTube Creator • 21.5K+ subs",
    photo: guhhreenPfp.url,
    review: "Genuine guy, always delivers on time, and the edits look really sharp.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Aisarredux",
    role: "Head Developer at Roblox Ink Games • 2.8K+ subs",
    photo: aisarPfp.url,
    review: "Awesome editing — quality was so good I ended up paying more than we originally agreed on.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Mannyfilms",
    role: "YouTube Creator • 100K+ subs",
    photo: mannyPfp.url,
    review: "Awesome quality — the edits feel smooth and genuinely enjoyable to watch.",
    rating: 5,
  },
];
