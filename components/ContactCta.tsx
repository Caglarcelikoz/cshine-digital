"use client";

import { useTranslations } from "next-intl";
import { FaEnvelope } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/navigation";

const ContactCta = () => {
  const t = useTranslations("Contact");
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-neutral-400">{t("ctaBody")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link href="/contact" className="btn-primary on-dark">
              {t("ctaButton")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:info@cshinedigital.com"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-cshine-blue-400 transition-colors"
            >
              <FaEnvelope className="h-4 w-4 text-cshine-blue-500" aria-hidden="true" />
              info@cshinedigital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
