import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "C-Shine Digital | Flexible Web, IT & Development Studio in Belgium",
  description:
    "A Belgian digital studio built around flexibility: a developer in your team, your whole IT department, or the studio that builds your idea from scratch. Web, e-commerce, branding, hosting and support.",
  keywords: [
    "software development",
    "IT consultancy",
    "Belgium",
    "C-Shine Digital",
    "web development",
    "mobile development",
    "digital transformation",
    "custom software",
    "enterprise software",
    "Belgium software company",
    "Limburg IT services",
    "Zutendaal software development",
  ],
  openGraph: {
    title: "C-Shine Digital | Flexible Web, IT & Development Studio",
    description:
      "Web, IT and software development in Belgium. Whether you need one developer, a full IT department, or a partner to build your product from scratch, we scale to fit.",
    type: "website",
    url: "https://www.cshinedigital.com",
    siteName: "C-Shine Digital",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "C-Shine Digital | Software Development & IT Consultancy",
    description:
      "Leading IT consultancy and software development company in Belgium.",
  },
  alternates: {
    canonical: "https://www.cshinedigital.com",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={spaceGrotesk.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
