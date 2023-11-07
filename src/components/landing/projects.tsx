import { Locale } from "@/i18n.config";
import { getLocaleData, getProjects } from "@/lib/data";
import { getDictionary } from "@/lib/dictionary";
import { JSX } from "react";

interface ProjectProps {
  name: string;
  description: string;
  technologies?: string[];
  github?: string;
  website?: string;
}

const Project = ({ ...props }: ProjectProps) => {
  return (
    <div className="flex flex-col max-w-lg bg-slate-950 rounded-xl p-8 justify-center items-center">
      <h1 className="text-4xl">{props.name}</h1>
      <span className=" h-4" />
      <p className=" text-justify">{props.description}</p>
    </div>
  );
};

const Projects = async ({ lang }: { lang: Locale }) => {
  const { projects } = await getDictionary(lang);
  const projectData = await getLocaleData("projects", lang);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-medium">{projects.intro}</h1>
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
        {projectData.map((project: ProjectProps) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
