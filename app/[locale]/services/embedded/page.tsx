import ModeDetail, { modeDetailMetadata } from "@/components/ModeDetail";
import EmbeddedShowcase from "@/components/EmbeddedShowcase";

export function generateMetadata() {
  return modeDetailMetadata("embedded");
}

const EmbeddedDeveloperPage = () => (
  <ModeDetail slug="embedded">
    <EmbeddedShowcase />
  </ModeDetail>
);

export default EmbeddedDeveloperPage;
