import Divider from "@/components/Divider";
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
      title: "Listening/Analyze",
      icon: UserIcon,
      description:
        "We listen to your needs and analyze your requirements thoroughly to understand your business objectives.",
      image: "/images/analysis.jpg",
    },
    {
      title: "Plan",
      icon: ChartBarIcon,
      description:
        "Based on the analysis, we design and plan the implementation process ensuring alignment with your goals.",
      image: "/images/plan.jpg",
    },
    {
      title: "Offer",
      icon: ClipboardListIcon,
      description:
        "We present our proposal and action plan to you. We review it together and refine the details to create a finalized proposal that satisfies both parties. Additionally, we will agree on a deadline for the initial version.",
      image: "/images/offer.jpg",
    },
    {
      title: "Develop",
      icon: CodeIcon,
      description:
        "We will commence the development of the desired product. Throughout the development phase, we actively seek feedback on the progress made, ensuring prompt adjustments can be made whenever necessary.",
      image: "/images/develop.jpg",
      URL,
    },
    {
      title: "Deliver",
      icon: CubeTransparentIcon,
      description:
        "We ensure seamless delivery of the developed solutions, adhering to quality standards and timelines.",
      image: "/images/deliver.jpg",
    },
    {
      title: "Support",
      icon: SupportIcon,
      description:
        "Our support doesn't end with delivery. We provide ongoing support to ensure smooth operation and maintenance.",
      image: "/images/support.jpg",
    },
  ];

  return (
    <>
      <div className="bg-white text-dark">
        <section className="bg-gradient-to-r bg-primary text-white pt-28 pb-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold mb-4">How we work</h1>
            <p className="text-lg text-gray-300 px-4">
              At C-Shine Digital, we are not just a team; we are your technology
              partners. We blend innovation, creativity, and expertise to drive
              your success.
            </p>
          </div>
        </section>
        <div className="container mx-auto py-12 px-4">
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
      <div className="py-4">
        <div className="container mx-auto px-6">
          <section className="mb-12 text-center">
            <div className="py-4 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2">
                    <div className="relative z-10 bg-white rounded-lg shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 px-6 py-12 md:px-12">
                      <h2 className="mb-8 text-3xl font-bold text-gray-800">
                        Work with us
                      </h2>
                      <p className="text-gray-600 mb-8">
                        Partnering with organizations across the globe, we
                        strive to deliver cutting-edge solutions and pioneer
                        innovation.
                      </p>
                      <div className="flex flex-wrap justify-center items-center">
                        <img
                          src="/images/ravago.png"
                          alt="Company Logo 1"
                          className="w-16 mx-4 my-2"
                        />
                        <img
                          src="/images/mkm.png"
                          alt="Company Logo 2"
                          className="w-40 mx-4 my-2"
                        />
                        <img
                          src="/images/telenet-logo.png"
                          alt="Company Logo 3"
                          className="w-24 mx-4 my-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:-ml-12 mt-0 md:mt-0">
                    <div className="w-full rounded-lg shadow-lg">
                      <img
                        src="/images/trusted.jpeg"
                        alt="Trusted Partners"
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HowWeWorkPage;