import { Container } from "./Container";
import { PageHero } from "./PageHero";
import { site } from "@/lib/site";

/** PLACEHOLDER: replace with lawyer-approved policy text. Pages using it are noindexed. */
export function LegalPlaceholder({ title, topic }: { title: string; topic: string }) {
  return (
    <>
      <PageHero
        title={title}
        image="/images/books-and-pen-theme.jpg"
        imageAlt="Leather-bound books and a fountain pen resting on an open notebook"
      />
      <section className="bg-white py-20">
        <Container className="max-w-3xl text-[17px] leading-relaxed text-slate">
          <p>
            Our {topic} is being finalized and will be published here. If you have a question in the
            meantime, please call{" "}
            <a href={site.phoneHref} className="font-semibold text-navy underline underline-offset-4">
              {site.phone}
            </a>{" "}
            or email{" "}
            <a href={site.emailHref} className="font-semibold text-navy underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
