import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const TechLogoImage = ({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) => {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noreferrer"
      className="tech-stack-item"
    >
      <LazyLoadImage className="tech-stack-logo" src={image} alt={name} />
      <p className="tech-stack-name">{name}</p>
    </Link>
  );
};
