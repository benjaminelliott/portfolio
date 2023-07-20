export const About = () => {

    const text = "Junior web developer with two years experience working as a freelancer while studying UX/UI design, HTML5, CSS3 and Javascript libraries. I prefer to work in React or Vue.js, and I'm always looking to add to my skill set. Web development will be a new chapter in my career after 15 years in education and youth sports."

    return (
        <section id="about" className="about">
            <p className="about-text">{text}</p>
        </section>
    );
}