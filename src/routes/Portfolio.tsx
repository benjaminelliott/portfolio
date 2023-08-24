import { useSpring, animated } from '@react-spring/web'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, To } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Portfolio = (props: any) => {

    const springs = useSpring({
        from: { opacity: 0, scale: 0.75 },
        to: { opacity: 1, scale: 1 },
    })

    return (
        <animated.section id="portfolio" className="portfolio" style={{...springs}}>
            <article className="portfolio-section">
                <h4 className='section-title'>Certifications</h4>
                <Carousel
                    className='certs'
                    showThumbs={false}
                    infiniteLoop={false}
                    renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                            <button className={ hasPrev ? "carousel-button" : "carousel-button-hidden" } onClick={clickHandler}>👈🏽</button>
                        )
                    }}
                    renderArrowNext={(clickHandler, hasNext) => {
                        return (
                            <button className={ hasNext ? "carousel-button" : "carousel-button-hidden" } onClick={clickHandler}>👉🏽</button>
                        )
                    }}
                    renderIndicator={(clickHandler, isSelected, index) => {
                        return (
                                    <li
                                        key={index}
                                        className={ isSelected ? "selected-dot control-dot" : "control-dot"}
                                        onClick={clickHandler}
                                    >
                                        <button className='control-dot-button'>{isSelected ? "⚪" : "⚫"}</button>
                                    </li>
                        )
                    }}
                >
                    {
                        props.certifications.map((cert: any) => (
                            <div key={cert.key} className='cert'>
                                <Link to={cert.link} target="_blank" rel="noopener noreferrer" className='cert-link'><LazyLoadImage src={cert.image} className='cert-image'/></Link>
                            </div>
                        ))
                    }
                </Carousel>
            </article>
            <article className="portfolio-section">
                <h4 className='section-title'>Projects</h4>
                {   props.projects.map((site: any) => (
                        <div key={site.key} className='site'>
                            <div className='site-images'>
                                <div className='site-links'>
                                    <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><img className="site-logo" src={site.logo} alt={site.name}/></Link>
                                    <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><h3 className='site-name'>{site.name}</h3></Link>
                                </div>
                                <Link to={site.link} target="_blank" rel="noopener noreferrer" className='site-link'><LazyLoadImage className="site-image" src={site.image} alt={site.name} /></Link>
                            </div>
                            <p className='text'>{site.description}</p>
                        </div>
                    ))
                }
            </article>
        </animated.section>
    );
}