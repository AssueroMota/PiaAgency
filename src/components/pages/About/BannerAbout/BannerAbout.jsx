import BannerAboutImageMobile from '../../../../assets/images/about/video-mobile.png';
import BannerAboutImageDesktop from '../../../../assets/images/about/video-desktop.png';
import BannerAboutVideo from '../../../../assets/images/about/video-ricardo.jpeg';
import BannerRicardo from '../../../../assets/images/about/RicardoJ.jpeg';
import { initLightboxJS } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const BannerAbout = () => {
    return (
        <section className="banner__about">

            <div className="banner__about-row-1">
                <h1 className="banner__about-title">We are <br /><span className="banner__about-text-muted-styled"> Pia Solutions</span></h1>
            </div>
            <div className="banner__about-row-2">
                <div className="banner__about-row-2-container">
                    <div className="banner__about-row-2-content-1">
                        <h4>Digital Success in New York</h4>
                        <p>Our agency is a digital brand with multicultural staff that has been working over a decade in the digital industry. Located in the seo city of the world, we offer the most innovative service tools for uniqueness results for the community in New York City.</p>
                    </div>
                    <div className="banner__about-row-2-content-2">
                        <h5>The greatest digital partner</h5>
                        <p>I’m open every day of the week, I interact with many groups of communities. I create and redesign work for excellency. I’ll get to know many interesting people. I’m your digital innovative brand. And my name is <span className="banner__about-row-2-content-2-styled"> Pia.</span></p>
                    </div>
                    <div className="banner__about-row-2-content-3">
                        <h5>Philosophy</h5>
                        <p><span className="banner__about-row-2-content-3-styled"> Pia</span> focuses on creating a strong digital presence for our clients to help them achieve a lasting impact on their community. We understand the importance of providing a service that not only showcases our clients' expertise but also instills a sense of trust and authority in their online audience. Our team is dedicated to staying up-to-date on the latest trends and developments in the digital market to ensure that our clients receive the highest quality services and support.</p>
                    </div>
                </div>
                <div className='banner__about-row-2-image'>
                    {/* <SlideshowLightbox> */}
                    <Zoom
                        className="zoom"
                        style={{
                            backgroundColor: '#101820',
                            backgroundPosition: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '0',
                            paddingBottom: '56%',
                            width: '100%',
                        }}>
                        <img src={window.innerWidth < 1024 ? BannerAboutVideo : BannerAboutVideo} alt="" />
                    </Zoom>
                    {/* </SlideshowLightbox> */}
                </div>
            </div>

            {/* FotoRicardoInTimeSqare */}
            <div className="banner__about-row-3">
                <div className='banner__about-row-3-image'>
                    {/* <SlideshowLightbox> */}
                    <Zoom>
                        <img src={window.innerWidth < 1024 ? BannerRicardo : BannerRicardo} alt="" />
                    </Zoom>
                    {/* </SlideshowLightbox> */}
                </div>
                <div className="banner__about-row-3-container">
                    <div className="banner__about-row-3-content-1">
                        <h4>A Journey of Dreams and Success</h4>
                        <br></br>
                        <p>Labor Day, September 6, 1999. It was the day that I arrived at JFK airport. I fell in love with New York City.
                            I was only 16 years old and did not speak English. In the airport nobody picked me up. Like many immigrants before me I was driven to achieve the American dream.
                            With more than 17 years in the technology industries working in four top 500 companies I got together with a great team of programmers and designers to create <span className='banner__about-row-Red'>Pia. </span>
                        </p>
                    </div>

                    <div className="banner__about-row-3-content-3">
                        <h5>Philosophy Pia</h5>
                        <p>Our goal is to get together with customers and team members that have <span className='banner__about-row-Red'>Integrity, </span> that are <span className='banner__about-row-Red'>Driven, </span> and that focus on <span className='banner__about-row-Red'>Results, </span> because this is who we are. If you want top of line website design, logo, graphic design and web applications for a fair price you found your guys already.</p>
                    </div>
                    <div className="banner__about-row-3-content-2">
                        {/* <h5>Logo & Brand</h5> */}
                        {/* <p>If you want top of line website design, logo, graphic design and web applications for a fair price you found your guys already.<span className="banner__about-row-2-content-2-styled">Big Apple Pia.</span></p> */}
                    </div>
                    <div className="banner__about-row-3-content-2">
                        {/* <h5>The greatest digital partner</h5> */}
                        {/* <p>If you want top of line website design, logo, graphic design and web applications for a fair price you found your guys already.<span className="banner__about-row-2-content-2-styled">Big Apple Pia.</span></p> */}
                    </div>
                    <div className="banner__about-row-3-content-2">
                        {/* <h5>The greatest digital partner</h5> */}
                        {/* <p>If you want top of line website design, logo, graphic design and web applications for a fair price you found your guys already.<span className="banner__about-row-2-content-2-styled">Big Apple Pia.</span></p> */}
                    </div>
                </div>
            </div>

        </section >
    )
}

export default BannerAbout;