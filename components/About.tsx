import type { IconType } from "react-icons";
import {
  FaAward,
  FaBolt,
  FaBroadcastTower,
  FaCar,
  FaComments,
  FaHardHat,
  FaHeartbeat,
  FaIndustry,
  FaLandmark,
  FaLightbulb,
  FaPlane,
  FaUsers,
  FaWarehouse,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

/* The three reasons to choose C-Shine Digital. */
const pillars = [
  { key: "innovation", icon: FaLightbulb },
  { key: "partnership", icon: FaUsers },
  { key: "excellence", icon: FaAward },
] as const;

/* Sector icons by key; labels live in messages (AboutSection.experience). */
const sectorIcons: Record<string, IconType> = {
  government: FaLandmark,
  medtech: FaHeartbeat,
  wholesale: FaWarehouse,
  telecom: FaBroadcastTower,
  industry: FaIndustry,
  energy: FaBolt,
  construction: FaHardHat,
  automotive: FaCar,
  travel: FaPlane,
  consultancy: FaComments,
};

/**
 * "Why choose C-Shine Digital": one heading, one intro, three reasons and the
 * experience behind them. The hero already says what C-Shine Digital does, so
 * this section answers why.
 */
const About = () => {
  const t = useTranslations("AboutSection");
  const sectors = t.raw("experience.sectors") as {
    key: string;
    label: string;
  }[];
  const sizes = t.raw("experience.sizes") as string[];

  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-6">
            {t("whyTitle")}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t("whyBody")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.key}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cshine-blue-500 to-cyan-500 shadow-md shadow-cshine-blue-500/20">
                  <pillar.icon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-midnight-900 mb-2">
                  {t(`values.${pillar.key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {t(`values.${pillar.key}.description`)}
                </p>
              </div>
            ))}
          </div>

          {/* Experience as sectors and organisation types, never company
              names (much of it was built as a developer before C-Shine
              Digital). Informational, so flat: no hover or card styling. */}
          <div className="mt-6 rounded-2xl bg-neutral-50 p-5 md:mt-8 md:p-6">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 className="text-base font-bold text-midnight-900">
                {t("experience.title")}
              </h3>
              <p className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-600">
                <span className="mr-1">{t("experience.label")}</span>
                {sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-full bg-midnight-900 px-2.5 py-0.5 text-xs font-semibold text-white"
                  >
                    {size}
                  </span>
                ))}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {sectors.map((sector) => {
                const Icon = sectorIcons[sector.key] ?? FaLightbulb;
                return (
                  <li
                    key={sector.key}
                    className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3"
                  >
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cshine-blue-500/10 text-cshine-blue-700">
                      <Icon className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-semibold text-midnight-900">
                      {sector.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 text-center md:mt-14">
            <Link href="/how-we-work" className="btn-primary">
              {t("cta")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default About;
