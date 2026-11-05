import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy pt-20 text-white">
      <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[72%]">
        <Image
          src="/images/hero-lady-justice-theme.jpg"
          alt="Bronze statue of Lady Justice holding the scales of justice"
          fill
          preload
          sizes="(min-width: 1024px) 72vw, 100vw"
          className="drift object-cover object-[62%_22%] lg:object-[100%_22%]"
        />
        <div className="absolute inset-0 bg-navy/55 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/45 via-35% to-transparent to-65%" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/50 to-transparent" />
      </div>

      <Container className="flex min-h-[600px] items-center py-20 lg:min-h-[680px]">
        <div className="max-w-2xl">
          <h1>
            <span className="rise block text-sm font-semibold uppercase tracking-[0.42em] sm:text-base">
              Elizabeth Nijjar
            </span>
            <span
              className="rise mt-3 block font-serif text-[3.1rem] font-medium leading-[1.05] sm:text-7xl lg:text-[5.1rem]"
              style={delay(120)}
            >
              Law Corporation
            </span>
          </h1>
          <span className="draw mt-6 block h-px w-28 bg-gold" style={delay(320)} />
          <p
            className="rise mt-5 text-xs font-semibold uppercase leading-relaxed tracking-[0.24em] text-gold sm:text-sm"
            style={delay(380)}
          >
            Family Law | BC · Washington · California
          </p>
          <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl" style={delay(500)}>
            Compassionate, Strategic, and Practical Legal Solutions for You and Your Family.
          </p>
          <div className="rise mt-9 flex flex-col gap-4 sm:flex-row" style={delay(640)}>
            <Button href="/contact" className="w-full sm:w-auto">
              Book a Consultation
            </Button>
            <Button href="/services" variant="outlineLight" className="w-full sm:w-auto">
              Explore Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
