import { useSpring, animated } from '@react-spring/web'

export const Contact = () => {

  const springs = useSpring({
    from: { opacity: 0, scale: 0.1 },
    to: { opacity: 1, scale: 1 },
  })

  const contact = {
    first: "Benjamin",
    last: "Elliott",
    email: "benjamin.elliott.be@gmail.com",
    phone: "(973) 289-3674",
    gitHub: "https://github.com/benjaminelliott",
  };

  return (
    <animated.section id="contact" className="contact" style={{...springs}}>
        <h1>{contact.first}</h1>
        <h2>{contact.last}</h2>
        <a target="_blank" rel="noreferrer" href={contact.gitHub}>gitHub</a>
        <a target="_blank" rel="noreferrer" href={contact.email}>email</a>
        <a target="_blank" rel="noreferrer" href={contact.phone}>phone</a>
    </animated.section>
  );
}