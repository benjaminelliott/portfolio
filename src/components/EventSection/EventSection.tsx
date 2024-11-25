import { Event, Technology } from "../../global";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { technologies } from "../../constants";

export const EventSection = ({ event }: { event: Event }) => {
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
    <section className="event-wrapper">
      <SectionHeading text={event.name} icon={event.image} />
      <div className="event-content">
        <p className="event-description">{event.description}</p>
        <ul className="tech-list">
          {event.techStack &&
            transformTechStack(event.techStack).map((tech) => (
              <li key={tech.key} className="tech-item">
                <img src={tech.image} alt={tech.name} className="tech-image" />
                <span className="tech-name">{tech.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
