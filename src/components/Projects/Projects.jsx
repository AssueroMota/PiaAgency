import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeldenInk from '../../assets/images/images_home/print-selden.webp';
import MyInk from '../../assets/images/images_home/print-ink.webp';
import Harrison from '../../assets/images/images_home/print-harrison.webp/';
import { Link } from "react-router-dom";

const cards = [
    {
        title: 'Selden Ink',
        description: 'Agency has crafted a remarkable website for Selden Ink Tattoo Studio, seamlessly blending the studio distinct style with practical features like online scheduling and an artist blog. The interactive gallery authentically showcases tattoo art, solidifying the studio position as an industry leader.',
        link: 'Show more',
        image: SeldenInk,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ],
        linkW: 'https://seldenink.vercel.app/'
    },
    {
        title: 'Harrison',
        description: 'The website developed by HR Harrison Imobiliária reflects its unique approach to the real estate sector, combining an attractive design with practical features that facilitate the search and selection of properties. In addition, the online platform offers features for scheduling visits and relevant information about the real estate market, providing customers with a simplified and informative experience.',
        link: 'Show more',
        image: Harrison,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ],
        linkW: 'https://www.harrisonrealtynj.com/'
    },
    {
        title: 'MyInk',
        description: 'MyInk tattoo parlor stands out for its website that balances its distinctive style with practical features like online booking and an informative blog. Its authentic interactive gallery showcases tattoo artistry, strengthening its position as an industry leader. The studio unites creativity and convenience, offering customers a unique experience that goes beyond tattooing, while sharing insights and stories through its artist blog, thus consolidating its online presence and authority in the field of tattooing.',
        link: 'Show more',
        image: MyInk,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ],
        linkW: 'https://www.myinktattoo.com/'
    }
]

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // swipeToSlide: true,
    prevArrow: <button className="custom-prev-arrow">Previous</button>,
    nextArrow: <button className="custom-next-arrow">Next</button>,
    appendDots: dots => <ul className="custom-dots">{dots}</ul>,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                adaptiveHeight: true,
                infinite: true
            }
        }
    ]
};

const Projects = () => {
    return (

        <section className="dynamic">
            <div className="dynamic__content">
                <h2 className="dynamic__content-title">Featured Projects</h2>
            </div>
            <Slider {...settings}>
                {
                    cards?.map((card, index) => (
                        <div key={index} className="slide-item">
                            <div className="slide-item_img">

                                <Link to={card.linkW} target="_blank">
                                    
                                        <img src={card.image} alt="Work banner" />
                                    
                                </Link>

                            </div>

                            <div className="dynamic-slide-content">
                                {/* <ul className="dynamic__list">
                                    {
                                        card?.technologies?.map((tech, index) => (
                                            <li key={index} style={{ background: tech.color }}>{tech.tag}</li>
                                        ))
                                    }
                                </ul> */}
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <span className="dynamic__slide-link-custom">
                                    <Link to={card.linkW} target="_blank">{card.link}</Link>
                                    {/* <Link>Show more</Link> */}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className="dynamic__mobile-app">
                <h3 className="dynamic__mobile-app-title">Mobile App</h3>
            </div>
        </section >
    )
}

export default Projects;