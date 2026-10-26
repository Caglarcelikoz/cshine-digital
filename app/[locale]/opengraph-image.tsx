import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// The social preview (og:image / Twitter card) for every page in a locale.
export const alt = "C-Shine Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Cached so the image can be prerendered at build time.
async function getLogoDataUrl() {
  "use cache";
  const logo = await readFile(
    join(process.cwd(), "public/images/c-shine-digital-transparent.png")
  );
  return `data:image/png;base64,${logo.toString("base64")}`;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Image routes are route handlers, where next/root-params isn't available,
  // so the locale comes from params.
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "OgImage" });
  const logoSrc = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#04050c",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(4,196,212,0.28), transparent 45%), radial-gradient(circle at 10% 95%, rgba(4,196,212,0.18), transparent 45%)",
          color: "#ffffff",
        }}
      >
        <img src={logoSrc} width={500} height={300} alt="" />
        <div
          style={{
            marginTop: 8,
            fontSize: 44,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {t("tagline")}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 26,
            color: "#33dfef",
          }}
        >
          cshinedigital.com
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundImage: "linear-gradient(90deg, #04c4d4, #06b6d4)",
          }}
        />
      </div>
    ),
    size
  );
}
