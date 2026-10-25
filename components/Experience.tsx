"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  LifebuoyIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

const ProcessStep = ({
  number,
  title,
  description,
  Icon,
  isLast = false,
}: {
  number: string;
  title: string;
  description: string;
  Icon: any;
  isLast?: boolean;
}) => (
  <div className="group relative">
    <div className="absolute -left-4 md:left-0">
      <div className="relative">
        <div
          className="w-16 h-16 bg-gradient-to-br from-cshine-blue-500 to-cyan-500 rounded-full flex items-center justify-center
            shadow-lg shadow-cshine-blue-500/20 ring-4 ring-cshine-blue-500/10
            group-hover:scale-105 group-hover:ring-cshine-blue-500/20 transition-all duration-300"
        >
          <Icon className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-cshine-blue-500">
          <span
            className="text-base font-bold bg-gradient-to-r from-cshine-blue-500 to-cyan-500 bg-clip-text text-transparent"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {number}
          </span>
        </div>
      </div>
    </div>

    <div className="pl-20 md:pl-28 pb-12">
      <h3 className="text-xl font-semibold text-midnight-900 mb-2 group-hover:text-cshine-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>

    {!isLast && (
      <div
        className="absolute left-[calc(2rem-1px)] top-16 bottom-0 w-[2px] bg-gradient-to-b from-cshine-blue-500/40 via-cshine-blue-500/20 to-transparent"
        aria-hidden="true"
      />
    )}
  </div>
);

const Experience = () => {
  const reduceMotion = useReducedMotion();

  /**
   * Every engagement starts the same way — listening, scoping, agreeing — so
   * these three steps are genuinely shared across all three modes. What happens
   * *after* the agreement differs per mode, which is why the timeline forks
   * below instead of running one six-step process. See CONTEXT.md.
   */
  const sharedSteps = [
    {
      number: "1",
      title: "Listen & Understand",
      description:
        "We map out what you need, what you already have running, and where it hurts today.",
      Icon: UserIcon,
    },
    {
      number: "2",
      title: "Scope & Approach",
      description:
        "Together we decide which way of working fits, and what the first concrete step looks like.",
      Icon: LightBulbIcon,
    },
    {
      number: "3",
      title: "Clear Agreement",
      description:
        "No surprises later: you know what you get, when, and at what budget before we start.",
      Icon: ClipboardDocumentListIcon,
    },
  ];

  const modeTracks = [
    {
      slug: "product-build",
      eyebrow: "Mode 01 · Product build",
      title: "Build & launch",
      description:
        "Short cycles, working software early, and updates that keep running after launch.",
      Icon: CodeBracketIcon,
    },
    {
      slug: "it-partner",
      eyebrow: "Mode 02 · Full IT partner",
      title: "Set up & keep running",
      description:
        "We set up brand, site, hosting and email, then stay on as your single point of contact.",
      Icon: LifebuoyIcon,
    },
    {
      slug: "embedded",
      eyebrow: "Mode 03 · Embedded developer",
      title: "Work inside your team",
      description:
        "Your tools, your repos, your standup. Productive in your codebase within days, not weeks.",
      Icon: CubeTransparentIcon,
    },
  ];

  return (
    <BackgroundPattern variant="light" className="py-20">
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow className="mb-6">How we work</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
              The same start, a different path
            </h2>
            <p className="text-lg text-neutral-600">
              Every project begins the same way. Where it goes next depends on
              the way of working that fits you.
            </p>
          </div>

          <div className="relative pl-4 md:pl-8">
            {sharedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                viewport={{ once: true }}
              >
                <ProcessStep
                  {...step}
                  isLast={index === sharedSteps.length - 1}
                />
              </motion.div>
            ))}
          </div>

          {/* Fork: the shared spine ends here and the three modes diverge. */}
          <div className="mt-4 flex items-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 bg-neutral-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Then, depending on the mode
            </span>
            <div className="h-px flex-1 bg-neutral-300" />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {modeTracks.map((track, index) => (
              <motion.div
                key={track.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${track.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-neutral-200
                    bg-white p-6 shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:border-cshine-blue-500/30 hover:shadow-xl"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl
                      bg-gradient-to-br from-cshine-blue-500/10 to-cyan-500/10
                      text-cshine-blue-600"
                  >
                    <track.Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cshine-blue-700">
                    {track.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold text-midnight-900 transition-colors duration-300 group-hover:text-cshine-blue-600">
                    {track.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {track.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 font-semibold text-cshine-blue-600 hover:text-cshine-blue-700 transition-colors"
            >
              See how each step works in detail
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Experience;
