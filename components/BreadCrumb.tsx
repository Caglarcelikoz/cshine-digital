import { useTranslations } from "next-intl";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "@/i18n/navigation";
import type { StaticPathname } from "@/i18n/routing";

export type BreadcrumbParent = { label: string; href: StaticPathname };

interface BreadcrumbProps {
  current: string;
  /** Optional intermediate link between Home and the current page */
  parent?: BreadcrumbParent;
  /** "dark" when placed on a dark background, e.g. inside PageHero */
  tone?: "light" | "dark";
}

const TONES = {
  light: {
    link: "text-cshine-blue-700 hover:text-cshine-blue-800",
    separator: "text-neutral-500",
    current: "text-midnight-900",
  },
  dark: {
    link: "text-cshine-blue-300 hover:text-white",
    separator: "text-white/40",
    current: "text-white",
  },
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  current,
  parent,
  tone = "light",
}) => {
  const t = useTranslations("Common");
  const c = TONES[tone];
  return (
    <nav aria-label={t("breadcrumbLabel")} className="py-4 px-6">
      <ol className="list-reset flex items-center text-sm">
        <li>
          <Link
            className={`flex items-center transition-colors ${c.link}`}
            href="/"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4-4h.01"
              ></path>
            </svg>
            <span className="font-medium">{t("breadcrumbHome")}</span>
          </Link>
        </li>
        {parent && (
          <>
            <li aria-hidden="true">
              <ChevronRightIcon className={`h-[18px] w-[18px] mx-1.5 ${c.separator}`} />
            </li>
            <li>
              <Link
                className={`font-medium transition-colors ${c.link}`}
                href={parent.href}
              >
                {parent.label}
              </Link>
            </li>
          </>
        )}
        <li aria-hidden="true">
          <ChevronRightIcon className={`h-[18px] w-[18px] mx-1.5 ${c.separator}`} />
        </li>
        <li>
          <span
            className={`flex items-center font-semibold ${c.current}`}
            aria-current="page"
          >
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
