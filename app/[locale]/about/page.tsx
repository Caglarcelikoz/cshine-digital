import { getTranslations } from "next-intl/server";
import {
  FaMapMarkerAlt,
  FaRegBuilding,
  FaRegCalendarAlt,
  FaRegHandshake,
} from "react-icons/fa";
import {
  ArrowsRightLeftIcon,
  CheckBadgeIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import PageHero from "@/components/layout/PageHero";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import Eyebrow from "@/components/Eyebrow";
import { FounderProfile } from "@/components/Founder";
import { Link } from "@/i18n/navigation";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("about", "/about");
}

const principles = [
  { key: "adapt", icon: ArrowsRightLeftIcon },
  { key: "makers", icon: UsersIcon },
  { key: "tools", icon: WrenchScrewdriverIcon },
  { key: "accountable", icon: CheckBadgeIcon },
] as const;

const facts = [
  { key: "company", icon: FaRegBuilding },
  { key: "basedIn", icon: FaMapMarkerAlt },
  { key: "since", icon: FaRegCalendarAlt },
  { key: "engagements", icon: FaRegHandshake },
] as const;

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb={t("breadcrumb")}
        eyebrow={t("eyebrow")}
        image="/images/page-about.svg"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <BackgroundPattern variant="light" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Story */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <Eyebrow className="mb-6">{t("storyEyebrow")}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-6">
              {t("storyTitle")}
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed text-left">
              {(t.raw("story") as string[]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Founder */}
          <div className="mb-12 md:mb-20">
            <FounderProfile />
          </div>

          {/* Principles — same card vocabulary as EngagementModes/Capabilities:
              gradient icon tile, dot-grid corner, lift on hover. */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-12 md:mb-20">
            {principles.map((p) => (
              <div
                key={p.key}
                className="group relative rounded-2xl bg-white border border-neutral-200 shadow-sm p-8
                  hover:-translate-y-1 hover:border-cshine-blue-500/30 hover:shadow-xl
                  transition-all duration-300"
              >
                {/* Dot-grid motif corner — brand signature */}
                <div
                  className="pointer-events-none absolute top-0 right-0 h-24 w-24 opacity-[0.07]
                    rounded-tr-2xl overflow-hidden"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, #04C4D4 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center gap-4 mb-5">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl
                      bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white
                      shadow-md shadow-cshine-blue-500/20
                      group-hover:scale-110 transition-transform duration-300"
                  >
                    <p.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-midnight-900">
                    {t(`principles.${p.key}.title`)}
                  </h3>
                </div>

                <p className="relative text-neutral-600 leading-relaxed">
                  {t(`principles.${p.key}.body`)}
                </p>
              </div>
            ))}
          </div>

          {/* Legitimacy / facts strip */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-midnight-900 p-8 md:p-10 mb-10 md:mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {facts.map((f) => (
                <div key={f.key} className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cshine-blue-500 to-cyan-500">
                      <f.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cshine-blue-400 mb-1">
                    {t(`facts.${f.key}.label`)}
                  </div>
                  <div className="text-white font-semibold">
                    {t(`facts.${f.key}.value`)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              {t("cta")}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default AboutPage;
