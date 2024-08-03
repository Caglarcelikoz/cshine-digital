"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#04C4D4_10%,#000001_60%)] overflow-x-clip text-white pt-20 pb-12">
      <div className="max-w-xl mx-auto text-center m-auto">
        <motion.img
          src="/images/c-shine-digital-transparent.png"
          alt="C-Shine Digital"
          className="w-auto mx-auto"
          animate={{
            translateY: [-15, 15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Driving Success with Next-Generation IT Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Helping You Maximize Operations Management with Digitalization
        </p>
        <a
          href="/services"
          className="bg-cshine-blue-500 text-white py-3 px-8 rounded-full font-semibold  transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
