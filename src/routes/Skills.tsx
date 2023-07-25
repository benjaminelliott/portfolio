import { useSpring, animated } from '@react-spring/web'

export const Skills = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const social = [
        { name: "Working remotely", image: "🧑🏽‍💻️" },
        { name: "Attention to detail", image: "🔎" },
        { name: "Problem solving", image: "🎓" },
        { name: "Self-learning", image: "🧑🏽‍🎓️" },
        { name: "Communication", image: "💬" },
        { name: "Teamwork", image: "🤝🏽" },
        { name: "Leadership", image: "🧑🏽‍💼️" }
  ]

    const technical = [
      { name: "HTML5", image: "logos/html5.svg", link: "https://html.spec.whatwg.org/" },
      { name: "CSS3", image: "logos/css3.svg", link: "https://www.w3.org/TR/CSS/#css" },
      { name: "JS ES6", image: "logos/js.svg", link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" },
      { name: "React.JS", image: "logos/react.svg", link: "https://react.dev/" },
      { name: "Vue.JS", image: "logos/vue.svg", link: "https://vuejs.org/" },
      { name: "VSCode", image: "logos/vscode.svg", link: "https://code.visualstudio.com/" },
      { name: "gitHub", image: "logos/github.svg", link: "https://github.com/benjaminelliott" },
      { name: "Figma", image: "logos/figma.svg", link: "https://www.figma.com" }
    ]

    return (
      <animated.section id="about" className="skills" style={{ ...springs }}>
        <article className="skills-content">
          <div className='skills-half'>
          <h2 className='skill-title'>Social</h2>
            <div className="social-skills">
              {social.map((skill) => (
                <div className='skills-wrapper'>
                  <p className='skill-emoji'>{skill.image}</p>
                  <p className='skill-text'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='skills-half'>
          <h2 className='skill-title'>Technical</h2>
            <div className="technical-skills">
              {technical.map((skill) => (
                <div className='skills-wrapper'>
                  <a href={skill.link} target='_blank' rel="noreferrer"><img className='skill-image' src={skill.image} alt="skill-image"/></a>
                  <p className='skill-text'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </animated.section>
    );
}