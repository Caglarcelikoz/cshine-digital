import { getMessages } from "next-intl/server";
import SketchToProduct from "./SketchToProduct";

/**
 * The product-build page's idea-to-live-product slider. Copy lives under
 * `ProductBuild.realisation`, a server-only namespace. It's read as plain
 * messages because the slider needs whole nested objects (which `t.raw()`
 * can't return) and none of these strings use ICU formatting.
 *
 * Headings follow the detail page's scale (h2 = text-2xl).
 */
const ProductBuildShowcase = async () => {
  const { realisation } = (await getMessages()).ProductBuild;

  return (
    <section className="mt-12 md:mt-16 border-t border-neutral-200 pt-10 md:pt-14">
      <h2 className="text-2xl font-bold text-midnight-900 mb-3">
        {realisation.title}
      </h2>
      <p className="max-w-2xl leading-relaxed text-neutral-700 mb-8">
        {realisation.intro}
      </p>
      <SketchToProduct
        sketch={realisation.sketch}
        mock={realisation.mock}
        sketchLabel={realisation.sketchLabel}
        productLabel={realisation.productLabel}
        hint={realisation.hint}
        sliderLabel={realisation.sliderLabel}
      />
      <p className="mt-4 text-center text-sm text-neutral-500">
        {realisation.note}
      </p>
    </section>
  );
};

export default ProductBuildShowcase;
