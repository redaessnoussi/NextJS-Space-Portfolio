"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="h-5 w-5 mr-[10px] text-[#b49bff]" />
          <h1 className="welcome-text text-[13px]">
            FullStack Developer Portfolio
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
