import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Company */}
          <div>
            <h3 className="font-display text-white font-semibold text-lg mb-3">
              C-Shine Digital
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              A Belgian digital studio built around flexibility: a developer in
              your team, your whole IT department, or the studio that builds your
              idea from scratch.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/how-we-work", label: "How we work" },
                { href: "/about", label: "About" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-400 hover:text-cshine-blue-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / legitimacy */}
          <div>
            <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-4 w-4 mt-0.5 text-cshine-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>Zutendaal, Belgium</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="h-4 w-4 mt-0.5 text-cshine-blue-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@cshinedigital.com"
                  className="hover:text-cshine-blue-400 transition-colors"
                >
                  info@cshinedigital.com
                </a>
              </li>
              {/* TODO: add official company registration / BTW-VAT number once confirmed */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {year} C-Shine Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-neutral-400 hover:text-cshine-blue-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-neutral-400 hover:text-cshine-blue-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
