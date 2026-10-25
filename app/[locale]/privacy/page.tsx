import LegalDocument from "@/components/LegalDocument";
import { translatedPageMetadata } from "@/lib/seo";

export function generateMetadata() {
  return translatedPageMetadata("privacy", "/privacy");
}

const Privacy = () => {
  return <LegalDocument doc="privacy" />;
};

export default Privacy;
