import Image from "next/image";
import { cn } from "@/lib/utils";

/** White version of the client's logo (public/logonre.png), for use on navy backgrounds. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo/en-logo-white.png"
      alt=""
      width={720}
      height={381}
      preload
      className={cn("h-14 w-auto", className)}
    />
  );
}
