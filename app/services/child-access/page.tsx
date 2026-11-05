import { ServicePage, serviceMetadata } from "@/components/services/ServicePage";

export const metadata = serviceMetadata("child-access");

export default function ChildAccessPage() {
  return <ServicePage slug="child-access" />;
}
