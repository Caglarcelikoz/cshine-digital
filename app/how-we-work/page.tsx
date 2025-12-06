import Breadcrumb from "@/components/BreadCrumb";
import { Metadata } from "next";

import {
  UserIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  LifebuoyIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How We Work - C-Shine Digital | Our Development Process",
  description:
    "Learn about our proven 6-step development process: Listen & Analyze, Plan & Design, Proposal & Agreement, Develop & Implement, Deliver & QA, Ongoing Support.",
  keywords: [
    "software development process",
    "agile development",
    "project management",
    "development methodology",
    "IT project workflow",
    "software development lifecycle",
    "Belgium development process",
    "custom software development",
  ],
  openGraph: {
    title: "How We Work - C-Shine Digital",
    description:
      "Our proven 6-step development process ensures successful project delivery. From analysis to ongoing support, we guide you through every phase.",
    type: "website",
    url: "https://www.cshinedigital.com/how-we-work",
    siteName: "C-Shine Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work - C-Shine Digital",
    description:
      "Our proven 6-step development process ensures successful project delivery.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com/how-we-work",
  },
};

const HowWeWorkPage = () => {
  const services = [
    {
      title: "Listen & Analyze",
      icon: UserIcon,
      description:
        "We listen to your needs and analyze your requirements thoroughly to understand your business goals.",
      image: "/images/analysis.jpg",
    },
    {
      title: "Plan & Design",
      icon: LightBulbIcon,
      description:
        "Based on the analysis, we design and plan the implementation process ensuring alignment with your goals.",
      image: "/images/plan.jpg",
    },
    {
      title: "Proposal & Agreement",
      icon: ClipboardDocumentListIcon,
      description:
        "We present our proposal and action plan to you. We review it together and refine the details to create a finalized proposal that satisfies both parties. Additionally, we will agree on a deadline for the initial version.",
      image: "/images/offer.jpg",
    },
    {
      title: "Develop & Implement",
      icon: CodeBracketIcon,
      description:
        "We are all set to embark on bringing your vision to life! As we dive into development, your input remains key. We actively seek your feedback throughout this phase, ensuring agility to adapt and refine promptly.",
      image: "/images/develop.jpg",
    },
    {
      title: "Deliver & Quality Assurance",
      icon: CubeTransparentIcon,
      description:
        "We ensure seamless delivery of the developed solutions, adhering to quality standards and timelines.",
      image: "/images/deliver.jpg",
    },
    {
      title: "Ongoing Support & Maintenance",
      icon: LifebuoyIcon,
      description:
        "Our support doesn't end with delivery. We provide ongoing support to ensure smooth operation and maintenance.",
      image: "/images/support.jpg",
    },
  ];

  return (
    <>
      <div className="bg-white text-dark">
        <section className="mt-20 ">
          <div className="container mx-auto">
            <Breadcrumb current="How we work" />
          </div>
        </section>
        <section className="relative text-white py-16">
          <div
            className="absolute inset-0 w-full bg-cover bg-center brightness-50"
            style={{
              backgroundImage: "url('/images/our-services.jpg')",
            }}
          ></div>
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="heading-1">How We Work</h1>
            <p className="text-lg md:text-xl px-4">
              At C-Shine Digital, we are not just a team; we are your technology
              partners. We blend innovation, creativity, and expertise to drive
              your success.
            </p>
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-10" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/30 to-transparent" />
          </div>

          <div
            className="absolute inset-0 z-0 opacity-[0.2]"
            style={{
              backgroundImage: `radial-gradient(circle at center, #1e293b 0.8px, transparent 0.8px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="container mx-auto py-20 px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 overflow-hidden relative"
                >
                  <Image
                    src={service.image}
                    width={100}
                    height={100}
                    alt={service.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-cshine-blue-500 p-2">
                    <service.icon className="h-10 w-10 text-white " />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold my-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWorkPage;
