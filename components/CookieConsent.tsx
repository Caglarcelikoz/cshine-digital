"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import * as CookieConsentLib from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { getPathname } from "@/i18n/navigation";

/** GA4 measurement ID (G-…). Without it there is no banner and no tracking. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Load GA4 only after the visitor accepted the analytics category ("basic"
 * Consent Mode): before that, nothing — not even a cookieless ping — is sent
 * to Google. GA4's enhanced measurement records client-side navigations itself.
 */
function loadGoogleAnalytics(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", id);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

/**
 * The cookie banner (orestbida/cookieconsent). Renders nothing itself; the
 * library injects its own UI. Re-initialised when the locale changes so the
 * banner speaks the page's language.
 */
const CookieConsent = () => {
  const t = useTranslations("Cookies");
  const locale = useLocale();

  useEffect(() => {
    if (!GA_ID) return;
    const gaId = GA_ID;

    const privacyUrl = getPathname({ locale, href: "/privacy" });
    const withLink = (key: "consentDescription" | "moreDescription") =>
      t.markup(key, {
        link: (chunks) => `<a href="${privacyUrl}">${chunks}</a>`,
      });

    CookieConsentLib.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
        },
        preferencesModal: { layout: "box", equalWeightButtons: true },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
            // Reload so the already-loaded GA script is gone too.
            reloadPage: true,
          },
        },
      },
      onConsent: () => {
        if (CookieConsentLib.acceptedCategory("analytics")) {
          loadGoogleAnalytics(gaId);
        }
      },
      onChange: () => {
        if (CookieConsentLib.acceptedCategory("analytics")) {
          loadGoogleAnalytics(gaId);
        }
      },
      language: {
        default: locale,
        translations: {
          [locale]: {
            consentModal: {
              title: t("consentTitle"),
              description: withLink("consentDescription"),
              acceptAllBtn: t("acceptAll"),
              acceptNecessaryBtn: t("rejectAll"),
              showPreferencesBtn: t("managePreferences"),
            },
            preferencesModal: {
              title: t("preferencesTitle"),
              acceptAllBtn: t("acceptAll"),
              acceptNecessaryBtn: t("rejectAll"),
              savePreferencesBtn: t("save"),
              closeIconLabel: t("close"),
              sections: [
                {
                  title: t("necessaryTitle"),
                  description: t("necessaryDescription"),
                  linkedCategory: "necessary",
                },
                {
                  title: t("analyticsTitle"),
                  description: t("analyticsDescription"),
                  linkedCategory: "analytics",
                },
                {
                  title: t("moreTitle"),
                  description: withLink("moreDescription"),
                },
              ],
            },
          },
        },
      },
    });

    // Tear the UI down (keeping the stored choice) so a locale switch can
    // re-run the banner in the other language.
    return () => CookieConsentLib.reset(false);
  }, [locale, t]);

  return null;
};

export default CookieConsent;

/** Reopens the preferences so visitors can change or withdraw consent. */
export const CookieSettingsButton = ({ className }: { className?: string }) => {
  const t = useTranslations("Cookies");
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => CookieConsentLib.showPreferences()}
      className={className}
    >
      {t("settings")}
    </button>
  );
};
