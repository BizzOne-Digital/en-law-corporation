import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Get in Touch",
    text: "Call, email or use the contact form to tell us briefly what kind of legal matter you need help with.",
  },
  {
    title: "Book a Consultation",
    text: "Discuss your situation, your priorities and any deadlines or documents that may be important.",
  },
  {
    title: "Review Your Options",
    text: "Learn how the law may apply to you and compare the realistic paths available, in plain language.",
  },
  {
    title: "Move Forward",
    text: "If you retain the firm, work together on a clear plan, from negotiation and agreements to court steps if needed.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            label="What to Expect"
            title="A Clear Path From First Call to Next Steps"
            description="Reaching out to a lawyer can feel like a big step. Here is how the process typically begins."
          />
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="border-t-2 border-gold pt-5">
              <li className="list-none">
                <span className="font-serif text-3xl text-gold-deep" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-slate">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
