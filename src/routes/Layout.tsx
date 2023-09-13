import { Key } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Outlet, NavLink, Link, To } from "react-router-dom";

export const Layout = (props: any) => {
    return (
        <section className="layout">
            <article className="header">
                <LazyLoadImage src="images/logolong.png" className="benjamin"/>
                <ul className="header-links">
                    {
                        props.links.map((link: {title: string, route: string}) =>
                            <NavLink
                                key={link.title}
                                className="header-links-link"
                                to={link.route}
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "" : "",
                                        color: isActive ? "#2BF38B" : "",
                                        transform: isActive ? "scale(1.2" : "",
                                        transitionDuration: isActive ? "500ms ease-in-out" : ""
                                    };
                                }}
                            >{link.title}</NavLink>)
                    }
                </ul>
            </article>
            <article className="content">
                <Outlet />
            </article>
            <article className="footer">
                <div className="footer-links">
                {
                        props.socials.map((social: { link: To; image: string | undefined; name: string | undefined; key: Key | null | undefined; }) => {
                            return (
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
                        })
                    }
                </div>
                <h3 className="footer-text">© Benjamin Elliott 2023</h3>
                <div className="footer-links">
                {
                        props.contacts.map((contact: { link: To; icon: string | undefined; name: string | undefined; key: Key | null | undefined; }) => {
                            return (
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
                        })
                    }
                </div>
            </article>
        </section>
    );
}