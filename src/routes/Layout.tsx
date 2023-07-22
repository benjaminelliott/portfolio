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

const logos = [
    {
        name: "threads",
        logo: "threads-seeklogo.com-2.svg"
    },
    {
        name: "codewars",
        logo: "codewars-svgrepo-com.svg"
    },
    {
        name: "linkedin",
        logo: "linkedin-round-svgrepo-com.svg"
    },
    {
        name: "instagram",
        logo: "instagram-round-svgrepo-com.svg"
    },
    {
        name: "codepen",
        logo: "codepen-02-svgrepo-com.svg"
    },
    {
        name: "freecodecamp",
        logo: "freecodecamp-svgrepo-com.svg"
    },
    {
        name: "codecademy",
        logo: "codecademy-svgrepo-com.svg"
    },
    {
        name: "github",
        logo: "github-142-svgrepo-com.svg",
        link: "https://github.com/benjaminelliott"
    },
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
                {logos.map(logo => (<img src={logo.logo} className="footer-logo" alt={logo.name} />))}
                    <h3 className="footer-text">© 2023</h3>
            </article>
        </section>
    );
}

