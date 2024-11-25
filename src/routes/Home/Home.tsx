import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { TechList } from "../../components/TechList/TechList";
import type { Technology } from "../../global";
import { CircleImage } from "../../components/CircleImage/CircleImage";

export const Home = ({
  technologies = [],
  image,
  name,
}: {
  technologies?: Technology[];
  image?: string;
  name?: string;
}) => {
  const filterAndSortTechnologies = (
    technologies: Technology[],
    type: string
  ): Technology[] => {
    return technologies
      ?.filter((tech) => tech.type === type)
      .sort((a, b) => {
        if (a.isLearning === b.isLearning) {
          return a.isLearning ? a.key - b.key : a.name.localeCompare(b.name);
        }
        return a.isLearning ? 1 : -1;
      });
  };

  const frontEnd = filterAndSortTechnologies(technologies, "Frontend");
  const backEnd = filterAndSortTechnologies(technologies, "Backend");
  const database = filterAndSortTechnologies(technologies, "Database");
  const cicd = filterAndSortTechnologies(technologies, "CI/CD");
  const projectManagement = filterAndSortTechnologies(
    technologies,
    "Project Management"
  );
  const contentManagement = filterAndSortTechnologies(
    technologies,
    "Content Management"
  );
  const tools = filterAndSortTechnologies(technologies, "Tool");
  const mobile = filterAndSortTechnologies(technologies, "Mobile");

  const pageContent = [
    { techs: frontEnd, subHeading: "Front end" },
    { techs: backEnd, subHeading: "Back end" },
    { techs: mobile, subHeading: "Mobile" },
    { techs: database, subHeading: "Database" },

    { techs: cicd, subHeading: "CI/CD" },
    { techs: projectManagement, subHeading: "Project Management" },
    { techs: contentManagement, subHeading: "CMS" },
    { techs: tools, subHeading: "Tools" },
  ];

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
        {pageContent.map(
          (content) =>
            content.techs.length > 0 && (
              <TechList key={content.subHeading} {...content} />
            )
        )}
      </PageContent>
    </PageContainer>
  );
};
