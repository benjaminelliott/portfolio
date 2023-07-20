export const Header = () => {

    const links = [
        {
            title: "Home",
            route: ""
        },
        {
            title: "About",
            route: ""
        },
        {
            title: "Portfolio",
            route: ""
        },
        {
            title: "Contact",
            route: ""
        }
    ]

    return (
        <nav className="header">
            <ul className="header-links">
                {
                    links.map(link => <a className="header-links-link" href={link.route}><li>{link.title}</li></a>)
                }
            </ul>
        </nav>
    );
  }