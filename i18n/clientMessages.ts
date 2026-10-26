import type { Messages } from "next-intl";
import { getMessages } from "next-intl/server";

/**
 * Namespaces read by Client Components in the shared layout (Navbar,
 * LocaleSwitcher, FAQ, ProcessTracks, CaseGallery, ContactForm, ContactCta,
 * BreadCrumb, CookieConsent). Server Components read messages on the server,
 * so everything else — page copy, metadata, the legal texts — never reaches
 * the browser.
 *
 * Add a namespace here when a Client Component starts using it.
 */
const SHARED_CLIENT_NAMESPACES = [
  "Common",
  "Navigation",
  "Contact",
  "FAQ",
  "Modes",
  "ProcessTracks",
  "CaseGallery",
  "Cookies",
] as const satisfies readonly (keyof Messages)[];

/** The messages to hand to NextIntlClientProvider, plus any page-specific ones. */
export async function getClientMessages(
  extra: readonly (keyof Messages)[] = []
): Promise<Partial<Messages>> {
  const messages = await getMessages();
  return Object.fromEntries(
    [...SHARED_CLIENT_NAMESPACES, ...extra].map((ns) => [ns, messages[ns]])
  );
}
