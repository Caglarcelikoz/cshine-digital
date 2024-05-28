"use client";
import { Display } from "@styled-icons/bootstrap";
import { Mobile, ShoppingCart } from "@styled-icons/entypo";
import { DesignServices } from "@styled-icons/material/DesignServices";
import { People } from "@styled-icons/material-rounded";
import Breadcrumb from "@/components/BreadCrumb";
const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We develop web applications tailored to your brand with our expert web development team.",
      icon: Display,
    },
    {
      title: "Mobile Development",
      description:
        "Develop cutting-edge mobile applications for iOS, Android, or cross-platform environments, prioritizing seamless performance and user satisfaction.",
      icon: Mobile,
    },
    {
      title: "IT Consultancy",
      description:
        "Access tailored solutions and strategic guidance from our IT consultancy team, empowering your business with innovative technologies and robust IT strategies.",
      icon: People,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Efficient e-commerce platforms with secure payment gateways for a seamless shopping experience.",
      icon: ShoppingCart,
    },

    {
      title: "Digital Marketing",
      description:
        "Boost your online presence and engage your audience with our strategic digital marketing services.",
      icon: Display,
    },
    {
      title: "UI/UX Design",
      description:
        "Enhance user satisfaction and conversion rates with intuitive and visually appealing interfaces.",
      icon: DesignServices,
    },
  ];

  return (
    <>
      <section className="mt-24 ">
        <div className="container mx-auto">
          <Breadcrumb current="Services" />
        </div>
      </section>
      <section className="relative text-white py-12">
        <div
          className="absolute inset-0 w-full bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/services.png')",
          }}
        ></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl px-4">
            At C-Shine Digital, we are dedicated to providing top-notch IT
            services. Whether you are a startup or a large enterprise, we have
            the expertise to help you succeed with high-quality software
            solutions tailored to your needs.
          </p>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {services.map((service, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-9 rounded-[20px] bg-white p-10 shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 md:px-7 xl:px-10">
                  <div className="mb-4 flex items-center">
                    <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-cshine-blue-500">
                      <service.icon className="text-white" width={40} />
                    </div>
                    <h4 className="ml-4 text-2xl font-semibold text-dark">
                      {service.title}
                    </h4>
                  </div>
                  <div className="mb-4 h-[2px] bg-cshine-blue-500 rounded-full"></div>{" "}
                  {/* Divider */}
                  <p className="text-body-color h-24">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
