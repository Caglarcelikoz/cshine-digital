import ModeDetail, { modeDetailMetadata } from "@/components/ModeDetail";
import ProductBuildShowcase from "@/components/ProductBuildShowcase";

export function generateMetadata() {
  return modeDetailMetadata("product-build");
}

const ProductBuildPage = () => (
  <ModeDetail slug="product-build">
    <ProductBuildShowcase />
  </ModeDetail>
);

export default ProductBuildPage;
