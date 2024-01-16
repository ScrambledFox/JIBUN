import TransitionEffect from "@/components/portfolio/transitionEffect";

const Contact = () => {
  return (
    <>
      <TransitionEffect />
      <article className="flex min-h-screen text-center items-center text-dark dark:text-light sm:items-start">
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
          <h1 className="text-6xl font-semibold mb-8">Contact</h1>
          <p className="text-xl font-medium">
            Feel free to contact me at{" "}
            <a href="mailto:info@jorislodewijks.nl" className="underline">
              info@jorislodewijks.nl
            </a>
          </p>

          {/* or call me */}
          <p className="text-xl font-medium mt-4">
            or call me at{" "}
            <a href="tel:+31645763319" className="underline">
              +31 6 45763319
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default Contact;
