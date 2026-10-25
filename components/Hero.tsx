import Image from "next/image";
import Link from "next/link";
import {
  CalendarDaysIcon,
  RocketLaunchIcon,
  UsersIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import BackgroundPattern from "./layout/BackgroundPattern";

const Hero = () => {
  return (
    <BackgroundPattern
      variant="dark"
      className="min-h-[100dvh] lg:min-h-fit pt-24 pb-12 lg:pt-20 lg:pb-16"
    >
      <div className="container mx-auto px-4 z-10 flex min-h-[calc(100dvh-9rem)] lg:min-h-0 flex-col justify-center">
        <div className="relative w-full h-[clamp(110px,26vh,160px)] sm:h-[200px] lg:h-[300px] mb-8">
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
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cshine-blue-400 to-cshine-blue-500">
              Digital Excellence
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80">
            A developer inside your team, your whole IT department, or the
            studio that builds your idea from scratch: web app, brand, hosting
            and all. One partner for the whole digital side of your business,
            shaped to the project.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/services" className="btn-primary on-dark">
              Ways to work with us
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link href="/how-we-work" className="btn-secondary on-dark">
              How We Work
            </Link>
          </div>

          {/* Stats read horizontally (icon left, figure + label right) so the
              row stays short — the hero is min-h-[100dvh] on mobile and a
              centred stack pushes the CTAs toward the fold. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8">
            {[
              { icon: UsersIcon, value: "+10", label: "Partners" },
              { icon: RocketLaunchIcon, value: "+10", label: "Projects" },
              { icon: StarIcon, value: "100%", label: "Satisfaction" },
              { icon: CalendarDaysIcon, value: "+6", label: "Years" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 p-3.5 rounded-xl
                  border border-white/5 bg-white/[0.02]
                  hover:border-cshine-blue-500/30 transition-colors duration-200"
              >
                <div
                  className="flex flex-none justify-center items-center h-9 w-9 sm:h-10 sm:w-10
                    rounded-lg bg-cshine-blue-500/10 border border-cshine-blue-500/20"
                >
                  <stat.icon
                    className="w-5 h-5 text-cshine-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 text-left">
                  <div
                    className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Hero;
