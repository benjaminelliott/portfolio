import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GraduationCap } from "lucide-react";

export const TechLogoImage = ({
  image,
  name,
  link,
  isLearning,
}: {
  image: string;
  name: string;
  link: string;
  isLearning?: boolean;
}) => {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noreferrer"
      className={`tech-stack-item ${
        isLearning ? "tech-stack-item-is-learning" : ""
      }`}
    >
      {isLearning && (
        <GraduationCap size={20} className="tech-stack-isLearning" />
      )}
      <LazyLoadImage
        className="tech-stack-logo"
        src={image}
        alt={name}
        loading="lazy"
      />
      <p className="tech-stack-name">{name}</p>
    </Link>
  );
};
