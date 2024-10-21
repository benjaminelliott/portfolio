import { Project, Technology } from "../../global";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { technologies } from "../../constants";

export const ProjectSection = ({
  status,
  icon,
  projects,
}: {
  status: string;
  icon: string;
  projects: Project[];
}) => {
  const transformTechStack = (
    techStack: Technology[] | string[]
  ): Technology[] => {
    return techStack.map((tech, index) => {
      if (typeof tech === "string") {
        const foundTech = technologies.find(
          (technology) => technology.name === tech
        );
        return (
          foundTech || {
            key: index,
            name: tech,
            image: "",
            link: "",
            isLearning: false,
            type: "",
          }
        );
      }
      return tech;
    });
  };

  return (
    <section className="project-status-wrapper">
      <SectionHeading
        text={
          status[0].toLocaleUpperCase() +
          status.slice(1, status.length) +
          " " +
          "(" +
          projects.length +
          ")"
        }
        icon={icon}
      />
      <ul className="project-list">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              techs={transformTechStack(project.techStack)}
            />
          ))}
      </ul>
    </section>
  );
};
