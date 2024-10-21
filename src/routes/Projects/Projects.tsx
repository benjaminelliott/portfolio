import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import type { Project } from "../../global";

export const Projects = ({ projects }: { projects?: Project[] }) => {
  const completedProjects = projects?.filter(
    (project) => project.status === "completed"
  );
  const inProgressProjects = projects?.filter(
    (project) => project.status === "in progress"
  );
  const planningProjects = projects?.filter(
    (project) => project.status === "planning"
  );

  return (
    <PageContainer id="projects">
      <PageHeader>
        <PageTitle text="Projects" strongText="& Sites" main icon="🚀" />
      </PageHeader>
      <PageContent>
        {completedProjects && completedProjects.length > 0 && (
          <ProjectSection
            status="completed"
            icon="🎉"
            projects={completedProjects}
          />
        )}
        {inProgressProjects && inProgressProjects.length > 0 && (
          <ProjectSection
            status="in progress"
            icon="🚧"
            projects={inProgressProjects}
          />
        )}
        {planningProjects && planningProjects.length > 0 && (
          <ProjectSection
            status="planning"
            icon="📝"
            projects={planningProjects}
          />
        )}
      </PageContent>
    </PageContainer>
  );
};
