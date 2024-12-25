"use client";
import { useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import BackgroundPattern from "./layout/BackgroundPattern";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BackgroundPattern variant="dark" className="py-24">
      <div className="container relative mx-auto px-4 z-10" id="contact">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cshine-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-400">
              Ready to start your project? We&apos;d love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8 md:pr-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-400">
                  Fill out the form or contact us directly using the information
                  below
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+32468100506"
                  className="flex items-center gap-4 text-gray-400 hover:text-cshine-blue-400 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cshine-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-cshine-blue-500" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div>+32 468 10 05 06</div>
                  </div>
                </a>

                <a
                  href="mailto:info@cshinedigital.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-cshine-blue-400 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cshine-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <MailIcon className="w-6 h-6 text-cshine-blue-500" />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div>info@cshinedigital.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-cshine-blue-500 focus:border-cshine-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-cshine-blue-500 focus:border-cshine-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-cshine-blue-500 focus:border-cshine-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-white/5 border-white/10 text-white focus:ring-cshine-blue-500 focus:border-cshine-blue-500"
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r 
                      from-cshine-blue-500 to-cyan-500 text-white font-semibold
                      transition-all duration-300 hover:shadow-glow hover:scale-105
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BackgroundPattern>
  );
};

export default Contact;
