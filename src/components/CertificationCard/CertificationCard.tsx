import { LazyLoadImage } from "react-lazy-load-image-component";
import { Certification } from "../../global";
import { LinkButton } from "../LinkButton/LinkButton";
import { SubHeading } from "../SubHeading/SubHeading";

export const CertificationCard = ({
  certification,
}: {
  certification: Certification;
}) => {
  const { name, logo, link, company, location, description } = certification;
  return (
    <div key={certification.key} className="certification-card">
      <div className="certification-card-header">
        <div className="certification-card-info">
          <LazyLoadImage
            className="certification-card-logo"
            src={logo}
            alt={name}
            effect="blur"
          />
          <SubHeading text={name}></SubHeading>
        </div>

        <LinkButton link={link || ""} />
      </div>
      <div className="certification-card-content">
        <p className="certification-description">{description}</p>
      </div>
      <div className="certification-card-footer">
        <p>{location}, </p>
        <p>{company}</p>
      </div>
    </div>
  );
};
