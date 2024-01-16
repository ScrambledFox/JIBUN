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
              <HoverImage intialImage={AIImage} showImage={MeImage} />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi! I'm Joris Lodewijks"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/dummy.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:codebucks27@gmail.com"
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
