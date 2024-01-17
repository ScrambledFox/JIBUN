import AnimatedText from "@/components/portfolio/animatedText";
import Future from "@/components/portfolio/future";
import Past from "@/components/portfolio/past";
import Present from "@/components/portfolio/present";
import TransitionEffect from "@/components/portfolio/transitionEffect";
import Link from "next/link";

const DevelopmentPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="My Development as a designer"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <p className="mb-16 !text-2xl lg:!text-xl sm:!text-lg xs:!text-base"></p>

          <Past />
          <Present className="mt-64" />
          <Future className="mt-64" />

          <div className="mt-64 flex flex-row items-center justify-center">
            <div className="flex flex-col gap-4">
              <p className="text-3xl">
                To read my resulting Identity & Vision, see{" "}
              </p>
              <div className="flex flex-row justify-center items-center">
                <Link
                  href={"/about"}
                  className="text-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
              capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
              dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
              md:p-2 md:px-4 md:text-base
            "
                >
                  About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DevelopmentPage;
