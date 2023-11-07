"use client";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillBook,
} from "react-icons/ai";

interface SocialProps {
  text: string;
  href: string;
  icon: React.ReactNode;
}

const SIZE = 48;
const socialMountedStyle = "transition-opacity duration-250 opacity-100";
const socialUnmountedStyle = "transition-opacity duration-250 opacity-0";

const Social = ({ text, href, icon }: SocialProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const onMouseEnter = () => setIsHovered(true);

  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex flex-col items-center justify-center w-12">
      <a
        className="transition-transform duration-100 hover:scale-110"
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {icon}
      </a>
      <div className={"overflow-visible"}>
        <h1 className={isHovered ? socialMountedStyle : socialUnmountedStyle}>
          {text}
        </h1>
      </div>
    </div>
  );
};

const Socials = async ({ lang }: { lang: Locale }) => {
  const { socials } = await getDictionary(lang);

  return (
    <div id="socials" className="flex flex-row gap-2">
      <Social
        text={socials.email}
        href="mailto:info@jorislodewijks.nl"
        icon={<AiFillMail size={SIZE} />}
      />
      <Social
        text={socials.linkedin}
        href="https://www.linkedin.com/in/jorislodewijks/"
        icon={<AiFillLinkedin size={SIZE} />}
      />
      <Social
        text={socials.github}
        href="https://github.com/ScrambledFox"
        icon={<AiFillGithub size={SIZE} />}
      />
      <Social
        text={socials.resume}
        href="/resume"
        icon={<AiFillBook size={SIZE} />}
      />
    </div>
  );
};

export default Socials;
