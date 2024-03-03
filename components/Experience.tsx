"use client";
import { motion } from "framer-motion"; // Import the motion component from Framer Motion
import {
  ClockIcon,
  DocumentReportIcon,
  UserIcon,
  StarIcon,
} from "@heroicons/react/solid";
const Experience = () => {
  return (
    <section id="experience" className="bg-primary">
      <div className="container px-4 mx-auto text-cshine-blue-500">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 pb-4">
          <motion.div
            className="hover-up-5 flex py-4 animate__animated animate__fadeIn"
            data-wow-delay=".1s"
          >
            <div className="flex justify-center items-center rounded-xl h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-r from-cyan-500 to-cshine-blue-500">
              <UserIcon className="w-12 h-12 text-white" />
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-cshine-blue-500">
                + 8
              </span>
              <p className="text-xs sm:text-base text-cshine-blue-500 font-semibold">
                Collaborative Partners
              </p>
            </div>
          </motion.div>
          <motion.div
            className="hover-up-5 flex py-4  animate__animated animate__fadeIn"
            data-wow-delay=".2s"
          >
            <div className="flex justify-center items-center rounded-xl h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-r from-cyan-500 to-cshine-blue-500">
              <DocumentReportIcon className="w-12 h-12 text-white" />
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-cshine-blue-500">
                + 10
              </span>
              <p className="text-xs sm:text-base text-cshine-blue-500 font-semibold">
                Successful Projects
              </p>
            </div>
          </motion.div>
          <motion.div
            className="hover-up-5 flex py-4 animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <div className="flex justify-center items-center rounded-xl h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-r from-cyan-500 to-cshine-blue-500">
              <StarIcon className="w-12 h-12 text-white" />
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-cshine-blue-500">
                100%
              </span>
              <p className="text-xs sm:text-base text-cshine-blue-500 font-semibold">
                Customer Satisfaction
              </p>
            </div>
          </motion.div>
          <motion.div
            className="hover-up-5 flex  py-4  animate__animated animate__fadeIn"
            data-wow-delay=".4s"
          >
            <div className="flex justify-center items-center rounded-xl h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-r from-cyan-500 to-cshine-blue-500">
              <ClockIcon className="w-12 h-12 text-white" />
            </div>
            <div className="sm:py-2 ml-2 sm:ml-6">
              <span className="sm:text-2xl font-bold font-heading text-cshine-blue-500">
                + 5 Years
              </span>
              <p className="text-xs sm:text-base text-cshine-blue-500 font-semibold">
                Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
