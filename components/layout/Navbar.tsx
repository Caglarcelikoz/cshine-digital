"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/how-we-work", key: "howWeWork" },
  { href: "/about", key: "about" },
  { href: { pathname: "/", hash: "contact" }, key: "contact" },
] as const;

const Navbar = () => {
  const t = useTranslations("Navigation");
  const tCommon = useTranslations("Common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full h-20 z-50 transition-colors duration-300
        bg-midnight-900 border-b border-cshine-blue-500/10
        ${scroll ? "shadow-glow" : ""}
      `}
    >
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="relative group py-4">
            <div
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-cshine-blue-500/20 to-transparent 
              opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
            />
            <Image
              src="/images/logo_img_transparent.png"
              alt={tCommon("logoAlt")}
              // Source is 1200×867; 100×72 keeps that ratio (100×42 got
              // stretched back to 72 by Tailwind's `height: auto` anyway).
              width={100}
              height={72}
              priority
              className="relative transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full gap-1">
            {NAV_ITEMS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className={`relative h-full px-4 lg:px-5 flex items-center text-sm lg:text-base font-medium transition-all duration-300 group
                  hover:bg-cshine-blue-500/5 cursor-pointer
                  ${
                    currentRoute === href
                      ? "text-cshine-blue-400"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                <span className="relative z-10">{t(key)}</span>
                {currentRoute === href && (
                  <span className="absolute inset-0 bg-cshine-blue-500/10" />
                )}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cshine-blue-400 to-cshine-blue-500
                  transition-all duration-300 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                />
              </Link>
            ))}
            <LocaleSwitcher className="ml-3" />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 
              hover:bg-white/10 hover:shadow-inner-glow
              transition-all duration-200 flex items-center justify-center"
            aria-label={t("toggleMenu")}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 bg-cshine-blue-400 transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-cshine-blue-400 transition-all duration-300 ease-in-out
                  ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-cshine-blue-400 transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 top-20 overflow-hidden bg-midnight-900 border-b border-cshine-blue-500/10
            transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "max-h-[28rem] opacity-100 visible"
                : "max-h-0 opacity-0 border-none invisible"
            }
          `}
        >
          <div className="container mx-auto px-4">
            <div className="py-3 space-y-1">
              {NAV_ITEMS.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all duration-200
                    hover:bg-cshine-blue-500/5 cursor-pointer
                    ${
                      currentRoute === href
                        ? "text-cshine-blue-400 bg-cshine-blue-500/10"
                        : "text-white/90 hover:text-white"
                    }
                  `}
                >
                  {t(key)}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-1">
                <LocaleSwitcher
                  className="inline-flex"
                  onNavigate={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
