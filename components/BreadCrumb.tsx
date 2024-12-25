"use client";
import Link from "next/link";
import { ChevronRight } from "@styled-icons/heroicons-outline/ChevronRight";
import React from "react";

interface BreadcrumbProps {
  current: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ current }) => {
  return (
    <nav className="py-4 px-6 rounded-md ">
      <ol className="list-reset flex items-center">
        <li>
          <Link className="flex items-center text-cshine-blue-500" href="/">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4-4h.01"
              ></path>
            </svg>
          </Link>
        </li>
        <li>
          <ChevronRight className="text-gray-500 mx-2" size={20} />
        </li>
        <li>
          <span className="flex items-center text-gray-500">{current}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
