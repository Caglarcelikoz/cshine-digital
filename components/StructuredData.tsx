const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C-Shine Digital",
    url: "https://www.cshinedigital.com",
    logo: "https://www.cshinedigital.com/images/c-shine-digital-transparent.png",
    description:
      "A Belgian digital studio built around flexibility: a developer in your team, your whole IT department, or the studio that builds your idea from scratch. Web, e-commerce, branding, hosting and support.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zutendaal",
      addressRegion: "Limburg",
      addressCountry: "BE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@cshinedigital.com",
    },
    sameAs: ["https://www.linkedin.com/company/c-shine-digital"],
    foundingDate: "2019",
    numberOfEmployees: "8",
    serviceArea: {
      "@type": "Country",
      name: "Belgium",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Development Services",
    description:
      "Comprehensive software development services including web development, mobile app development, and IT consultancy.",
    provider: {
      "@type": "Organization",
      name: "C-Shine Digital",
    },
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "IT Consultancy",
      "E-commerce Development",
      "Logo & Branding",
      "Web Hosting & IT Support",
      "Embedded Development & Consultancy",
      "Custom Software Development",
    ],
    areaServed: {
      "@type": "Country",
      name: "Belgium",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "C-Shine Digital",
    url: "https://www.cshinedigital.com",
    description:
      "A flexible Belgian digital studio: web, e-commerce, branding, IT and embedded development.",
    publisher: {
      "@type": "Organization",
      name: "C-Shine Digital",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.cshinedigital.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
