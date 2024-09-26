import { PageContainer } from "../components/PageContainer";
import { PageHeader } from "../components/PageHeader";
import { PageContent } from "../components/PageContent";
import type { AboutItem } from "../global";
import { PageTitle } from "../components/PageTitle";
import { AboutList } from "../components/AboutList";

export const About = ({ aboutItems }: { aboutItems?: AboutItem[] }) => {
  return (
    <PageContainer id="about">
      <PageHeader>
        <PageTitle text="Hello, world!" strongText="I am Benjamin" icon="🧔🏽‍♂️" />
      </PageHeader>
      <PageContent>
        <AboutList aboutItems={aboutItems || []} />
      </PageContent>
    </PageContainer>
  );
};
