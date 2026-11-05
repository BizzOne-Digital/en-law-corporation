import { Landmark, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact a Family Lawyer in Surrey, BC | Elizabeth Nijjar Law Corporation",
  description:
    "Contact Elizabeth Nijjar Law Corporation in Surrey, BC to request a family law consultation. Call 604.518.9232 or send a message through our contact form.",
  path: "/contact",
});

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
  { icon: MapPin, label: "Address", value: `${site.addressLine1}\n${site.addressLine2}` },
  { icon: Landmark, label: "Licensing", value: "British Columbia · Washington · California" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let’s Discuss Your Legal Matter"
        image="/images/office-theme.jpg"
        imageAlt="A bright modern office with a large plant and floor-to-ceiling windows"
      />
      <section className="bg-mist py-16 sm:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading label="Get in Touch" title="Contact Information" align="left" />
            <ul className="mt-8 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-navy text-white">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block break-words text-[17px] font-medium text-navy hover:text-gold-deep">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-[17px] font-medium text-navy">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-[14px] border border-line border-t-[3px] border-t-gold bg-white p-6 shadow-card sm:p-9">
            <h2 className="mb-5 font-serif text-2xl font-semibold text-navy sm:text-[1.75rem]">
              Request a Consultation
            </h2>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
