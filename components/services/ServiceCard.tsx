import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

const IconTile = ({ service }: { service: Service }) => (
  <span className="flex size-14 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:text-gold">
    <service.icon className="size-7" strokeWidth={1.6} aria-hidden="true" />
  </span>
);

const LearnMore = () => (
  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-navy">
    Learn More
    <ArrowRight
      className="size-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    />
  </span>
);

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col items-center rounded-[14px] border border-line border-b-[3px] border-b-gold bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <IconTile service={service} />
      <h3 className="mt-5 font-serif text-[1.3rem] font-semibold leading-tight text-navy">
        {service.cardTitle}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-slate">{service.shortDescription}</p>
      <LearnMore />
    </Link>
  );
}

export function ServiceCardLarge({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line border-b-[3px] border-b-gold bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="-mt-14 relative">
          <IconTile service={service} />
        </div>
        <h2 className="mt-5 font-serif text-2xl font-semibold text-navy">{service.title}</h2>
        <p className="mt-2.5 leading-relaxed text-slate">{service.description}</p>
        <LearnMore />
      </div>
    </Link>
  );
}
