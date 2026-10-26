import { getTranslations } from "next-intl/server";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import Eyebrow from "@/components/Eyebrow";
import { Link } from "@/i18n/navigation";
import type { StaticPathname } from "@/i18n/routing";

const suggestions: { href: StaticPathname; key: "services" | "howWeWork" | "work" | "about" }[] = [
  { href: "/services", key: "services" },
  { href: "/how-we-work", key: "howWeWork" },
  { href: "/work", key: "work" },
  { href: "/about", key: "about" },
];

/**
 * Localized 404, rendered inside the [locale] layout (navbar, contact, footer).
 * Reached via notFound() — including from app/[locale]/[...rest] for unknown
 * URLs. Next.js adds `noindex` and the 404 status itself.
 */
const NotFound = async () => {
  const t = await getTranslations("NotFound");
  const tNav = await getTranslations("Navigation");

  return (
    <BackgroundPattern variant="light" className="pt-32 pb-16 md:pt-40 md:pb-24">
      {/* React 19 hoists <title> into <head>; not-found has no metadata API. */}
      <title>{t("metaTitle")}</title>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
          <h1 className="text-3xl md:text-5xl font-bold text-balance text-midnight-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              {t("home")}
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              {t("contact")}
            </Link>
          </div>

          <nav
            aria-labelledby="not-found-suggestions"
            className="mt-12 border-t border-neutral-200 pt-8"
          >
            <h2
              id="not-found-suggestions"
              className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4"
            >
              {t("suggestionsTitle")}
            </h2>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {suggestions.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-medium text-cshine-blue-600 hover:text-cshine-blue-700 transition-colors"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default NotFound;
