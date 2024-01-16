"use client";
import { useRef, useState } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./liIcon";

const Details = ({
  role,
  company,
  companyLink,
  time,
  project,
  description,
}: {
  role: string;
  company: string;
  companyLink: string;
  time: string;
  project: string;
  description: string[];
}) => {
  const ref = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {project}{" "}
          <a
            className="capitalize text-primary "
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {role}
        </span>

        {!isExpanded && (description[0] as string).length > 200 && (
          <p
            className={`font-medium w-full text-justify dark:text-light/75 md:text-sm`}
          >
            {(description[0] as string).slice(0, 200)}...
          </p>
        )}

        {description.map((paragraph, index) => (
          // Have first paragraph not have a margin-top
          <motion.p
            key={index}
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-${
              index == 0 ? 0 : 2
            } overflow-hidden font-medium w-full text-justify md:text-sm`}
          >
            {paragraph}
          </motion.p>
        ))}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-semibold italic text-primary hover:scale-105 transform transition-all duration-200 ease-in-out"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primary dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            role="Technology Consultant"
            company="Netlight"
            companyLink="https://www.netlight.com/"
            time="Q1 2024 - Present"
            project="TBD"
            description={[
              "For after my master's degree, I've been hired at Netlight as a technology consultant. I will start here in March 2024. Netlight provides genuine consulting services for leaders in the digital industry. The combination of competence, creativity and business sense is what makes Netlight stand out as a service provider, and are also the characteristics of each individual Netlighter.",
            ]}
          />

          <Details
            role="Lead Software Engineer"
            company="Hypar Collective"
            companyLink="https://www.hyparcollective.nl/"
            time="Q2 2023 - Present"
            project="Photon LED Mapper"
            description={[
              "Founded in 2019, Hypar Collective is a non-profit that focuses on creating and exhibition interactive light art installations internationally. Hypar is a collective of 11 designers and engineers that has evolved from a student team at the TU/e to an independent organization. They aim to create and display 3 to 4 installations per year.",
              "The team consists of 11 people and is very multi-disciplinary. To continue innovation and support more complex and more modular installations, Hypar Collective decided to create a new software suite for creating light art installations and accompanying shows that uses a grouping and templating system to make user experience more streamlined.",
              "Here, Joris took the lead of a small multi-disciplinary team focusing on creating this software. Joris was responsible for the global and technical design of the product. The front-end application was implemented using TypeScript, Electron and React. As a result of Joris’ sprint management, an MVP could quickly be realized while maintaining a maintainable and well-structured product.",
            ]}
          />

          <Details
            role="Lead Software Engineer"
            company="Hypar Collective"
            companyLink="https://www.hyparcollective.nl/"
            time="Q4 2019 - Q2 2023"
            project="HyparDrive Pixel Mapper"
            description={[
              "Founded in 2019, Hypar Collective is a non-profit that focuses on creating and exhibition interactive light art installations internationally. Hypar is a collective of 11 designers and engineers that has evolved from a student team at the TU/e to an independent organization. They aim to create and display 3 to 4 installations per year.",
              "After the GLOW Eindhoven 2019 event, Hypar Collective sought a way to easily create and run light art shows for their Hypar installation. As Hypar Collective was testing new interaction methods on their installations, their focus lied on modularity in interaction and logic. To prevent custom solutions for every installation, Hypar Collective wanted to create a software suite, which was able to digitally create installations using their cube light fixtures and be able to act as a pixel mapper for them.",
              "Joris was tasked to create a standalone software suite based on an earlier proof-of-feasibility prototype he had built in Unity. Joris took the lead of a small team to design and implement a solution that could grow together with the business model Hypar Collective had set for itself. The solution consisted of an art installation, pixel-mapper dashboard, and show-runner front-end and was built with Electron.js and React.js. The more performant back-end pixel-mapper service built with .NET. Joris’ actions resulted in a product that could be built upon in the time Hypar Collective was still seeking its goals.",
            ]}
          />

          <Details
            role="Software Engineer"
            company="byFlow"
            companyLink="https://www.3dbyflow.com/"
            time="Q3 2020 - Q3 2023"
            project="byFlow Studio"
            description={[
              "byFlow is a start-up based on the High Tech Campus in Eindhoven focusing on innovations in the food printing industry. Their current focus lies in building a fast and reliable chocolate printer capable of creating high quality prints without the user needing the technical know-how of 3D printing or the tempering of chocolate. The team was split up into mechanical engineering, embedded development, and software development, each focusing on their own self-directed projects. As the management style was very ‘hands-off’, each team was responsible for its own project management, which Joris took responsibility for.",
              "byFlow saw that their clients were chefs and pâtissiers who weren’t proficient with 3D modelling software and sought to develop a web application that guides them through the process of creating a 3D model optimized for chocolate printing.",
              "Within the software development team, Joris was part of a smaller two-person team focusing on creating accompanying software products for the printer. Joris worked as a full-stack developer on a web application to allow chefs and pâtissiers to easily create 3D models by uploading images or text. The web app was created with the Django framework, JavaScript, and Python. Due to Joris’ work, the team was able to work independently from the rest of the start-up while maintaining similar pacing and the agile working structure to continuously integrate new features.",
            ]}
          />

          <Details
            role="Full-Stack Engineer"
            company="Bureau Moeilijke Dingen"
            companyLink="https://www.moeilijkedingen.nl/"
            time="Q3 2019 - Q1 2020"
            project="DAS.IO"
            description={[
              "Bureau Moeilijke Dingen (Bureau Difficult Things, BMD) is an Eindhoven based start-up that focuses on solving societal and technological problems of any nature. BMD tackles project of any scope including both software and hardware development, user journey design and business model consultancy.",
              "Joris worked at BMD focusing on designing and developing a modular interface tool for tangible interaction tables for an undisclosed existing system. The system projects data of IoT devices and their connections based on objects placed on a physical table. While details of the project can’t be shared here, I’m always willing to elaborate more on the project in person.",
              "Joris was responsible for his own project management, design methodologies, and development. The projection system was created using Unity and C#/.NET and used MQTT as the message service in the IoT environment. The embedded solution was based on the STM microcontroller and was implemented using C++. The development of the PCB was done in Eagle.",
            ]}
          />

          <Details
            role="Lead Software Engineer"
            company="Team IGNITE"
            companyLink="https://www.teamignite.nl/"
            time="Q4 2018 - Q4 2019"
            project="Hypar Light Pavilion"
            description={[
              "Team IGNITE, the predecessor of Hypar Collective, was a student team consisting of 30 people focusing on the creation and exposition of interactive light art installations. Similar to the current goal of Hypar Collective, Team IGNITE focused on design and developing modular light art installations.",
              "For the Eindhoven GLOW event of 2019, the team focused on creating “Hypar”. A large light pavilion consisting of 160 aluminium cubes with integrated LED strips. Previously, smaller installations were run using regular 2D pixel-mappers, however this wasn’t possible with their new installation.",
              "Joris joined the team as he saw a solution and was responsible for the design and development of a 3D pixel mapper prototype specifically for this large interactive light installation. Here, Joris worked with Unity and C#/.NET to create an MVP. As a result, the team was able to control larger light installations than initially planned and could increase the scope of their ambitions. The core concepts of this prototype were later used to create a more general version of the software.",
            ]}
          />

          <Details
            role="Stakeholder Management & Event Promotion"
            company="RoboWars Committee TU/e"
            companyLink="#"
            time="Q4 2018 - Q3 2019"
            project="RoboWars 2018 & 2019"
            description={[
              "The Eindhoven University of Technology, is a public technical university in the Netherlands, located in the city of Eindhoven. In 2020–21, around 14,000 students were enrolled in its BSc and MSc programs and around 1350 students were enrolled in its PhD and PDEng programs. ",
              "The Robowars committee was responsible for the planning and execution of a robowars style event for all students in Eindhoven where students got resources, training and help creating their own fighter robots.",
              "Joris was part of a small team of five people and was responsible for external communications with stakeholders, gathering sponsors and the managing of locations. In another edition, he was also part of a small team of six people and was individually responsible for the creation and management of promotional material that included posters, flyers, a website, and social media accounts. The website was created using HTML, CSS, JavaScript and Bootstrap.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
