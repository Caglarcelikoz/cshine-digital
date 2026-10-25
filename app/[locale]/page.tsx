import About from "@/components/About";
import EngagementModes from "@/components/EngagementModes";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Hero from "@/components/Hero";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("home", "/");
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EngagementModes variant="light" />
      <Partners />
      <Experience />
      <FAQ />
    </>
  );
}
