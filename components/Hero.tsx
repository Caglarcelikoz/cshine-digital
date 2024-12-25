import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  DocumentReportIcon,
  UserIcon,
  StarIcon,
} from "@heroicons/react/solid";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:min-h-fit pt-24 lg:pt-20 lg:pb-16 overflow-hidden bg-midnight-900">
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

      {/* Main Content */}
      <div className="container relative mx-auto px-4 z-10 flex min-h-[calc(100vh-6rem)] lg:min-h-0 flex-col justify-center">
        {/* Logo Section */}
        <div className="relative w-full h-[160px] sm:h-[200px] lg:h-[300px] mb-8">
          <div className="relative w-full h-full">
            <Image
              src="/images/c-shine-digital-transparent.png"
              alt="C-Shine Digital"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforming Ideas into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cshine-blue-400 to-cshine-blue-500">
              {" "}
              Digital Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80">
            We deliver cutting-edge IT solutions that drive innovation and
            accelerate your digital transformation journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cshine-blue-500 to-cshine-blue-400 
                text-white font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Explore Solutions
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="/how-we-work"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-cshine-blue-500/50 
                text-white font-semibold transition-all duration-300 hover:bg-cshine-blue-500/10"
            >
              How We Work
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { icon: UserIcon, value: "+8", label: "Collaborative Partners" },
              {
                icon: DocumentReportIcon,
                value: "+10",
                label: "Successful Projects",
              },
              { icon: StarIcon, value: "100%", label: "Client Satisfaction" },
              { icon: ClockIcon, value: "+5 Years", label: "Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 p-2"
              >
                <div className="flex justify-center items-center rounded-xl h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-cyan-500 to-cshine-blue-500">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-cshine-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">
                    {stat.label}
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

export default Hero;
