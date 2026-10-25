"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export type GallerySlide = {
  src: string;
  alt: string;
  /** shown in the browser-chrome URL bar while this slide is active */
  url: string;
  label: string;
};

const AUTOPLAY_MS = 4200;

const CaseGallery = ({ slides }: { slides: GallerySlide[] }) => {
  const t = useTranslations("CaseGallery");
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
    // `current` resets the interval after manual navigation
  }, [paused, current, slides.length]);

  const go = (i: number) => setCurrent((i + slides.length) % slides.length);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e5484d]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e08600]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2f9e6f]" />
          <span className="ml-2 flex-1 truncate rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-center text-[11px] text-neutral-400">
            {slides[current].url}
          </span>
        </div>
        <div className="relative aspect-[16/10]">
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              sizes="(max-width: 740px) 100vw, 50vw"
              className={`object-cover object-top transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-neutral-400">
          {current + 1}/{slides.length} · {slides[current].label}
        </span>
        <div className="flex gap-1.5" role="tablist" aria-label={t("screens")}>
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => go(i)}
              aria-label={s.label}
              aria-selected={i === current}
              role="tab"
              className={`h-2 w-2 rounded-full transition ${
                i === current
                  ? "scale-125 bg-cshine-blue-600"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label={t("previous")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition hover:border-cshine-blue-500 hover:text-cshine-blue-600"
          >
            <ChevronLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label={t("next")}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition hover:border-cshine-blue-500 hover:text-cshine-blue-600"
          >
            <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseGallery;
