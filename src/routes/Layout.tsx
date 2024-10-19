import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import type { Link, Social, Contact } from "../global";

export const Layout = ({
  links,
  socials,
  contacts,
}: {
  links: Link[];
  socials: Social[];
  contacts: Contact[];
}) => (
  <div className="layout">
    <Header links={links} />
    <section className="content">
      <Outlet />
    </section>
    <Footer socials={socials} contacts={contacts} />
  </div>
);
