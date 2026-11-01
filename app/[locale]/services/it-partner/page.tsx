import ModeDetail, { modeDetailMetadata } from "@/components/ModeDetail";
import PartnerShowcase from "@/components/PartnerShowcase";

export function generateMetadata() {
  return modeDetailMetadata("it-partner");
}

const DigitalPartnerPage = () => (
  <ModeDetail slug="it-partner">
    <PartnerShowcase />
  </ModeDetail>
);

export default DigitalPartnerPage;
