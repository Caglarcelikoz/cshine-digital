const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C-Shine Digital",
    url: "https://www.cshinedigital.com",
    logo: "https://www.cshinedigital.com/images/c-shine-digital-transparent.png",
    description:
      "Leading IT consultancy and software development company in Belgium. Specializing in web development, mobile apps, and digital transformation solutions.",
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
      "Digital Transformation",
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
      "Leading IT consultancy and software development company in Belgium",
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
