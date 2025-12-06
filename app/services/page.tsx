import Breadcrumb from "@/components/BreadCrumb";
import Services from "@/components/Services";
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
      <section className="mt-20">
        <div className="container mx-auto">
          <Breadcrumb current="Services" />
        </div>
      </section>
      <section className="relative text-white py-12">
        <div
          className="absolute inset-0 w-full bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/services.png')",
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl px-4">
            At C-Shine Digital, we are dedicated to providing top-notch IT
            services. Whether you are a startup or a large enterprise, we have
            the expertise to help you succeed with high-quality software
            solutions tailored to your needs.
          </p>
        </div>
      </section>
      <Services showTitle={false} />
    </>
  );
};

export default ServicesPage;
