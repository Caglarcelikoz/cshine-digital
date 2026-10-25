import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware wrappers around Next's navigation APIs. Use these instead of
// next/link and next/navigation so links resolve to the localized slug.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
