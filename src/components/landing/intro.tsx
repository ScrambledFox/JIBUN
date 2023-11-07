"use client";

import "./css/bouncing-arrow.css";

import Image from "next/image";

import Typewriter from "typewriter-effect";

import Socials from "../socials";
import LocaleSwitcher from "@/components/i18n/locale-switcher";

import { AiOutlineDown } from "react-icons/ai";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

const Landing = async ({ lang }: { lang: Locale }) => {
  const { landing } = await getDictionary(lang);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center gap-16 pointer-events-none">
      <div className="flex flex-row gap-12 justify-right items-center ml-auto transition-all duration-200 ease-in-out select-none">
        <h1 className=" text-8xl font-black">{landing.hello}</h1>
        <Image
          src="/images/me/me.jpg"
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
              typewriter.typeString(landing.intro).start();
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
