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
        projects: [
            {
                key: 0,
                name: "littlelemon.biz",
                logo: "logos/littlelemon.svg",
                description: "Little Lemon is a mediterranean in the heart of the Windy City. After opening to tremendous acclaim, the restaurant struggled to organize and fulfil online orders and table bookings, until I implemented a solution for them.",
                link: "https://littlelemon.biz",
                image: "images/littlelemon.png"
            },
            {
                key: 1,
                name: "Epictweetus",
                logo: "logos/epictweetus.png",
                description: "A single page app with philosophical quotes and pictures of statues. A respite for weary developers. Classical wisdom for the digital age.",
                link: "https://sensational-bonbon-a021d7.netlify.app/",
                image: "images/epictweetus.png"
            }
        ],
        platforms: [
            {
                key: 0,
                name: "gitHub",
                logo: "logos/github.svg",
                description: "My repo for all the projects I'm working on. I'm always looking for new ideas and opportunities to learn. I aim to make commits daily, if not multiple days per week",
                link: "https://github.com/benjaminelliott"
            }
        ]
    }

    return (
        <animated.section id="portfolio" className="portfolio" style={{...springs}}>
            <article className="portfolio-section">
                <h4 className='section-title'>Certifications</h4>
                <Carousel
                    className='certs'
                    showThumbs={false}
                    infiniteLoop={false}
                    renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                            <button className={ hasPrev ? "carousel-button" : "carousel-button-hidden" } onClick={clickHandler}>👈🏽</button>
                        )
                    }}
                    renderArrowNext={(clickHandler, hasNext) => {
                        return (
                            <button className={ hasNext ? "carousel-button" : "carousel-button-hidden" } onClick={clickHandler}>👉🏽</button>
                        )
                    }}
                    renderIndicator={(clickHandler, isSelected, index) => {
                        return (
                                    <li
                                        key={index}
                                        className={ isSelected ? "selected-dot control-dot" : "control-dot"}
                                        onClick={clickHandler}
                                    >
                                        <button className='control-dot-button'>{isSelected ? "⚪" : "⚫"}</button>
                                    </li>
                        )
                    }}
                >
                    {
                        portfolio.certifications.map(cert => (
                            <div key={cert.key} className='cert'>
                                <Link to={cert.link} target="_blank" rel="noopener noreferrer" className='cert-link'><LazyLoadImage src={cert.image} className='cert-image'/></Link>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
            <article className="portfolio-section">
                <h4 className='section-title'>Projects</h4>
                {   portfolio.projects.map(site => (
                        <div key={site.key} className='site'>
                            <div className='site-images'>
                                <div className='site-links'>
                                    <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                                    <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                                </div>
                                <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><LazyLoadImage className="site-image" src={site.image} alt={site.name} /></Link>
                            </div>
                            <p className='site-description'>{site.description}</p>
                        </div>
                    ))
                }
            </article>
        </animated.section>
    );
}