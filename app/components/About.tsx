"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "@/app/utils/motion";
import useVisibility from "../utils/helpers";
import { useEffect } from "react";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const About = ({ setActive }: any) => {
  const [isVisible, ref] = useVisibility();
  useEffect(() => {
    if (isVisible) setActive("about");
    console.log("about", isVisible);
  }, [isVisible]);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p ref={ref} className="sectionSubText">
          Introduction
        </p>
        <h2 className="styles.sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        I’m Vinay Sarda, a Software Development Engineer at Infybytes AI Labs
        with expertise in full-stack development, cloud solutions, and
        performance optimization. I specialize in React, Node.js, MongoDB, AWS,
        and GCP. I’ve successfully led cloud migration projects, optimized
        system performance, and built scalable solutions that improve user
        experience. My competitive programming experience on Leetcode and
        GeeksforGeeks has honed my problem-solving skills. I’m passionate about
        delivering efficient, user-centric solutions and continuously improving
        my skill set. Feel free to explore my portfolio, and let’s connect if
        you’re interested in collaborating!
      </motion.p>
      {/* <div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div> */}
      <div className="mt-12 flex w-full justify-center">
        <Image src="/about.png" alt="About" width={500} height={500} />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
