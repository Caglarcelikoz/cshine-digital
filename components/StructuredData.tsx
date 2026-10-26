import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { FOUNDER_LINKEDIN } from "@/components/Founder";
import { engagementModes } from "@/lib/engagementModes";
import { SITE_URL } from "@/lib/seo";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;


const StructuredData = async ({ locale }: { locale: Locale }) => {
  const t = await getTranslations({ locale, namespace: "StructuredData" });
  const tModes = await getTranslations({ locale, namespace: "Modes" });
  const tFounder = await getTranslations({ locale, namespace: "Founder" });

  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: "C-Shine Digital",
    url: SITE_URL,
    logo: `${SITE_URL}/images/c-shine-digital-transparent.png`,
    image: `${SITE_URL}/images/c-shine-digital-transparent.png`,
    description: t("organizationDescription"),
    email: "info@cshinedigital.com",
    foundingDate: "2023",
    founder: {
      "@type": "Person",
      name: tFounder("name"),
      jobTitle: tFounder("role"),
      image: `${SITE_URL}/images/founder.png`,
      sameAs: [FOUNDER_LINKEDIN],
    },
    vatID: "BE0802504061",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "KBO",
      value: "0802.504.061",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zutendaal",
      addressRegion: "Limburg",
      addressCountry: "BE",
    },
    areaServed: [
      { "@type": "Country", name: t("country") },
      { "@type": "Place", name: t("europe") },
    ],
    knowsLanguage: ["nl", "en"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@cshinedigital.com",
      url: SITE_URL + getPathname({ locale, href: "/contact" }),
      availableLanguage: ["Dutch", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/c-shine-digital",
      "https://www.instagram.com/cshine.digital/",
    ],
    knowsAbout: t.raw("serviceTypes") as string[],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("serviceName"),
      itemListElement: engagementModes.map((mode) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tModes(`${mode.slug}.title`),
          description: tModes(`${mode.slug}.description`),
          url:
            SITE_URL +
            getPathname({
              locale,
              href: { pathname: "/services/[slug]", params: { slug: mode.slug } },
            }),
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "C-Shine Digital",
    url: SITE_URL,
    inLanguage: locale,
    description: t("websiteDescription"),
    publisher: { "@id": ORGANIZATION_ID },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default StructuredData;
