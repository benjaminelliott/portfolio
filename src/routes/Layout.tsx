import { Outlet, NavLink } from "react-router-dom";

const links = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "/about"
    },
    {
        title: "Skills",
        route: "/skills"
    },
    {
        title: "Portfolio",
        route: "/portfolio"
    },
    {
        title: "Contact",
        route: "/contact"
    }
]

export const Layout = () => {
    return (
        <section className="layout">
            <article className="header">
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
                                    color: isActive ? "#031926" : "",
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
                <h3 className="footer-text">© Benjamin Elliott 2023</h3>
            </article>
        </section>
    );
}

