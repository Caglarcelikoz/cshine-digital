import { routing, type AppPathname } from "./routing";

export type RouteMatch = {
  pathname: AppPathname;
  params: Record<string, string>;
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|\\]/g, "\\$&");

/** "/diensten/[slug]" → /^\/diensten\/([^/]+)$/ plus the param names. */
const compile = (pattern: string) => {
  const names: string[] = [];
  const source = pattern
    .split("/")
    .map((segment) => {
      const dynamic = segment.match(/^\[(\w+)\]$/);
      if (!dynamic) return escapeRegex(segment);
      names.push(dynamic[1]);
      return "([^/]+)";
    })
    .join("/");
  return { regex: new RegExp(`^${source}$`), names };
};

/**
 * Every spelling of every route — the internal pathname ("/services/[slug]")
 * and each locale's public one ("/diensten/[slug]") — compiled once, static
 * routes first so they win over dynamic ones.
 */
const patterns = Object.entries(routing.pathnames)
  .flatMap(([template, localized]) => {
    const spellings = new Set([
      template,
      ...(typeof localized === "string" ? [localized] : Object.values(localized)),
    ]);
    return [...spellings].map((spelling) => ({
      template: template as AppPathname,
      ...compile(spelling),
    }));
  })
  .sort((a, b) => a.names.length - b.names.length);

/**
 * Resolve a URL path (with or without locale prefix, public or internal slug)
 * to its route in `routing.pathnames` and the params it fills in. Returns
 * undefined for paths that aren't a known route (e.g. a 404).
 *
 *   /nl/diensten/embedded → { pathname: "/services/[slug]", params: { slug: "embedded" } }
 *   /about                → { pathname: "/about", params: {} }
 */
export const matchRoute = (path: string): RouteMatch | undefined => {
  const [, first, ...rest] = path.split("/");
  const unprefixed = (routing.locales as readonly string[]).includes(first)
    ? `/${rest.join("/")}`
    : path;
  const normalized =
    unprefixed.length > 1 ? unprefixed.replace(/\/$/, "") : unprefixed;

  for (const { template, regex, names } of patterns) {
    const match = normalized.match(regex);
    if (match) {
      return {
        pathname: template,
        params: Object.fromEntries(
          names.map((name, i) => [name, decodeURIComponent(match[i + 1])])
        ),
      };
    }
  }
  return undefined;
};
