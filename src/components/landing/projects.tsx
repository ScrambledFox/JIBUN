interface ProjectProps {
  name: string;
  description: string;
  technologies?: string[];
  github?: string;
  website?: string;
}

const getProjectData = async () => {
  const res = await fetch("@/api/projects");
  const data = await res.json();
  return data;
};

const Project = ({ ...props }: ProjectProps) => {
  return (
    <div className="flex flex-col max-w-lg bg-slate-950 rounded-xl p-8 justify-center items-center">
      <h1 className="text-4xl">{props.name}</h1>
      <span className=" h-4" />
      <p className=" text-justify">{props.description}</p>
    </div>
  );
};

const Projects = async () => {
  const projectData = await getProjectData();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-medium">{"Check out my work"}</h1>
      <div className="flex flex-wrap gap-8 justify-center items-stretch">
        {/* {projectData.map((project: ProjectProps) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            website={project.website}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Projects;
