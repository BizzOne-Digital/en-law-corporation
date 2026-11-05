import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/data/services";

export function ServiceFAQ({ faqs }: { faqs: Service["faqs"] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="bg-mist py-20 sm:py-24">
      <Container className="max-w-[860px]">
        <Reveal>
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
        </Reveal>
        <Reveal className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-line bg-white shadow-card">
              <summary className="flex min-h-14 items-center justify-between gap-4 rounded-xl px-6 py-4 text-[17px] font-semibold text-navy">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-slate">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
        <p className="mt-8 text-center text-sm leading-relaxed text-slate">
          This page provides general information about British Columbia family law and is not legal
          advice. Your options depend on your circumstances.
        </p>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
