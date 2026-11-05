import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="on-dark bg-navy pt-20 text-white">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Page Not Found</p>
        <h1 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">We couldn’t find that page</h1>
        <p className="mt-4 text-lg text-white/85">It may have moved, or the link may be out of date.</p>
        <Button href="/" className="mt-8">
          Return Home
        </Button>
      </Container>
    </section>
  );
}
