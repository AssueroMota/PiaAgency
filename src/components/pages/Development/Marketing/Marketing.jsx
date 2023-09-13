import bannerImage from '../../../../assets/images/development/banner-development-1.png';
import bannerImageDesktop from '../../../../assets/images/development/banner-development-1.png';
import bannerImage2 from '../../../../assets/images/development/banner-development-2.png';
import bannerImageDesktop2 from '../../../../assets/images/development/banner-development-2.png';



const Banner = () => {
    return (
        <section className='marketing'>
            <div className='marketing__container'>
                <div className='marketing__container-child-1'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Our New York City Agency will Do the Best Website Design for Your Business!</h2>
                        <br></br>
                        <p className='marketing__content-description'> The PIA is a leader in website design that stands out not only for aesthetics but also for user experience (UX). Our designs are crafted to captivate visitors from the first click, offering engaging and user-friendly navigation. We believe that a well-designed website should not only be visually appealing but also provide a seamless journey for users, ensuring a pleasant stay and increasing the chances of successful conversions. By focusing on delivering an exceptional user experience, our website design is an effective tool for driving sales.
                        </p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Empowering Businesses with Expert Web Design, E-commerce, and Digital Solutions</h2>
                        <p className='marketing__content-description'> <br /> <br /> Our approach to web design seamlessly integrates captivating aesthetics with intuitive UX functionality, tailored to elevate e-commerce ventures. Our websites not only leave a lasting imprint but also foster tangible results within the e-commerce landscape. we ensure every visit translates into a meaningful e-commerce interaction. By optimizing the user journey, our commitment is to empower clients to achieve their e-commerce goals effectively, harnessing the power of a thoughtfully designed website .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;