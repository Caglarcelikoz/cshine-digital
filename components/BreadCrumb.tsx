"use client";
import Link from "next/link";
import { ChevronRight } from "@styled-icons/heroicons-outline/ChevronRight";
import React from "react";

interface BreadcrumbProps {
  current: string;
  /** Optional intermediate link between Home and the current page */
  parent?: { label: string; href: string };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ current, parent }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6">
      <ol className="list-reset flex items-center text-sm">
        <li>
          <Link
            className="flex items-center text-cshine-blue-700 hover:text-cshine-blue-800 transition-colors"
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
            <span className="font-medium">Home</span>
          </Link>
        </li>
        {parent && (
          <>
            <li aria-hidden="true">
              <ChevronRight className="text-neutral-500 mx-1.5" size={18} />
            </li>
            <li>
              <Link
                className="font-medium text-cshine-blue-700 hover:text-cshine-blue-800 transition-colors"
                href={parent.href}
              >
                {parent.label}
              </Link>
            </li>
          </>
        )}
        <li aria-hidden="true">
          <ChevronRight className="text-neutral-500 mx-1.5" size={18} />
        </li>
        <li>
          <span
            className="flex items-center font-semibold text-midnight-900"
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
