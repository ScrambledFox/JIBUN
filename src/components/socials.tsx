import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

const SIZE = 48;

interface SocialProps {
  href: string;
  icon: React.ReactNode;
}

const Social = ({ href, icon }: SocialProps) => {
  return (
    <a
      className=" transition-transform duration-100 hover:scale-110"
      href={href}
    >
      {icon}
    </a>
  );
};

const Socials = () => {
  return (
    <div id="socials" className="pointer-events-auto flex flex-row gap-2">
      <Social
        href="mailto:info@jorislodewijks.nl"
        icon={<AiFillMail size={SIZE} />}
      />
      <Social
        href="https://www.linkedin.com/in/jorislodewijks/"
        icon={<AiFillLinkedin size={SIZE} />}
      />
      <Social
        href="https://github.com/ScrambledFox"
        icon={<AiFillGithub size={SIZE} />}
      />
    </div>
  );
};

export default Socials;
