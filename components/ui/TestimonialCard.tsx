import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Quote className="size-8 rotate-180 fill-gold text-gold" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-ink">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-sm font-semibold text-navy">{testimonial.name}</span>
        <span className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

/** Disappears automatically once every testimonial is marked as real in data/testimonials.ts. */
export function TestimonialNotice() {
  if (!testimonials.some((t) => t.isPlaceholder)) return null;
  return (
    <p className="mt-8 text-center text-sm text-slate">
      Sample testimonials shown for illustration only. These are not statements from actual clients.
    </p>
  );
}
