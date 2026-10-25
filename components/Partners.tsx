import Image from "next/image";
import Link from "next/link";
import BackgroundPattern from "./layout/BackgroundPattern";
import Eyebrow from "./Eyebrow";

type Partner = {
  name: string;
  logo: string;
  // intrinsic size + a tuned display height (px) so logos of very different
  // aspect ratios read with balanced visual weight
  w: number;
  h: number;
  displayH: number;
};

const partners: Partner[] = [
  // displayH is tuned per logo for balanced *perceived* size: logos with lots
  // of internal whitespace in their bounding box (mkm, decem — the mark sits in
  // the middle third) get a taller displayH to compensate.
  { name: "Ravago", logo: "/images/ravago-logo.png", w: 522, h: 585, displayH: 56 },
  { name: "MKM Solutions", logo: "/images/mkm.png", w: 3125, h: 1875, displayH: 76 },
  { name: "MKM Carrosserie", logo: "/images/mkm-carrosserie.png", w: 1912, h: 510, displayH: 34 },
  { name: "Decem Energy", logo: "/images/decem-energy-logo.png", w: 3125, h: 1875, displayH: 74 },
  { name: "Pauwels Consulting", logo: "/images/logo-pauwels.png", w: 4194, h: 1339, displayH: 44 },
  { name: "Telenet", logo: "/images/telenet.png", w: 2969, h: 762, displayH: 44 },
];

const Partners = () => {
  return (
    <BackgroundPattern variant="dark" className="py-20">
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-14">
          <Eyebrow tone="dark" className="mb-6">
            Trusted collaborations
          </Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-balance text-white mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The businesses and organisations we build with, deliver for, and
            grow alongside.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative flex items-center justify-center h-32 rounded-2xl
                bg-white/95 border border-white/10 p-8
                hover:border-cshine-blue-500/40 hover:bg-white hover:shadow-glow hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Dot-grid motif corner — brand signature */}
              <div
                className="pointer-events-none absolute top-0 right-0 h-16 w-16 opacity-[0.06] rounded-tr-2xl overflow-hidden"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at center, #04C4D4 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden="true"
              />
              <Image
                src={p.logo}
                alt={p.name}
                width={p.w}
                height={p.h}
                style={{ height: p.displayH, width: "auto" }}
                className="relative max-w-full object-contain opacity-70
                  grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/work" className="btn-primary on-dark">
            See what we&rsquo;ve built together
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Partners;
