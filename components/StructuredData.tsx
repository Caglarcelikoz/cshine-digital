import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

const StructuredData = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: "StructuredData" });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "C-Shine Digital",
    url: SITE_URL,
    logo: `${SITE_URL}/images/c-shine-digital-transparent.png`,
    description: t("organizationDescription"),
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
      availableLanguage: ["English", "Dutch"],
    },
    sameAs: ["https://www.linkedin.com/company/c-shine-digital"],
    foundingDate: "2019",
    numberOfEmployees: "8",
    serviceArea: {
      "@type": "Country",
      name: t("country"),
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("serviceName"),
    description: t("serviceDescription"),
    provider: {
      "@type": "Organization",
      name: "C-Shine Digital",
    },
    serviceType: t.raw("serviceTypes") as string[],
    areaServed: {
      "@type": "Country",
      name: t("country"),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "C-Shine Digital",
    url: SITE_URL,
    inLanguage: locale,
    description: t("websiteDescription"),
    publisher: {
      "@type": "Organization",
      name: "C-Shine Digital",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
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
