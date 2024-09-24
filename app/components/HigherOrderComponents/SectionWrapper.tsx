"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
  return function HOC(props) {
    return (
      <div
        // variants={staggerContainer()}
        // initial="show"
        // whileInView="show"
        // exit="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        {/* <span className="hash-span" id={idName}>
          {" "}
          &nbsp;{" "}
        </span> */}
        <Component {...props} />
      </div>
    );
  };
};

export default SectionWrapper;
