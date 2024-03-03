import Layout from "@/components/layout/Layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "C-Shine Digital",
  description:
    "C-Shine Digital is an IT consultancy and software development company based in Belgium. We help companies to build and maintain their digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
