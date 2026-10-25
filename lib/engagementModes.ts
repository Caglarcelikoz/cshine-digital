import { FaRocket, FaServer, FaUsers } from "react-icons/fa";

/**
 * The three engagement modes — the "ways to work with us".
 *
 * A mode answers "how do we work together?" (how much of the work C-Shine owns),
 * NOT "what can you build?" (that's a capability). Titles are noun-labels for the
 * service, never imperatives aimed at the client — see CONTEXT.md.
 *
 * Single source of truth: the section cards (components/EngagementModes.tsx) and
 * the detail pages (app/services/[slug]/page.tsx) both read from here.
 */
export type EngagementMode = {
  slug: "product-build" | "it-partner" | "embedded";
  eyebrow: string;
  /** Noun-label for the service. Never an imperative to the client. */
  title: string;
  /** One-liner: who this mode is for. */
  forWho: string;
  /** Short description shown on the section card. */
  description: string;
  /** What's covered — the capabilities behind this mode. */
  capabilities: string[];
  icon: typeof FaRocket;
  /**
   * Hero background for the detail page. Composed for PageHero's bg-cover +
   * scrim: weight sits left and right so the centre can be covered by the
   * title, and there is no readable text in the artwork.
   */
  heroImage: string;
  /** Primary action shown on the card and at the foot of the detail page. */
  cta: { label: string; href: string };
  /** Longer-form content for the detail page (Itenium-style narrative). */
  detail: {
    /** Hero subtitle on the detail page. */
    intro: string;
    /** "What it is" — the mode in a paragraph. */
    whatItIs: string;
    /** "How the working relationship runs" — bullet points. */
    howItWorks: string[];
    metaTitle: string;
    metaDescription: string;
  };
};

export const engagementModes: EngagementMode[] = [
  {
    slug: "product-build",
    eyebrow: "Mode 01",
    title: "Product build",
    forWho: "For businesses with an idea and no team to build it",
    description:
      "We take your idea from a blank page to a live product (web apps, e-commerce, custom sites) and stay on for the updates after launch.",
    capabilities: [
      "Web & app development",
      "E-commerce platforms",
      "CMS integration",
      "Deployment & maintenance",
    ],
    icon: FaRocket,
    heroImage: "/images/service-product-build.svg",
    cta: { label: "Plan your build", href: "/#contact" },
    detail: {
      intro:
        "You bring the idea. We own the build, end to end, from a blank page to a live product, plus the updates after launch.",
      whatItIs:
        "Product build is our full-delivery mode: you hand us the idea and we take ownership of turning it into a working product. Web apps, e-commerce, custom sites; we handle the design, the engineering, the deployment, and the maintenance that keeps it running. You don't need an in-house team or a technical co-founder; that's our job.",
      howItWorks: [
        "We start by understanding the idea, the users, and what success looks like, then scope a realistic first version.",
        "You get a clear proposal and timeline before we write code, so there are no surprises on budget or deadline.",
        "We build in short cycles and show you working software early, adapting as your input comes in.",
        "After launch we stay on for updates, fixes and improvements. The product keeps evolving, and so do we.",
      ],
      metaTitle:
        "Product Build - C-Shine Digital | From Idea to Live Product",
      metaDescription:
        "Have an idea but no team to build it? We own the whole build (web apps, e-commerce and custom sites) from a blank page to a live product, plus updates after launch.",
    },
  },
  {
    slug: "it-partner",
    eyebrow: "Mode 02",
    title: "Full IT partner",
    forWho: "For companies that want one partner for everything digital",
    description:
      "Website, brand identity, hosting, domains, email and day-to-day support: your complete digital and IT function, handled by one team.",
    capabilities: [
      "Website & branding",
      "Logo & brand guidelines",
      "Hosting, domains & email",
      "Ongoing IT support",
    ],
    icon: FaServer,
    heroImage: "/images/service-it-partner.svg",
    cta: { label: "Talk to us", href: "/#contact" },
    detail: {
      intro:
        "One partner for everything digital: website, brand, hosting, email and day-to-day support, so you can focus on your business.",
      whatItIs:
        "Full IT partner is our all-in mode: we become your complete digital and IT function. Website and brand identity, hosting, domains and email, and the ongoing support that keeps it all working, handled by one team you can actually reach. Instead of juggling a web agency, a hosting provider and an IT helpdesk, you have a single point of contact for everything digital.",
      howItWorks: [
        "We take stock of what you already have (website, domains, email, tools) and map what needs building, fixing or replacing.",
        "We set up and run the essentials: brand, site, hosting, domains and email, all under one roof.",
        "Day-to-day support means you have someone to call when something breaks or needs to change, with no ticket queue to a stranger.",
        "As your business grows, we adapt the setup (new pages, new tools, new needs) without you having to re-hire.",
      ],
      metaTitle:
        "Full IT Partner - C-Shine Digital | Your Complete Digital & IT Function",
      metaDescription:
        "Want one partner for everything digital? Website, brand, hosting, domains, email and day-to-day support: your complete IT function, handled by one Belgian team.",
    },
  },
  {
    slug: "embedded",
    eyebrow: "Mode 03",
    title: "Embedded developer",
    forWho: "For in-house teams that need extra engineering firepower",
    description:
      "We embed with your developers (frontend, backend, DevOps) and ship alongside you. Senior hands, no long onboarding, flexible on stack.",
    capabilities: [
      "Frontend & backend",
      "DevOps & cloud",
      "Stack-agnostic",
      "Contract or per-project",
    ],
    icon: FaUsers,
    heroImage: "/images/service-embedded.svg",
    cta: { label: "Discuss a role", href: "/#contact" },
    detail: {
      intro:
        "Extra engineering firepower that plugs straight into your team: senior hands, no long onboarding, flexible on stack.",
      whatItIs:
        "Embedded developer is our team-augmentation mode: instead of owning a project, we join yours. We embed with your existing developers (frontend, backend, DevOps) and ship alongside them, following your processes and your stack. It's for in-house teams that need capacity or a specific skill for a while, without the cost and lead time of a permanent hire.",
      howItWorks: [
        "We match senior people to the gap you actually have, not whoever happens to be free.",
        "We work inside your workflow: your tools, your repos, your standup. We adapt to you, not the other way around.",
        "No long onboarding. The aim is to be productive in your codebase within days, not weeks.",
        "Engage per project or on a rolling contract, and scale the involvement up or down as your roadmap shifts.",
      ],
      metaTitle:
        "Embedded Developer - C-Shine Digital | Extra Engineering Firepower",
      metaDescription:
        "Need extra engineering capacity? We embed senior developers with your team (frontend, backend, DevOps): no long onboarding, flexible on stack, contract or per-project.",
    },
  },
];

export const getEngagementMode = (slug: string) =>
  engagementModes.find((mode) => mode.slug === slug);
