"use client";
import { Display } from "@styled-icons/bootstrap";
import { Mobile, ShoppingCart } from "@styled-icons/entypo";
import { DesignServices } from "@styled-icons/material/DesignServices";
import { AutoAwesome } from "@styled-icons/material/AutoAwesome";
import { People } from "@styled-icons/material-rounded";
import BackgroundPattern from "./layout/BackgroundPattern";

const ServiceSection = ({ service }: { service: any }) => (
  <div className="group relative h-full flex">
    {/* Main Card */}
    <div
      className="relative bg-white rounded-3xl p-8 lg:p-10 
      border border-gray-200 shadow-sm
      hover:shadow-xl hover:border-cshine-blue-500/30
      transition-all duration-300 ease-out hover:-translate-y-2
      overflow-hidden flex flex-col w-full"
    >
      {/* Top Accent Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 
        bg-gradient-to-r from-cshine-blue-500 via-cyan-500 to-cshine-blue-500
        group-hover:from-cshine-blue-400 group-hover:via-cyan-400 group-hover:to-cshine-blue-400
        transition-all duration-300"
      />

      {/* Background Pattern on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-br from-cshine-blue-500/3 via-transparent to-cyan-500/3"
      />

      <div className="relative flex flex-col flex-grow">
        {/* Icon and Title - Same Line */}
        <div className="flex items-center justify-center gap-3 mb-4 flex-shrink-0">
          <div className="relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-cshine-blue-500/20 to-cyan-500/20 
              rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div
              className="relative flex h-12 w-12 items-center justify-center 
              rounded-full bg-gradient-to-br from-cshine-blue-500 to-cyan-500
              shadow-md shadow-cshine-blue-500/20
              group-hover:shadow-lg group-hover:shadow-cshine-blue-500/30
              transition-all duration-300 group-hover:scale-110"
            >
              <service.icon className="text-white" width={20} height={20} />
            </div>
          </div>
          <h3
            className="text-xl font-semibold text-midnight-900
            group-hover:text-cshine-blue-600 transition-colors duration-300"
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-center leading-relaxed mb-8 flex-shrink-0
          group-hover:text-gray-700 transition-colors duration-300"
        >
          {service.description}
        </p>

        {/* Features Section - Flex grow to push to bottom */}
        <div className="flex-grow flex flex-col">
          <div className="flex items-center justify-center gap-2 mb-6 flex-shrink-0">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3">
              Included Services
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          <div className="space-y-2.5">
            {service.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="group/feature relative flex items-center gap-3 px-4 py-3 rounded-xl
                bg-gradient-to-r from-gray-50 to-gray-50/50
                border border-gray-200/60
                hover:border-cshine-blue-300/60
                hover:bg-gradient-to-r hover:from-cshine-blue-50/40 hover:to-cyan-50/30
                hover:shadow-sm hover:shadow-cshine-blue-500/10
                transition-all duration-300"
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl
                  bg-gradient-to-b from-cshine-blue-500 to-cyan-500
                  opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300"
                />

                {/* Icon circle */}
                <div className="flex-shrink-0 relative">
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-full
                    bg-gradient-to-br from-cshine-blue-500/10 to-cyan-500/10
                    group-hover/feature:from-cshine-blue-500/20 group-hover/feature:to-cyan-500/20
                    transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-cshine-blue-500
                      group-hover/feature:text-cshine-blue-600
                      transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <span
                  className="text-sm text-gray-700 font-medium leading-relaxed
                  group-hover/feature:text-gray-900 transition-colors duration-300"
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Hover Indicator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-transparent via-cshine-blue-500/0 to-transparent
        group-hover:via-cshine-blue-500/60
        transition-all duration-300"
      />
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
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces and seamless user experiences that convert visitors into customers.",
      icon: DesignServices,
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "User Testing",
        "Design Systems",
        "Accessibility",
      ],
    },
    {
      title: "Logo & Branding",
      description:
        "Professional logo design and complete brand identity packages to establish your unique market presence.",
      icon: AutoAwesome,
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Business Cards",
        "Letterheads",
        "Social Media Assets",
        "Brand Strategy",
      ],
    },
    {
      title: "Web Hosting & Cloud",
      description:
        "Reliable hosting and cloud solutions with 99.9% uptime guarantee, security, and performance optimization.",
      icon: People,
      features: [
        "Shared Hosting",
        "VPS & Cloud Hosting",
        "AWS/Azure Setup",
        "SSL Certificates",
        "Daily Backups",
        "24/7 Support",
      ],
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cshine-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {showTitle && (
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cshine-blue-500/10 to-cyan-500/10 text-cshine-blue-600 text-sm font-semibold mb-6">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-midnight-900 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
