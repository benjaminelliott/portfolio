import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const About = ({ coachingSkills, codingSkills, hobbies } : {
    coachingSkills: {
        image: string,
        key: number,
        name: string
    }[];
    codingSkills: {
        image: string,
        key: number,
        name: string
    }[];
    hobbies: {
        text: string,
        image: string,
        key: number,
        icon: string,
        name: string
    }[];

}) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.75 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.section id="about" className="about" style={{...springs}}>
            <article className="about-coaching">
            <h4 className='section-title'>From coaching...</h4>
                <div className='coaching-skills' style={{backgroundImage: "url(images/coachBenLowC.jpg)"}}>
                    {
                        coachingSkills.map((skill) => (
                            <div key={skill.key} className='skill'>
                                <p className='skill-icon' >{skill.image}</p>
                                <p className='skill-text'>{skill.name}</p>
                            </div>
                        ))
                    }
                </div>
            </article>
            <article className="about-coding">
                <h4 className='section-title' style={{textAlign: "right"}}>...to coding.</h4>
                <div className='coaching-skills' style={{backgroundImage: "url(images/Ben&ColbyLowC.jpg)"}}>
                    {
                        codingSkills.map((skill) => (
                            <div key={skill.key}>
                                <p className='skill-icon' >{skill.image}</p>
                                <p className='skill-text'>{skill.name}</p>
                            </div>
                        ))
                    }
                </div>
            </article>
            <article className='about-benjamin'>
                <h4 className='section-title'>Transitioning From Pitch to Pixels</h4>
                <p className='text'>For most of my career, I dedicated myself to the beautiful game. Coaching, mentoring, and nurturing the talents of aspiring athletes was not just a profession; it was my passion. London's football culture and the vibrant youth programs there shaped my understanding of teamwork, strategy, and the importance of continuous improvement.</p>
                <p className='text'>After fifteen years dedicating myself to the game, I'm now using all my "soft skills" to build apps instead of teams. The thrill of creating something from scratch, of molding intricate lines of code into components working together seamlessly, resonates with me just as deeply as watching my former players move the ball around with understanding and coordination.</p>
                <p className='text'>My years on the field have instilled in me a strong work ethic, a love for problem-solving, and the ability to adapt quickly – skills that are incredibly valuable in the world of software development. Just as I once strategized the perfect game plan for a match, I now strategize the perfect architecture for web applications.</p>
            </article>
            <article className='about-hobbies'>
                <h4 className="section-title">Other passions</h4>
                <div className='hobbies-wrapper'>
                    {
                        hobbies.map((hobby) => (
                            <div className='hobby-wrapper' key={hobby.key}>
                                <div className='hobby-header'>
                                    <h1 className='hobbies-title'>{hobby.name}</h1>
                                    <p className="hobbies-emoji">{hobby.icon}</p>
                                </div>
                                <p className='hobbies-text'>{hobby.text}</p>
                                <LazyLoadImage src={hobby.image} className='hobbies-image'/>
                            </div>
                        )
                    )}
                </div>
            </article>
        </animated.section>
    );
}