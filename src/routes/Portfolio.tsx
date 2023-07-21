import { useSpring, animated } from '@react-spring/web'

export const Portfolio = () => {

    const text = "Portfolio"

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.section id="portfolio" className="portfolio" style={{...springs}}>
            <p className="portfolio-text">{text}</p>
        </animated.section>
    );
}