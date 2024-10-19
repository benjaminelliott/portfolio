import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import type { Certification } from "../../global";
import { CertificationList } from "../../components/CertificationList/CertificationList";

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
