import { useSpring, animated } from '@react-spring/web'

export const About = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const text = "I have two years experience working as a freelancer while studying UX/UI design, HTML5, CSS3 and Javascript libraries. I prefer to work in React or Vue.js, and I'm always looking to add to my skill set. Web development will be a new chapter in my career after 15 years in education and youth sports."
    const title = "Hey, I'm Benjamin."

    return (
        <animated.section id="about" className="about" style={{...springs}}>
            <article className="content">
                <div className="about-upper">
                    <img src="benjamin.jpg" className="about-hero" alt="Benjamin"/>
                    <h3 className="about-title">{title}</h3>
                </div>
                <div className="about-lower">
                    <p className="about-text">{text}</p>
                </div>
            </article>
        </animated.section>
    );
}