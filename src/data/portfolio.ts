// Edit this file to add or update portfolio projects and testimonials.

export type PortfolioCategory = "Shorts" | "Gaming" | "Long Form" | "TikTok" | "Instagram" | "YouTube";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string; // image url
  videoUrl: string;  // YouTube / Vimeo / TikTok / Instagram / Drive link
  embedUrl?: string; // optional override for iframe src
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Telanthric — Viral Gaming Montage",
    category: "Gaming",
    description: "High-retention Roblox montage with meme cuts, zoom punches, and sound design.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "2",
    title: "TikTok Trend Edit Pack",
    category: "TikTok",
    description: "Fast-paced trend-optimized edits with captions and motion graphics.",
    thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&q=80",
    videoUrl: "#",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "YouTube Long-Form Commentary",
    category: "Long Form",
    description: "Smooth storytelling, audio cleanup, B-roll layering, and color grade.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80",
    videoUrl: "#",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Instagram Reel — Brand Drop",
    category: "Instagram",
    description: "Cinematic product reel with 3D elements and color grading.",
    thumbnail: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80",
    videoUrl: "#",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "YouTube Shorts — Retention Pack",
    category: "Shorts",
    description: "Hook-first edits engineered for full watch-through.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    videoUrl: "#",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Valorant Highlights",
    category: "Gaming",
    description: "Synced highlight reel with VFX overlays and crisp sound design.",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
    videoUrl: "#",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    id: "1",
    name: "Telanthric",
    role: "YouTube Creator",
    photo: "https://i.pravatar.cc/120?img=12",
    review: "Rayan's edits hit different. Retention went up the second we started working together — every cut feels intentional.",
    rating: 5,
  },
  {
    id: "2",
    name: "Alex M.",
    role: "TikTok Creator",
    photo: "https://i.pravatar.cc/120?img=33",
    review: "Fastest turnarounds I've had from any editor. Communication is clean and the edits are sharp.",
    rating: 5,
  },
  {
    id: "3",
    name: "Jordan R.",
    role: "Gaming Streamer",
    photo: "https://i.pravatar.cc/120?img=15",
    review: "Funny, punchy, perfectly paced. He understands gaming content better than 90% of editors I've worked with.",
    rating: 5,
  },
];
