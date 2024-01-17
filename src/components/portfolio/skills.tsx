"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark "
    >
      {name}
    </motion.div>
  );
};

const Skills = ({ className }: { className?: string }) => {
  const ref = useRef(null);

  return (
    <div className={`${className}`}>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>

      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        "
        >
          Tech
        </motion.div>

        <Skill name="Deep Learning" x="10vw" y="-20vw" />
        <Skill name="Reinforcment Learning" x="25vw" y="-19vw" />
        <Skill name="Explainable Artificial Intelligence" x="12vw" y="-15vw" />
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-15vw" y="-2vw" />
        <Skill name="JavaScript" x="-12vw" y="4vw" />
        <Skill name="TypeScript" x="-13vw" y="15vw" />
        <Skill name="ReactJS" x="-11vw" y="11vw" />
        <Skill name="React Native" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-18vw" y="12vw" />
        <Skill name="ElectronJS" x="-10vw" y="19vw" />
        <Skill name="Github" x="-20vw" y="-15vw" />
        <Skill name="Figma" x="-15vw" y="-18vw" />
        <Skill name="Firebase" x="-27vw" y="-14vw" />
        <Skill name="Tawilwind CSS" x="-25vw" y="-5vw" />
        <Skill name="Python" x="28vw" y="8vw" />
        <Skill name="Django" x="25vw" y="5vw" />
        <Skill name="Flask" x="22vw" y="8vw" />
        <Skill name="C" x="11vw" y="6vw" />
        <Skill name="C++" x="10vw" y="10vw" />
        <Skill name="RESTful API" x="25vw" y="14vw" />
        <Skill name="C#" x="28vw" y="-2vw" />
        <Skill name=".NET" x="22vw" y="-4vw" />
        <Skill name=".NET Core" x="28vw" y="-6vw" />
        <Skill name="MQTT" x="-28vw" y="-18vw" />
        <Skill name="Unity" x="23vw" y="0vw" />
        <Skill name="Java" x="28vw" y="18vw" />
        <Skill name="Spring Boot" x="20vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
