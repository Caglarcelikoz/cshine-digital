"use client";
import { Display } from "@styled-icons/bootstrap";
import { Mobile, ShoppingCart } from "@styled-icons/entypo";
import { DesignServices } from "@styled-icons/material/DesignServices";
import { People } from "@styled-icons/material-rounded";

const ServiceSection = ({ service }: { service: any }) => (
  <div className="relative p-8 lg:p-10 rounded-2xl border border-white/10 bg-midnight-900">
    {/* Service Header */}
    <div className="space-y-4">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-40" />
            <div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl 
              bg-gradient-to-r from-cshine-blue-500 to-cyan-500"
            >
              <service.icon className="text-white" width={32} />
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed">
        {service.description}
      </p>
    </div>

    {/* Features List */}
    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {service.features?.map((feature: string, idx: number) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-3 rounded-xl border border-cshine-blue-500"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cshine-blue-500 to-cyan-500" />
          <span className="text-gray-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const Services = ({ showTitle = true }: { showTitle?: boolean }) => {
  const services = [
    {
      title: "Web Development",
      description:
        "We develop web applications tailored to your brand with our expert web development team.",
      icon: Display,
      features: [
        "Responsive web applications",
        "Modern frontend frameworks",
        "Scalable backend solutions",
        "Performance optimization",
      ],
    },
    {
      title: "Mobile Development",
      description:
        "Develop cutting-edge mobile applications for iOS, Android, or cross-platform environments, prioritizing seamless performance and user satisfaction.",
      icon: Mobile,
      features: [
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "User-centric design",
        "Seamless integration",
      ],
    },
    {
      title: "IT Consultancy",
      description:
        "Access tailored solutions and strategic guidance from our IT consultancy team, empowering your business with innovative technologies and robust IT strategies.",
      icon: People,
      features: [
        "Technology strategy",
        "Digital transformation",
        "System architecture",
        "Process optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Efficient e-commerce platforms with secure payment gateways for a seamless shopping experience.",
      icon: ShoppingCart,
      features: [
        "Secure payment integration",
        "Inventory management",
        "User-friendly interface",
        "Mobile commerce ready",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence and engage your audience with our strategic digital marketing services.",
      icon: Display,
      features: [
        "SEO optimization",
        "Social media strategy",
        "Content marketing",
        "Analytics & reporting",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Enhance user satisfaction and conversion rates with intuitive and visually appealing interfaces.",
      icon: DesignServices,
      features: [
        "User research",
        "Interface design",
        "Prototyping",
        "Usability testing",
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/30 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at center, #1e293b 0.8px, transparent 0.8px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto px-4 z-10">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
