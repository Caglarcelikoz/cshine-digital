"use client";
import { Display } from "@styled-icons/bootstrap";
import { Mobile, ShoppingCart } from "@styled-icons/entypo";
import { DesignServices } from "@styled-icons/material/DesignServices";
import { People } from "@styled-icons/material-rounded";
import BackgroundPattern from "./layout/BackgroundPattern";

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
      {service.features.map((feature: string, index: number) => (
        <div
          key={index}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-cshine-blue-500" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
);

const Services = ({ showTitle = true }) => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom web solutions tailored to your business needs, from simple websites to complex web applications.",
      icon: Display,
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Integration",
        "Custom Functionality",
        "Content Management",
        "API Integration",
      ],
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: Mobile,
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Updates",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "End-to-end e-commerce development to help you reach customers and grow your online business.",
      icon: ShoppingCart,
      features: [
        "Custom E-commerce",
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
        "Security Features",
        "Analytics Integration",
      ],
    },
    {
      title: "IT Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions and optimize your digital presence.",
      icon: People,
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Process Optimization",
        "Security Consulting",
        "Performance Analysis",
        "Growth Planning",
      ],
    },
  ];

  return (
    <BackgroundPattern variant="light" className="py-24">
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
    </BackgroundPattern>
  );
};

export default Services;
