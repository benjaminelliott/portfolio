import { NavLink } from "react-router-dom";
import { Link } from "../../global";
import { TechLogoImage } from "../TechLogoImage";

export const Header = ({ links }: { links: Link[] }) => {
  return (
    <nav className="header">
      <TechLogoImage image="images/B.png" name="benjamin.dev" link="/" />
      <ul className="header-links">
        {links.map((link) => (
          <NavLink
            key={link.title}
            className="header-links-link"
            to={link.route}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "" : "",
                color: isActive ? "#fff" : "",
                transform: isActive ? "scale(1.2" : "",
                transitionDuration: isActive ? "500ms ease-in-out" : "",
              };
            }}
          >
            {link.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
