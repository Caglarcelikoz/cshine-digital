import LegalDocument from "@/components/LegalDocument";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("terms", "/terms");
}

const Terms = () => {
  return <LegalDocument doc="terms" />;
};

export default Terms;
