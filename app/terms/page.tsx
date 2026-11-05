import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Use | Elizabeth Nijjar Law Corporation",
  description: "Terms of Use for the Elizabeth Nijjar Law Corporation website.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return <LegalPlaceholder title="Terms of Use" topic="Terms of Use" />;
}
