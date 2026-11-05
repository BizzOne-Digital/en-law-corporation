import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";

type Props = { title?: string; text?: string; buttonLabel?: string };

export function CTASection({
  title = "Need Legal Help?",
  text = "Book a confidential consultation to discuss your situation and explore your options.",
  buttonLabel = "Contact Us Today",
}: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-3/5">
        <Image
          src="/images/vancouver-skyline-theme.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-navy/70 lg:bg-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-transparent" />
      </div>
      <Container className="flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl border-l-2 border-gold pl-6">
          <h2 className="font-serif text-[2rem] font-medium leading-tight sm:text-[2.6rem]">{title}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-white/85">{text}</p>
        </div>
        <Button
          href="/contact"
          className="w-full shrink-0 sm:w-auto"
          icon={<CalendarDays className="size-[18px]" aria-hidden="true" />}
        >
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
