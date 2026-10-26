import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { ComponentType, SVGProps } from "react";
import {
  Squares2X2Icon,
  TruckIcon,
  DocumentTextIcon,
  LanguageIcon,
  UsersIcon,
  EnvelopeIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import PageHero from "@/components/layout/PageHero";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import CaseGallery, { type GallerySlide } from "@/components/CaseGallery";
import { Link } from "@/i18n/navigation";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("work", "/work");
}

type Logo = { src: string; w: number; h: number; displayH: number };

type Module = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type BaseCase = {
  client: string;
  logo: Logo;
  role: string;
  headline: string;
  body: string;
  tags: string[];
};

type ScreenshotCase = BaseCase & {
  kind: "screenshot";
  shot: { src: string; w: number; h: number; alt: string };
  liveUrl: string;
};

type ModulesCase = BaseCase & {
  kind: "modules";
  modules: Module[];
  /** shown instead of a live link when the work sits behind a login */
  noLinkNote: string;
};

type GalleryCase = BaseCase & {
  kind: "gallery";
  slides: GallerySlide[];
  liveUrl: string;
};

type Case = ScreenshotCase | ModulesCase | GalleryCase;

/** Copy for each case lives in messages under WorkPage.cases.<key>. */
type CaseKey = "ravago" | "mkmSolutions" | "mkmCarrosserie" | "xplore";
type CaseText = Pick<BaseCase, "role" | "headline" | "body" | "tags">;

const buildCases = (
  t: Awaited<ReturnType<typeof getTranslations<"WorkPage">>>
): Case[] => {
  const text = (key: CaseKey): CaseText => ({
    role: t(`cases.${key}.role`),
    headline: t(`cases.${key}.headline`),
    body: t(`cases.${key}.body`),
    tags: t.raw(`cases.${key}.tags`) as string[],
  });
  const ravagoModule = (
    key:
      | "portfolio"
      | "deliveries"
      | "pageBuilder"
      | "translations"
      | "admin"
      | "email",
    icon: Module["icon"]
  ): Module => ({
    title: t(`cases.ravago.modules.${key}.title`),
    description: t(`cases.ravago.modules.${key}.description`),
    icon,
  });
  const slideText = t.raw("cases.xplore.slides") as {
    alt: string;
    label: string;
  }[];
  const slideSources = [
    { src: "/images/case-xplore-1.jpg", url: "xploreturkiye.be" },
    { src: "/images/case-xplore-2.jpg", url: "xploreturkiye.be" },
    { src: "/images/case-xplore-3.jpg", url: "xploreturkiye.be/#regios" },
    { src: "/images/case-xplore-4.jpg", url: "xploreturkiye.be/reizen" },
    {
      src: "/images/case-xplore-5.jpg",
      url: "xploreturkiye.be/reizen/cappadocie-rondreis",
    },
  ];

  return [
    {
      kind: "modules",
      client: "Ravago",
      logo: { src: "/images/ravago-logo.png", w: 522, h: 585, displayH: 44 },
      ...text("ravago"),
      noLinkNote: t("cases.ravago.noLinkNote"),
      modules: [
        ravagoModule("portfolio", Squares2X2Icon),
        ravagoModule("deliveries", TruckIcon),
        ravagoModule("pageBuilder", DocumentTextIcon),
        ravagoModule("translations", LanguageIcon),
        ravagoModule("admin", UsersIcon),
        ravagoModule("email", EnvelopeIcon),
      ],
    },
    {
      kind: "screenshot",
      client: "MKM Solutions",
      logo: { src: "/images/mkm.png", w: 3125, h: 1875, displayH: 46 },
      ...text("mkmSolutions"),
      liveUrl: "https://www.mkmsolutions.be",
      shot: {
        src: "/images/case-mkm-solutions.jpg",
        w: 1200,
        h: 1025,
        alt: t("cases.mkmSolutions.shotAlt"),
      },
    },
    {
      kind: "screenshot",
      client: "MKM Carrosserie",
      logo: { src: "/images/mkm-carrosserie.png", w: 1912, h: 510, displayH: 30 },
      ...text("mkmCarrosserie"),
      liveUrl: "https://www.mkmcarrosserie.be",
      shot: {
        src: "/images/case-mkm-carrosserie.jpg",
        w: 1200,
        h: 1254,
        alt: t("cases.mkmCarrosserie.shotAlt"),
      },
    },
    {
      kind: "gallery",
      client: "Xplore Türkiye & Beyond",
      logo: { src: "/images/xplore-turkiye-logo.png", w: 640, h: 208, displayH: 44 },
      ...text("xplore"),
      liveUrl: "https://www.xploreturkiye.be",
      slides: slideSources.map((slide, i) => ({ ...slide, ...slideText[i] })),
    },
  ];
};

const RoleBadge = ({ role }: { role: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-cshine-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cshine-blue-700">
    <span className="h-1.5 w-1.5 rounded-full bg-cshine-blue-600" aria-hidden="true" />
    {role}
  </span>
);

const CaseDetails = ({ c, visitLabel }: { c: Case; visitLabel: string }) => (
  <div>
    <div className="relative h-11 mb-5 flex items-center">
      <Image
        src={c.logo.src}
        alt={c.client}
        width={c.logo.w}
        height={c.logo.h}
        style={{ height: c.logo.displayH, width: "auto" }}
        className="max-w-[180px] object-contain object-left"
      />
    </div>
    <RoleBadge role={c.role} />
    <h2 className="mt-3 text-2xl font-bold text-balance text-midnight-900">
      {c.headline}
    </h2>
    <p className="mt-3 leading-relaxed text-neutral-600">{c.body}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {c.tags.map((t) => (
        <span
          key={t}
          className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-600"
        >
          {t}
        </span>
      ))}
    </div>
    {c.kind !== "modules" ? (
      <a
        href={c.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6"
      >
        {visitLabel}
        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    ) : (
      <p className="mt-6 text-sm text-neutral-500">{c.noLinkNote}</p>
    )}
  </div>
);

const Screenshot = ({ c }: { c: ScreenshotCase }) => (
  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
    <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3.5 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#e5484d]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e08600]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#2f9e6f]" />
      <span className="ml-2 flex-1 truncate rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-center text-[11px] text-neutral-400">
        {c.liveUrl.replace("https://www.", "")}
      </span>
    </div>
    <Image
      src={c.shot.src}
      alt={c.shot.alt}
      width={c.shot.w}
      height={c.shot.h}
      sizes="(max-width: 740px) 100vw, 50vw"
      className="w-full"
    />
  </div>
);

const Modules = ({ c, note }: { c: ModulesCase; note: string }) => (
  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-midnight-800 to-midnight-900 p-4">
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(4,196,212,0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
    <div
      className="pointer-events-none absolute -right-16 -top-20 h-60 w-60 rounded-full"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(circle, rgba(4,196,212,0.22), transparent 60%)",
      }}
    />
    <div className="relative grid gap-2.5 sm:grid-cols-2">
      {c.modules.map((m) => (
        <div
          key={m.title}
          className="rounded-lg border border-cshine-blue-500/20 bg-white/[0.04] p-3.5"
        >
          <m.icon className="h-5 w-5 text-cshine-blue-300 mb-2" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-white">{m.title}</h3>
          <p className="mt-0.5 text-xs leading-relaxed text-white/60">
            {m.description}
          </p>
        </div>
      ))}
    </div>
    <p className="relative mt-2.5 text-right font-mono text-[10px] text-white/40">
      {note}
    </p>
  </div>
);

const WorkPage = async () => {
  const t = await getTranslations("WorkPage");
  const cases = buildCases(t);
  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb={t("breadcrumb")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <BackgroundPattern variant="light" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-8">
            {cases.map((c) => (
              <article
                key={c.client}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-10"
              >
                <div
                  className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cshine-blue-500 to-cyan-500"
                  aria-hidden="true"
                />
                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <CaseDetails c={c} visitLabel={t("visitLive")} />
                  {c.kind === "screenshot" ? (
                    <Screenshot c={c} />
                  ) : c.kind === "gallery" ? (
                    <CaseGallery slides={c.slides} />
                  ) : (
                    <Modules c={c} note={t("illustrative")} />
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 text-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              {t("cta")}
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default WorkPage;
