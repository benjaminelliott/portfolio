export const Contact = () => {

  const contact = {
    first: "Benjamin",
    last: "Elliott",
    email: "benjamin.elliott.be@gmail.com",
    phone: "(973) 289-3674",
    gitHub: "https://github.com/benjaminelliott",
  };

  return (
    <section id="contact" className="contact">
        <h1>{contact.first}</h1>
        <h2>{contact.last}</h2>
        <a target="_blank" href={contact.gitHub}>gitHub</a>
        <a target="_blank" href={contact.email}>email</a>
        <a target="_blank" href={contact.phone}>phone</a>
    </section>
  );
}