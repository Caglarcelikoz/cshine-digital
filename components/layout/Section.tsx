import type { ReactNode } from "react";
import BackgroundPattern from "./BackgroundPattern";
import { SECTION_SPACING, type SectionSpacing } from "./sectionSpacing";

type SectionProps = {
  children: ReactNode;
  variant?: "dark" | "light";
  spacing?: SectionSpacing;
  /**
   * Render without a background or padding, for use inside a SectionGroup
   * that already provides both.
   */
  bare?: boolean;
};

/** A page section: its own background and vertical padding, unless `bare`. */
export const Section = ({
  children,
  variant = "light",
  spacing = "default",
  bare = false,
}: SectionProps) =>
  bare ? (
    <section className="relative">{children}</section>
  ) : (
    <BackgroundPattern variant={variant} className={SECTION_SPACING[spacing]}>
      {children}
    </BackgroundPattern>
  );

/**
 * Consecutive sections on one continuous background. Each one draws its own
 * pattern otherwise, so two light sections in a row show a visible seam and
 * stack two paddings. Here the group draws one background, pads only its outer
 * edges, and spaces the sections inside with a single gap. Pass the children
 * with `bare`.
 */
export const SectionGroup = ({
  children,
  variant = "light",
  spacing = "default",
}: {
  children: ReactNode;
  variant?: "dark" | "light";
  spacing?: SectionSpacing;
}) => (
  <BackgroundPattern variant={variant} className={SECTION_SPACING[spacing]}>
    <div className="flex flex-col gap-14 md:gap-20">{children}</div>
  </BackgroundPattern>
);
