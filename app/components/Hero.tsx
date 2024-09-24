"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import ComputerSvg from "@/public/computer.svg";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className="paddingX inset-0 mt-[100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex flex-row my-auto">
          <div>
            <h1 className="heroHeadText text-white">
              Hi, I&apos;m <span className="text-[#915EFF] ">Vinay</span>
            </h1>
            <p className="heroSubText">
              A Software Developer&nbsp;
              {/* <br className="sm:block hidden" />& UI/UX Designer */}
            </p>
          </div>
        </div>
        <Image
          src={ComputerSvg}
          alt="Computer Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
