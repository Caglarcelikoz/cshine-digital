import Breadcrumb, { type BreadcrumbParent } from "@/components/BreadCrumb";
import Eyebrow from "@/components/Eyebrow";

type PageHeroProps = {
  /** Breadcrumb "current" label; omit to hide the breadcrumb */
  breadcrumb?: string;
  /** Optional intermediate breadcrumb link between Home and the current page */
  breadcrumbParent?: BreadcrumbParent;
  /** Small pill label above the title */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Background image path under /public */
  image?: string;
};

const PageHero = ({
  breadcrumb,
  breadcrumbParent,
  eyebrow,
  title,
  subtitle,
  image = "/images/our-services.jpg",
}: PageHeroProps) => {
  return (
    <>
      {breadcrumb && (
        <section className="mt-20">
          <div className="container mx-auto">
            <Breadcrumb current={breadcrumb} parent={breadcrumbParent} />
          </div>
        </section>
      )}

      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        {/* Gradient scrim for legibility (replaces flat brightness-50) */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900/85 via-midnight-900/70 to-midnight-900/90" />
        {/* Brand glow, top-right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_45%)] opacity-20" />
        {/* Brand glow, bottom-left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_40%)] opacity-[0.12]" />
        {/* Top hairline */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/40 to-transparent" />

        <div className="container mx-auto relative z-10 text-center px-4">
          {eyebrow && (
            <Eyebrow tone="glass" className="mb-6">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="heading-1 max-w-4xl mx-auto">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default PageHero;
