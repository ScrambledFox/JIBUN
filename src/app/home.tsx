import { useState } from "react";

import { LinkArrow } from "@/components/portfolio/icons";
import Layout from "@/components/portfolio/layout";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import AIImage from "../../public/images/me/ai-edit.png";
import MeImage from "../../public/images/me/plane-me.png";

import TransitionEffect from "@/components/portfolio/transitionEffect";
import AnimatedText from "@/components/portfolio/animatedText";
import HoverImage from "@/components/portfolio/hoverImage";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <HoverImage
                width={800}
                height={800}
                intialImage={"/images/me/ai-edit.png"}
                showImage={"/images/me/plane-me.png"}
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi! I'm Joris Lodewijks"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative tech solutions. Explore my latest
                projects, profile, vision and development throughout my study at
                the University of Technology Eindhoven.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/about"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  About me
                </Link>

                <Link
                  href="mailto:info@jorislodewijks.nl"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;
