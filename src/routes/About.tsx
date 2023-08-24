import { useSpring, animated } from '@react-spring/web'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const About = (props: any) => {

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
                        props.coachingSkills.map((skill: {
                            [x: string]: ReactNode; image: string | undefined; key: Key | null | undefined;}) => {
                            return (
                                <div key={skill.key} className='skill'>
                                    <p className='skill-icon' >{skill.image}</p>
                                    <p className='skill-text'>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className="about-coding">
                <h4 className='section-title' style={{textAlign: "right"}}>...to coding.</h4>
                <div className='coaching-skills' style={{backgroundImage: "url(images/Ben&ColbyLowC.jpg)"}}>
                    {
                        props.codingSkills.map((skill: {
                            [x: string]: ReactNode; image: string | undefined; key: Key | null | undefined;}) => {
                            return (
                                <div key={skill.key}>
                                    <p className='skill-icon' >{skill.image}</p>
                                    <p className='skill-text'>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className='about-benjamin'>
                <h4 className='section-title'>Soft skills meet hard work</h4>
                <p className='text'>As a Front-End wed developer, I've acquired all the skills required to build responsive, scalable pages and apps for a variety of uses. As a person, I've lived a life of challenges and learned the meaning of hard work, dedication and sacrifice. Every hat I wore along the way, has made me who I am today.</p>
            </article>
            <article className='about-hobbies'>
                <h4 className="section-title">Other passions</h4>
                <div className='hobbies-wrapper'>
                    {
                        props.hobbies.map((hobby: { key: Key | null | undefined; icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                            <div className='hobby-wrapper' key={hobby.key}>
                                <p className="hobbies-emoji">{hobby.icon}</p>
                                <p className='hobbies-text'>{hobby.name}</p>
                            </div>
                        )
                    )}
                </div>
            </article>
        </animated.section>
    );
}