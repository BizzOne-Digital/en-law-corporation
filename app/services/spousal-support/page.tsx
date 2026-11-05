import { ServicePage, serviceMetadata } from "@/components/services/ServicePage";

export const metadata = serviceMetadata("spousal-support");

export default function SpousalSupportPage() {
  return <ServicePage slug="spousal-support" />;
}
