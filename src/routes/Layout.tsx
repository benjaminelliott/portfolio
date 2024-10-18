import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import type { Link, Social, Contact } from "../global";
import { Header } from "../components/Header";

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
