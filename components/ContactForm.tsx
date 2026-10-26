"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

const inputClasses =
  "w-full rounded-lg bg-white border border-neutral-300 px-4 py-3 text-midnight-900 placeholder-neutral-400 " +
  "focus:border-cshine-blue-500 focus:ring-2 focus:ring-cshine-blue-500/30 focus:outline-none transition-colors";

const labelClasses = "block text-sm font-medium text-neutral-700 mb-1.5";

/** The contact form on /contact (light background). Posts to /api/contact. */
const ContactForm = () => {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");
  const locale = useLocale();
  const [form, setForm] = useState(EMPTY_FORM);
  const [website, setWebsite] = useState("");
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
        body: JSON.stringify({ ...form, website, locale }),
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
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
      setErrorMsg(tCommon("errors.generic"));
    }
  };

  if (status === "success") {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cshine-blue-500 to-cyan-500">
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-midnight-900 mb-2">
          {t("successTitle")}
        </h2>
        <p className="text-neutral-600">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClasses}>
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder={t("namePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder={t("emailPlaceholder")}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={labelClasses}>
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
        <label htmlFor="message" className={labelClasses}>
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-danger" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full
          disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {status === "sending" ? tCommon("sending") : t("submit")}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        {t.rich("privacyNote", {
          link: (chunks) => (
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-cshine-blue-700"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </form>
  );
};

export default ContactForm;
