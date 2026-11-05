import { Scale, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: Scale, lines: ["Licensed to Practice Law in", "BC, Washington & California"] },
  { icon: Users, lines: ["Client-Focused", "Legal Support"] },
  { icon: ShieldCheck, lines: ["Trusted, Professional", "& Confidential"] },
];

export function TrustStrip() {
  return (
    <section aria-label="Why clients trust us" className="border-b border-line bg-white">
      <Container>
        <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map(({ icon: Icon, lines }) => (
            <li key={lines[0]} className="flex items-center gap-4 py-6 md:justify-center md:px-4 md:py-8">
              <Icon className="size-10 shrink-0 text-navy" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[15px] font-semibold leading-snug text-navy">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
