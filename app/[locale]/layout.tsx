import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/StructuredData";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Every page is a static marketing page: fail the build if anything would make
// a route render per request (cookies(), headers(), uncached data, …).
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Site-wide defaults; each page sets its own title, description, canonical
// and hreflang alternates via lib/seo.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  children,
}: LayoutProps<"/[locale]">) {
  // Validated against routing.locales in i18n/request.ts (404 otherwise).
  const locale = await getLocale();

  return (
    <html lang={locale} className={spaceGrotesk.variable}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className={spaceGrotesk.className}>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
