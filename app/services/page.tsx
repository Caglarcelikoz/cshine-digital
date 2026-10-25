import EngagementModes from "@/components/EngagementModes";
import Capabilities from "@/components/Capabilities";
import BuildQuality from "@/components/BuildQuality";
import PageHero from "@/components/layout/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Services - C-Shine Digital | Software Development & IT Consultancy",
  description:
    "Discover our comprehensive IT services including web development, mobile apps, software solutions, and IT consultancy. Expert development team in Belgium.",
  keywords: [
    "software development services",
    "web development",
    "mobile app development",
    "IT consultancy",
    "Belgium software company",
    "custom software solutions",
    "enterprise software",
    "digital transformation",
  ],
  openGraph: {
    title: "Our Services - C-Shine Digital",
    description:
      "Comprehensive IT services including web development, mobile apps, and software solutions. Expert development team in Belgium.",
    type: "website",
    url: "https://www.cshinedigital.com/services",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - C-Shine Digital",
    description:
      "Comprehensive IT services including web development, mobile apps, and software solutions.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/services",
  },
};

const ServicesPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What We Do"
        image="/images/page-services.svg"
        title="Three ways to work with us"
        subtitle="However you need us: building your idea end to end, running your whole IT, or embedding in your team. Below: the ways we engage, and the capabilities behind them."
      />
      <EngagementModes showTitle={false} />
      <Capabilities />
      <BuildQuality />
    </>
  );
};

export default ServicesPage;
