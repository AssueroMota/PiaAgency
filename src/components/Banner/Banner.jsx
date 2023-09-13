import videoImageMobile from '../../assets/video/video-banner-pia.mov';
import videoImageDesktop from '../../assets/video/video-banner-pia.mov';
import { Link } from 'react-router-dom';

const Banner = () => {
    const bannerTitle = window.innerWidth < 1024 ? (
        <h1>
            Best Website Design
            <br /> in New York City with <br /> 
            a Beautiful UI/UX Design
        </h1>
    ) : (
        <h1>Best Website Design in New York City with a Beautiful UI/UX</h1>
    );

    const bannerDescription = window.innerWidth < 1024 ? (
        <p className='banner__description'>
            We offer website design, e-commerce websites, web applications development, logos and graphic design that help your business to <span className='banner__description_Red'>Close More Sales with A Higher Profit Margin</span>.
        </p>
    ) : (
        <p className='banner__description'>
            We offer website design, e-commerce websites, web applications development, logos and graphic design that help your business to <span className='banner__description_Red'>Close More Sales with A Higher Profit Margin</span>.
        </p>
    );
    const videoSource = window.innerWidth < 1024 ? videoImageMobile : videoImageDesktop;

    return (
        <section className='banner'>
            <div className='banner__column-right'>
                <video loop autoPlay muted preload='auto' playsInline>
                    <source src={videoSource} type='video/mp4'/>
                </video>
            </div>
            <div className='banner__column-left'>
                {bannerTitle}
                {bannerDescription}
                <br></br>
                <span className='banner__link'><Link to="/about">More about us</Link></span>
            </div>
        </section>
    )
}

export default Banner;