import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard, TestimonialNotice } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading label="Client Testimonials" title="What Our Clients Say" />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <Reveal key={testimonial.quote} delay={i * 80}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
        <TestimonialNotice />
      </Container>
    </section>
  );
}
