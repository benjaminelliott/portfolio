import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import type { Project } from "../../global";
import { TabNavigator } from "../../components/TabNavigator/TabNavigator";
import { useEffect, useState } from "react";
import { tab } from "@testing-library/user-event/dist/tab";

export const Projects = ({ projects }: { projects?: Project[] }) => {
  const completedProjects = projects?.filter(
    (project) => project.status === "completed"
  ).sort((a, b) => b.techStack.length - a.techStack.length);
  const inProgressProjects = projects?.filter(
    (project) => project.status === "in progress"
  ).sort((a, b) => b.techStack.length - a.techStack.length);
  const planningProjects = projects?.filter(
    (project) => project.status === "planning"
  ).sort((a, b) => b.techStack.length - a.techStack.length);

  const [showCompleted, setShowCompleted] = useState(true);
  const [showInProgress, setShowInProgress] = useState(false);
  const [showPlanning, setShowPlanning] = useState(false);
  const [activeTab, setActiveTab] = useState("Completed");

  useEffect(() => {
    console.log("showCompleted", showCompleted);
    console.log("showInProgress", showInProgress);
    console.log("showPlanning", showPlanning);
  }, [showCompleted, showInProgress, showPlanning]);

  return (
    <PageContainer id="projects">
      <PageHeader>
        <PageTitle text="Projects" strongText="& Sites" main icon="🚀" />
      </PageHeader>
      <PageContent>
        <TabNavigator
          tabs={["Completed", "In Progress", "Planning"]}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            if (tab === "Completed") {
              setActiveTab("Completed");
              setShowCompleted(true);
              setShowInProgress(false);
              setShowPlanning(false);
            } else if (tab === "In Progress") {
              setActiveTab("In Progress");
              setShowCompleted(false);
              setShowInProgress(true);
              setShowPlanning(false);
            } else if (tab === "Planning") {
              setActiveTab("Planning");
              setShowCompleted(false);
              setShowInProgress(false);
              setShowPlanning(true);
            }
          }}
        />
        {completedProjects && completedProjects.length > 0 && activeTab === "Completed" && (
          <ProjectSection
            status="completed"
            icon="🎉"
            projects={completedProjects}
          />
        )}
        {inProgressProjects && inProgressProjects.length > 0 && activeTab === "In Progress" &&  (
          <ProjectSection
            status="in progress"
            icon="🚧"
            projects={inProgressProjects}
          />
        )}
        {planningProjects && planningProjects.length > 0 && activeTab === "Planning" && (
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
