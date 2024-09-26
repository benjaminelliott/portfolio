import { Project, Technology } from "../global";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLinks } from "./ProjectLinks";
import { TechList } from "./TechList";

export const ProjectCard = ({
  project,
  techs,
}: {
  project: Project;
  techs: Technology[];
}) => {
  const { image, name, repoLink, deployedLink } = project;
  return (
    <div key={project.key} className="project-card">
      <div className="project-card-header">
        <ProjectInfo image={image} name={name} />
        <ProjectLinks
          repoLink={repoLink || ""}
          deployedLink={deployedLink || ""}
        />
      </div>
      <div className="project-card-content">
        <p className="project-description">{project.description}</p>
        <TechList techs={techs} />
      </div>
    </div>
  );
};
