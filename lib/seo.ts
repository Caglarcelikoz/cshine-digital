import type { Metadata } from "next";
import type { Messages } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://www.cshinedigital.com";
export const SITE_NAME = "C-Shine Digital";

const OG_LOCALE: Record<Locale, string> = { en: "en_US", nl: "nl_BE" };

type Href = Parameters<typeof getPathname>[0]["href"];

const ogImage = (locale: Locale) => ({
  url: `${SITE_URL}${locale === routing.defaultLocale ? "" : `/${locale}`}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
});

/** Absolute URL of a route in the given locale, using that locale's slug. */
export const absoluteUrl = (locale: Locale, href: Href): string => {
  const pathname = getPathname({ locale, href });
  return SITE_URL + (pathname === "/" ? "" : pathname);
};

/** hreflang map for every locale of a route, plus x-default (English). */
export const languageAlternates = (href: Href): Record<string, string> => ({
  ...Object.fromEntries(
    routing.locales.map((locale) => [locale, absoluteUrl(locale, href)])
  ),
  "x-default": absoluteUrl(routing.defaultLocale, href),
});

type PageMetadataInput = {
  locale: Locale;
  href: Href;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string[];
};

/**
 * Builds the per-page SEO metadata: localized title/description, a canonical
 * pointing at this locale's URL, hreflang alternates for every locale, and
 * matching Open Graph / Twitter tags.
 */
export const pageMetadata = ({
  locale,
  href,
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  keywords,
}: PageMetadataInput): Metadata => {
  const url = absoluteUrl(locale, href);
  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
      images: [ogImage(locale)],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage(locale).url],
    },
    alternates: {
      canonical: url,
      languages: languageAlternates(href),
    },
  };
};

/** Metadata for a page whose copy lives under `Metadata.<key>` in messages. */
export const translatedPageMetadata = async (
  key: keyof Messages["Metadata"],
  href: Href
): Promise<Metadata> => {
  const locale = await getLocale();
  const t = await getTranslations("Metadata");
  return pageMetadata({
    locale,
    href,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    ogTitle: t(`${key}.ogTitle`),
    ogDescription: t(`${key}.ogDescription`),
    keywords: t.raw(`${key}.keywords`) as string[],
  });
};
