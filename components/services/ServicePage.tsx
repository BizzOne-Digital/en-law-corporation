import { CTASection } from "@/components/ui/CTASection";
import { getService, type ServiceSlug } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { ServiceContent } from "./ServiceContent";
import { ServiceFAQ } from "./ServiceFAQ";
import { ServiceHero } from "./ServiceHero";

export function serviceMetadata(slug: ServiceSlug) {
  const service = getService(slug);
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const service = getService(slug);
  return (
    <>
      <ServiceHero service={service} />
      <ServiceContent service={service} />
      <ServiceFAQ faqs={service.faqs} />
      <CTASection
        title={`Talk to Us About ${service.cardTitle}`}
        text="Book a confidential consultation to discuss your situation and explore your options."
      />
    </>
  );
}
