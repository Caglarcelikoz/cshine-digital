import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // The locale comes from the [locale] root segment, so any Server Component can
  // read it without prop drilling or setRequestLocale(). An explicit `locale`
  // argument (e.g. getTranslations({ locale })) still takes precedence.
  if (!locale) {
    const param = await rootParams.locale();
    if (!hasLocale(routing.locales, param)) notFound();
    locale = param;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
