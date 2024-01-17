"use client";

import AnimatedText from "@/components/portfolio/animatedText";
import TransitionEffect from "@/components/portfolio/transitionEffect";

import MePicture from "../../../public/images/me/me.png";
import MeJapanPicture from "../../../public/images/me/me-japan.png";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/portfolio/skills";
import Experience from "@/components/portfolio/experience";
import Education from "@/components/portfolio/education";
import Vision from "@/components/portfolio/vision";
import HoverImage from "@/components/portfolio/hoverImage";
import { CodeIcon, DesignIcon } from "@/components/portfolio/icons";
import Link from "next/link";
import Identity from "@/components/portfolio/identity";
import { AnimatedCard, AnimatedCards, Card } from "@/components/portfolio/card";

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          // @ts-ignore
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="Just a bit about me."
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <Identity className="col-span-3" />

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
              <HoverImage
                width={500}
                height={500}
                rounded={true}
                intialImage={MePicture}
                showImage={MeJapanPicture}
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={8} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years of Tech Focus
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={4} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Years experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />%
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Dedicated to Learning
                </h2>
              </div>
            </div>
          </div>

          <Vision className="mt-8" />

          <div className="my-16 flex flex-row justify-center items-center">
            <Link
              href={"/development"}
              className="text-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-base
            "
            >
              See My Development Journey
            </Link>
          </div>

          <div className="mt-64 flex justify-center items-center">
            <AnimatedCards className="w-4/5 flex flex-row gap-8 items-center justify-center">
              <div className="flex-1">
                <AnimatedCard
                  index={0}
                  icon={DesignIcon({ size: 25 })}
                  title={"Designer First"}
                  text={
                    "I am a designer first. I am able to create high-fidelity prototypes fast and validate my designs in a lab and field test setting."
                  }
                  className={"flex-1"}
                />
              </div>

              <div className="flex-1">
                <AnimatedCard
                  index={1}
                  icon={CodeIcon({ size: 25 })}
                  title={"Developer Second"}
                  text={
                    "I am a developer second. I am able to create high-quality code and have a strong understanding of the underlying technologies. With high-fidelity prototypes, I am able to test my design concepts with high value results."
                  }
                  className={"flex-1"}
                />
              </div>
            </AnimatedCards>
          </div>

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default About;
