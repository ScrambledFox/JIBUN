import Link from "next/link";
import React from "react";
import Layout from "./layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Joris Lodewijks </span>

        <div className="flex items-center lg:py-2">
          Made with <span className="text-[#C22BD4] text-2xl px-1">♥</span>{" "}
          by&nbsp; Joris Lodewijks
        </div>

        {/* <Link
          href="https://devdreaming.com/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
