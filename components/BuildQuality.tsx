import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

type Quality = {
  title: string;
  description: string;
};

// The qualities behind every build — "how well it's made", to sit under
// Capabilities ("what we build") on /services. Deliberately framework-agnostic:
// we pick the right tools per project, so no specific stack is named here.
// Copy lives in messages under BuildQuality.items.
const BuildQuality = () => {
  const t = useTranslations("BuildQuality");
  const qualities = t.raw("items") as Quality[];
  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            {t("intro")}
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-4xl mx-auto">
          {qualities.map((q) => (
            <li
              key={q.title}
              className="flex items-start gap-3.5 py-3.5 border-b border-neutral-200/70"
            >
              <span
                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md
                  bg-cshine-blue-500/[0.12] text-cshine-blue-600"
              >
                <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-midnight-900">
                  {q.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {q.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BackgroundPattern>
  );
};

export default BuildQuality;
