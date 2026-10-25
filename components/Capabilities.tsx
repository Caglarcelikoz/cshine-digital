import {
  CodeBracketIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  ServerStackIcon,
  PaintBrushIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

type Capability = {
  key: "web" | "ecommerce" | "cms" | "hosting" | "branding" | "ai";
  id?: string;
  icon: typeof CodeBracketIcon;
  highlight?: boolean;
};

const capabilities: Capability[] = [
  { key: "web", icon: CodeBracketIcon },
  { key: "ecommerce", icon: ShoppingCartIcon },
  { key: "cms", icon: Squares2X2Icon },
  { key: "hosting", icon: ServerStackIcon },
  { key: "branding", icon: PaintBrushIcon },
  { key: "ai", id: "ai-integration", icon: CpuChipIcon, highlight: true },
];

const Capabilities = () => {
  const t = useTranslations("Capabilities");
  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-600">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.key}
              id={cap.id}
              className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-300
                ${
                  cap.highlight
                    ? "border-cshine-blue-500/40 bg-gradient-to-br from-cshine-blue-500/[0.04] to-cyan-500/[0.04] shadow-sm scroll-mt-28"
                    : "border-neutral-200 bg-white shadow-sm"
                }
                hover:-translate-y-1 hover:border-cshine-blue-500/30 hover:shadow-xl`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-5
                  bg-gradient-to-br from-cshine-blue-500 to-cyan-500 text-white
                  shadow-md shadow-cshine-blue-500/20
                  group-hover:scale-110 transition-transform duration-300"
              >
                <cap.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-midnight-900 mb-2">
                {t(`items.${cap.key}.title`)}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {t(`items.${cap.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Capabilities;
