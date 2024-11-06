import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import type { Event, Technology } from "../../global";
import { technologies } from "../../constants";
import { TechList } from "../../components/TechList/TechList";

export const Events = ({ events }: { events: Event[] }) => {
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
    <PageContainer id="events">
      <PageHeader>
        <PageTitle text="Events" strongText="& Workshops" main icon="🎉" />
      </PageHeader>
      <PageContent>
        <ul>
          {events.map((event) => (
            <li key={event.key}>
              <a href={event.link} target="_blank" rel="noreferrer">
                {event.name}
              </a>
              <br />
              <small>{event.date}</small>
              <p>{event.description}</p>
              <ul>
                {transformTechStack(event.techStack).map((tech, index) => (
                  <TechList techs={[tech]} key={index} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PageContent>
    </PageContainer>
  );
};
