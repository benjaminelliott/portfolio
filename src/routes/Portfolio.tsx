import { useSpring, animated } from '@react-spring/web'

export const Portfolio = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })
    const portfolio = {
        completed: [],
        projects: [
            {
                name: "gitHub",
                logo: "logos/github.svg",
                description: "My repo for all the projects I'm working on",
                link: "https://github.com/benjaminelliott"
            }
        ],
        certifications: [
            {
                name: "Coursera",
                logo: "logos/coursera.svg",
                description: "Currently completing the Meta Front-End Developer Professional Certificate",
                link: "https://www.coursera.org/user/9358bbdffd3525aa3dac8ce4684bad87"
            },
            {
                name: "freecodecamp",
                logo: "logos/freecodecamp.svg",
                description: "Completed Responsive Web Design certification",
                link: "https://www.freecodecamp.org/benjaminelliott"
            }
        ],
        practice: [
            {
                name: "Codewars",
                logo: "logos/codewars.svg",
                description: "4th Kyu in JavaScript",
                link: "https://www.codewars.com/users/benjineer"
            },
            {
                name: "Codepen",
                logo: "logos/codepen.svg",
                description: "Check out my practice for components, pages and apps in my spare time",
                link: "https://codepen.io/benjaminelliott"
            }
        ]
    }

    return (
        <animated.section id="portfolio" className="portfolio" style={{...springs}}>
            <article className="portfolio-section">
                <h2 className='section-title'>Projects</h2>
                {portfolio.projects.map(site => (
                    <div className='site'>
                        <a href={site.link} className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></a>
                        <h3 className='site-name'>{site.name}</h3>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Certifications</h2>
                {portfolio.certifications.map(site => (
                    <div className='site'>
                        <a href={site.link} className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></a>
                        <h3 className='site-name'>{site.name}</h3>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Practice</h2>
                {portfolio.practice.map(site => (
                    <div className='site'>
                        <a href={site.link} className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></a>
                        <h3 className='site-name'>{site.name}</h3>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
        </animated.section>
    );
}