"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

const Navbar = () => {
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
              alt="C-Shine Digital Logo"
              width={100}
              height={42}
              priority
              className="relative transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full gap-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative h-full px-6 flex items-center font-medium transition-all duration-300 group
                  hover:bg-cshine-blue-500/5 cursor-pointer
                  ${
                    currentRoute === href
                      ? "text-cshine-blue-400"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                <span className="relative z-10">{label}</span>
                {currentRoute === href && (
                  <span className="absolute inset-0 bg-cshine-blue-500/10" />
                )}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cshine-blue-400 to-cshine-blue-500
                  transition-all duration-300 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 
              hover:bg-white/10 hover:shadow-inner-glow
              transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle menu"
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
          className={`md:hidden absolute left-0 right-0 top-20 bg-midnight-900 border-b border-cshine-blue-500/10
            transition-all duration-300 ease-in-out
            ${
              isMenuOpen
                ? "max-h-64 opacity-100"
                : "max-h-0 opacity-0 border-none"
            }
          `}
        >
          <div className="container mx-auto px-4">
            <div className="py-3 space-y-1">
              {NAV_ITEMS.map(({ href, label }) => (
                <Link
                  key={href}
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
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
