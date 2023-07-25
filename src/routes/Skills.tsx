import { useSpring, animated } from '@react-spring/web'
import ProgressBar from "@ramonak/react-progress-bar";

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
      { name: "HTML5", image: "html-5-svgrepo-com.svg" },
      { name: "CSS3", image: "css-3-svgrepo-com.svg" },
      { name: "JS ES6", image: "js-svgrepo-com.svg" },
      { name: "React.JS", image: "react-svgrepo-com.svg" },
      { name: "Vue.JS", image: "vue-svgrepo-com.svg" },
      { name: "VSCode", image: "vscode-svgrepo-com.svg" },
      { name: "gitHub", image: "github-142-svgrepo-com.svg" },
      { name: "Figma", image: "figma-svgrepo-com.svg" }
    ]

    return (
      <animated.section id="about" className="skills" style={{ ...springs }}>
        <article className="content">
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
                  <img className='skill-image' src={skill.image}/>
                  <p className='skill-text'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </animated.section>
    );
}