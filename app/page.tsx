import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Experience />
      <Services />
    </>
  );
}