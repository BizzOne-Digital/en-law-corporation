import { ServicePage, serviceMetadata } from "@/components/services/ServicePage";

export const metadata = serviceMetadata("divorce");

export default function DivorcePage() {
  return <ServicePage slug="divorce" />;
}
