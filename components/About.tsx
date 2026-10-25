import { FaRocket, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

const features = [
  { key: "innovative", icon: FaRocket },
  { key: "collaborative", icon: FaUsers },
  { key: "quality", icon: FaAward },
] as const;

const values = [
  { key: "innovation", icon: FaLightbulb },
  { key: "partnership", icon: FaUsers },
  { key: "excellence", icon: FaAward },
] as const;

const About = () => {
  const t = useTranslations("AboutSection");

  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 md:mb-20">
          {features.map((feature) => (
            <div key={feature.key} className="group">
              <div
                className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-white to-neutral-50/50 
                border border-neutral-100 hover:border-cshine-blue-500/20 transition-all duration-300 
                hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div
                        className="absolute inset-0 bg-cshine-blue-500/10 rounded-full blur-xl 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div
                        className="relative flex h-16 w-16 items-center justify-center rounded-full 
                        bg-white border-2 border-cshine-blue-500/20 group-hover:border-cshine-blue-500 
                        group-hover:bg-cshine-blue-500 transition-all duration-300 shadow-sm"
                      >
                        <feature.icon
                          className="h-8 w-8 text-cshine-blue-500 group-hover:text-white 
                          transition-colors duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold text-midnight-900">
                      {t(`features.${feature.key}.title`)}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {t(`features.${feature.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/studio-belgium.svg"
                alt={t("imageAlt")}
                width={600}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
                unoptimized
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-midnight-900 mb-4">
                  {t("whyTitle")}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t("whyBody")}
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                {values.map((value) => (
                  <div key={value.key} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-lg 
                        bg-gradient-to-r from-cshine-blue-500/10 to-cyan-500/10 
                      
                      
                       "
                      >
                        <value.icon className="h-5 w-5 text-cshine-blue-500 " />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-midnight-900 ">
                        {t(`values.${value.key}.title`)}
                      </h4>
                      <p className="text-neutral-600 mt-1">
                        {t(`values.${value.key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link href="/how-we-work" className="btn-primary">
                  {t("cta")}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default About;
