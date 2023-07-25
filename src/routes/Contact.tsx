import { useSpring, animated } from '@react-spring/web'

export const Contact = () => {

  const springs = useSpring({
    from: { opacity: 0, scale: 0.1 },
    to: { opacity: 1, scale: 1 },
  })

  const contact = {
    name: "Benjamin Elliott",
    text: "Originally from London, UK, I currently live in New Jersey with my wife, toddler and cats. I look forward to hearing from you! 👊🏽",
    email: "",
    phone: "",
    discord: "",
    contacts: [
      {
        name: "email",
        link: "mailto:benjamin.elliott.be@gmail.com",
        icon: "email-svgrepo-com.svg"
      },
      {
        name: "phone",
        link: "tel:973-289-3674",
        icon: "phone-svgrepo-com.svg"
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/benjamin-elliott-163280280/",
        icon: "linkedin-svgrepo-com.svg"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/therealbenjaminelliott/",
        icon: "instagram-color-svgrepo-com.svg"
      }
    ]
  };

  return (
    <animated.section id="contact" className="contact" style={{...springs}}>
      <div className='contact-half'>
        <div>
          <h2 className='contact-title'>{contact.name}</h2>
        </div>
        <div>
        <div className='contact-links'>
          {contact.contacts.map(cont => (
            <div className='contact-line'>
              <a target="_blank" rel="noreferrer" href={cont.link} className="contact-link"><img src={cont.icon} alt={cont.name} className="contact-icon" /></a>
            </div>
          ))}
      </div>
        </div>
      </div>
      <div className='contact-half'>
        <p className="contact-text">{contact.text}</p>
      </div>
    </animated.section>
  );
}