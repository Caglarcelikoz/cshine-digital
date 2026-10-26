import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FaLinkedin } from "react-icons/fa";

export const FOUNDER_LINKEDIN = "https://be.linkedin.com/in/caglar-celikoz";


export const FounderProfile = async () => {
  const t = await getTranslations("Founder");
  return (
    <div
      className="relative max-w-3xl mx-auto overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm
        flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left"
    >
      {/* Dot-grid motif corner — brand signature */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-24 w-24 opacity-[0.07] rounded-tr-2xl overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #04C4D4 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden="true"
      />

      <div
        className="relative h-36 w-36 md:h-40 md:w-40 flex-shrink-0 overflow-hidden rounded-full
          bg-gradient-to-br from-cshine-blue-500 to-midnight-900
          ring-4 ring-cshine-blue-500/15"
      >
        <Image
          src="/images/founder.png"
          alt={t("photoAlt")}
          fill
          sizes="160px"
          className="object-cover object-top scale-110 origin-top"
        />
      </div>

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-wider text-cshine-blue-700 mb-1">
          {t("aboutEyebrow")}
        </p>
        <h2 className="text-2xl font-bold text-midnight-900">{t("name")}</h2>
        <p className="text-sm font-medium text-neutral-500 mb-3">{t("role")}</p>
        <p className="leading-relaxed text-neutral-600 mb-4">{t("bio")}</p>
        <a
          href={FOUNDER_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cshine-blue-600 hover:text-cshine-blue-700 transition-colors"
        >
          <FaLinkedin className="h-4 w-4" aria-hidden="true" />
          {t("linkedin")}
        </a>
      </div>
    </div>
  );
};
