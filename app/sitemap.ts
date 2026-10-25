import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { engagementModes } from "@/lib/engagementModes";
import { absoluteUrl, languageAlternates } from "@/lib/seo";

type Href = Parameters<typeof absoluteUrl>[1];

const staticRoutes: { href: Href; priority: number }[] = [
  { href: "/", priority: 1 },
  { href: "/services", priority: 0.9 },
  { href: "/how-we-work", priority: 0.7 },
  { href: "/about", priority: 0.7 },
  { href: "/work", priority: 0.8 },
  { href: "/privacy", priority: 0.3 },
  { href: "/terms", priority: 0.3 },
];

/**
 * One entry per route per locale, each listing every language version as an
 * hreflang alternate — so search engines index /services and /nl/diensten as
 * translations of each other rather than as duplicates.
 *
 * No `lastModified`: it would just be the build time for every URL (which
 * search engines learn to ignore), and `new Date()` would make this route
 * render per request under Cache Components.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...engagementModes.map((mode) => ({
      href: {
        pathname: "/services/[slug]",
        params: { slug: mode.slug },
      } as Href,
      priority: 0.8,
    })),
  ];

  return routes.flatMap(({ href, priority }) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(locale, href),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: languageAlternates(href) },
    }))
  );
}
