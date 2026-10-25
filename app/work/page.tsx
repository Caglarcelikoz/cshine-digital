import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Our Work - C-Shine Digital | Case Studies & Client Projects",
  description:
    "See how C-Shine Digital adapts to each project: from an enterprise digital platform to full IT partnerships and a travel brand's site built end to end.",
  keywords: [
    "web development case studies",
    "software development portfolio",
    "multi-tenant platform",
    "IT services Belgium",
    "digital platform",
    "C-Shine Digital projects",
  ],
  openGraph: {
    title: "Our Work - C-Shine Digital",
    description:
      "Case studies showing the range of C-Shine Digital: enterprise platform engineering and full IT partnership.",
    type: "website",
    url: "https://www.cshinedigital.com/work",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - C-Shine Digital",
    description: "Case studies showing the range of what we deliver.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/work",
  },
};

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

const cases: Case[] = [
  {
    kind: "modules",
    client: "Ravago",
    logo: { src: "/images/ravago-logo.png", w: 522, h: 585, displayH: 44 },
    role: "Embedded developer",
    headline: "A digital platform for a whole product group",
    body: "As part of the platform team, we contributed to Digital Platform: a multi-tenant system where each Ravago business channel is onboarded with its own branding and domain, sharing one engine underneath.",
    tags: ["Multi-tenant", "Frontend & backend", "Contentful", "System integrations"],
    noLinkNote:
      "No live link: the platform sits behind each channel's login.",
    modules: [
      {
        title: "Product portfolio & ordering",
        description:
          "Browse products, request quotes, place and track orders and call-offs.",
        icon: Squares2X2Icon,
      },
      {
        title: "Deliveries & shipments",
        description:
          "Delivery requests, shipment tracking and invoices in one place.",
        icon: TruckIcon,
      },
      {
        title: "Custom page builder",
        description:
          "Content editors build landing pages and blogs in Contentful themselves.",
        icon: DocumentTextIcon,
      },
      {
        title: "AI translations",
        description:
          "A dashboard to plan and manage translations before content goes live.",
        icon: LanguageIcon,
      },
      {
        title: "Admin & user management",
        description:
          "Admins and sales reps manage customers, users and leads per channel.",
        icon: UsersIcon,
      },
      {
        title: "Transactional email",
        description:
          "Automated communication for quote and order requests and updates.",
        icon: EnvelopeIcon,
      },
    ],
  },
  {
    kind: "screenshot",
    client: "MKM Solutions",
    logo: { src: "/images/mkm.png", w: 3125, h: 1875, displayH: 46 },
    role: "Full IT partner",
    headline: "The complete digital & IT department",
    body: "Groundworks and infrastructure across Belgium. We designed and built the site, the brand, and set up the hosting, domains and email. One accountable partner for everything digital.",
    tags: ["Web development", "Branding", "Hosting & email", "Ongoing support"],
    liveUrl: "https://www.mkmsolutions.be",
    shot: {
      src: "/images/case-mkm-solutions.jpg",
      w: 1200,
      h: 1025,
      alt: "The services section of the MKM Solutions website we built",
    },
  },
  {
    kind: "screenshot",
    client: "MKM Carrosserie",
    logo: { src: "/images/mkm-carrosserie.png", w: 1912, h: 510, displayH: 30 },
    role: "Full IT partner",
    headline: "Website plus the IT that keeps them running",
    body: "An auto-body specialist with 25+ years of craft. We built and maintain their site, rich service pages and all, and handle the day-to-day IT around it.",
    tags: ["Web development", "Hosting", "Ongoing IT support"],
    liveUrl: "https://www.mkmcarrosserie.be",
    shot: {
      src: "/images/case-mkm-carrosserie.jpg",
      w: 1200,
      h: 1254,
      alt: "A service detail page of the MKM Carrosserie website we built",
    },
  },
  {
    kind: "gallery",
    client: "Xplore Türkiye & Beyond",
    logo: { src: "/images/xplore-turkiye-logo.png", w: 640, h: 208, displayH: 44 },
    role: "Design & development",
    headline: "The digital gateway to authentic Türkiye",
    body: "A Belgian travel specialist crafting tailor-made journeys through Türkiye. We designed and built their site end to end: five travel styles, seven regions, a filterable trip catalogue and rich itineraries — all leading to a direct line with their travel designers.",
    tags: ["Web design & development", "Trip catalogue", "Content & SEO", "Hosting & domains"],
    liveUrl: "https://www.xploreturkiye.be",
    slides: [
      {
        src: "/images/case-xplore-1.jpg",
        alt: "The Xplore Türkiye homepage hero we built",
        url: "xploreturkiye.be",
        label: "homepage hero",
      },
      {
        src: "/images/case-xplore-2.jpg",
        alt: "The five travel styles section of the Xplore Türkiye homepage",
        url: "xploreturkiye.be",
        label: "five travel styles",
      },
      {
        src: "/images/case-xplore-3.jpg",
        alt: "The interactive map of Türkiye's seven regions",
        url: "xploreturkiye.be/#regios",
        label: "interactive region map",
      },
      {
        src: "/images/case-xplore-4.jpg",
        alt: "The filterable trip catalogue of the Xplore Türkiye website",
        url: "xploreturkiye.be/reizen",
        label: "filterable trip catalogue",
      },
      {
        src: "/images/case-xplore-5.jpg",
        alt: "The day-by-day itinerary of a Cappadocia round trip",
        url: "xploreturkiye.be/reizen/cappadocie-rondreis",
        label: "day-by-day itinerary",
      },
    ],
  },
];

const RoleBadge = ({ role }: { role: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-cshine-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cshine-blue-700">
    <span className="h-1.5 w-1.5 rounded-full bg-cshine-blue-600" aria-hidden="true" />
    {role}
  </span>
);

const CaseText = ({ c }: { c: Case }) => (
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
      <Link
        href={c.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6"
      >
        Visit the live site
        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
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

const Modules = ({ c }: { c: ModulesCase }) => (
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
      illustrative · not the actual UI
    </p>
  </div>
);

const WorkPage = () => {
  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb="Work"
        eyebrow="Case Studies"
        title="The same standards, whatever the shape"
        subtitle="From an enterprise digital platform to a travel brand built end to end. Four projects, four ways of working, one senior standard."
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
                  <CaseText c={c} />
                  {c.kind === "screenshot" ? (
                    <Screenshot c={c} />
                  ) : c.kind === "gallery" ? (
                    <CaseGallery slides={c.slides} />
                  ) : (
                    <Modules c={c} />
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 text-center">
            <Link href="/#contact" className="btn-primary">
              Start a project with us
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default WorkPage;
