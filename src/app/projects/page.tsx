import AnimatedText from "@/components/portfolio/animatedText";
import TransitionEffect from "@/components/portfolio/transitionEffect";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}) => {
  return <></>;
};

const Project = ({
  title,
  type,
  img,
  link,
  github,
}: {
  title: string;
  type: string;
  img: string;
  link: string;
  github: string;
}) => {
  return <></>;
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <div className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-16">
          <AnimatedText
            text="My projects and Passions."
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                img={""}
                link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                github="https://github.com/codebucks27/CryptoBucks-Final-Code"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                title="NFT collection Website"
                img={""}
                link="https://devdreaming.com/videos/create-nft-collection-website-reactjs"
                github="https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Fashion Studio Website"
                img={""}
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={""}
                link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/codebucks27/react-portfolio-final"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={""}
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={""}
                title="DevDreaming"
                link="https://devdreaming.com"
                github="https://github.com/codebucks27"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
