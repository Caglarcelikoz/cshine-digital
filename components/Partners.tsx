import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      name: "Telenet",
      logo: "/images/telenet.png",
      url: "https://www.telenet.be/",
    },
    {
      name: "MKM Solutions",
      logo: "/images/mkm.png",
      url: "#",
    },
    {
      name: "Ravago",
      logo: "/images/ravago-logo.png",
      url: "https://www.ravago.com/",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-midnight-900 via-midnight-800 to-midnight-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/50 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, #04C4D4 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-4 bg-gradient-to-r from-cshine-blue-500/20 to-cyan-500/20 rounded-xl 
                    opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div
                    className="relative h-32 md:h-40 flex items-center justify-center 
                    bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10
                    group-hover:border-cshine-blue-500/30 transition-all duration-300"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.name === "Ravago" ? 100 : 300}
                        height={partner.name === "Ravago" ? 50 : 150}
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
    </section>
  );
};

export default Partners;