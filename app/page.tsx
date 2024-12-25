import About from "@/components/About";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Partners />
      <FAQ />
    </>
  );
}
