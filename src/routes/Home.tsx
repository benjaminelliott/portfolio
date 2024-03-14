import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home = ({ techStack, tools, learning, image, name } : {
    techStack: {
        image: string,
        key: number,
        name: string,
        link: string
    }[],
    tools: {
        image: string,
        key: number,
        name: string,
        link: string
    }[],
    learning: {
        image: string,
        key: number,
        name: string,
        link: string
    }[],
    image: string,
    name: string
}) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.75 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.section id="home" className="home" style={{...springs}}>
            <article className="home-upper">
                <div className="home-title-wrapper">
                    <h2 className="home-title"><strong className="home-title-strong">Mostly </strong>Front-End,</h2>
                    <h2 className="home-title"><strong className="home-title-strong">Sometimes </strong>Full-Stack,</h2>
                    <h2 className="home-title"><strong className="home-title-strong">Always </strong><span className=" home-title-name">Benjamin 👋🏽</span></h2>
                </div>
                <img className="hero-image" src={image} alt="whoops" />
            </article>
            <article className="home-lower">
                <div className="intro">
                    <p className="text intro">I used my curiosity and creativity to create this space to showcase my work and share my journey in the world of React development. In my corner of the web, you'll find a collection of projects that represent not only my technical skills but also my dedication to creating user-friendly and visually stunning web experiences. </p>
                    <p className="text intro">From Front-End to Full-Stack applications, I'm constantly pushing the boundaries of what I can achieve and keeping up with the latest industry standards. I make daily commits to GitHub and I'm always working on something in the background. Stay tuned for the next stage in my coding evolution.</p>
                    <p className="text intro"> So, I invite you to explore my work, read about my coding adventures, and get a glimpse into my coding style and philosophy. Whether you're looking to collaborate on a project, discuss a potential opportunity, or simply want to connect, I'm just a click away. 👊🏽</p>
                </div>
                <div className="tech-stack">
                    <h4 className="section-title">Tech Stack</h4>
                    <div className="tech-logos">
                        {
                            techStack.map((tech) =>
                                <Link
                                    to={tech.link}
                                    target='_blank'
                                    rel="noreferrer"
                                    key={tech.key}
                                >
                                    <LazyLoadImage
                                        className="tech-stack-logo"
                                        src={tech.image}
                                        alt={tech.name}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className="tech-stack">
                    <h4 className="section-title">Tools</h4>
                    <div className="tech-logos">
                        {
                            tools.map((tech) =>
                                <Link
                                    to={tech.link}
                                    target='_blank'
                                    rel="noreferrer"
                                    key={tech.key}
                                >
                                    <LazyLoadImage
                                        className="tech-stack-logo"
                                        src={tech.image}
                                        alt={tech.name}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
                <div className="tech-stack">
                    <h4 className="section-title">Learning</h4>
                    <div className="tech-logos">
                        {
                            learning.map((tech) =>
                                <Link
                                    to={tech.link}
                                    target='_blank'
                                    rel="noreferrer"
                                    key={tech.key}
                                >
                                    <LazyLoadImage
                                        className="tech-stack-logo"
                                        src={tech.image}
                                        alt={tech.name}
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </article>
        </animated.section>
    );
}