import projectData from "./projects.json";

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

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16">
      <h1 className="text-7xl font-medium">
        Here are some projects I'm proud of.
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
        {projectData.map((project, i) => {
          return <Project key={i} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
