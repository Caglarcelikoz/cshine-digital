import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Divider />
      <Partners />
    </>
  );
}
