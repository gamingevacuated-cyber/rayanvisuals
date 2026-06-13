import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Results } from "@/components/portfolio/Results";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Achievements } from "@/components/portfolio/Achievements";
import { WhyHireMe } from "@/components/portfolio/WhyHireMe";
import { Pricing } from "@/components/portfolio/Pricing";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { FAQ } from "@/components/portfolio/FAQ";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop, FloatingParticles, LoadingScreen, MouseGlow, ScrollProgress } from "@/components/portfolio/Effects";
import { CustomCursor } from "@/components/portfolio/Cursor";
import { NoiseFilter, GridLines, WavePath, OrbitRings } from "@/components/portfolio/SvgOrnaments";

const faqs = [
  { q: "What software do you use?", a: "Premiere Pro and After Effects." },
  { q: "Do you edit long-form content?", a: "Yes." },
  { q: "Can pricing be negotiated?", a: "Yes, depending on project scope." },
  { q: "How long does delivery take?", a: "Depends on project complexity." },
  { q: "Do you offer revisions?", a: "Yes, revisions are included, with extra revisions charged separately." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayan — Professional Video Editor | 7 Years Experience" },
      { name: "description", content: "Premium video editing for gaming creators, shorts, reels, and long-form. Premiere Pro & After Effects. Millions of views generated." },
      { property: "og:title", content: "Rayan — Professional Video Editor" },
      { property: "og:description", content: "Turning raw footage into content people actually watch. 7+ years experience." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rayan",
          alternateName: "Nanex",
          jobTitle: "Professional Video Editor",
          url: "https://nanex-portfolio.lovable.app",
          sameAs: ["https://www.youtube.com/@nanexaep"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <CustomCursor />
      <FloatingParticles />
      <NoiseFilter />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] opacity-40">
        <GridLines />
      </div>
      <OrbitRings className="pointer-events-none fixed -right-40 top-1/4 z-[1] h-[600px] w-[600px] opacity-30" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="relative"><WavePath className="-mt-10 opacity-60" /></div>
        <Results />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Achievements />
        <WhyHireMe />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
