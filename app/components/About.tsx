"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
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
        As a talented Front-End Web Developer and UI/UX Designer, I have honed
        my skills in working with a variety of JavaScript libraries, including
        React.js, Next.js and Three.js. Through my experience, I have developed
        a deep understanding of how these libraries can be leveraged to create
        dynamic and engaging user interfaces. In addition, I am a quick learner
        and have worked on numerous projects using popular CSS frameworks such
        as Tailwind and Bootstrap. I am confident in my ability to create sleek
        and responsive designs that meet the specific needs of any project. With
        a keen eye for detail and a passion for delivering high-quality work, I
        am dedicated to creating beautiful and user-friendly experiences that
        delight users.
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
