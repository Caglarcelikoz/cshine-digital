import { getTranslations } from "next-intl/server";
import {
  FaClock,
  FaEnvelope,
  FaGlobeEurope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import PageHero from "@/components/layout/PageHero";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("contact", "/contact");
}

const ContactPage = async () => {
  const t = await getTranslations("Contact");

  const details = [
    {
      icon: FaEnvelope,
      label: t("emailLabel"),
      value: (
        <a
          href="mailto:info@cshinedigital.com"
          className="font-medium text-midnight-900 hover:text-cshine-blue-700 transition-colors"
        >
          info@cshinedigital.com
        </a>
      ),
    },
    { icon: FaClock, label: t("hoursLabel"), value: t("hours") },
    { icon: FaGlobeEurope, label: t("areaLabel"), value: t("area") },
  ];

  return (
    <>
      <PageHero
        breadcrumb={t("breadcrumb")}
        eyebrow={t("eyebrow")}
        image="/images/page-contact.svg"
        title={t("title")}
        subtitle={t("intro")}
      />

      <BackgroundPattern variant="light" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Contact details, side by side above the form */}
          <ul className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mb-10">
            {details.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cshine-blue-500 to-cyan-500 shadow-md shadow-cshine-blue-500/20">
                  <Icon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cshine-blue-700 mb-1">
                    {label}
                  </p>
                  <div className="text-sm leading-relaxed text-neutral-700 break-words">
                    {value}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>

          <div className="max-w-2xl mx-auto mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm leading-relaxed text-neutral-600 sm:max-w-md">
              {t("writtenFirst")}
            </p>
            <div className="flex flex-shrink-0 gap-3">
              <a
                href="https://www.linkedin.com/company/c-shine-digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("linkedin")}
                className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm hover:border-cshine-blue-500/50 transition-colors"
              >
                <FaLinkedin className="h-5 w-5 text-cshine-blue-600" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/cshine.digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("instagram")}
                className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm hover:border-cshine-blue-500/50 transition-colors"
              >
                <FaInstagram className="h-5 w-5 text-cshine-blue-600" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </BackgroundPattern>
    </>
  );
};

export default ContactPage;
