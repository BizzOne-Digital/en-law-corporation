import { ServiceCard } from "@/components/services/ServiceCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="Family Law Services"
            description="Practical legal guidance for life’s most important matters."
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 70}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
