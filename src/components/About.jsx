import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
      >
        {/* Make the image fill the entire card as a background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content appears on top of the background image */}
        <div className="relative z-10">
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a pre-final year undergraduate at IITK with a passion for Machine Learning, Deep Learning, Reinforcement Learning,full-stack development and Data Analytics. I have experience in TypeScript and JavaScript, with expertise in frameworks like React, Node.js, and Express. I enjoy solving real-world problems, building efficient applications, and exploring innovative solutions that make an impact.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");