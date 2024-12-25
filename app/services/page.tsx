import Breadcrumb from "@/components/BreadCrumb";
import Services from "@/components/Services";
const ServicesPage = () => {
  return (
    <>
      <section className="mt-20">
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
      <Services showTitle={false} />
    </>
  );
};

export default ServicesPage;
