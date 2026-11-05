import { ServicePage, serviceMetadata } from "@/components/services/ServicePage";

export const metadata = serviceMetadata("child-support");

export default function ChildSupportPage() {
  return <ServicePage slug="child-support" />;
}
