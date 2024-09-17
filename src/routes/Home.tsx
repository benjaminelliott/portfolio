import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Home = ({
  frontEnd,
  backEnd,
  tools,
  learning,
  image,
  name,
}: {
  frontEnd?: {
    image: string;
    key: number;
    name: string;
    link: string;
  }[];
  backEnd?: {
    image: string;
    key: number;
    name: string;
    link: string;
  }[];
  tools?: {
    image: string;
    key: number;
    name: string;
    link: string;
  }[];
  learning?: {
    image: string;
    key: number;
    name: string;
    link: string;
  }[];
  image?: string;
  name?: string;
}) => {
  const springs = useSpring({
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
  });

  return (
    <animated.section id="home" className="home" style={{ ...springs }}>
      <article className="home-upper">
        <div className="home-title-wrapper">
          <h2 className="home-title">
            <strong className="home-title-strong">Hey, I'm </strong>
            <span className=" home-title-name">Benjamin 👋🏽</span>
          </h2>
          <h2 className="home-title">
            <strong className="home-title-strong">Full-stack </strong>
            web developer
          </h2>
          <h2 className="home-title">
            <strong className="home-title-strong">Ironhack </strong>TA 🚀
          </h2>
        </div>
        <img className="hero-image" src={image} alt="whoops" />
      </article>
      <article className="home-lower">
        <div className="tech-stack">
          <h4 className="section-title">Front end</h4>
          <div className="tech-logos">
            {frontEnd &&
              frontEnd.map((tech) => (
                <Link
                  to={tech.link}
                  target="_blank"
                  rel="noreferrer"
                  key={tech.key}
                >
                  <LazyLoadImage
                    className="tech-stack-logo"
                    src={tech.image}
                    alt={tech.name}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="tech-stack">
          <h4 className="section-title">Back end</h4>
          <div className="tech-logos">
            {backEnd &&
              backEnd.map((tech) => (
                <Link
                  to={tech.link}
                  target="_blank"
                  rel="noreferrer"
                  key={tech.key}
                >
                  <LazyLoadImage
                    className="tech-stack-logo"
                    src={tech.image}
                    alt={tech.name}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="tech-stack-combined">
          <div className="tech-stack">
            <h4 className="section-title">Tools</h4>
            <div className="tech-logos">
              {tools &&
                tools.map((tech) => (
                  <Link
                    to={tech.link}
                    target="_blank"
                    rel="noreferrer"
                    key={tech.key}
                  >
                    <LazyLoadImage
                      className="tech-stack-logo"
                      src={tech.image}
                      alt={tech.name}
                    />
                  </Link>
                ))}
            </div>
          </div>
          <div className="tech-stack">
            <h4 className="section-title">Learning</h4>
            <div className="tech-logos">
              {learning &&
                learning.map((tech) => (
                  <Link
                    to={tech.link}
                    target="_blank"
                    rel="noreferrer"
                    key={tech.key}
                  >
                    <LazyLoadImage
                      className="tech-stack-logo"
                      src={tech.image}
                      alt={tech.name}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </animated.section>
  );
};
