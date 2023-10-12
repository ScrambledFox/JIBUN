import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

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
    <div id="socials" className="flex flex-row gap-2">
      <Social
        href="https://www.linkedin.com/in/jorislodewijks/"
        icon={<AiFillLinkedin size={32} />}
      />
      <Social
        href="https://github.com/ScrambledFox"
        icon={<AiFillGithub size={32} />}
      />
    </div>
  );
};

export default Socials;
