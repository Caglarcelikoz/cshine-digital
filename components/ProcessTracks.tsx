"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { FaRocket, FaServer, FaUsers } from "react-icons/fa";

type Step = {
  title: string;
  description: string;
  image: string;
  /** Describes the photo for screen readers; empty where it is decorative. */
  alt: string;
};

type Track = {
  slug: string;
  label: string;
  eyebrow: string;
  forWho: string;
  icon: typeof FaRocket;
  steps: Step[];
};

/**
 * The three post-agreement tracks. Steps are numbered from 4 because steps 1–3
 * (listen, scope, agree) are shared across every mode and are shown above this
 * component — mirroring the homepage's "same start, a different path".
 */
const tracks: Track[] = [
  {
    slug: "product-build",
    label: "Product build",
    eyebrow: "Mode 01",
    forWho: "For businesses with an idea and no team to build it",
    icon: FaRocket,
    steps: [
      {
        title: "Build in cycles",
        description:
          "Short sprints with working software early, so you can steer while we build instead of waiting for a reveal.",
        image: "/images/process/pb-1.svg",
        alt: "Diagram: four sprints, each shipping a larger increment, with feedback looping back between them",
      },
      {
        title: "Deliver & QA",
        description:
          "Every release is checked against the quality standards and timelines we agreed up front.",
        image: "/images/process/pb-2.svg",
        alt: "Diagram: a test run with passing checks resolving into a green build",
      },
      {
        title: "Go live",
        description:
          "Launch, monitoring and a handover that makes the product genuinely yours, not a black box.",
        image: "/images/process/pb-3.svg",
        alt: "Diagram: the launched product broadcasting outward to reach its users",
      },
      {
        title: "Updates after launch",
        description:
          "Fixes, improvements and new features as the product keeps evolving. Delivery is not the finish line.",
        image: "/images/process/pb-4.svg",
        alt: "Diagram: releases continuing along a timeline after the go-live marker",
      },
    ],
  },
  {
    slug: "it-partner",
    label: "Full IT partner",
    eyebrow: "Mode 02",
    forWho: "For companies that want one partner for everything digital",
    icon: FaServer,
    steps: [
      {
        title: "Take stock",
        description:
          "We map what you already have — site, domains, email, tools — and what needs building, fixing or replacing.",
        image: "/images/process/itp-1.svg",
        alt: "Diagram: a magnifier sweeping a scattered estate, cataloguing what it covers",
      },
      {
        title: "Set up the essentials",
        description:
          "Brand, site, hosting, domains and email, all set up and running under one roof.",
        image: "/images/process/itp-2.svg",
        alt: "Diagram: website, brand, email and domains gathered under one roof",
      },
      {
        title: "Day-to-day support",
        description:
          "Someone you can actually call when something breaks or needs to change. No ticket queue to a stranger.",
        image: "/images/process/itp-3.svg",
        alt: "Diagram: a direct line between client and studio, with the request answered",
      },
      {
        title: "Grow with you",
        description:
          "New pages, new tools, new needs — we adapt the setup as your business grows, without you re-hiring.",
        image: "/images/process/itp-4.svg",
        alt: "Diagram: the same setup growing larger across four periods",
      },
    ],
  },
  {
    slug: "embedded",
    label: "Embedded developer",
    eyebrow: "Mode 03",
    forWho: "For in-house teams that need extra engineering firepower",
    icon: FaUsers,
    steps: [
      {
        title: "Match the gap",
        description:
          "We match senior people to the gap you actually have, not to whoever happens to be free.",
        image: "/images/process/emb-1.svg",
        alt: "Diagram: a gap in the team, filled by a matched senior developer",
      },
      {
        title: "Step in",
        description:
          "Your tools, your repos, your standup. We work inside your workflow rather than imposing ours.",
        image: "/images/process/emb-2.svg",
        alt: "Diagram: stepping into the client's own board and workflow",
      },
      {
        title: "Ship alongside you",
        description:
          "The aim is to be productive in your codebase within days, not weeks, and to ship like the rest of your team.",
        image: "/images/process/emb-3.svg",
        alt: "Diagram: branches carrying commits and merging back into the client's main branch",
      },
      {
        title: "Scale up or down",
        description:
          "Per project or on a rolling contract — we scale involvement up or down as your roadmap shifts.",
        image: "/images/process/emb-4.svg",
        alt: "Diagram: a slider setting involvement between light and full",
      },
    ],
  },
];

const ProcessTracks = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  // Roving focus: arrows move between tabs and activate as they go.
  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + tracks.length) % tracks.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Ways of working"
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {tracks.map((track, index) => {
          const selected = index === active;
          return (
            <button
              key={track.slug}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${track.slug}`}
              aria-controls={`${baseId}-panel-${track.slug}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold
                transition-all duration-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-cshine-blue-600
                ${
                  selected
                    ? "surface-primary shadow-md shadow-cshine-blue-500/20"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-cshine-blue-500/40 hover:text-midnight-900"
                }`}
            >
              <track.icon className="h-4 w-4" aria-hidden="true" />
              {track.label}
            </button>
          );
        })}
      </div>

      {tracks.map((track, index) => (
        <div
          key={track.slug}
          role="tabpanel"
          id={`${baseId}-panel-${track.slug}`}
          aria-labelledby={`${baseId}-tab-${track.slug}`}
          hidden={index !== active}
        >
          <p className="text-center text-neutral-600 italic mb-8">
            {track.forWho}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {track.steps.map((step, stepIndex) => (
              <div
                key={step.title}
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white
                  border border-neutral-200 shadow-sm"
              >
                {/* Illustrations are drawn to the 8:5 card ratio, so they sit
                    flush with object-contain — no cropping, no zoom-on-hover
                    (line art shears rather than enlarging nicely). */}
                <div className="relative aspect-[8/5] w-full overflow-hidden bg-midnight-900">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-center"
                  />

                  {/* Numbering continues from the three shared steps above. */}
                  <div
                    className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center
                      rounded-full bg-white text-cshine-blue-700 font-bold text-base shadow-lg
                      ring-2 ring-cshine-blue-500/40"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {stepIndex + 4}
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-5">
                  <h3
                    className="text-lg font-semibold text-midnight-900 mb-2"
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
        </div>
      ))}
    </div>
  );
};

export default ProcessTracks;
