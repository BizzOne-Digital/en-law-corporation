import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Experienced legal guidance",
  "Compassionate and respectful approach",
  "Strategic representation",
  "Solutions tailored to each client’s situation",
  "Licensed in British Columbia, Washington and California",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 sm:py-24">
      <Image
        src="/logo/en-mark-navy.png"
        alt=""
        width={900}
        height={372}
        className="pointer-events-none absolute -bottom-8 -right-10 h-64 w-auto opacity-[0.04] sm:h-80"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group relative aspect-[4/3] drop-shadow-[0_18px_26px_rgb(10_35_66/0.25)]">
          <div
            className="absolute inset-0 bg-gradient-to-b from-gold to-[#b98532]"
            style={{ clipPath: "polygon(93% 0, 100% 0, 93% 100%, 86% 100%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: "polygon(0 0, 92% 0, 85% 100%, 0 100%)" }}
          >
            <Image
              src="/images/gavel-theme.jpg"
              alt="Close-up of a polished wooden judge’s gavel"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading label="About Us" title="Elizabeth Nijjar Law Corporation" align="left" />
          <p className="mt-5 text-[17px] leading-relaxed text-slate">
            Elizabeth Nijjar Law Corporation provides clear, practical and effective legal support to
            individuals and families facing important legal matters.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy">
                  <Check className="size-3 text-gold" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="outline" className="mt-8 w-full sm:w-auto">
            Learn More
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
