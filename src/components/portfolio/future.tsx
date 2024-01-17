import Image from "next/image";
import FutureImage from "../../../public/images/general/future.jpg";

const Future = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-row gap-16">
        <div className="relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark">
          <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
          <Image
            className="rounded-2xl"
            src={FutureImage}
            alt="Signing with Netlight"
            sizes={"100vw"}
            priority
          />
        </div>

        <div className={`flex flex-col items-start justify-start`}>
          <h2 className="mb-4 text-2xl font-bold uppercase text-dark dark:text-light">
            Plans for the future
          </h2>
          <div className="flex flex-col gap-2 text-justify">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Short term
            </p>
            <p className="font-medium">
              My short-term plans are to finish up loose ends I have with some
              hobby projects I have lying around and clear my mind for the next
              chapter. During last semester, I have been actively looking for
              employment after my Master&apos;s and have been hired as a
              Technology Consultant at{" "}
              <a
                className="capitalize text-primary "
                href={"https://www.netlight.com/"}
                target="_blank"
              >
                Netlight
              </a>{" "}
              Amsterdam to use my skills as a software engineer and designer to
              design and develop new solutions in a variety of industries.
            </p>
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Longer term
            </p>
            <p className="font-medium">
              My long-term plans are to now specialise more in software
              technology and become proficient in the industry. Due to my
              background in design, I will be able to leverage design
              methodologies to create innovative solutions to the challenges I
              will see during my work and need to learn more about to
              quick-changing tech landscape in the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
