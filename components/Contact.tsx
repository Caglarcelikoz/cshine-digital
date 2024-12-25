import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Footer from "./layout/Footer";

const Contact = () => {
  return (
    <section className="relative overflow-hidden bg-midnight-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#04C4D4_0%,transparent_35%)] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cshine-blue-500/50 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, #04C4D4 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10">
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Have a project in mind? Let&apos;s discuss how we can help
                  bring your ideas to life.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <a
                      href="mailto:info@cshinedigital.com"
                      className="flex items-center gap-4 text-gray-400 hover:text-cshine-blue-500 transition-colors"
                    >
                      <FaEnvelope className="h-5 w-5 text-cshine-blue-500" />
                      <span>info@cshinedigital.com</span>
                    </a>
                    <div className="flex items-center gap-4 text-gray-400">
                      <FaMapMarkerAlt className="h-5 w-5 text-cshine-blue-500" />
                      <span>Zutendaal, Belgium</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <FaClock className="h-5 w-5 text-cshine-blue-500" />
                      <span>Mon - Fri: 9:00 - 17:00</span>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-cshine-blue-500/30 to-transparent" />
                  <div>
                    <h3 className="text-white font-semibold mb-4">
                      Connect With Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.linkedin.com/company/c-shine-digital"
                        target="_blank"
                        className="p-3 rounded-xl bg-midnight-800 border border-white/10 hover:border-cshine-blue-500/50 transition-colors"
                      >
                        <FaLinkedin className="h-5 w-5 text-cshine-blue-500" />
                      </a>
                      <a
                        href="https://www.instagram.com/cshine.digital/"
                        target="_blank"
                        className="p-3 rounded-xl bg-midnight-800 border border-white/10 hover:border-cshine-blue-500/50 transition-colors"
                      >
                        <FaInstagram className="h-5 w-5 text-cshine-blue-500" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-midnight-800/50 to-transparent z-10" />
                  <iframe
                    title="Location Map"
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
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
