import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroSection() {
  return (
    <section className="bg-white pt-20 sm:pt-24">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            label="Family Law in Surrey, BC"
            title="Steady Guidance When Family Life Is Changing"
            align="left"
          />
        </Reveal>
        <Reveal delay={120} className="space-y-4 text-[17px] leading-relaxed text-slate">
          <p>
            Separation and divorce can raise urgent questions at a time when life already feels uncertain.
            Where will the children live? How will support work? What happens to the home, savings and
            debts?
          </p>
          <p>
            Elizabeth Nijjar Law Corporation helps individuals and families in Surrey and across British
            Columbia understand their rights, weigh their options and take the next step with a clear plan.
            Whether you are just starting to consider separation or are responding to a legal matter, you
            will receive practical advice suited to your circumstances.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
