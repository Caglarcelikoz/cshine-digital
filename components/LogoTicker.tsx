"use client";
import telenetLogo from "../public/images/telenet-logo.png";
import mkmLogo from "../public/images/mkm.png";
import ravagoLogo from "../public/images/ravago-logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="flex justify-center items-center py-8 md:py-12 bg-white">
      <div className="container flex justify-center items-center">
        <div className="flex overflow-hidden justify-center items-center text-center [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={telenetLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={mkmLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={ravagoLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={telenetLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={mkmLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={ravagoLogo}
              alt="Acme logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
