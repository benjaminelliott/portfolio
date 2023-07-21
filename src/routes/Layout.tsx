import { Outlet, Link } from "react-router-dom";

const links = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "about"
    },
    {
        title: "Skills",
        route: "skills"
    },
    {
        title: "Portfolio",
        route: "portfolio"
    },
    {
        title: "Contact",
        route: "contact"
    }
]

export const Layout = () => {
    return (
        <section className="container">
            <article className="header">
                <ul className="header-links">
                    {
                        links.map(link => <Link className="header-links-link" to={link.route}>{link.title}</Link>)
                    }
                </ul>
            </article>
            <article className="content">
                <Outlet />
            </article>
            <article className="footer">
                    <h3 className="footer-text">Benjamin Elliott ©2023</h3>
            </article>
        </section>
    );
}

