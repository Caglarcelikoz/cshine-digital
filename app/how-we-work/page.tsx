"use client";
import Breadcrumb from "@/components/BreadCrumb";
import Divider from "@/components/Divider";
import Partners from "@/components/Partners";
import {
  UserIcon,
  ClipboardListIcon,
  CodeIcon,
  CubeTransparentIcon,
  SupportIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

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
      icon: ChartBarIcon,
      description:
        "Based on the analysis, we design and plan the implementation process ensuring alignment with your goals.",
      image: "/images/plan.jpg",
    },
    {
      title: "Proposal & Agreement",
      icon: ClipboardListIcon,
      description:
        "We present our proposal and action plan to you. We review it together and refine the details to create a finalized proposal that satisfies both parties. Additionally, we will agree on a deadline for the initial version.",
      image: "/images/offer.jpg",
    },
    {
      title: "Develop & Implement",
      icon: CodeIcon,
      description:
        "We are all set to embark on bringing your vision to life! As we dive into development, your input remains key. We actively seek your feedback throughout this phase, ensuring agility to adapt and refine promptly.",
      image: "/images/develop.jpg",
      URL,
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
      icon: SupportIcon,
      description:
        "Our support doesn't end with delivery. We provide ongoing support to ensure smooth operation and maintenance.",
      image: "/images/support.jpg",
    },
  ];

  return (
    <>
      <div className="bg-white text-dark">
        <section className="mt-24 ">
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

        <div className="container mx-auto py-8 px-4">
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
      <Divider />
      <Partners />
    </>
  );
};

export default HowWeWorkPage;
