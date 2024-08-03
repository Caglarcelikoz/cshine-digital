"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <nav
      className={`fixed top-0 w-full py-2  bg-[radial-gradient(ellipse_80%_60%_at_top,#04C4D4_1%,#000001_50%)]  transition duration-300 z-20 ${
        scroll && "shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="/images/logo_img_transparent.png"
                alt="C-Shine Digital Logo"
                width={100}
                height={50}
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-cshine-blue-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H11C11.5523 19 12 18.5523 12 18C12 17.4477 11.5523 17 11 17H5Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex md:space-x-4">
            <li>
              <Link
                href="/"
                className={` ${
                  currentRoute === "/"
                    ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                    : "text-white"
                } hover:text-cshine-blue-500 font-semibold`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/how-we-work"
                className={` ${
                  currentRoute === "/how-we-work"
                    ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                    : "text-white"
                } hover:text-cshine-blue-500 font-semibold`}
              >
                How we work
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={` ${
                  currentRoute === "/services"
                    ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                    : "text-white"
                } hover:text-cshine-blue-500 font-semibold`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={` ${
                  currentRoute === "/contact"
                    ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                    : "text-white"
                } hover:text-cshine-blue-500 font-semibold`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 w-4/5" style={{ width: "70%" }}>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className={` ${
                    currentRoute === "/"
                      ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                      : "text-white"
                  } hover:text-cshine-blue-500`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  onClick={toggleMenu}
                  className={` ${
                    currentRoute === "/how-we-work"
                      ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                      : "text-white"
                  } hover:text-cshine-blue-500`}
                >
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={toggleMenu}
                  className={` ${
                    currentRoute === "/services"
                      ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                      : "text-white"
                  } hover:text-cshine-blue-500`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={toggleMenu}
                  className={` ${
                    currentRoute === "/contact"
                      ? "text-cshine-blue-500 underline underline-offset-8 decoration-cshine-blue-500"
                      : "text-white"
                  } hover:text-cshine-blue-500`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
