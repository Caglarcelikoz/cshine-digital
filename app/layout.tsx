import Layout from "@/components/layout/Layout";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "C-Shine Digital | Software Development & IT Consultancy Belgium",
  description:
    "C-Shine Digital is a leading IT consultancy and software development company in Belgium. We specialize in web development, mobile apps, and digital transformation solutions.",
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
    title: "C-Shine Digital | Software Development & IT Consultancy",
    description:
      "Leading IT consultancy and software development company in Belgium. Specializing in web development, mobile apps, and digital transformation.",
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
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
