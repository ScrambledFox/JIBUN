import Image from "next/image";

import JorisImage from "../../../public/images/general/joris-sietse.jpg";
import IgniteInspectImage from "../../../public/images/general/ignite.jpg";

import GlobeVisual from "./globe";

const IgniteLink = () => {
  return (
    <a
      className="capitalize text-primary "
      href={"https://www.teamignite.nl/"}
      target="_blank"
    >
      Team IGNITE
    </a>
  );
};

const HyparLink = () => {
  return (
    <a
      className="capitalize text-primary "
      href={"https://www.hyparcollective.nl/"}
      target="_blank"
    >
      Hypar Collective
    </a>
  );
};

const Past = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex flex-col items-start justify-start`}>
        <div className="flex flex-row justify-center items-center gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase text-dark dark:text-light">
              Towards my FMP
            </h2>
            <div className="flex flex-row items-start justify-start text-justify gap-16">
              <div className="flex flex-col gap-2">
                <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
                  Team IGNITE & Hypar Collective
                </p>
                <p className="font-medium">
                  <IgniteLink /> and <HyparLink /> were both unmissable in
                  development as a designer and a developer with multiple
                  competencies. Activities like these were part of the reason I
                  chose Industrial Design at the TU/e instead of Delft or
                  Twente. TU/e always gave a lot of room for electives or
                  extracurricular activities and the focus on self-directed
                  learning was a very important thing for me as I always knew I
                  wanted to take the developer route instead of becoming a
                  classic product designer.
                </p>
                <p className="font-medium">
                  Team IGNITE and Hypar Collective served as a playground for me
                  to be able to design for value and actual outcomes. For me,
                  academic design felt very much like homework assignments which
                  are created but then never worked out more, due to
                  disinterest, lack of time or just lack of a further goal. When
                  a deadline for a university project was met, it was connected
                  with too many negative thoughts disabling me from furthering
                  these projects. Hypar Collective was for me a way to apply my
                  combination of competence in design and software development
                  to create actual outcomes in the world, visible for everyone
                  to see.
                </p>
                <p className="font-medium">
                  This was also a way for me to assess myself against my peers
                  in my abilities as a software developer. As I&apos;m a
                  designer first and a developer second, I didn&apos;t have a
                  way to see where I was ranking in my skills as a developer
                  which was important to me as I wanted to see how much I still
                  needed to grow. But, my time at Hypar Collective has taught me
                  that creating together and showing our results is what matters
                  most, while development and skill will automatically follow.
                </p>
                <p className="font-medium">
                  Creating value and showing it to the world is where my passion
                  lies and is what makes me happy every time we build up an
                  installation. I love the way all the hard work of everyone
                  cumulates into one big project outcome and it creates a
                  feeling of pride and happiness for me. Due to this I have met
                  many like-minded people and helped set up light installations
                  across the world, including Japan.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              className="rounded-2xl"
              src={JorisImage}
              alt="Team IGNITE"
              sizes={"100vw"}
              priority
            />
          </div>
        </div>

        <div className="my-64 w-full flex flex-row justify-center items-center">
          <div className="flex flex-col gap-8">
            <div className="w-[600px]">
              <p className="text-3xl text-center">
                I have worked on Light Installation projects in the Netherlands,
                Finland, Lithuania and Japan.
              </p>
            </div>
            <div className="rounded-full overflow-hidden flex flex-row justify-center items-center">
              <GlobeVisual />
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-start justify-start`}>
          <div className="flex flex-row items-start justify-start text-justify gap-16">
            <div className="flex-1 flex flex-col gap-2">
              <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
                Focus on AI, mathematics & data
              </p>
              <p className="font-medium">
                I always knew I wanted to be a software developer and my
                interests in AI were growing a lot. I knew that if I wanted to
                show my skills here I needed to grow more in these specific
                skills. Therefore I chose to do an exchange in Tsukuba, Japan,
                where I focused on Kansei Design, Artificial Intelligence,
                mathematics and statistics. These courses were very intensive
                for me as I lacked a lot of foundation knowledge of mathematics
                and algebra. However, due to my interest in both topics, I was
                able to quickly get on track and this resulted in me learning a
                lot of these topics, which has allowed me now to design more
                with confidence.
              </p>

              <div className="mt-8 relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
                <Image
                  className="rounded-2xl"
                  src={IgniteInspectImage}
                  alt="TedX with Team IGNITE"
                  sizes={"100vw"}
                  priority
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
                Focused Electives
              </p>
              <p className="font-medium">
                As opposed to my bachelor’s, throughout my entire master&apos;s,
                I have chosen specific electives to support my final identity
                and vision which match my interests. During my bachelor&apos;s,
                I was still very much in an exploration phase, while in the
                master&apos;s, I really wanted to focus my courses on my core
                interests and this shows in the results I was able to get. These
                courses were a few of the most interesting I followed during my
                time at the TU/e:
              </p>
              <li className="font-medium">
                <span className="font-semibold">
                  A designerly perspective on IoT
                </span>
              </li>
              <li className="font-medium">
                <span className="font-semibold">Data-enabled Design</span>
              </li>
              <li className="font-medium">
                <span className="font-semibold">
                  Creativity and Aesthetics of data & AI
                </span>
              </li>
              <li className="font-medium">
                <span className="font-semibold">
                  Embodying intelligent behaviour in a social context
                </span>
              </li>
              <li className="font-medium">
                <span className="font-semibold">
                  Designing user interfaces with emergent technologies.
                </span>
              </li>

              <p className="font-medium">
                All of these courses match up with my intended learning path and
                it feels to me as if I am tying all the loose knots I still had
                in my core competencies and this together with my thoughts on
                the physicalisation of data, is what allowed me to focus on my
                FMP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Past;
