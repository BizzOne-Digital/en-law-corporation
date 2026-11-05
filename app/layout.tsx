import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description:
    "Family law services in Surrey, British Columbia, including divorce, separation agreements, child access, child support and spousal support.",
};

export const viewport: Viewport = { themeColor: "#0A2342" };

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/og-image-theme.jpg`,
  telephone: "+1-604-518-9232",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#100 – 7164 120 Street",
    addressLocality: "Surrey",
    addressRegion: "BC",
    postalCode: "V3W 3M8",
    addressCountry: "CA",
  },
  areaServed: ["British Columbia", "Washington", "California"],
  knowsAbout: ["Divorce", "Separation Agreements", "Child Access", "Child Support", "Spousal Support"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a
          href="#main"
          className="on-dark sr-only z-[60] rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </body>
    </html>
  );
}
