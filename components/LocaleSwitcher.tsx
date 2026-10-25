"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { matchRoute } from "@/i18n/matchRoute";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Href = Parameters<typeof getPathname>[0]["href"];

type LocaleSwitcherProps = {
  className?: string;
  onNavigate?: () => void;
};

/**
 * Plain links (not a select) so crawlers can follow them to the other locale's
 * URL. Each link points at the same page in the target locale, with that
 * locale's slug — and straight at the final URL (/how-we-work, not
 * /en/how-we-work), since there is no locale cookie to update on the way.
 *
 * The current route is resolved from the raw URL with matchRoute(), against the
 * same routing.pathnames the hreflang tags come from, so prerender and browser
 * produce identical links. Unknown paths (404s) link to each locale's home.
 */
const LocaleSwitcher = ({ className = "", onNavigate }: LocaleSwitcherProps) => {
  const t = useTranslations("Navigation");
  const current = useLocale();
  const route = matchRoute(usePathname());

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`flex items-center rounded-lg border border-white/10 p-0.5 text-xs font-semibold ${className}`}
    >
      {routing.locales.map((locale) => {
        const active = locale === current;
        return (
          <NextLink
            key={locale}
            href={getPathname({
              locale,
              // matchRoute pairs each pathname with exactly the params it
              // declares, which TypeScript can't prove for the union.
              href: (route ?? { pathname: "/", params: {} }) as Href,
            })}
            hrefLang={locale}
            onClick={onNavigate}
            aria-current={active ? "true" : undefined}
            title={active ? undefined : t("switchTo")}
            className={`rounded-md px-2.5 py-1.5 uppercase transition-colors duration-200 ${
              active
                ? "bg-cshine-blue-500/15 text-cshine-blue-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            {locale}
          </NextLink>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
