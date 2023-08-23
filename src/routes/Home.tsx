import { Link, To } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Key } from "react";

export const Home = (props: any) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.section id="home" className="home" style={{...springs}}>
            <article className="home-upper">
                <div className="home-title-wrapper">
                    <h2 className="home-title">Front-End</h2>
                    <h2 className="home-title">Web</h2>
                    <h2 className="home-title">Developer</h2>
                </div>
                <img className="home-hero" src={props.image} alt="whoops" />
            </article>
            <article className="home-lower">
                <p className="intro">I'm <strong className="benjamin">{props.name}</strong>. I have a passion for creating beautiful and practical things with <strong className="react">React</strong>. I'm always building, committing, learning, and continuing the grind.</p>
                <div className="tech-logos">
                    {
                        props.socials.map((social: { link: To; image: string | undefined; name: string | undefined; key: Key | null | undefined; }) => {
                            return (
                                <Link
                                    to={social.link}
                                    target='_blank'
                                    rel="noreferrer"
                                    key={social.key}
                                >
                                    <LazyLoadImage
                                                className="tech-stack-logo"
                                                src={social.image}
                                                alt={social.name}
                                            />
                                    </Link>
                            )
                        })
                    }
                </div>
                <div className="tech-stack">
                    <h4 className="tech-stack-title">Tech Stack</h4>
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
                <div className="home-lower-lower">
                    <div className="tech-stack">
                        <h4 className="tech-stack-title">Tools</h4>
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
                        <h4 className="tech-stack-title">Actively learning</h4>
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
                </div>
            </article>
        </animated.section>
    );
}