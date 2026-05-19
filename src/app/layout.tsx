import type { Metadata } from "next";
import { Fraunces, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

// Display / headlines — section 12.4 free alternative to Canela.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

// Body — section 12.4 free alternative to Söhne.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Script for the "green" portion of the recreated wordmark (brief 12.2).
const kaushan = Kaushan_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.currentSite),
  title: {
    default: `${site.legalName} — Design · Build · Maintain · Snow`,
    template: `%s · ${site.name}`,
  },
  description:
    "The family-run, four-season outdoor-living craftsman the GTA's best suburbs already trust. Design, build, maintain and plow — one crew, every season, for as long as you own the home.",
  openGraph: {
    title: `${site.legalName} — One crew. Four seasons.`,
    description:
      "Design, build, maintain and snow services across Etobicoke, Vaughan, Richmond Hill and the GTA. Family-owned since 2007.",
    type: "website",
    locale: "en_CA",
    siteName: site.legalName,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: site.legalName,
  url: site.currentSite,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.established),
  description:
    "Family-owned design-build-maintain landscape company serving the GTA's affluent suburbs — one crew, four seasons.",
  areaServed: [
    "Etobicoke",
    "Vaughan",
    "Richmond Hill",
    "King City",
    "Aurora",
    "Tottenham",
  ].map((name) => ({ "@type": "City", name })),
  knowsAbout: [
    "Landscape design",
    "Hardscape",
    "Patios",
    "Retaining walls",
    "Lawn care",
    "Snow removal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${inter.variable} ${kaushan.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-limestone text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
