import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MapIcon, MailIcon } from "@heroicons/react/solid";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="contact">
      <div id="contact" className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-center text-white mb-8">
            Contact Us
          </h2>
          <div className="rounded-lg shadow-sm shadow-cshine-blue-500 p-6 md:flex md:items-center md:justify-center md:space-x-8">
            <div className="md:w-1/2 md:text-left text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <p className="mb-4 text-gray-300">
                Have a question, an idea, or just want to say hi? Feel free to
                contact us.
              </p>
              <div className="flex items-center space-x-4">
                <MailIcon className="h-6 w-6 text-gray-300" />
                <a
                  href="mailto:info@cshinedigital.com"
                  className="text-gray-300 hover:underline"
                >
                  info@cshinedigital.com
                </a>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-cshine-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cshine-blue-500"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
              <div className="mt-6">
                <p className="text-gray-300">
                  We're available during business hours to answer your
                  questions.
                </p>
                <p className="text-gray-300">
                  Feel free to reach out, and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logo_transparent.png"
                  alt="C-Shine Digital Logo"
                  width={250}
                  height={50}
                />
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:text-center">
              <div className="flex flex-col items-center space-y-4">
                <MapIcon className="h-12 w-12 text-gray-300" />
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25098.218899999995!2d5.5803111!3d50.9249079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b19360d2261b%3A0x9ab6cfd4f174ef0d!2sZutendaal%2C%20Belgium!5e0!3m2!1sen!2sus!4v1629956157417!5m2!1sen!2sus"
                  width="350"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
