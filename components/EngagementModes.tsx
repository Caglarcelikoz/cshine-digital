import { useTranslations } from "next-intl";
import { FaBolt, FaPuzzlePiece } from "react-icons/fa";
import { Link } from "@/i18n/navigation";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";
import { engagementModes, MODE_CTA_HREF } from "@/lib/engagementModes";

type EngagementModesProps = {
  showTitle?: boolean;
  variant?: "dark" | "light";
};

const EngagementModes = ({
  showTitle = true,
  variant = "light",
}: EngagementModesProps) => {
  const t = useTranslations("EngagementModes");
  const tModes = useTranslations("Modes");
  const dark = variant === "dark";
  return (
    <BackgroundPattern variant={variant} className="py-14 md:py-20">
      <div className="container relative mx-auto px-4">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <Eyebrow tone={dark ? "dark" : "light"} className="mb-6">
              {t("eyebrow")}
            </Eyebrow>
            <h2
              className={`text-3xl md:text-4xl font-bold text-balance mb-6 ${
                dark ? "text-white" : "text-midnight-900"
              }`}
            >
              {t("title")}
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                dark ? "text-white/70" : "text-neutral-600"
              }`}
            >
              {t("intro")}
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {engagementModes.map((mode) => (
            <div
              key={mode.slug}
              className={`group relative flex flex-col rounded-2xl p-8 border
                hover:-translate-y-1 transition-all duration-300
                ${
                  dark
                    ? "bg-white/5 backdrop-blur-sm border-white/10 hover:border-cshine-blue-500/40 hover:bg-white/[0.07]"
                    : "bg-white border-neutral-200 shadow-sm hover:border-cshine-blue-500/30 hover:shadow-xl"
                }`}
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
                  <mode.icon className="h-6 w-6" />
                </div>
                <div>
                  <span
                    className={`block text-xs font-semibold uppercase tracking-wider ${
                      dark ? "text-cshine-blue-400" : "text-cshine-blue-700"
                    }`}
                  >
                    {tModes(`${mode.slug}.eyebrow`)}
                  </span>
                  <h3
                    className={`text-xl font-bold ${
                      dark ? "text-white" : "text-midnight-900"
                    }`}
                  >
                    {tModes(`${mode.slug}.title`)}
                  </h3>
                </div>
              </div>

              <p
                className={`relative text-sm font-medium mb-3 ${
                  dark ? "text-cshine-blue-400" : "text-cshine-blue-600"
                }`}
              >
                {tModes(`${mode.slug}.forWho`)}
              </p>
              <p
                className={`relative leading-relaxed mb-6 ${
                  dark ? "text-white/70" : "text-neutral-600"
                }`}
              >
                {tModes(`${mode.slug}.description`)}
              </p>

              <ul className="relative space-y-2.5 mb-8 flex-grow">
                {(tModes.raw(`${mode.slug}.capabilities`) as string[]).map((cap) => (
                  <li
                    key={cap}
                    className={`flex items-center gap-2.5 text-sm ${
                      dark ? "text-white/80" : "text-neutral-700"
                    }`}
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

              <div
                className={`relative flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t ${
                  dark ? "border-white/10" : "border-neutral-100"
                }`}
              >
                <Link
                  href={{
                    pathname: "/services/[slug]",
                    params: { slug: mode.slug },
                  }}
                  className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300
                    ${
                      dark
                        ? "text-cshine-blue-400 group-hover:text-cshine-blue-300"
                        : "text-cshine-blue-600 group-hover:text-cshine-blue-700"
                    }`}
                >
                  {t("learnMore")}
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href={MODE_CTA_HREF}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                    dark
                      ? "text-white/60 hover:text-white/90"
                      : "text-neutral-500 hover:text-neutral-800"
                  }`}
                >
                  {tModes(`${mode.slug}.cta`)}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Aside — how we build (AI) and standalone services. Deliberately
            card-less so it reads as a footnote to the modes, not a fourth mode */}
        <div className="mt-14 md:mt-20">
          <div
            className={`h-px w-full bg-gradient-to-r from-transparent ${
              dark ? "via-white/15" : "via-neutral-300"
            } to-transparent`}
            aria-hidden="true"
          />
          <div className="grid gap-10 pt-10 md:grid-cols-2 md:gap-16 md:pt-14">
            {[
              {
                key: "ai",
                icon: FaBolt,
                label: t("aiLabel"),
                title: t("aiTitle"),
                body: t("aiBody"),
                chips: [] as string[],
              },
              {
                key: "standalone",
                icon: FaPuzzlePiece,
                label: t("standaloneLabel"),
                title: t("standaloneTitle"),
                body: t("standaloneBody"),
                chips: t.raw("standaloneServices") as string[],
              },
            ].map((item) => (
              <div key={item.key} className="relative pl-6">
                {/* Accent rail */}
                <span
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-cshine-blue-500 via-cyan-400 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className={`mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
                    dark ? "text-cshine-blue-400" : "text-cshine-blue-700"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.label}
                </div>
                <h3
                  className={`mb-3 text-xl font-bold text-balance md:text-2xl ${
                    dark ? "text-white" : "text-midnight-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    dark ? "text-white/70" : "text-neutral-600"
                  }`}
                >
                  {item.body}
                </p>
                {item.chips.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <li
                        key={chip}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium ${
                          dark
                            ? "bg-white/[0.06] text-white/85 ring-1 ring-inset ring-white/10"
                            : "bg-white/70 text-midnight-900 ring-1 ring-inset ring-neutral-200 backdrop-blur-sm"
                        }`}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-cshine-blue-500"
                          aria-hidden="true"
                        />
                        {chip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default EngagementModes;
