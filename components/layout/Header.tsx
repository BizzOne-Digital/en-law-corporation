"use client";

import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { mainNav, serviceNav } from "@/data/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

const linkClass = (active: boolean) =>
  cn(
    "relative py-2 text-[15px] font-medium text-white transition-colors hover:text-gold",
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-300",
    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  );

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        dropdown.current?.querySelector("button")?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!dropdown.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdownOpen]);

  return (
    <>
      <header
        className={cn(
          "on-dark fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled || menuOpen
            ? "border-white/10 bg-navy shadow-[0_8px_24px_-12px_rgb(0_0_0/0.6)]"
            : "border-white/10 bg-navy/75",
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) =>
                item.href === "/services" ? (
                  <li
                    key={item.href}
                    ref={dropdown}
                    className="relative flex items-center gap-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={linkClass(isActive(pathname, item.href))}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      aria-controls="services-menu"
                      aria-label="Show service pages"
                      onClick={() => setDropdownOpen((open) => !open)}
                      className="cursor-pointer p-1 text-white hover:text-gold"
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", dropdownOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id="services-menu"
                      className={cn(
                        "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 transition-all duration-200",
                        dropdownOpen ? "visible opacity-100" : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <ul className="rounded-xl border border-white/10 border-t-gold bg-navy-2 p-2 shadow-lift">
                        {serviceNav.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              aria-current={pathname === service.href ? "page" : undefined}
                              className={cn(
                                "block rounded-lg px-4 py-2.5 text-[15px] text-white transition-colors hover:bg-white/10 hover:text-gold",
                                pathname === service.href && "text-gold",
                              )}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={linkClass(isActive(pathname, item.href))}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <a
            href={site.phoneHref}
            className="hidden items-center gap-2.5 rounded-full border border-white/70 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:border-gold hover:text-gold lg:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>

          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2 flex size-12 cursor-pointer items-center justify-center text-white lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16" className={cn("origin-center transition-transform duration-300", menuOpen && "translate-y-[5px] rotate-45")} />
              <path d="M4 12h16" className={cn("transition-opacity duration-200", menuOpen && "opacity-0")} />
              <path d="M4 17h16" className={cn("origin-center transition-transform duration-300", menuOpen && "-translate-y-[5px] -rotate-45")} />
            </svg>
          </button>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        onClose={() => {
          setMenuOpen(false);
          menuButton.current?.focus();
        }}
      />
    </>
  );
}
