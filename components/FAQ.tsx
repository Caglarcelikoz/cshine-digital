"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";
import { Link } from "@/i18n/navigation";

type FaqItem = { question: string; answer: string };

const FAQ = () => {
  const t = useTranslations("FAQ");
  const faqs = t.raw("items") as FaqItem[];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow className="mb-6">{t("eyebrow")}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-neutral-600">{t("intro")}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`relative rounded-xl border backdrop-blur-sm transition-all duration-300
                    ${
                      isOpen
                        ? "border-cshine-blue-500/50 bg-midnight-900 shadow-lg shadow-cshine-blue-500/5"
                        : "border-white/10 bg-midnight-900/90 hover:border-cshine-blue-500/30"
                    }`}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`font-semibold transition-colors duration-300 ${
                        isOpen ? "text-cshine-blue-400" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 flex-shrink-0 text-cshine-blue-500 transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  {/* Smooth height transition via grid-rows */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <p className="text-neutral-600 mb-4">{t("ctaIntro")}</p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default FAQ;
