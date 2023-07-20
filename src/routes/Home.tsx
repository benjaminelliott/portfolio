import { Link } from "react-router-dom";

export const Home = () => {

    const Benjamin = [
        {
            title: "Junior web developer with a passion for making cool pages",
            image: "benjamin.jpg",
            call: "Let me build something dynamic and responsive for you, today!"
        }
    ]

    return (
        <section id="home" className="home">
            {
                Benjamin.map(b => (
                    <article>
                        <h2 className="home-title">{b.title}</h2>
                        <img className="home-hero" src={b.image} alt="whoops" />
                        <Link className="home-call-link" to="contact"><h3 className="home-call">{b.call}</h3></Link>
                    </article>
                ))
            }
        </section>
    );
}