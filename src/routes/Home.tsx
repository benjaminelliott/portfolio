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
        <TechList techs={frontEnd} subHeading="Front end" />
        <TechList techs={backEnd} subHeading="Back end" />
        <TechList techs={tools} subHeading="Tools" />
        <TechList techs={learning} subHeading="Learning" />
      </PageContent>
    </PageContainer>
  );
};
