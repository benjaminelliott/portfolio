import { SubHeading } from "../SubHeading/SubHeading";
import { TechLogoImage } from "../TechLogoImage/TechLogoImage";
import type { Tech } from "../../global";

export const TechList = ({
  techs,
  subHeading,
}: {
  techs: Tech[];
  subHeading?: string;
}) => {
  return (
    <article className="tech-list">
      <SubHeading text={subHeading ? subHeading : ""} />
      <ul className="tech-logos">
        {techs &&
          techs.map((tech) => (
            <TechLogoImage
              image={tech.image}
              name={tech.name}
              link={tech.link}
              key={tech.key}
              isLearning={tech.isLearning}
            />
          ))}
      </ul>
    </article>
  );
};
