import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import type { Project, Technology } from "../../global";
import { technologies } from "../../constants";

export const Projects = ({ projects }: { projects?: Project[] }) => {
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

  const statusOrder = {
    completed: 1,
    "in progress": 2,
    planning: 3,
  };

  return (
    <PageContainer id="projects">
      <PageHeader>
        <PageTitle text="Projects" strongText="& Sites" main icon="🚀" />
      </PageHeader>
      <PageContent>
        <ul className="project-list">
          {projects &&
            projects
              .sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
              .map((project) => (
                <ProjectCard
                  key={project.key}
                  project={project}
                  techs={transformTechStack(project.techStack)}
                />
              ))}
        </ul>
      </PageContent>
    </PageContainer>
  );
};
