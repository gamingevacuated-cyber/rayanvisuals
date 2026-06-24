import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { BackToTop, ScrollProgress } from "@/components/portfolio/Effects";
import { CustomCursor } from "@/components/portfolio/Cursor";
import { NoiseFilter } from "@/components/portfolio/SvgOrnaments";
import { BackgroundFX } from "@/components/portfolio/BackgroundFX";
import { BentoHome } from "@/components/portfolio/BentoHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayan — Video Editor | Cuts that hit" },
      { name: "description", content: "Rayan is a video editor with 7+ years of experience cutting short-form, long-form and gaming content for creators. 10M+ views generated." },
      { property: "og:title", content: "Rayan — Video Editor" },
      { property: "og:description", content: "Cuts that hit. Premiere Pro & After Effects. 10M+ views generated for creators worldwide." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <CustomCursor />
      <NoiseFilter />
      <BackgroundFX />
      <Nav />
      <BentoHome />
      <BackToTop />
    </div>
  );
}
