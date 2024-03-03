const Services = () => {
  const services = [
    {
      title: "App Development",
      description:
        "Crafting user-friendly and feature-rich mobile applications.",
      image: "images/app.png",
      labels: ["Mobile", "UX", "Performance"],
    },
    {
      title: "Web Development",
      description: "Building modern and responsive websites for your business.",
      image: "images/web-development.png",
      labels: ["Responsive", "Frontend", "Backend"],
    },
    {
      title: "UX/UI Design",
      description: "Creating intuitive and visually stunning user experiences.",

      image: "images/ux-ui.png",
      labels: ["Design", "Prototyping"],
    },
    {
      title: "Consulting Services",
      description: "Unlocking potential through expert consultants.",

      image: "images/consulting-services.png",

      labels: ["Consulting", "Advisory"],
    },
  ];
  return (
    <section className="services">
      <div id="services" className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-center mb-8">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-cshine-blue-500 shadow-sm hover:shadow-md hover:shadow-cshine-blue-500 bg-white"
              >
                <div className="relative">
                  <div
                    className="w-32 h-32 mx-auto mt-8 bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${service.image})`,
                    }}
                  ></div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {service.labels.map((label, index) => (
                        <span
                          key={index}
                          className="bg-primary text-white text-center px-2 py-1 rounded-full text-xs"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
