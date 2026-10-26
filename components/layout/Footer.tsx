import { cacheLife } from "next/cache";
import { getTranslations } from "next-intl/server";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { Link } from "@/i18n/navigation";

// The copyright year is the only time-dependent value on the site. Caching it
// keeps every page static; the cached value refreshes daily in the background.
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const Footer = async () => {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Navigation");
  const tCommon = await getTranslations("Common");
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Company */}
          <div>
            <h3 className="font-display text-white font-semibold text-lg mb-3">
              C-Shine Digital
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-4">
              {t("explore")}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {(
                [
                  { href: "/services", label: tNav("services") },
                  { href: "/work", label: tNav("work") },
                  { href: "/how-we-work", label: tNav("howWeWork") },
                  { href: "/about", label: tNav("about") },
                  { href: "/contact", label: tNav("contact") },
                ] as const
              ).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 hover:text-cshine-blue-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / legitimacy */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-4">
              {t("contact")}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-4 w-4 mt-0.5 text-cshine-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>{tCommon("location")}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="h-4 w-4 mt-0.5 text-cshine-blue-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@cshinedigital.com"
                  className="hover:text-cshine-blue-400 transition-colors"
                >
                  info@cshinedigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500 text-center sm:text-left">
            <p>{t("rights", { year })}</p>
            <p className="mt-1 text-xs">{t("companyNumber")}</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-neutral-400 hover:text-cshine-blue-400 transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-cshine-blue-400 transition-colors">
              {t("terms")}
            </Link>
            <CookieSettingsButton className="text-neutral-400 hover:text-cshine-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
