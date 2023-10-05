import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home = (props: any) => {

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
                    <h2 className="home-title"><strong className="home-title-strong">Always a </strong>Developer</h2>
                </div>
                <img className="hero-image" src={props.image} alt="whoops" />
            </article>
            <article className="home-lower">
                <p className="text intro">I'm <strong className="benjamin strong">{props.name}</strong>. I have a passion for creating beautiful and practical things with <strong className="react strong">React</strong>. I'm always building, committing, learning, and continuing the grind.</p>
                <div className="tech-stack">
                    <h4 className="section-title">Tech Stack</h4>
                    <div className="tech-logos">
                        {
                            props.techStack.map((tech: { image: string, key: number, name: string, link: string}) => {
                                return (
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
                            })
                        }
                    </div>
                </div>
                <div className="tech-stack">
                    <h4 className="section-title">Tools</h4>
                    <div className="tech-logos">
                        {
                            props.tools.map((tech: { image: string | undefined, key: number, name: string, link: string}) => {
                                return (
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
                            })
                        }
                    </div>
                </div>
                <div className="tech-stack">
                    <h4 className="section-title">Learning</h4>
                    <div className="tech-logos">
                        {
                            props.learning.map((tech: { image: string | undefined, key: number, name: string, link: string}) => {
                                return (
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
                            })
                        }
                    </div>
                </div>
            </article>
        </animated.section>
    );
}