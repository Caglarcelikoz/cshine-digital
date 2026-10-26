import { defineRouting } from "next-intl/routing";

/**
 * Locale routing for the whole site.
 *
 * English is the default and stays unprefixed (/services, /about…) so existing
 * indexed URLs keep their rankings. Dutch lives under /nl with Dutch slugs, which
 * is what Flemish visitors actually search for. Engagement-mode slugs
 * (product-build, it-partner, embedded) stay English in both locales.
 */
export const routing = defineRouting({
  locales: ["en", "nl"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  // The URL alone decides the language: an English link always opens in
  // English, whatever the visitor's browser language or earlier choice. Dutch
  // visitors reach /nl via search results (hreflang) or the language switcher.
  localeDetection: false,
  // Without detection the locale cookie has no job, so don't set one.
  localeCookie: false,
  pathnames: {
    "/": "/",
    "/services": { en: "/services", nl: "/diensten" },
    "/services/[slug]": { en: "/services/[slug]", nl: "/diensten/[slug]" },
    "/how-we-work": { en: "/how-we-work", nl: "/werkwijze" },
    "/about": { en: "/about", nl: "/over-ons" },
    "/work": { en: "/work", nl: "/projecten" },
    "/estimate": { en: "/estimate", nl: "/prijsindicatie" },
    "/contact": "/contact",
    "/privacy": { en: "/privacy", nl: "/privacy" },
    "/terms": { en: "/terms", nl: "/algemene-voorwaarden" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
/** Routes without dynamic segments — usable as a plain string href. */
export type StaticPathname = Exclude<AppPathname, `${string}[${string}]${string}`>;
