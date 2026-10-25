"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does C-Shine Digital offer?",
      answer:
        "C-Shine Digital specializes in custom web development, mobile app development, and IT consulting services. From business websites and e-commerce platforms to complex web applications, we deliver scalable digital solutions tailored to each client's needs.",
    },
    {
      question: "What types of projects do you take on?",
      answer:
        "We handle projects of various scales - from small business websites to complex enterprise applications. This includes custom web applications, mobile apps, e-commerce solutions, and technical consulting for larger organizations. Each project is approached with the same commitment to quality and attention to detail.",
    },
    {
      question: "How is project pricing determined?",
      answer:
        "Project costs are determined based on several factors including scope, complexity, timeline, and specific requirements. We offer flexible pricing models including fixed-price quotes for defined projects and time-based rates for consulting services. Each quote is customized to ensure the best value for your specific needs.",
    },
    {
      question: "What is your development approach?",
      answer:
        "We follow an agile development methodology with clear communication and regular updates. The process begins with thorough requirement gathering, followed by iterative development phases with regular client feedback. This ensures the final product aligns perfectly with the client's vision while maintaining high quality standards.",
    },
    {
      question: "Which technologies do you work with?",
      answer:
        "C-Shine Digital is technology-agnostic, choosing the best tools for each specific project. We have extensive experience with modern web technologies including React, Next.js, Node.js, and various database solutions. For mobile development, we utilize cross-platform technologies to ensure cost-effective and efficient delivery.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. Our support packages can include hosting management, regular updates, performance monitoring, and ongoing optimizations to ensure your digital solution continues to perform optimally.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <BackgroundPattern variant="light" className="py-14 md:py-20">
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow className="mb-6">Good to know</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-midnight-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Common questions about working with C-Shine Digital
            </p>
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
            <p className="text-neutral-600 mb-4">Have a specific question?</p>
            <a href="/#contact" className="btn-primary">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default FAQ;
