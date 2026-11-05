"use client";

import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, serviceNav } from "@/data/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { open: boolean; pathname: string; onClose: () => void };

const rowClass = "flex min-h-14 flex-1 items-center text-xl font-medium text-white";

export function MobileMenu({ open, pathname, onClose }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onResize = () => window.innerWidth >= 1024 && onClose();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        "on-dark fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-navy transition-all duration-300 lg:hidden",
        open ? "visible translate-x-0 opacity-100" : "invisible translate-x-6 opacity-0",
      )}
    >
      <nav aria-label="Mobile" className="px-5 py-4 sm:px-8">
        <ul className="divide-y divide-white/10">
          {mainNav.map((item) => {
            const current = pathname === item.href ? "page" : undefined;
            if (item.href !== "/services") {
              return (
                <li key={item.href} className="flex">
                  <Link
                    href={item.href}
                    aria-current={current}
                    onClick={onClose}
                    className={cn(rowClass, current && "text-gold")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    aria-current={current}
                    onClick={onClose}
                    className={cn(rowClass, current && "text-gold")}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services"
                    aria-label="Show service pages"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex size-14 cursor-pointer items-center justify-center text-white"
                  >
                    <ChevronDown
                      className={cn("size-6 transition-transform", servicesOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                </div>
                <ul id="mobile-services" hidden={!servicesOpen} className="border-l border-gold/60 pb-3 pl-4">
                  {serviceNav.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        aria-current={pathname === service.href ? "page" : undefined}
                        onClick={onClose}
                        className={cn(
                          "flex min-h-12 items-center text-[17px] text-white/85",
                          pathname === service.href && "text-gold",
                        )}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <a
          href={site.phoneHref}
          className="mt-6 flex min-h-14 items-center justify-center gap-3 rounded-lg border border-gold text-lg font-medium text-white"
        >
          <Phone className="size-5" aria-hidden="true" />
          {site.phone}
        </a>
      </nav>
    </div>
  );
}
