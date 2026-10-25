"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

/**
 * The contact section closes every page; the site footer sits inside it so it
 * shares the section background. Footer is a Server Component, so it is passed
 * in from the (server) layout rather than imported here.
 */
const Contact = ({ footer }: { footer: React.ReactNode }) => {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");
  const locale = useLocale();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) {
        // Show our own localized copy rather than the API's English message.
        setStatus("error");
        setErrorMsg(
          res.status === 429
            ? tCommon("errors.rateLimit")
            : res.status === 400
            ? tCommon("errors.invalid")
            : tCommon("errors.generic")
        );
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg(tCommon("errors.generic"));
    }
  };

  const inputClasses =
    "w-full rounded-lg bg-midnight-800 border border-white/10 px-4 py-3 text-white placeholder-neutral-500 " +
    "focus:border-cshine-blue-500 focus:ring-2 focus:ring-cshine-blue-500/30 focus:outline-none transition-colors";

  return (
    <section className="relative overflow-hidden bg-midnight-900" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/50 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at center, #04C4D4 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10">
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-balance text-white mb-4">
                  {t("title")}
                </h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                  {t("intro")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: form */}
                <div>
                  {status === "success" ? (
                    <div className="rounded-2xl border border-cshine-blue-500/30 bg-midnight-800/60 p-8 text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cshine-blue-500 to-cyan-500">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {t("successTitle")}
                      </h3>
                      <p className="text-neutral-400">{t("successBody")}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            {t("name")}
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder={t("namePlaceholder")}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            {t("email")}
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder={t("emailPlaceholder")}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {t("subject")}
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder={t("subjectPlaceholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                          {t("message")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder={t("messagePlaceholder")}
                        />
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-danger-dark" role="alert">
                          {errorMsg}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary on-dark w-full
                          disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                      >
                        {status === "sending" ? tCommon("sending") : t("submit")}
                      </button>
                    </form>
                  )}
                </div>

                {/* Right: details + map */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <a
                      href="mailto:info@cshinedigital.com"
                      className="flex items-center gap-4 text-neutral-400 hover:text-cshine-blue-500 transition-colors"
                    >
                      <FaEnvelope className="h-5 w-5 text-cshine-blue-500" aria-hidden="true" />
                      <span>info@cshinedigital.com</span>
                    </a>
                    <div className="flex items-center gap-4 text-neutral-400">
                      <FaMapMarkerAlt className="h-5 w-5 text-cshine-blue-500" aria-hidden="true" />
                      <span>{tCommon("location")}</span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-400">
                      <FaClock className="h-5 w-5 text-cshine-blue-500" aria-hidden="true" />
                      <span>{t("hours")}</span>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-cshine-blue-500/30 to-transparent" />
                  <div>
                    <h3 className="text-white font-semibold mb-4">
                      {t("connect")}
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/company/c-shine-digital"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("linkedin")}
                        className="p-3 rounded-xl bg-midnight-800 border border-white/10 hover:border-cshine-blue-500/50 transition-colors"
                      >
                        <FaLinkedin className="h-5 w-5 text-cshine-blue-500" aria-hidden="true" />
                      </a>
                      <a
                        href="https://www.instagram.com/cshine.digital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("instagram")}
                        className="p-3 rounded-xl bg-midnight-800 border border-white/10 hover:border-cshine-blue-500/50 transition-colors"
                      >
                        <FaInstagram className="h-5 w-5 text-cshine-blue-500" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="relative h-56 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-midnight-800/50 to-transparent z-10 pointer-events-none" />
                    <iframe
                      title={t("mapTitle")}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25098.218899999995!2d5.5803111!3d50.9249079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b19360d2261b%3A0x9ab6cfd4f174ef0d!2sZutendaal%2C%20Belgium!5e0!3m2!1sen!2sus!4v1629956157417!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      className="grayscale absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {footer}
      </div>
    </section>
  );
};

export default Contact;
