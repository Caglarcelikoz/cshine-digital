import { getTranslations } from "next-intl/server";
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

export default async function Home() {
  const t = await getTranslations("FAQ");
  const faqs = t.raw("items") as { question: string; answer: string }[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <EngagementModes variant="light" />
      <Partners />
      <Experience />
      <FAQ />
    </>
  );
}
