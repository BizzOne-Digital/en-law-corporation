import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, type Service } from "@/data/services";

export function ServiceContent({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading label="Overview" title={service.introHeading} align="left" />
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-slate">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading label="What to Know" title="Key Considerations" />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {service.considerations.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-xl border border-line border-l-[3px] border-l-gold bg-white p-7 shadow-card">
                  <h3 className="font-serif text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading label="Our Role" title="How the Firm Can Help" align="left" />
            <p className="mt-5 text-[17px] leading-relaxed text-slate">
              Every family’s circumstances are different. Support is tailored to what you need, from
              focused advice to representation through to resolution.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {services
                .filter((other) => other.slug !== service.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="font-medium text-gold-deep underline underline-offset-4 hover:text-navy"
                  >
                    {other.cardTitle}
                  </Link>
                ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y divide-line border-y border-line">
              {service.help.map((item) => (
                <li key={item} className="flex items-start gap-4 py-4 text-[17px] text-ink">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy">
                    <Check className="size-3 text-gold" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
