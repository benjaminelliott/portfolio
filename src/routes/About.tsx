import { useSpring, animated } from '@react-spring/web'

export const About = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const hobbies =[
        {
            name: "PC Building",
            icon: "🧑🏽‍🏭️"
        },
        {
            name: "Mechanical keyboards",
            icon: "⌨️"
        },
        {
            name: "Indoor cycling",
            icon: "🚵🏽"
        }
    ]
    const history = [
        { item: "Extensive communication and leadership skills."},
        { item: "Passion for learning new things"},
        { item: "Ability to work remotely"}
    ]

    return (
        <animated.section id="about" className="about" style={{...springs}}>
            <article className="content">
                <div className="about-upper">
                    <img src="Ben&Colby.jpg" className="about-hero" alt="Benjamin"/>
                </div>
                <div className="about-lower">
                    <div className="about-lower-half">
                        {hobbies.map(hobby => (<div className='hobby-wrapper'>
                            <p className="hobbies-image">{hobby.icon}</p>
                            <p className='hobbies-text'>{hobby.name}</p>
                        </div>))}
                    </div>
                    <div className="about-lower-half">
                        <ul className="history-ul">
                            {history.map((item) =>( <li className='history-li'>{item.item}</li>))}
                        </ul>
                    </div>
                </div>
            </article>
        </animated.section>
    );
}