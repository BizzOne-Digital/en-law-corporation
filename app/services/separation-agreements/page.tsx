import { ServicePage, serviceMetadata } from "@/components/services/ServicePage";

export const metadata = serviceMetadata("separation-agreements");

export default function SeparationAgreementsPage() {
  return <ServicePage slug="separation-agreements" />;
}
