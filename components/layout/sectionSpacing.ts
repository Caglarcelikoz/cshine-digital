/**
 * Vertical padding for page sections, in one place so the rhythm stays
 * consistent across the site.
 *
 * - `default`: a full section gap on both sides.
 * - `afterHero`: the first section under a PageHero, which already ends with
 *   its own bottom padding.
 *
 * Consecutive sections that share a background go in a SectionGroup
 * (components/layout/Section.tsx) instead of stacking their own paddings.
 */
export const SECTION_SPACING = {
  default: "py-14 md:py-20",
  afterHero: "pt-10 pb-14 md:pt-12 md:pb-20",
} as const;

export type SectionSpacing = keyof typeof SECTION_SPACING;
