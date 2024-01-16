"use client";

import "./css/bouncing-arrow.css";

import Image from "next/image";

import Typewriter from "typewriter-effect";

import { AiOutlineDown } from "react-icons/ai";

const Landing = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center gap-16 pointer-events-none">
      <div className="flex flex-row gap-12 justify-right items-center ml-auto transition-all duration-200 ease-in-out select-none">
        <h1 className=" text-8xl font-black">{"Hello, I'm Joris"}</h1>
        <Image
          src={`/images/me/me.jpg`}
          // src={`/images/me/me.jpg`}
          alt="Picture of Joris Lodewijks"
          width={300}
          height={300}
          className="pointer-events-auto rounded-full object-cover aspect-square hover:scale-105 transition-all duration-250 ease-in-out"
          priority
        />
      </div>
      <div className="justify-left mr-auto min-h-[30%] select-none">
        <h1 className="text-8xl font-medium">
          <Typewriter
            options={{ delay: 50 }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a Designer and Full-Stack Software Engineer.")
                .start();
            }}
          />
        </h1>
      </div>

      <div className="absolute flex flex-col justify-center bottom-10">
        <AiOutlineDown size={50} className="bounce" />
      </div>
    </div>
  );
};

export default Landing;
