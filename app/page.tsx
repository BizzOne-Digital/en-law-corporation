import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { homeFaqs } from "@/data/homeFaqs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Elizabeth Nijjar Law Corporation | Family Lawyer Surrey BC",
  description:
    "Elizabeth Nijjar Law Corporation provides practical and strategic family law services in Surrey, British Columbia, including divorce, separation agreements, child access, child support and spousal support.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <IntroSection />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsPreview />
      <div className="border-t border-line" />
      <ServiceFAQ faqs={homeFaqs} />
      <FinalCTA />
    </>
  );
}
