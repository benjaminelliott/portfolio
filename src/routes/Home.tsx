import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import { TechList } from "../components/TechList";
import type { Technology } from "../global";
import { CircleImage } from "../components/CircleImage";

export const Home = ({
  technologies,
  image,
  name,
}: {
  technologies?: Technology[];
  image?: string;
  name?: string;
}) => {
  const frontEnd = technologies?.filter(
    (tech) => tech.type === "Frontend" && !tech.isLearning
  );
  const backEnd = technologies?.filter(
    (tech) => tech.type === "Backend" && !tech.isLearning
  );
  const tools = technologies?.filter(
    (tech) => tech.type === "Tool" && !tech.isLearning
  );
  const learning = technologies?.filter((tech) => tech.isLearning);
  const cicd = technologies?.filter(
    (tech) => tech.type === "CI/CD" && !tech.isLearning
  );
  const projectManagement = technologies?.filter(
    (tech) => tech.type === "Project Management" && !tech.isLearning
  );
  const mobile = technologies?.filter(
    (tech) => tech.type === "Mobile" && !tech.isLearning
  );

  return (
    <PageContainer id="home">
      <PageHeader>
        <div className="home-page-header">
          <div className="home-title-wrapper">
            <PageTitle text="Hey, I'm" strongText={name} main icon="👋🏽" />
            <PageTitle text="Full-stack" strongText="web developer" icon="👨🏽‍💻" />
            <PageTitle text="Ironhack" strongText="TA" icon="🚀" />
          </div>
          <CircleImage image={image || ""} text="Benjamin" />
        </div>
      </PageHeader>
      <PageContent>
        {frontEnd && frontEnd.length > 0 && (
          <TechList techs={frontEnd} subHeading="Front end" />
        )}
        {backEnd && backEnd.length > 0 && (
          <TechList techs={backEnd} subHeading="Back end" />
        )}
        {cicd && cicd.length > 0 && (
          <TechList techs={cicd} subHeading="CI/CD" />
        )}
        {projectManagement && projectManagement.length > 0 && (
          <TechList techs={projectManagement} subHeading="Project Management" />
        )}
        {tools && tools.length > 0 && (
          <TechList techs={tools} subHeading="Tools" />
        )}
        {mobile && mobile.length > 0 && (
          <TechList techs={mobile} subHeading="Mobile" />
        )}

        {learning && learning.length > 0 && (
          <TechList techs={learning} subHeading="Currently learning" />
        )}
      </PageContent>
    </PageContainer>
  );
};
