import { LazyLoadImage } from "react-lazy-load-image-component";
import { SubHeading } from "./SubHeading/SubHeading";

export const ProjectInfo = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  return (
    <article className="project-info">
      <LazyLoadImage className="project-logo" src={image} alt={name} />
      <SubHeading text={name} />
    </article>
  );
};
