import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const About = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const hobbies =[
        {
            key: 0,
            name: "PC Building",
            icon: "🧑🏽‍🏭️"
        },
        {
            key: 1,
            name: "Mechanical keyboards",
            icon: "⌨️"
        },
        {
            key: 2,
            name: "Indoor cycling",
            icon: "🚵🏽"
        }
    ]
    const history = [
        {
            key: 0,
            item: "Self-taught web developer with passion for completing courses and learning new things"
        },
        {
            key: 1,
            item: "Experienced in both vanilla Javascript ES5 & ES6, as well as frameworks such as React & Vue"
        },
        {
            key: 2,
            item: "Proven communication and leadership skills through 15 year career as a teacher and soccer coach."
        },
        {
            key: 3,
            item: "Ability to work both on location and remotely, with experience of working across time zones"
        }
    ]

    return (
        <animated.section id="about" className="about" style={{...springs}}>
            <article className="about-content">
                <div className="about-left">
                    <LazyLoadImage src="images/Ben&Colby.jpg" className="about-hero" alt="Ben & Colby" />
                    <div className="about-hobbies">
                        <h2 className="hobbies-title">HOBBIES</h2>
                        <div className='hobbies-wrapper'>
                            {
                                hobbies.map(hobby => (
                                    <div className='hobby-wrapper' key={hobby.key}>
                                        <p className="hobbies-emoji">{hobby.icon}</p>
                                        <p className='hobbies-text'>{hobby.name}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-history">
                        <h2 className='history-title'>HISTORY</h2>
                        <ul className="history-ul">
                            {
                                history.map((item) => (
                                    <li key ={item.key} className='history-li'>{item.item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </article>
        </animated.section>
    );
}