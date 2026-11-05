import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { mainNav, serviceNav } from "@/data/navigation";
import { site } from "@/lib/site";

function FooterLinks({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-label={`Footer ${title}`}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[15px] text-white/80 transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-navy text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.3fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/80">
            Professional family law representation focused on clarity, strategy and practical solutions.
          </p>
          <p className="mt-5 max-w-xs border-l-2 border-gold pl-4 text-sm leading-relaxed text-white/80">
            {site.licensing}
          </p>
        </div>
        <FooterLinks title="Navigation" links={mainNav} />
        <FooterLinks title="Services" links={serviceNav} />
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</h2>
          <ul className="mt-5 space-y-4 text-[15px] text-white/80">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {site.addressLine1}
                <br />
                {site.addressLine2}
              </address>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elizabeth Nijjar Law Corporation. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms of Use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
