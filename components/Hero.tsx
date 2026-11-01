import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { engagementModes } from "@/lib/engagementModes";
import BackgroundPattern from "./layout/BackgroundPattern";

/* Each formule lights up in turn: one 9s cycle, a third each. */
const HIGHLIGHT_DELAYS = [
  "[animation-delay:0s]",
  "[animation-delay:3s]",
  "[animation-delay:6s]",
];

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const Hero = () => {
  const t = useTranslations("Hero");
  const tModes = useTranslations("Modes");
  return (
    <BackgroundPattern
      variant="dark"
      className="min-h-[100dvh] lg:min-h-fit pt-24 pb-12 lg:pt-20 lg:pb-16"
    >
      <div className="container mx-auto px-4 z-10 flex min-h-[calc(100dvh-9rem)] lg:min-h-0 flex-col justify-center">
        <div className="relative w-full h-[clamp(110px,26vh,160px)] sm:h-[200px] lg:h-[300px] mb-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/c-shine-digital-transparent.png"
              alt="C-Shine Digital"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t.rich("title", {
              br: () => <br />,
              highlight: (chunks) => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cshine-blue-400 to-cshine-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80">
            {t("subtitle")}
          </p>
        </div>

        {/* The three formules, grouped under one bracket so they read as
            options side by side, not as steps. They light up in turn; hovering
            the strip pauses that and highlights the one under the pointer. */}
        <nav
          aria-label={t("modesLabel")}
          className="relative w-full max-w-5xl mx-auto mt-10 md:mt-12"
        >
          <div className="flex items-center gap-3 md:px-5" aria-hidden="true">
            <span className="h-3 flex-1 translate-y-[7px] rounded-tl-[10px] border-l-[1.5px] border-t-[1.5px] border-cshine-blue-300/45" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-cshine-blue-300 whitespace-nowrap">
              {t("modesLabel")}
            </span>
            <span className="h-3 flex-1 translate-y-[7px] rounded-tr-[10px] border-r-[1.5px] border-t-[1.5px] border-cshine-blue-300/45" />
          </div>

          <ul className="group/strip grid md:grid-cols-3 mt-1">
            {engagementModes.map((mode, index) => (
              <li
                key={mode.slug}
                className="border-b border-white/[0.08] md:border-b-0 md:[&+&]:shadow-[-1px_0_0_rgba(255,255,255,0.08)]"
              >
                <Link
                  href={mode.href}
                  className="group/mode relative grid h-full grid-cols-[1fr_auto] items-start gap-x-4 gap-y-1 py-4 pl-4 pr-1 text-left
                    md:pl-5 md:pr-5 md:pt-6 md:pb-2
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cshine-blue-400 focus-visible:rounded-lg"
                >
                  {/* Highlight line: left edge on mobile, top edge on desktop. */}
                  <span
                    className={`absolute left-0 top-4 bottom-4 w-0.5 md:left-5 md:right-5 md:top-[-1px] md:bottom-auto md:h-0.5 md:w-auto
                      rounded-full bg-cshine-blue-500 opacity-0
                      animate-hero-pick-line ${HIGHLIGHT_DELAYS[index]} motion-reduce:animate-none
                      group-hover/strip:animate-none
                      group-hover/mode:!opacity-100 group-focus-visible/mode:!opacity-100`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-base sm:text-lg font-bold text-white transition-colors
                      animate-hero-pick-text ${HIGHLIGHT_DELAYS[index]} motion-reduce:animate-none
                      group-hover/strip:animate-none
                      group-hover/mode:text-cshine-blue-300 group-focus-visible/mode:text-cshine-blue-300`}
                  >
                    {tModes(`${mode.slug}.title`)}
                  </span>
                  <Arrow
                    className="row-span-2 mt-1 h-5 w-5 text-cshine-blue-300 opacity-60 transition-all duration-300
                      group-hover/mode:translate-x-1 group-hover/mode:opacity-100"
                  />
                  <span className="text-sm leading-relaxed text-white/60">
                    {tModes(`${mode.slug}.forWho`)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
          <Link href="/services" className="btn-primary on-dark">
            {t("primaryCta")}
            <Arrow className="w-5 h-5" />
          </Link>

          <Link href="/how-we-work" className="btn-secondary on-dark">
            {t("secondaryCta")}
          </Link>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Hero;
