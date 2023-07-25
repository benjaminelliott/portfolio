import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'

export const Home = () => {

    const Benjamin = [
        {
            image: "benjamin.jpg",
            intro: "👋🏽, I'm Benjamin. I have a passion for building responsive pages with ",
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
                    <article className="content">
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
                                <h3>{b.intro}</h3>
                                <img className="home-logo"src="react-svgrepo-com.svg" alt="React.JS" />
                                <h3>or</h3>
                                <img className="home-logo" src="vue-svgrepo-com.svg" alt="Vue.JS"/>
                            </div>
                            <Link className="home-call-link" to="contact"><button className="home-call">{b.call}</button></Link>
                        </div>
                    </article>
                ))
            }
        </animated.div>
    );
}