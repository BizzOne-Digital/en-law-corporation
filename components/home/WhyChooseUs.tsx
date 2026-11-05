import { Globe, LockKeyhole, MessagesSquare, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconCard } from "@/components/ui/IconCard";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    icon: Globe,
    title: "Multi-Jurisdiction Experience",
    text: "Licensed in British Columbia, Washington and California.",
  },
  {
    icon: Target,
    title: "Personalized Legal Strategies",
    text: "Advice shaped around your family, your priorities and your circumstances.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    text: "Plain-language explanations, so you understand your options at each step.",
  },
  {
    icon: LockKeyhole,
    title: "Confidential Representation",
    text: "Sensitive family matters handled with discretion and respect.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="on-dark bg-navy py-20 text-white sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="mt-3 font-serif text-[2rem] font-medium leading-tight sm:text-[2.6rem]">
            Legal Guidance You Can Rely On
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <IconCard {...benefit} dark />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
