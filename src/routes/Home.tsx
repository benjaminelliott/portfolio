import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

export const Home = (props: any) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
      };

      const onLeave = () => {
        setHover(false);
      };

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
                    <h2 className="intro">👋🏽, I'm <strong>{props.name}</strong>. I have a passion for building beautiful and practical things with <strong className="react">React</strong> or <strong className="vue">Vue</strong>.</h2>
                    <h2 className="tech-stack-text">Current Stack</h2>
                    <div className="tech-stack">
                        {
                            props.techStack.map((tech: { image: string, key: number, name: string, link: string}) => {
                                return (
                                    <div>
                                        <Link
                                            to={tech.link}
                                            target='_blank'
                                            rel="noreferrer"
                                        >
                                            <LazyLoadImage
                                                className="tech-stack-logo"
                                                src={tech.image}
                                                alt={tech.name}
                                                key={tech.key}
                                                onMouseEnter={onHover}
                                                onMouseLeave={onLeave}
                                            />
                                        </Link>
                                        <span></span>
                                        <p>{hover && tech.key ? tech.name : ""}</p>
                                        </div>
                                )
                            })
                        }
                    </div>
                    <h2 className="tech-stack-text">Programs & Platforms</h2>
                    <div className="tech-stack">
                        {
                            props.programs.map((tech: { image: string | undefined, key: number, name: string}) => {
                                return (
                                    <LazyLoadImage className="tech-stack-logo" src={tech.image} alt={tech.name} key={tech.key}/>
                                )
                            })
                        }
                    </div>

                <Link className="home-call-link" to="contact"><button className="home-call">Here's what I can do</button></Link>
            </article>
        </animated.section>
    );
}