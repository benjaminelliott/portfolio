import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home = () => {

    const Benjamin = [
        {
            image: "images/benjamin.jpg",
            intro1: "👋🏽, I'm Benjamin",
            intro2: "I have a passion for building responsive pages with ",
            call: "Let me build you something"
        }
    ]

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.div id="home" className="home" style={{...springs}}>
            {
                Benjamin.map(b => (
                    <article className="content-home">
                        <div className="home-upper">
                            <div className="home-title-wrapper">
                                <h2 className="home-title">Junior</h2>
                                <h2 className="home-title">Web</h2>
                                <h2 className="home-title">Developer</h2>
                            </div>
                            <img className="home-hero" src={b.image} alt="whoops" />
                        </div>
                        <div className="home-lower">
                            <div className="home-intro">
                                <h2 className="intro-first">{b.intro1}</h2>
                                <h3 className="intro-second">{b.intro2}</h3>
                                <div className="intro-bottom">
                                    <LazyLoadImage className="home-logo"src="logos/react.svg" alt="React.JS" />
                                    <h3>or</h3>
                                    <img className="home-logo" src="logos/vue.svg" alt="Vue.JS"/>
                                </div>
                            </div>
                            <Link className="home-call-link" to="contact"><button className="home-call">{b.call}</button></Link>
                        </div>
                    </article>
                ))
            }
        </animated.div>
    );
}