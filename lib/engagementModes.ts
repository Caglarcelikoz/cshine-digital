import { FaRocket, FaServer, FaUsers } from "react-icons/fa";

/**
 * The three engagement modes — the "ways to work with us".
 *
 * A mode answers "how do we work together?" (how much of the work C-Shine owns),
 * NOT "what can you build?" (that's a capability). Titles are noun-labels for the
 * service, never imperatives aimed at the client — see CONTEXT.md.
 *
 * Single source of truth for the modes' structure: the section cards
 * (components/EngagementModes.tsx) and the detail pages
 * (app/[locale]/services/[slug]/page.tsx) both read from here. All copy (title,
 * forWho, description, capabilities, detail narrative, meta tags) lives in
 * messages/<locale>.json under `Modes.<slug>`.
 */
export type EngagementModeSlug = "product-build" | "it-partner" | "embedded";

export type EngagementMode = {
  slug: EngagementModeSlug;
  icon: typeof FaRocket;
  /**
   * Hero background for the detail page. Composed for PageHero's bg-cover +
   * scrim: weight sits left and right so the centre can be covered by the
   * title, and there is no readable text in the artwork.
   */
  heroImage: string;
};

/** Every mode's primary action leads to the contact section. */
export const MODE_CTA_HREF = { pathname: "/", hash: "contact" } as const;

export const engagementModes: EngagementMode[] = [
  {
    slug: "product-build",
    icon: FaRocket,
    heroImage: "/images/service-product-build.svg",
  },
  {
    slug: "it-partner",
    icon: FaServer,
    heroImage: "/images/service-it-partner.svg",
  },
  {
    slug: "embedded",
    icon: FaUsers,
    heroImage: "/images/service-embedded.svg",
  },
];

export const getEngagementMode = (slug: string) =>
  engagementModes.find((mode) => mode.slug === slug);
