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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayan — Professional Video Editor | 7 Years Experience" },
      { name: "description", content: "Premium video editing for gaming creators, shorts, reels, and long-form. Premiere Pro & After Effects. Millions of views generated." },
      { property: "og:title", content: "Rayan — Professional Video Editor" },
      { property: "og:description", content: "Turning raw footage into content people actually watch. 7+ years experience." },
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
      <FloatingParticles />
      <Nav />
      <main className="relative z-10">
        <Hero />
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
