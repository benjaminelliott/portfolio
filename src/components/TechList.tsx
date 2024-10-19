import { SubHeading } from "./SubHeading/SubHeading";
import { TechLogoImage } from "./TechLogoImage";

export const TechList = ({
  techs,
  subHeading,
}: {
  techs?: {
    image: string;
    key: number;
    name: string;
    link: string;
  }[];
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
            />
          ))}
      </ul>
    </article>
  );
};
