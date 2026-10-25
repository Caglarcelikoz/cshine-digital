import About from "@/components/About";
import EngagementModes from "@/components/EngagementModes";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Hero from "@/components/Hero";

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
