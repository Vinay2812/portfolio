"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";
import { skillsImage } from "../utils/skills";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import useVisibility from "../utils/helpers";
import { useEffect } from "react";

const Tech = ({ setActive }: any) => {
  const [isVisible, ref] = useVisibility();
  useEffect(() => {
    if (isVisible) setActive("tech");
  }, [isVisible]);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="styles.sectionSubText text-center">
          Technologies I have worked with.
        </p>
        <h2 ref={ref} className="sectionHeadText text-center">
          Skills.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-0">
        {technologies.map((skill) => (
          <div
            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
            key={skill}
          >
            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
              <div className="flex -translate-y-[1px] justify-center">
                <div className="w-3/4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-8 sm:h-10">
                  <Image
                    src={skillsImage(skill)}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-white text-sm sm:text-lg">{skill}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
