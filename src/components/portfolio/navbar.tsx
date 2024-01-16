"use client";

import React, { useState } from "react";
import Logo from "./logo";

import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  MoonIcon,
  ResumeIcon,
  SunIcon,
} from "./icons";

import { motion } from "framer-motion";
import { useThemeSwitch } from "../hooks/useThemeSwitch";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./socials";

const CustomLink = ({
  href,
  title,
  className,
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} rounded relative group lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                pathname === href ? "w-full" : "w-0"
              } lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();

  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8">
      <div className="w-full flex justify-between items-center">
        <nav className="flex items-center justify-between">
          <CustomLink className="mr-4" href="/" title="Home" />
          <CustomLink className="mx-4" href="/about" title="About Me" />
          <CustomLink
            className="mx-4"
            href="/development"
            title="Development"
          />
          <CustomLink className="mx-4" href="/projects" title="Projects" />
          <CustomLink className="ml-4" href="/contact" title="Contact" />
        </nav>
        <nav
          className="flex items-center justify-center flex-wrap mt-2
      "
        >
          <Socials />

          <button
            // @ts-ignore: Weirdness
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
