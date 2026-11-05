import { ServiceCardLarge } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Family Law Services in Surrey, BC | Elizabeth Nijjar Law Corporation",
  description:
    "Practical, strategic and compassionate family law representation in Surrey, BC: divorce, separation agreements, child access, child support and spousal support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Family Law Services"
        description="Practical, strategic and compassionate legal representation for individuals and families."
        image="/images/courthouse-columns-theme.jpg"
        imageAlt="Stone columns of a classical courthouse seen from below against a cloudy sky"
      />
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={(i % 3) * 80}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <ServiceCardLarge service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="Not Sure Where to Start?" />
    </>
  );
}
