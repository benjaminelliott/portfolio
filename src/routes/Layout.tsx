import { Key } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Outlet, NavLink, Link, To } from "react-router-dom";

export const Layout = ({ links, socials, contacts } : {
    links: {
        title: string,
        route: string
    }[],
    socials: {
        link: To,
        image: string,
        name: string,
        key: Key
    }[],
    contacts: {
        link: To,
        icon: string,
        name: string,
        key: Key
    }[];

}) =>
        <section className="layout">
            <article className="header">
                <LazyLoadImage
                    src="images/B.png"
                    className="benjamin-logo"
                />
                <ul className="header-links">
                    {
                        links.map(link =>
                            <NavLink
                                key={link.title}
                                className="header-links-link"
                                to={link.route}
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "" : "",
                                        color: isActive ? "#fff" : "",
                                        transform: isActive ? "scale(1.2" : "",
                                        transitionDuration: isActive ? "500ms ease-in-out" : ""
                                    };
                                }}
                            >
                                {link.title}
                            </NavLink>)
                    }
                </ul>
            </article>
            <article className="content">
                <Outlet />
            </article>
            <article className="footer">
                <div className="footer-links">
                {
                    socials.map(social =>
                        <Link
                            to={social.link}
                            target='_blank'
                            rel="noreferrer"
                            key={social.key}
                        >
                            <LazyLoadImage
                                className="tech-stack-logo"
                                src={social.image}
                                alt={social.name}
                            />
                        </Link>
                    )
                }
                </div>
                <h3 className="footer-text">© Benjamin Elliott 2023</h3>
                <div className="footer-links">
                {
                    contacts.map(contact =>
                        <Link
                            to={contact.link}
                            target='_blank'
                            rel="noreferrer"
                            key={contact.key}
                        >
                            <LazyLoadImage
                                className="tech-stack-logo"
                                src={contact.icon}
                                alt={contact.name}
                            />
                        </Link>
                    )
                }
                </div>
            </article>
        </section>