"use client";
import { motion } from "framer-motion"; // Import the motion component from Framer Motion
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMonitor, FiCode, FiLayers, FiUsers } from "react-icons/fi";

import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-center text-primary mb-6">
            Crafting Digital Excellence
          </h1>
          <div className="md:flex md:space-x-12 items-center">
            <div className="md:w-1/2 md:text-left text-center">
              <p className="text-gray-700 text-lg">
                C-Shine Digital, based in Belgium, is an IT consultancy company
                specializing in software development. We are digital artisans
                dedicated to transforming ideas into impactful digital
                solutions.
              </p>
              <p className="text-gray-700 text-lg mt-2">
                {" "}
                With expertise in code craftsmanship and design excellence, we
                bridge the gap between vision and reality, crafting innovative
                digital experiences for businesses globally.
              </p>
              <div className="mt-6 flex text-gray-700">
                <FaMapMarkerAlt className="h-6 w-6 mr-2 text-cshine-blue-500" />
                <p>Located in Belgium, radiating innovation worldwide.</p>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
              <Image
                src="/images/hero.svg"
                alt="services"
                width={0}
                height={0}
                sizes="80vw"
                style={{ width: "32rem" }}
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            <motion.h3 className="text-3xl font-extrabold text-primary mb-8">
              What Sets Us Apart
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                className="p-4 rounded-lg bg-primary hover:bg-cshine-blue-500 text-white text-center shadow-cshine-blue-500 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <FiCode className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Code Craftsmanship</p>
                <p className="text-sm">Elegant code that performs.</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-primary hover:bg-cshine-blue-500 text-white text-center shadow-cshine-blue-500 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <FiLayers className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Design Mastery</p>
                <p className="text-sm">Beautiful aesthetics meet function.</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-primary hover:bg-cshine-blue-500 text-white text-center shadow-cshine-blue-500 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <FiUsers className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Collaborative Approach</p>
                <p className="text-sm">Your vision, our expertise.</p>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-primary hover:bg-cshine-blue-500 text-white text-center shadow-cshine-blue-500 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <FiMonitor className="h-8 w-8 mx-auto mb-2" />
                <p className="text-lg font-semibold">Cutting-Edge Tech</p>
                <p className="text-sm">Innovative solutions that shine.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
