import { PageContainer } from "../../components/PageContainer/PageContainer";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { PageContent } from "../../components/PageContent/PageContent";
import { EventSection } from "../../components/EventSection/EventSection";
import type { Event } from "../../global";

export const Events = ({ events }: { events: Event[] }) => {
  return (
    <PageContainer id="events">
      <PageHeader>
        <PageTitle text="Events" strongText="& Workshops" main icon="🎉" />
      </PageHeader>
      <PageContent>
        {events &&
          events.map((event) => <EventSection key={event.key} event={event} />)}
      </PageContent>
    </PageContainer>
  );
};
