import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "About - C-Shine Digital | A Flexible Belgian Digital Studio",
  description:
    "C-Shine Digital is a Belgian digital studio built around flexibility: a developer in your team, your whole IT department, or the studio that builds your idea from scratch.",
  keywords: [
    "about C-Shine Digital",
    "Belgian digital studio",
    "software development Belgium",
    "IT partner Limburg",
    "Zutendaal software company",
  ],
  openGraph: {
    title: "About - C-Shine Digital",
    description:
      "A Belgian digital studio built around flexibility. You work directly with the people who do the work.",
    type: "website",
    url: "https://www.cshinedigital.com/about",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - C-Shine Digital",
    description: "A Belgian digital studio built around flexibility.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/about",
  },
};

const principles = [
  {
    title: "We adapt to you",
    body: "One client needs a developer in their team, another needs their whole IT run. We shape the engagement to the project, not the reverse.",
    icon: ArrowsRightLeftIcon,
  },
  {
    title: "You talk to the makers",
    body: "No sales layer, no juniors handed your project. You work directly with the people writing the code and doing the work.",
    icon: UsersIcon,
  },
  {
    title: "Right tools, not locked-in tools",
    body: "We're deliberately technology-agnostic. We choose the stack that fits your project, not the one we happen to prefer.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Accountable after launch",
    body: "Delivery isn't the finish line. We stay on for maintenance, support and the improvements that come after go-live.",
    icon: CheckBadgeIcon,
  },
];

const facts = [
  { icon: FaRegBuilding, label: "Company", value: "C-Shine Digital" },
  { icon: FaMapMarkerAlt, label: "Based in", value: "Zutendaal, Belgium" },
  { icon: FaRegCalendarAlt, label: "Working since", value: "5+ years" },
  { icon: FaRegHandshake, label: "Engagements", value: "Build · Full IT · Embedded" },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb="About"
        eyebrow="Who We Are"
        image="/images/page-about.svg"
        title="A Belgian studio built around flexibility"
        subtitle="C-Shine Digital exists to be whatever a project needs, and to be the same reliable, senior partner in every one of those shapes."
      />

      <BackgroundPattern variant="light" className="py-20">
        <div className="container mx-auto px-4">
          {/* Story */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Eyebrow className="mb-6">Who we are</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-6">
              One partner, many shapes
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed text-left">
              <p>
                Most digital companies do one thing and try to make every client
                fit it. We built C-Shine the other way around. For one client
                we&rsquo;re a developer embedded in their team; for another
                we&rsquo;re the entire IT function (website, brand, hosting and
                support); for a third we take an idea from a blank page all the way
                to a launched product.
              </p>
              <p>
                What stays constant is the standard: senior work, direct
                communication, and the right technology for the job. We&rsquo;re
                small on purpose, and it&rsquo;s why you always work with the people
                actually doing the work, and why we can move quickly without
                layers in between.
              </p>
            </div>
          </div>

          {/* Principles — same card vocabulary as EngagementModes/Capabilities:
              gradient icon tile, dot-grid corner, lift on hover. */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
            {principles.map((p) => (
              <div
                key={p.title}
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
                    {p.title}
                  </h3>
                </div>

                <p className="relative text-neutral-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Legitimacy / facts strip */}
          <div className="max-w-5xl mx-auto rounded-2xl bg-midnight-900 p-8 md:p-10 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {facts.map((f) => (
                <div key={f.label} className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cshine-blue-500 to-cyan-500">
                      <f.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-cshine-blue-400 mb-1">
                    {f.label}
                  </div>
                  <div className="text-white font-semibold">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/#contact" className="btn-primary">
              Let&rsquo;s talk about your project
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
