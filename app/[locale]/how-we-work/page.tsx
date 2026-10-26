import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  UserIcon,
  ClipboardDocumentListIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import PageHero from "@/components/layout/PageHero";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import Eyebrow from "@/components/Eyebrow";
import ProcessTracks from "@/components/ProcessTracks";
import { Link } from "@/i18n/navigation";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("howWeWork", "/how-we-work");
}

const HowWeWorkPage = async () => {
  const t = await getTranslations("HowWeWorkPage");
  const tSteps = await getTranslations("SharedSteps");

  /**
   * The three steps every engagement shares, whichever mode follows. Copy is
   * shared with components/Experience.tsx on the homepage (SharedSteps in
   * messages) — see CONTEXT.md.
   */
  const sharedSteps = [
    {
      title: tSteps("listen.title"),
      icon: UserIcon,
      description: tSteps("listen.descriptionLong"),
      image: "/images/process/shared-1.webp",
      alt: tSteps("listen.imageAlt"),
    },
    {
      title: tSteps("scope.title"),
      icon: LightBulbIcon,
      description: tSteps("scope.description"),
      image: "/images/process/shared-2.webp",
      alt: tSteps("scope.imageAlt"),
    },
    {
      title: tSteps("agree.title"),
      icon: ClipboardDocumentListIcon,
      description: tSteps("agree.description"),
      image: "/images/process/shared-3.webp",
      alt: tSteps("agree.imageAlt"),
    },
  ];

  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb={t("breadcrumb")}
        eyebrow={t("eyebrow")}
        image="/images/page-how-we-work.svg"
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <BackgroundPattern variant="light" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <Eyebrow className="mb-6">{t("sectionEyebrow")}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
              {t("sectionTitle")}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t("sectionIntro")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sharedSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white
                  border border-neutral-200 shadow-sm"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/40 to-transparent" />

                  {/* Step number badge */}
                  <div
                    className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center
                    rounded-full bg-white text-cshine-blue-600 font-bold text-lg shadow-lg
                    ring-2 ring-cshine-blue-500/40"
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Icon badge — overhangs the seam between image and content */}
                <div className="relative">
                  <div
                    className="absolute -top-6 right-6 z-10 flex h-12 w-12 items-center justify-center
                    rounded-xl bg-gradient-to-br from-cshine-blue-500 to-cyan-500 shadow-lg
                    shadow-cshine-blue-500/30"
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 pt-8">
                  <h3
                    className="text-xl font-semibold text-midnight-900 mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fork: the shared start ends here and the three modes diverge. */}
          <div className="mt-12 md:mt-20 mb-10 flex items-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-neutral-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {tSteps("fork")}
            </span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          <ProcessTracks />

          {/* CTA */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              href="/contact"
              className="btn-primary"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default HowWeWorkPage;
