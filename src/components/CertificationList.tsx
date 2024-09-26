import type { Certification } from "../global";
import { CertificationCard } from "./CertificationCard";

export const CertificationList = ({
  certifications,
}: {
  certifications: Certification[];
}) => {
  return (
    <div className="certification-list">
      {certifications &&
        certifications.map((certification) => (
          <CertificationCard certification={certification} />
        ))}
    </div>
  );
};
