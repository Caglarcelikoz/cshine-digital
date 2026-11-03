import { getTranslations } from "next-intl/server";
import EngagementModes from "@/components/EngagementModes";
import Capabilities from "@/components/Capabilities";
import BuildQuality from "@/components/BuildQuality";
import PageHero from "@/components/layout/PageHero";
import { translatedPageMetadata } from "@/lib/seo";
import { SectionGroup } from "@/components/layout/Section";

export function generateMetadata() {
  return translatedPageMetadata("services", "/services");
}

const ServicesPage = async () => {
  const t = await getTranslations("ServicesPage");
  return (
    <>
      <PageHero
        breadcrumb={t("breadcrumb")}
        eyebrow={t("eyebrow")}
        image="/images/page-services.svg"
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <SectionGroup spacing="afterHero">
        <EngagementModes showTitle={false} bare />
        <Capabilities bare />
        <BuildQuality bare />
      </SectionGroup>
    </>
  );
};

export default ServicesPage;
