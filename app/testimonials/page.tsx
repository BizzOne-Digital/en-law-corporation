import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard, TestimonialNotice } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Client Experiences | Elizabeth Nijjar Law Corporation",
  description:
    "Clear communication, strategic guidance and respectful representation: read about client experiences with Elizabeth Nijjar Law Corporation in Surrey, BC.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        label="Testimonials"
        title="Client Experiences"
        description="Every legal matter is personal. Our goal is to provide clear communication, strategic guidance and respectful representation throughout the process."
        image="/images/handshake-theme.jpg"
        imageAlt="Two people shaking hands in a professional office"
      />
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.quote} delay={(i % 3) * 80}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
          <TestimonialNotice />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
