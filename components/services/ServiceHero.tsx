import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import type { Service } from "@/data/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <PageHero title={service.title} description={service.heroLead} image={service.image} imageAlt={service.imageAlt}>
      <nav aria-label="Breadcrumb" className="rise mb-5 text-sm text-white/80">
        <Link href="/services" className="underline-offset-4 hover:text-gold hover:underline">
          Family Law Services
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-gold">
          {service.cardTitle}
        </span>
      </nav>
    </PageHero>
  );
}
