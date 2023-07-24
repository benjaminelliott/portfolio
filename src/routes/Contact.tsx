import { useSpring, animated } from '@react-spring/web'

export const Contact = () => {

  const springs = useSpring({
    from: { opacity: 0, scale: 0.1 },
    to: { opacity: 1, scale: 1 },
  })

  const contact = {
    name: "Benjamin Elliott",
    text: "Originally from London, UK, I currently live in New Jersey with my wife, toddler and cats. You can reach me by email or phone to discuss any projects or job opportunities. I look forward to hearing from you!",
    email: "benjamin.elliott.be@gmail.com",
    phone: "(973) 289-3674",
    discord: "discordapp.com/users/belli#8101"
  };

  return (
    <animated.section id="contact" className="contact" style={{...springs}}>
      <article className="contact-half">
        <h2 className='contact-title'>{contact.name}</h2>
        <div className='contact-line'>
          <img src="email-8-svgrepo-com.svg" alt="email" className="contact-icon" /><a target="_blank" rel="noreferrer" href={contact.email} className="contact-link">{contact.email}</a>
        </div>
        <div className='contact-line'>
          <img src="phone-svgrepo-com.svg" alt="phone" className="contact-icon" /><a target="_blank" rel="noreferrer" href={contact.phone} className="contact-link">{contact.phone}</a>
        </div>
        <div className='contact-line'>
          <img src="discord-svgrepo-com.svg" alt="discord" className="contact-icon" /><a target="_blank" rel="noreferrer" href={contact.discord} className="contact-link">belli#8101</a>
        </div>
      </article>
      <article className="contact-half">
        <p className="contact-text">{contact.text}</p>
      </article>
    </animated.section>
  );
}