import bannerImage from '../../../../assets/images/marketing/marketing-mobile.png';
import bannerImageDesktop from '../../../../assets/images/marketing/marketing-desktop.png';
import bannerImage2 from '../../../../assets/images/marketing/marketing-mobile-2.png';
import bannerImageDesktop2 from '../../../../assets/images/marketing/marketing-desktop-2.png';


// import bannerImage from '../../../assets/images/'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='marketing'>
            <div className='marketing__container'>
                <div className='marketing__container-child-1'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Crafting E-commerce Excellence in NYC with Pia </h2>
                        <p className='marketing__content-description'>At PiaAgency, we are committed to creating e-commerce sites that transcend expectations. Our approach starts with creating a welcoming and intuitive environment for visitors, where navigation is fluid and pleasant. In addition, we delve into personalization, shaping every aspect of the site to perfectly align with the brand's identity and values. We understand that every customer's shopping experience is unique, which is why we've built in personalization features, from product recommendations to exclusive offers, ensuring every visit is a bespoke journey.</p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>PiaAgency's Transparent, Interactive, and Sustainable Approach</h2>
                        <p className='marketing__content-description'>Transparency is key. We create e-commerce websites with clear and engaging product information. Detailed descriptions are accompanied by interactive images, allowing customers to explore products in detail. Our interactive product visuals bring an experience close to reality. In addition, we proudly integrate social responsibility and sustainability, highlighting ethical and ecological practices. This not only attracts conscious customers, but also strengthens the brand's commitment to a better world.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;