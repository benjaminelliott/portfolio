import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Portfolio = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })
    const portfolio = {
        certifications: [
            {
                key: 0,
                name: "freecodecamp",
                image: "images/freecodecamp Certificate.png",
                logo: "logos/freecodecamp.svg",
                description: "Completed Responsive Web Design certification, specializing in creating responsive pages with HTML, CSS and Javascipt",
                link: "https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design"
            },
            {
                key: 1,
                name: "Coursera",
                image: "images/Meta Front End Certificate.png",
                logo: "logos/coursera.svg",
                description: "Completed the Meta Front-End Developer professional certification on Coursera, confirming my capabilities as a front-end developer",
                link: "https://coursera.org/verify/professional-cert/5GMTVUAPTVM2"
            },
            {
                key: 3,
                name: "freecodecamp",
                image: "images/freecodecamp Certificate 2.png",
                logo: "logos/freecodecamp.svg",
                description: "Completed Javascript algorithms and data sctuctures, specializing in using different data types and structures in Javascript ES6",
                link: "https://freecodecamp.org/certification/benjaminelliott/javascript-algorithms-and-data-structures"
            }
        ],
        completed: [
            {
                key: 0,
                name: "benjaminelliott.dev",
                logo: "icons/code.svg",
                description: "My personal portfolio page, built with React & Typescript, deployed from gitHub with Netlify",
                link: "https://benjaminelliott.dev"
            },
            {
                key: 1,
                name: "littlelemon.biz",
                logo: "logos/littlelemon.svg",
                description: "The capstone project for the Meta Front-End Developer Professional Certificate on Coursera. A real website for the fictional Little Lemon restaurant, built with React & Typescript, deployed from Github with Netlify",
                link: "https://littlelemon.biz"
            },
            {
                key: 2,
                name: "Epictweetus",
                logo: "logos/epictweetus.png",
                description: "A single page app with philosophical quotes and pictures of statues. Built with React and Typescript, making use of hooks and API calls to get the job done. Classical wisdom for the digital age!",
                link: "https://sensational-bonbon-a021d7.netlify.app/"
            }
        ],
        projects: [
            {
                key: 0,
                name: "gitHub",
                logo: "logos/github.svg",
                description: "My repo for all the projects I'm working on. I'm always looking for new ideas and opportunities to learn. I aim to make commits daily, if not multiple days per week",
                link: "https://github.com/benjaminelliott"
            }
        ],
        practice: [
            {
                key: 0,
                name: "Codewars",
                logo: "logos/codewars.svg",
                description: "4th Kyu in JavaScript, completing challenges of increasing difficulty in Javascript",
                link: "https://www.codewars.com/users/benjineer"
            },
            {
                key: 1,
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
                <Carousel className='certs' showThumbs={false}>
                    {
                        portfolio.certifications.map(cert => (
                            <div key={cert.key} className='cert'>
                                <Link to={cert.link} target="_blank" rel="noopener noreferrer" className='site-link'><LazyLoadImage src={cert.image} className='cert-image'/></Link>
                                <p className='site-description'>{cert.description}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Websites built</h2>
                {   portfolio.completed.map(site => (
                        <div key={site.key} className='site'>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                            <p className='site-description'>{site.description}</p>
                        </div>
                    ))
                }
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Projects</h2>
                {   portfolio.projects.map(site => (
                        <div key={site.key} className='site'>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                            <p className='site-description'>{site.description}</p>
                        </div>
                    ))
                }
            </article>
            <article className="portfolio-section">
                <h2 className='section-title'>Practice</h2>
                {   portfolio.practice.map(site => (
                        <div key={site.key} className='site'>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                            <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                            <p className='site-description'>{site.description}</p>
                        </div>
                    ))
                }
            </article>
        </animated.section>
    );
}