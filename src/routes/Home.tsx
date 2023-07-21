import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'

export const Home = () => {

    const Benjamin = [
        {
            title: "Junior web developer with a passion for making cool pages",
            image: "benjamin.jpg",
            call: "Let me build something dynamic and responsive for you, today!"
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
                        <h2 className="home-title">{b.title}</h2>
                        <img className="home-hero" src={b.image} alt="whoops" />
                        <Link className="home-call-link" to="contact"><h3 className="home-call">{b.call}</h3></Link>
                    </article>
                ))
            }
        </animated.div>
    );
}