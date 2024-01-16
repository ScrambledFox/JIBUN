"use client";

import AnimatedText from "@/components/portfolio/animatedText";
import TransitionEffect from "@/components/portfolio/transitionEffect";

import { GithubIcon } from "@/components/portfolio/icons";

import OKUYAImage from "../../../public/images/projects/okuya-cover.png";
import RyouImage from "../../../public/images/projects/ryou-cover.png";
import AtHomeImage from "../../../public/images/projects/athome-cover.png";
import HyparImage from "../../../public/images/projects/hypar-cover.jpg";
import MagicMonsterImage from "../../../public/images/projects/magicmonster-cover.png";
import PhiScriptImage from "../../../public/images/projects/phiscript-cover.png";
import TeamIgniteImage from "../../../public/images/projects/ignite-cover.png";
import GezonTijdImage from "../../../public/images/projects/gezontijd-cover.png";
import NoDeImage from "../../../public/images/projects/projectnode-cover.png";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  externalLink,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  externalLink?: string;
  github: string | string[];
}) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid
               border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 
                 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary xs:text-base">
          {type}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <div className="flex flex-row gap-2">
            {typeof github === "string" ? (
              <Link
                href={github}
                target={"_blank"}
                className="w-8 hover:scale-105 transition-transform duration-100 ease-in-out md:w-6"
                aria-label={title}
              >
                <GithubIcon size={30} />
              </Link>
            ) : (
              github.map((gh, index) => (
                <Link
                  key={index}
                  href={gh}
                  target={"_blank"}
                  className="w-8 hover:scale-105 transition-transform duration-100 ease-in-out md:w-6"
                  aria-label={title}
                >
                  <GithubIcon size={30} />
                </Link>
              ))
            )}
          </div>
          <Link
            href={link}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
          {externalLink && (
            <Link
              href={externalLink}
              target={"_blank"}
              className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            >
              Visit Website
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({
  title,
  type,
  img,
  link,
  github,
}: {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string | string[];
}) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary  lg:text-lg md:text-base">
          {type}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>

          <div className="flex flex-row gap-2">
            {typeof github === "string" ? (
              <Link
                href={github}
                target={"_blank"}
                className="w-8 hover:scale-105 transition-transform duration-100 ease-in-out md:w-6"
                aria-label={title}
              >
                <GithubIcon size={30} />
              </Link>
            ) : (
              github.map((gh, index) => (
                <Link
                  key={index}
                  href={gh}
                  target={"_blank"}
                  className="w-8 hover:scale-105 transition-transform duration-100 ease-in-out md:w-6"
                  aria-label={title}
                >
                  <GithubIcon size={30} />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="My projects and Passions"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="mb-8 flex flex-col justify-center items-center sm:mb-4">
            <p className="text-2xl font-semibold w-1/2 text-center">
              I love to build things that make a difference. Here are some of my
              projects that I have worked on recently.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Graduation Project"
                title="OKUYA"
                summary="OKUYA makes use of reinforcement learning princeples to create a smart agent that can assist the user in creating human optimized home interiors."
                img={OKUYAImage}
                link="/okuya"
                github="https://github.com/ScrambledFox/okuya-canvas"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="量 RYOU"
                img={RyouImage}
                link="/ryou"
                github="https://github.com/ScrambledFox/ryou-projection"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Research Design Project"
                title="PhiScript"
                img={PhiScriptImage}
                link="/phiscript"
                github="https://github.com/ScrambledFox/phiscript"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Passion Project"
                title="Hypar Collective"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={HyparImage}
                link="/hyparcollective"
                externalLink="https://hyparcollective.nl"
                github="https://github.com/Hypar-Collective/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Graduation Project"
                title="AtHome"
                img={AtHomeImage}
                link="/athome"
                github={[
                  "https://github.com/ScrambledFox/athome-front",
                  "https://github.com/ScrambledFox/icc/tree/dev",
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Magic Monster"
                img={MagicMonsterImage}
                link="/magicmonster"
                github={[]}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Passion Project"
                title="Team IGNITE"
                summary=""
                img={TeamIgniteImage}
                link="/teamignite"
                externalLink="https://teamignite.nl"
                github="https://github.com/ScrambledFox/HyparDrive"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="GezonTijd"
                img={GezonTijdImage}
                link="/gezontijd"
                github={[]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Project NoDe"
                img={NoDeImage}
                link="/node"
                github={[]}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
