import { useSpring, animated } from '@react-spring/web'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

export const About = (props: any) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

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
            <article className='about-history'>
            <h2 className='section-title'>From coaching...</h2>
                <div className="about-coaching">
                    <div className='coaching-image'>
                        <LazyLoadImage src={props.coachingImage} className="hero-image" alt="Ben & Colby" />
                    </div>
                    <div className='coaching-skills'>
                        {
                            props.coachingSkills.map((skill: {
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
                </div>
                <h2 className='section-title'>...to coding.</h2>
                <div className="about-coding">
                <div className='coaching-skills'>
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
                    <div className='coding-image'>
                        <LazyLoadImage src={props.codingImage} className="hero-image" alt="Ben & Colby" />
                    </div>
                </div>
                <div className='about-benjamin'>
                    <h2 className='section-title'>Soft skills meet hard work</h2>
                    <p>As a Front-End wed developer, I've acquired all the skills required to build responsive, scalable pages and apps for a variety of uses. As a person, I've lived a life of challenges and learned the meaning of hard work, dedication and sacrifice. Every hat I wore along the way, has made me who I am today.</p>
                </div>
            
            <div className='about-hobbies'>
                <h2 className="section-title">Hobbies</h2>
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
            </div>
            </article>
        </animated.section>
    );
}