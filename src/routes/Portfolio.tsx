import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";

export const Portfolio = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })
    const portfolio = {
        completed: [
            {
                name: "benjaminelliott.dev",
                logo: "icons/code.svg",
                description: "My personal portfolio page, built with React & Typescript, deployed from gitHub with Netlify",
                link: "https://benjaminelliott.dev"
            },
            {
                name: "littlelemon.biz",
                logo: "logos/littlelemon.svg",
                description: "The capstone project for the Meta Front-End Developer Professional Certificate on Coursera. A real website for the fictional Little Lemon restaurant, built with React & Typescript, deployed from Github with Netlify",
                link: "https://littlelemon.biz"
            }
        ],
        projects: [
            {
                name: "gitHub",
                logo: "logos/github.svg",
                description: "My repo for all the projects I'm working on. I'm always looking for new ideas and opportunities to learn",
                link: "https://github.com/benjaminelliott"
            }
        ],
        certifications: [
            {
                name: "Coursera",
                image: "images/Meta Front End Certificate.png",
                logo: "logos/coursera.svg",
                description: "Completed the Meta Front-End Developer professional certification on Coursera, confirming my capabilities as a front-end developer",
                link: "https://coursera.org/verify/professional-cert/5GMTVUAPTVM2"
            },
            {
                name: "freecodecamp",
                image: "images/freecodecamp Certificate.png",
                logo: "logos/freecodecamp.svg",
                description: "Completed Responsive Web Design certification, specializing in HTML, CSS and Javascipt",
                link: "https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design"
            }
        ],
        practice: [
            {
                name: "Codewars",
                logo: "logos/codewars.svg",
                description: "4th Kyu in JavaScript, completing challenges of increasing difficulty in Javascript",
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
                <h2 className='section-title'>Certifications</h2>
                <div className='certs'>
                    {portfolio.certifications.map(cert => (
                        <div className='cert'>
                            <Link to={cert.link} target="_blank" rel="noopener noreferrer" className='site-link'><LazyLoadImage src={cert.image} className='cert-image'/></Link>
                            <p className='site-description'>{cert.description}</p>
                        </div>
                    ))}
                </div>
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Websites built</h2>
                {portfolio.completed.map(site => (
                    <div className='site'>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Projects</h2>
                {portfolio.projects.map(site => (
                    <div className='site'>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Practice</h2>
                {portfolio.practice.map(site => (
                    <div className='site'>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                        <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                        <p className='site-description'>{site.description}</p>
                    </div>
                ))}
            </article>
        </animated.section>
    );
}