"use client";

import AnimatedText from "@/components/portfolio/animatedText";
import TransitionEffect from "@/components/portfolio/transitionEffect";
import Head from "next/head";
import Image from "next/image";

import MePicture from "../../../public/images/me/me.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/portfolio/skills";
import Experience from "@/components/portfolio/experience";
import Education from "@/components/portfolio/education";

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
            <div className="col-span-3 flex flex-col items-start justify-start text-justify xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                IDENTITY 👨🏻‍💻
              </h2>
              <p className="font-medium">
                My name is <strong>Joris Lodewijks</strong> and with a focus on
                user-centred design, I design products by analysing gathered
                data from the user&apos;s environment and digital ecosystem. I
                create high-fidelity software and hardware prototypes to
                validate my designs in lab and field test settings to be able to
                test intended use but also give space for emergent functionality
                to surface. I embrace this emergent functionality and provide
                space for it to live inside my designs.
              </p>
              <p className="font-medium my-4">
                My expertise lies in creating powerful virtual prototypes fast,
                especially when it comes to creating connected systems. With a
                focus on the Internet of Things and connected systems designs, I
                create online tools and powerful hardware devices to create a
                data-rich environment to validate my designs, which can be
                integrated without too much hassle in an already existing
                environment and even learn from it.
              </p>
              <p className="font-medium">
                I see myself as a designer who is not afraid to dive into the
                deep and learn a new skill. I am able to work in close relations
                with an engineering team without falling behind in knowledge.
                When it comes to creating prototypes, I will use tools to my
                advantage to quickly create high-quality products. While my
                expertise lies in creating digital solutions, I see myself as a
                jack-of-all-trades who can understand and provide in a lot of
                different areas of expertise and is not afraid to spend time to
                come up to speed in less-explored topics.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
              <Image
                className="h-auto w-full rounded-2xl"
                src={MePicture}
                alt="Joris Lodewijks"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={40} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
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
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Vision />

          <div className="flex flex-row items-start justify-start text-justify ">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              VISION 🔭
            </h2>
            <p className="font-medium">
              For me, design is a tool to be able to find solutions to
              users&apos; difficulties and challenges within a home and work
              environment. I aim to make our daily lives a smoother experience
              by linking our day-to-day life with state-of-the-art technologies
              that can assist us with everyday tasks. I want to provide products
              for users that aim at reducing the everyday stress of life and do
              not add to an already growing pile of &apos;tech&apos; in the
              home, like is happening now with voice assistants or remotes. New
              technology products need to be aware of the ecosystem they live in
              and be able to transform themselves to adapt to the needs of their
              user and work together with other devices with which they share
              the digital ecosystem. An example of this can now be seen in the
              IoT environment, where audio devices can work together to create
              one big speaker.
            </p>
            <p className="font-medium my-4">
              Data and information are better perceived when felt or heard as
              part of a rich interaction scheme rather than being read from a
              chart. A great example is haptic interfaces which are led by a
              digital-context initiative. By bringing data and information into
              the physical world and the everyday life of the user, I want my
              designs to provide for a living-data environment, where data and
              information are not held private but live in full transparency,
              and only work towards creating value for the user without too
              complex or unnecessary features. In this space, I think it&apos;s
              important to stray away from notifications, dings, pings and
              similar attention-seeking methods, but lay a bigger focus on
              multi-modal interaction schemes which feel intuitive and seek
              emotional attachment instead of taking concentration away.
            </p>
            <p className="font-medium">
              Due to the complex and ever-changing world around us, I find it
              important to design for the future. Designs that will be able to
              adapt themselves based on how they are being used. By learning
              from the past and integrating current trends, designs will be
              better prepared for the future, where smart products feel like an
              extension of human life and not as a mediator. Experimenting with
              the latest technologies and using them to create novel concepts
              will act as a springboard towards radical innovation and
              out-of-the-box designs which can have true value.
            </p>
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
