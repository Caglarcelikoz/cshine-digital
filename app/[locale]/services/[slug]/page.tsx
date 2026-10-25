import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import { Link } from "@/i18n/navigation";
import {
  engagementModes,
  getEngagementMode,
  MODE_CTA_HREF,
} from "@/lib/engagementModes";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return engagementModes.map((mode) => ({ slug: mode.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const mode = getEngagementMode(slug);
  if (!mode) return {};

  const locale = await getLocale();
  const t = await getTranslations("Modes");
  return pageMetadata({
    locale,
    href: { pathname: "/services/[slug]", params: { slug: mode.slug } },
    title: t(`${mode.slug}.metaTitle`),
    description: t(`${mode.slug}.metaDescription`),
  });
}

const ModeDetailPage = async ({
  params,
}: PageProps<"/[locale]/services/[slug]">) => {
  const { slug } = await params;
  const mode = getEngagementMode(slug);
  if (!mode) notFound();

  const t = await getTranslations("ModeDetail");
  const tMode = await getTranslations(`Modes.${mode.slug}`);
  const Icon = mode.icon;

  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb={tMode("title")}
        breadcrumbParent={{ label: t("breadcrumbParent"), href: "/services" }}
        eyebrow={tMode("eyebrow")}
        title={tMode("title")}
        subtitle={tMode("intro")}
        image={mode.heroImage}
      />

      <BackgroundPattern variant="light" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* What it is + how it works */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl
                      bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white
                      shadow-md shadow-cshine-blue-500/20"
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-midnight-900">
                      {t("whatItIs")}
                    </h2>
                    <p className="text-sm font-medium text-cshine-blue-700">
                      {tMode("forWho")}
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-neutral-700">
                  {tMode("whatItIs")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-midnight-900 mb-6">
                  {t("howWeWork")}
                </h2>
                <ul className="space-y-5">
                  {(tMode.raw("howItWorks") as string[]).map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full
                          bg-cshine-blue-500/10 text-cshine-blue-600 font-bold text-sm"
                      >
                        {index + 1}
                      </span>
                      <p className="text-neutral-700 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* What's covered — capabilities */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
                <h2 className="text-lg font-bold text-midnight-900 mb-5">
                  {t("covered")}
                </h2>
                <ul className="space-y-3.5">
                  {(tMode.raw("capabilities") as string[]).map((cap) => (
                    <li
                      key={cap}
                      className="flex items-center gap-3 text-sm text-neutral-700"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-cshine-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <Link
                  href={MODE_CTA_HREF}
                  className="btn-primary mt-8 w-full"
                >
                  {tMode("cta")}
                </Link>
              </div>
            </aside>
          </div>

          {/* Back to all modes */}
          <div className="mt-10 md:mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cshine-blue-600 font-semibold hover:text-cshine-blue-700 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {t("backToAll")}
            </Link>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default ModeDetailPage;
