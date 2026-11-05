import Image from "next/image";
import { Container } from "./Container";

type Props = {
  label?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  children?: React.ReactNode;
};

/** Shared inner-page hero: photo on the right, dissolving into navy behind the text. */
export function PageHero({ label, title, description, image, imageAlt, imagePosition, children }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy pt-20 text-white">
      <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[66%]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="drift object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-navy/60 lg:bg-navy/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      </div>
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          {children}
          {label && (
            <p className="rise text-xs font-semibold uppercase tracking-[0.32em] text-gold">{label}</p>
          )}
          <h1
            className="rise mt-4 font-serif text-[2.5rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.6rem]"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            {title}
          </h1>
          <span
            className="draw mt-6 block h-px w-24 bg-gold"
            style={{ "--d": "250ms" } as React.CSSProperties}
          />
          {description && (
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-white/85"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
