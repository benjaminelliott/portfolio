import { useSpring, animated } from '@react-spring/web'
import ProgressBar from "@ramonak/react-progress-bar";

export const Skills = () => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.1 },
        to: { opacity: 1, scale: 1 },
    })

    const skills = [
        { name: "Communication", level: 10 }, { name: "Working remotely", level: 10 }, { name: "Teamwork", level: 10 },
        { name: "Attention to detail", level: 9 }, { name: "Problem solving", level: 9 }, { name: "Self-learning", level: 9 },
        { name: "HTML5", level: 8 }, { name: "CSS3", level: 8 }, { name: "JS ES6", level: 8 },
        { name: "React.JS", level: 6 }, { name: "Vue.JS", level: 6 }, { name: "gitHub", level: 6 }
    ]

    return (
      <animated.section id="about" className="skills" style={{ ...springs }}>
        <article className="content-grid skills-grid">
          {skills.map((skill) => (
            <ProgressBar
              className="progress-bar"
              completed={skill.level}
              customLabel={skill.name}
              maxCompleted={10}
              bgColor="#D8715A"
              labelAlignment='left'
              borderRadius='50px'
            />
          ))}
        </article>
      </animated.section>
    );
}