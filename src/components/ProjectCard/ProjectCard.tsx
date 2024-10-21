import { Project, Technology } from "../../global";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { ProjectLinks } from "../ProjectLinks/ProjectLinks";
import { TechList } from "../TechList/TechList";

export const ProjectCard = ({
  project,
  techs,
}: {
  project: Project;
  techs: Technology[];
}) => {
  const { image, name, repoLink, deployedLink, status, description } = project;
  return (
    <div key={project.key} className="project-card">
      <div className="project-card-header">
        <ProjectInfo image={image} name={name} />
        <ProjectLinks
          repoLink={repoLink || ""}
          deployedLink={deployedLink || ""}
          status={status}
        />
      </div>
      <div className="project-card-content">
        <p className="project-description">{description}</p>
        <TechList techs={techs} />
      </div>
    </div>
  );
};
