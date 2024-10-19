import { TechLogoImage } from "../TechLogoImage/TechLogoImage";
import type { Social, Contact } from "../../global";

export const Footer = ({
  socials,
  contacts,
}: {
  socials: Social[];
  contacts: Contact[];
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        {socials.map((social) => (
          <TechLogoImage
            key={social.key}
            image={social.image}
            name={social.name}
            link={social.link as string}
          />
        ))}
      </div>
      <h3 className="footer-text">benjamin.dev {year}</h3>
      <div className="footer-links">
        {contacts.map((contact) => (
          <TechLogoImage
            key={contact.key}
            image={contact.icon}
            name={contact.name}
            link={contact.link as string}
          />
        ))}
      </div>
    </footer>
  );
};
