/**
 * Project estimate model — the single source of truth for the /estimate wizard.
 *
 * The estimate is a low-friction CONVERSATION STARTER for a Product build (see
 * CONTEXT.md), not a price calculator. Its job is to give a non-technical
 * visitor the confidence to reach out, and to hand C-Shine qualified context.
 *
 * Two kinds of project type:
 *   - "priced"       — runs the full flow: type → 5 qualifiers → size BAND
 *                      (+ an optional broad range on the result screen).
 *   - "conversation" — an escape hatch (e.g. "not sure", "rebuild an existing
 *                      site"): no qualifiers, no price, straight to contact.
 *
 * The qualifiers never compute a precise number. They place the visitor in a
 * band (lower/middle/upper) and give C-Shine follow-up context. The result
 * screen leads with that band; a euro range only appears if the visitor opts in.
 *
 * All visitor-facing copy (type names, questions, option and band labels) lives
 * in messages under `Estimate`, keyed by the ids defined here.
 */

export type ProjectTypeId =
  | "brochure"
  | "ecommerce"
  | "webapp"
  | "revamp"
  | "unsure";

/** A priced type carries a fixed, broad indicative range (EUR). */
export type PricedType = {
  id: ProjectTypeId;
  kind: "priced";
  range: { min: number; max: number };
  /**
   * When true, the top band shows "let's discuss" instead of the upper bound —
   * for types whose complex end is genuinely bespoke (see CONTEXT.md).
   */
  bespokeAtUpper: boolean;
};

/** A conversation route skips qualifiers and price and goes straight to contact. */
export type ConversationType = {
  id: ProjectTypeId;
  kind: "conversation";
};

export type ProjectType = PricedType | ConversationType;

export const isPriced = (t: ProjectType): t is PricedType =>
  t.kind === "priced";

export const projectTypes: ProjectType[] = [
  {
    id: "brochure",
    kind: "priced",
    range: { min: 500, max: 4500 },
    bespokeAtUpper: false,
  },
  {
    id: "ecommerce",
    kind: "priced",
    range: { min: 4000, max: 15000 },
    bespokeAtUpper: true,
  },
  {
    id: "webapp",
    kind: "priced",
    range: { min: 8000, max: 25000 },
    bespokeAtUpper: true,
  },
  { id: "revamp", kind: "conversation" },
  { id: "unsure", kind: "conversation" },
];

export const getProjectType = (id: string): ProjectType | undefined =>
  projectTypes.find((t) => t.id === id);

/** The plain-language qualifiers. Each option carries a `weight` that nudges
 *  the band toward the low (0) or high (1) end for the chosen type. */
export type QualifierId =
  | "size"
  | "payments"
  | "accounts"
  | "content"
  | "timeline";

export type QualifierOption = {
  value: string;
  /** 0 = pulls toward the low end, 1 = pulls toward the high end. */
  weight: number;
};

export type Qualifier = {
  id: QualifierId;
  options: QualifierOption[];
};

export const qualifiers: Qualifier[] = [
  {
    id: "size",
    options: [
      { value: "few", weight: 0 },
      { value: "around-ten", weight: 0.5 },
      { value: "many", weight: 1 },
    ],
  },
  {
    id: "payments",
    options: [
      { value: "no", weight: 0 },
      { value: "unsure", weight: 0.5 },
      { value: "yes", weight: 1 },
    ],
  },
  {
    id: "accounts",
    options: [
      { value: "no", weight: 0 },
      { value: "unsure", weight: 0.5 },
      { value: "yes", weight: 1 },
    ],
  },
  {
    id: "content",
    options: [
      { value: "client", weight: 0 },
      { value: "partly", weight: 0.5 },
      { value: "cshine", weight: 1 },
    ],
  },
  {
    id: "timeline",
    options: [
      { value: "relaxed", weight: 0 },
      { value: "months", weight: 0.5 },
      { value: "asap", weight: 1 },
    ],
  },
];

export type Answers = Partial<Record<QualifierId, string>>;

export type EstimateBand = "lower" | "middle" | "upper";

export type EstimateResult = {
  type: PricedType;
  /** The type's full indicative range. */
  range: { min: number; max: number };
  /** Where the answers place them within the range. */
  band: EstimateBand;
};

/**
 * Average the weights of the chosen options to get an emphasis in [0, 1], then
 * translate that into a band. Unanswered qualifiers count as neutral (0.5) so a
 * partial flow still yields a sensible mid-range result. Only priced types are
 * estimated — conversation routes never reach here.
 */
export const computeEstimate = (
  typeId: string,
  answers: Answers
): EstimateResult | null => {
  const type = getProjectType(typeId);
  if (!type || !isPriced(type)) return null;

  const weights = qualifiers.map((q) => {
    const chosen = answers[q.id];
    const option = q.options.find((o) => o.value === chosen);
    return option ? option.weight : 0.5;
  });
  const emphasis = weights.reduce((sum, w) => sum + w, 0) / weights.length; // 0..1

  const band: EstimateBand =
    emphasis < 0.34 ? "lower" : emphasis < 0.67 ? "middle" : "upper";

  return { type, range: type.range, band };
};

/** Segments (of 4) to fill in the band indicator — a lightweight scale cue. */
export const bandSegments = (band: EstimateBand): number =>
  band === "lower" ? 1 : band === "middle" ? 2 : 4;

/**
 * What the optional "what would this cost?" disclosure shows. Either the type's
 * full broad range, or — for bespoke-at-upper types in the top band — a signal
 * to discuss instead of an upper bound. Never a narrowed sub-range.
 */
export type PriceReveal =
  | { kind: "range"; min: number; max: number }
  | { kind: "discuss" };

export const priceReveal = (result: EstimateResult): PriceReveal => {
  if (result.type.bespokeAtUpper && result.band === "upper") {
    return { kind: "discuss" };
  }
  return { kind: "range", min: result.range.min, max: result.range.max };
};

/** Format a EUR amount for the visitor's locale, e.g. "€4,000" / "€ 4.000". */
export const formatEuro = (n: number, locale: string): string =>
  new Intl.NumberFormat(locale === "nl" ? "nl-BE" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

/** Format a range as e.g. "€4,000 – €10,000". */
export const formatRange = (
  r: { min: number; max: number },
  locale: string
): string => `${formatEuro(r.min, locale)} – ${formatEuro(r.max, locale)}`;

/**
 * Format a price reveal for display / email. `bespokeLabel` is the localized
 * "let's discuss" copy shown instead of an upper bound.
 */
export const formatReveal = (
  reveal: PriceReveal,
  locale: string,
  bespokeLabel: string
): string =>
  reveal.kind === "discuss"
    ? bespokeLabel
    : formatRange({ min: reveal.min, max: reveal.max }, locale);
