import { Metadata } from "next";
import Image from "next/image";
import {
  UserIcon,
  ClipboardDocumentListIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import PageHero from "@/components/layout/PageHero";
import BackgroundPattern from "@/components/layout/BackgroundPattern";
import Eyebrow from "@/components/Eyebrow";
import ProcessTracks from "@/components/ProcessTracks";

export const metadata: Metadata = {
  title: "How We Work - C-Shine Digital | Our Development Process",
  description:
    "How we work: every project starts the same way — listen, scope, agree — then follows the track that fits, whether that's a product build, a full IT partnership or an embedded developer.",
  keywords: [
    "software development process",
    "agile development",
    "project management",
    "development methodology",
    "IT project workflow",
    "software development lifecycle",
    "Belgium development process",
    "custom software development",
  ],
  openGraph: {
    title: "How We Work - C-Shine Digital",
    description:
      "The same start, a different path: three shared steps, then the track that fits how we work together.",
    type: "website",
    url: "https://www.cshinedigital.com/how-we-work",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work - C-Shine Digital",
    description:
      "The same start, a different path: three shared steps, then the track that fits.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/how-we-work",
  },
};

const HowWeWorkPage = () => {
  /**
   * The three steps every engagement shares, whichever mode follows. Kept in
   * sync with components/Experience.tsx on the homepage — see CONTEXT.md.
   */
  const sharedSteps = [
    {
      title: "Listen & Understand",
      icon: UserIcon,
      description:
        "We map out what you need, what you already have running, and where it hurts today — before proposing anything.",
      image: "/images/process/shared-1.webp",
      alt: "Working through requirements on a laptop",
    },
    {
      title: "Scope & Approach",
      icon: LightBulbIcon,
      description:
        "Together we decide which way of working fits, and what the first concrete step looks like.",
      image: "/images/process/shared-2.webp",
      alt: "Sketched wireframes laid out while planning",
    },
    {
      title: "Clear Agreement",
      icon: ClipboardDocumentListIcon,
      description:
        "No surprises later: you know what you get, when, and at what budget before we start.",
      image: "/images/process/shared-3.webp",
      alt: "Signing off on a written agreement",
    },
  ];

  return (
    <div className="bg-white text-dark">
      <PageHero
        breadcrumb="How we work"
        eyebrow="Our Process"
        image="/images/page-how-we-work.svg"
        title="How We Work"
        subtitle="At C-Shine Digital, we are not just a team; we are your technology partners. We blend innovation, creativity, and expertise to drive your success."
      />

      <BackgroundPattern variant="light" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Eyebrow className="mb-6">Our process</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
              The same start, a different path
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every engagement begins the same way. What happens after the
              agreement depends on how we work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sharedSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white
                  border border-neutral-200 shadow-sm
                  hover:border-cshine-blue-500/30 hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                    shadow-cshine-blue-500/30 group-hover:scale-110 transition-transform duration-300"
                  >
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 pt-8">
                  <h3
                    className="text-xl font-semibold text-midnight-900 mb-3
                    group-hover:text-cshine-blue-600 transition-colors duration-300"
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
          <div className="mt-20 mb-10 flex items-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-neutral-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Then, depending on the mode
            </span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          <ProcessTracks />

          {/* CTA */}
          <div className="text-center mt-16">
            <a href="/#contact" className="btn-primary">
              Start Your Project
            </a>
          </div>
        </div>
      </BackgroundPattern>
    </div>
  );
};

export default HowWeWorkPage;
