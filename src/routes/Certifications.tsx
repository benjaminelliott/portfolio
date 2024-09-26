import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import type { Certification } from "../global";
import { CertificationList } from "../components/CertificationList";

export const Certifications = ({
  certifications,
}: {
  certifications: Certification[];
}) => {
  return (
    <PageContainer id="certifications">
      <PageHeader>
        <PageTitle text="Certifications" strongText="& Awards" main icon="📜" />
      </PageHeader>
      <PageContent>
        <CertificationList certifications={certifications} />
      </PageContent>
    </PageContainer>
  );
};
