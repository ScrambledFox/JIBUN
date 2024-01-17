"use client";

import { GithubIcon, LinkedInIcon, MailIcon, ResumeIcon } from "./icons";

import { motion } from "framer-motion";

const Socials = () => {
  return (
    <>
      <motion.a
        target={"_blank"}
        className="w-6 mx-3"
        href="https://github.com/ScrambledFox/"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Checkout my github profile"
      >
        <GithubIcon size={25} />
      </motion.a>
      <motion.a
        target={"_blank"}
        className="w-6 mx-3"
        href="https://www.linkedin.com/in/jorislodewijks/"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Checkout my linkedin profile"
      >
        <LinkedInIcon size={25} />
      </motion.a>
      <motion.a
        target={"_blank"}
        className="w-6 mx-3"
        href="mailto:info@jorislodewijks.nl"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Mail me"
      >
        <MailIcon size={25} />
      </motion.a>
      <motion.a
        target={"_blank"}
        className="w-6 mx-3"
        href="/resume"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Checkout my resume"
      >
        <ResumeIcon size={25} />
      </motion.a>
    </>
  );
};

export default Socials;
