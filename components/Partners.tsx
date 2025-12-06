import Image from "next/image";
import BackgroundPattern from "./layout/BackgroundPattern";

const Partners = () => {
  const partners = [
    {
      name: "Ravago",
      logo: "/images/ravago-logo.png",
      url: "https://www.ravago.com/",
      width: 100,
      height: 50,
    },
    {
      name: "MKM Solutions",
      logo: "/images/mkm.png",
      url: "https://www.mkmsolutions.be/",
      width: 350,
      height: 150,
    },
    {
      name: "Pauwels Consulting",
      logo: "/images/logo-pauwels.png",
      url: "https://www.pauwelsconsulting.com/nl-be/",
      width: 350,
      height: 150,
    },
    {
      name: "Decem Energy",
      logo: "/images/decem-energy-logo.png",
      url: "#",
      width: 350,
      height: 150,
    },
    {
      name: "MKM Carrosserie",
      logo: "/images/mkm-carrosserie.png",
      url: "https://www.mkmcarrosserie.be/",
      width: 350,
      height: 150,
    },
    {
      name: "Telenet",
      logo: "/images/telenet.png",
      url: "https://www2.telenet.be/residential/nl",
      width: 200,
      height: 80,
    },
  ];

  return (
    <BackgroundPattern variant="dark" className="py-24">
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Trusted Partners
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building success through strong partnerships and collaborative
            innovation
          </p>
        </div>

        {/* Partners Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-80"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-4 bg-gradient-to-r from-cshine-blue-300/30 to-cyan-300/30 rounded-xl 
                    opacity-0 blur-xl group-hover:opacity-60 transition-opacity duration-500"
                  />
                  <div
                    className="relative h-32 md:h-40 flex items-center justify-center 
                    bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10
                    group-hover:border-cshine-blue-300/40 transition-all duration-300"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.width || 300}
                        height={partner.height || 150}
                        className="h-auto opacity-70 group-hover:opacity-100 
                          transition-opacity duration-300 filter brightness-0 invert 
                          group-hover:brightness-100 group-hover:invert-0"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg 
              bg-gradient-to-r from-cshine-blue-500 to-cyan-500 
              text-white font-semibold transition-all duration-300 
              hover:shadow-glow hover:scale-105"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Partners;