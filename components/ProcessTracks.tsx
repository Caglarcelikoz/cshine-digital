"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaRocket, FaServer, FaUsers } from "react-icons/fa";
import type { EngagementModeSlug } from "@/lib/engagementModes";

type Step = {
  title: string;
  description: string;
  /** Describes the photo for screen readers; empty where it is decorative. */
  alt: string;
};

type Track = {
  slug: EngagementModeSlug;
  icon: typeof FaRocket;
  /** Illustration prefix: /images/process/<prefix>-<n>.svg */
  imagePrefix: string;
};

/**
 * The three post-agreement tracks. Steps are numbered from 4 because steps 1–3
 * (listen, scope, agree) are shared across every mode and are shown above this
 * component — mirroring the homepage's "same start, a different path".
 * Step copy lives in messages under ProcessTracks.steps.<slug>; the tab label
 * and forWho line reuse the mode's own copy (Modes.<slug>).
 */
const tracks: Track[] = [
  { slug: "product-build", icon: FaRocket, imagePrefix: "pb" },
  { slug: "it-partner", icon: FaServer, imagePrefix: "itp" },
  { slug: "embedded", icon: FaUsers, imagePrefix: "emb" },
];

const ProcessTracks = () => {
  const t = useTranslations("ProcessTracks");
  const tModes = useTranslations("Modes");
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
        aria-label={t("tablistLabel")}
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
              {tModes(`${track.slug}.title`)}
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
            {tModes(`${track.slug}.forWho`)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw(`steps.${track.slug}`) as Step[]).map((step, stepIndex) => (
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
                    src={`/images/process/${track.imagePrefix}-${stepIndex + 1}.svg`}
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
