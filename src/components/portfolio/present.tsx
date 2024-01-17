import Image from "next/image";

import BorenImage from "../../../public/images/general/boren.jpg";
import WorkingImage from "../../../public/images/general/working.jpg";
import TalkingImage from "../../../public/images/general/talking.jpg";
import PlaneImage from "../../../public/images/general/plane.jpg";
import { Plane } from "three";

const Present = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex flex-col items-start justify-start`}>
        <h2 className="mb-4 text-2xl font-bold uppercase text-dark dark:text-light">
          From then to now
        </h2>

        <div className="flex flex-row items-start justify-start text-justify gap-16">
          <div className="flex flex-col gap-2">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Final Master Project
            </p>
            <p className="font-medium">
              As mentioned, I have selected those specific electives to support
              me in my growth as a digital and tech designer. This combination
              of electives and extracurricular activities is what allowed me to
              work on OKUYA in the way that I did. In my FMP, I wanted to show
              my development in my own interpretation of Aesthetics on data &
              AI.
            </p>
            <div>
              <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
                Technology and Realisation
              </p>
              <p className="font-medium">
                As it is my core competency, I have focused a lot of my time to
                further develop my skills in this area during my entire studies.
                In all of the projects I worked on during the master&apos;s, I
                made sure to focus on the realisation of products and not leave
                them as a concept only which helped my confidence a lot. The
                dynamic of working in software development and studying design
                is that I could apply skills learnt in both areas, which was a
                great boost to my development. Activities like the Difficult
                Things committee, work at byFlow, as well as Hypar Collective
                allowed me to experience intense growth. Now I&apos;m able to
                quickly create fully integrated working prototypes to test
                concepts and ideas. When looking back at 6 years ago, I am
                amazed at my development in T&R as I&apos;m now proficient in:
              </p>
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <li className="font-medium">
                  <span className="font-semibold">Front-end Development</span>
                </li>
                <li className="font-medium">
                  <span className="font-semibold">Back-end Development</span>
                </li>
                <li className="font-medium">
                  <span className="font-semibold">Full-stack Development</span>
                </li>
                <li className="font-medium">
                  <span className="font-semibold">
                    PCB Design & Electronics
                  </span>
                </li>
                <li className="font-medium">
                  <span className="font-semibold">
                    3D Modelling and Printing
                  </span>
                </li>
              </div>
            </div>
          </div>
          <div className="mt-8 relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              className="rounded-2xl"
              src={BorenImage}
              alt="TedX with Team IGNITE"
              sizes={"100vw"}
              priority
            />
          </div>
        </div>

        <div className="mt-64 flex flex-row items-start justify-start text-justify gap-16">
          <div>
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Business and Entrepreneurship
            </p>
            <p className="font-medium">
              During my master&apos;s, I focused less on B&E courses as I
              realised that I was currently not interested in the concepts that
              they offered. I had followed the Design Innovation Strategies
              course, but I didn&apos;t feel connected with the course as
              upselling with providing more value was seen as a positive thing
              in the course, which directly opposes my vision as a designer and
              individual. Instead, I focused on stakeholder management and
              communication with companies during my FMP and Hypar Collective.
            </p>
          </div>
          <div>
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Math, Data and Computing
            </p>
            <p className="font-medium">
              My focus in my master&apos;s was on Data and AI, which meant a
              great development in M,D&C. My electives in Japan were Practical
              Data Science, Machine Learning and Pattern Recognition and
              Information Practices, which I had all finished with Excellent+
              results. These courses extended my practical and theoretical
              knowledge of statistics, data processing and artificial
              intelligence models and made me feel confident to create effective
              AI models for courses on the TU/e. Now, I feel confident in my
              ability to prototype and design with AI responsibly and
              effectively.
            </p>
          </div>
          <div>
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Creativity & Aesthetics
            </p>
            <p className="font-medium">
              In the last two years, I had my greatest development in C&A. After
              choosing electives and experiences, it seemed to click for me how
              to interpret aesthetics in the context of tech, data and AI.
              Before, I was still very much focused on the visual aspect of
              aesthetics and couldn&apos;t get familiar with the concept.
              However, the courses mentioned previously, specifically Creativity
              and Aesthetics of Data & AI, taught me that aesthetics, as well as
              art for that matter, is very much a mindset or core concept behind
              a project or idea. For my aesthetical interpretation of data and
              its physicalisation,{" "}
              <a
                className="capitalize text-primary "
                href={"http://chidayasuhiro.com/"}
                target="_blank"
              >
                Yasuhiro Chida
              </a>
              , whom I was blessed to meet in Finland and Japan, was pivotal in
              my development.
            </p>
          </div>
        </div>

        <div className="mt-64 flex flex-row items-start justify-start text-justify gap-16">
          <div className="flex-1">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              User and Society
            </p>
            <p className="font-medium">
              I focused on combining User and Society with Creativity and
              Aesthetics during my master&apos;s and seeing how I could provide
              value for society by implementing my envisioned aesthetical
              concepts in projects. With AI now getting smarter, it&apos;s more
              important than ever to be responsible with the designs I create as
              society is already getting scared of the power of AI. During OKUYA
              development, I needed to look closely at the user&apos;s
              environment and learn what users want from the interaction.
            </p>
          </div>

          <div className="flex-2 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              className="rounded-2xl"
              src={TalkingImage}
              alt="TedX with Team IGNITE"
              sizes={"100vw"}
              priority
            />
          </div>

          <div className="flex-1">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Professional Skills
            </p>
            <p className="font-medium">
              While the courses at the university focused on my development in
              identity and vision, Hypar Collective focused on developing my
              professional skills as a designer. As mentioned, the work done
              here is not focused on one-off deliverables but only exists for us
              to show our passion for Light Art. Working in a team of 11 people
              has taught me many things about project management and
              collaboration as well as where I can provide value in a team.
            </p>
          </div>
        </div>

        <div className="mt-64 flex flex-row items-start justify-start text-justify gap-16">
          <div className="flex-1 flex flex-col gap-2">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Professional Identity
            </p>
            <p className="font-medium">
              This year, as I&apos;m moving forward to the professional
              industry, I want to explore my professional identity on another
              level than I did previously. I wanted to find out more about where
              I gain energy from in my work and the tasks I do. I noticed a lot
              during certain stages of projects that I am fully drained after
              doing some tasks, while I could do others for hours on end. The
              latter is attached to tasks and projects that I am proud of in the
              end and is what motivates me to further those projects. However, I
              was unsure how to continue exploring this space.
            </p>
            <p className="font-medium">
              Therefore I scheduled a meeting with a personality coach to find
              out my driving forces and personality traits to prepare for
              professional work. Here, I found out that I love to do supportive
              work and empower the ideas of others to new levels. One big pain
              point for losing energy is making decisions, which I had noticed
              during a lot of previous projects as well, however, I hadn&apos;t
              seen the connection until now. When thinking back on how I handled
              certain projects, I tended to spend more time perfecting certain
              aspects of projects, while bigger decisions still needed to be
              made, and now I know why I tend to do this behaviour. With this in
              mind, I have a clearer idea of how and why I act certain ways and
              can plan for this behaviour ahead of time and get support from
              others to help with these tasks.
            </p>
          </div>

          <div className="flex-1 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              className="rounded-2xl"
              src={WorkingImage}
              alt="TedX with Team IGNITE"
              sizes={"100vw"}
              priority
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Vision
            </p>
            <p className="font-medium">
              During the last few years, the biggest impact on my vision has
              been made by the experiences I have gathered. Especially
              experiences based in the light art industry where I was able to
              talk with artists who are working with similar themes. This is
              also where the idea of Aesthetics in data and AI became clear to
              me, and is now one of the driving parts of my vision and design
              style.
            </p>
            <p className="font-medium">
              My vision has now progressed for me as a mindset that I can refer
              back to when I am working on a project to find a direction and
              aim. I have found that I find it difficult to get into the right
              mindset without the right people around me, so I have developed my
              vision around this feeling. Now every time I read my vision, I
              think back to the people I&apos;ve met and the views we share on
              design principles and this gets me in the right mindset to
              continue the process. I&apos;ve found that this works well for me
              and is a good solution for when I work alone.
            </p>
          </div>
        </div>

        <div className="mt-64 flex flex-row items-start justify-start text-justify gap-16">
          <div className="flex-1 flex flex-col gap-2">
            <p className="uppercase font-semibold text-dark text-sm dark:text-light/50">
              Overall Growth
            </p>
            <p className="font-medium">
              For a long time, I felt bad whenever I saw someone possess a skill
              I didn&apos;t have. I felt disappointed in myself and
              couldn&apos;t accept that I didn&apos;t have that skill. This has
              been my motivation for a long time to learn new skills and to grow
              my skill set. This wasn&apos;t necessarily a bad thing because it
              allowed me to be very broad with the skills I learned. However, I
              see now that it is fine to not be able to do everything and it is
              good to rely on others if they do possess that skill set. Some
              skills are just not meant for me to fully learn. While I would be
              able to get better in those skills through hard work, it is far
              better in my opinion to team up with people who enjoy relating
              activities as I do not myself. I think this has been one of the
              most important lessons I have learnt during my entire studies and
              means that I know have to draw my motivation from elsewhere. This
              is why I want to focus on tech specialisation and hone the skills
              I already possess.
            </p>
            <p className="font-medium">
              I have seen again and again that I am able to provide solutions to
              technical challenges and can implement them. People have been
              coming to me with their cases and I have never turned someone down
              to aid them in creating a working solution as I get a lot of
              self-fulfilment when I can help someone make their concepts work
              from a technical standpoint. While I sometimes am too quick to say
              yes, I do get my energy and motivation from these activities and
              this is what is making me happy and is what I want to continue
              doing.
            </p>
          </div>

          <div className="flex-1 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              className="rounded-2xl"
              src={PlaneImage}
              alt="TedX with Team IGNITE"
              sizes={"100vw"}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Present;
