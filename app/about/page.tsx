import { Compass, Ear, Handshake, LockKeyhole, MessagesSquare, Scale, UserRoundCheck } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { IconCard } from "@/components/ui/IconCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Elizabeth Nijjar | Family Lawyer in Surrey, BC",
  description:
    "Elizabeth Nijjar, B.A., J.D., is a Barrister & Solicitor licensed in British Columbia, Washington and California, providing family law services in Surrey, BC.",
  path: "/about",
});

const approach = [
  {
    icon: Ear,
    title: "Understand",
    text: "We begin by listening, learning what has happened, what matters most to you and what you need to move forward.",
  },
  {
    icon: Compass,
    title: "Strategize",
    text: "We explain your options in plain language and build a practical plan around your goals and circumstances.",
  },
  {
    icon: Handshake,
    title: "Resolve",
    text: "We work toward a clear and workable outcome, through agreement where possible and representation where needed.",
  },
];

const values = [
  {
    icon: Scale,
    title: "Professionalism",
    text: "Every matter is approached with care, preparation and respect for everyone involved.",
  },
  {
    icon: LockKeyhole,
    title: "Confidentiality",
    text: "Family matters are deeply personal, and your information is treated accordingly.",
  },
  {
    icon: MessagesSquare,
    title: "Clarity",
    text: "You should always understand where your matter stands and what the next step is.",
  },
  {
    icon: UserRoundCheck,
    title: "Client-Focused Representation",
    text: "Advice and strategy are shaped around your needs, not a one-size-fits-all process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the Firm"
        title="Experienced Legal Guidance With a Personal Approach"
        image="/images/law-library-theme.jpg"
        imageAlt="A historic law library with marble busts lining tall wooden bookshelves"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <SectionHeading label="Meet Your Lawyer" title="About Elizabeth Nijjar" align="left" />
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-slate">
              <p>
                Elizabeth Nijjar is a Barrister &amp; Solicitor and the lawyer behind Elizabeth Nijjar Law
                Corporation, a family law practice based in Surrey, British Columbia.
              </p>
              <p>
                Licensed to practise in British Columbia, Washington and California, Elizabeth assists
                individuals and families with divorce, separation agreements, child access, child support
                and spousal support.
              </p>
              <p>
                The firm’s work is guided by a simple idea: when your family’s future is at stake, you
                deserve clear advice, a thoughtful strategy and respectful representation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-xl border border-line shadow-lift">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/books-and-pen-theme.jpg"
                  alt="Leather-bound books and a fountain pen resting on an open notebook"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t-[3px] border-gold bg-navy p-7 text-white">
                <p className="font-serif text-2xl">{site.lawyer}</p>
                <p className="mt-1 text-white/85">{site.title}</p>
                <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-gold">
                  British Columbia · Washington · California
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              label="How We Work"
              title="Our Approach"
              description="A steady, structured process for matters that rarely feel simple."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <IconCard {...step} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="on-dark bg-navy py-20 text-white sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">What Guides Us</p>
            <h2 className="mt-3 font-serif text-[2rem] font-medium sm:text-[2.6rem]">Professional Values</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <IconCard {...value} dark />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
