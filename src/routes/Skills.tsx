import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'

export const Skills = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const social = [
        {
          key: 0,
          name: "Working remotely",
          image: "🧑🏽‍💻️"
        },
        {
          key: 1,
          name: "Attention to detail",
          image: "🔎"
        },
        {
          key: 2,
          name: "Problem solving",
          image: "🎓"
        },
        {
          key: 3,
          name: "Self-learning",
          image: "🧑🏽‍🎓️"
        },
        {
          key: 4,
          name: "Communication",
          image: "💬"
        },
        {
          key: 5,
          name: "Teamwork",
          image: "🤝🏽"
        },
        {
          key: 6,
          name: "Leadership",
          image: "🧑🏽‍💼️"
        }
  ]

    const technical = [
      {
        key: 0,
        name: "HTML5",
        image: "logos/html5.svg",
        link: "https://html.spec.whatwg.org/"
      },
      {
        key: 1,
        name: "CSS3",
        image: "logos/css3.svg",
        link: "https://www.w3.org/TR/CSS/#css"
      },
      {
        key: 2,
        name: "JS ES6",
        image: "logos/js.svg",
        link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
      },
      {
        key: 3,
        name: "React.JS",
        image: "logos/react.svg",
        link: "https://react.dev/"
      },
      {
        key: 4,
        name: "Vue.JS",
        image: "logos/vue.svg",
        link: "https://vuejs.org/"
      },
      {
        key: 5,
        name: "Typescript",
        image: "logos/typescript.svg",
        link: "https://vuejs.org/"
      },
      {
        key: 6,
        name: "VSCode",
        image: "logos/vscode.svg",
        link: "https://code.visualstudio.com/"
      },
      {
        key: 7,
        name: "gitHub",
        image: "logos/github.svg",
        link: "https://github.com/benjaminelliott"
      },
      {
        key: 8,
        name: "Figma",
        image: "logos/figma.svg",
        link: "https://www.figma.com"
      }
    ]

    return (
      <animated.section id="about" className="skills" style={{ ...springs }}>
        <article className="skills-content">
          <div className='skills-half'>
            <h2 className='skill-title'>Social</h2>
            <div className="social-skills">
              {
                social.map((skill) => (
                  <div key={skill.key} className='skills-wrapper'>
                    <p className='skill-emoji'>{skill.image}</p>
                    <p className='skill-text'>{skill.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='skills-half'>
            <h2 className='skill-title'>Technical</h2>
            <div className="technical-skills">
              {
                technical.map((skill) => (
                  <div key={skill.key} className='skills-wrapper'>
                    <Link to={skill.link} target='_blank' rel="noreferrer"><img className='skill-image' src={skill.image} alt="skill"/></Link>
                    <p className='skill-text'>{skill.name}</p>
                </div>
                ))
              }
            </div>
          </div>
        </article>
      </animated.section>
    );
}