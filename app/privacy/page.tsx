import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy | Elizabeth Nijjar Law Corporation",
  description: "Privacy Policy for Elizabeth Nijjar Law Corporation.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return <LegalPlaceholder title="Privacy Policy" topic="Privacy Policy" />;
}
