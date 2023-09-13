import bannerImage from '../../../../assets/images/business/business-marketing.png';
import bannerImageDesktop from '../../../../assets/images/business/business-marketing.png';
import bannerImage2 from '../../../../assets/images/business/business-marketing-2.png';
import bannerImageDesktop2 from '../../../../assets/images/business/business-marketing-2.png';


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
                        <h2 className='marketing__content-title'>Gain a Competitive Edge with Cutting-Edge Web Applications</h2>
                        <p className='marketing__content-description'>Em the ever-evolving digital landscape, staying ahead demands innovation. Our web applications provide not just solutions, but a competitive edge that sets your business apart. By harnessing cutting-edge technology and strategic design, our solutions offer functionalities that competitors can't easily replicate. The result? A dynamic online presence that not only meets but exceeds user expectations, delivering exceptional value that resonates with your target audience.</p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Elevating User Engagement through Cross-Device Compatibility</h2>
                        <p className='marketing__content-description'>As your business evolves, so should your digital infrastructure. Our web applications are built with scalability at their core, ensuring that your solutions can expand in tandem with your growth trajectory. We understand that businesses need to cater to users on various devices. With our cross-device compatibility approach, your applications seamlessly adapt to desktops, tablets, and mobiles, enhancing user engagement and accessibility. This compatibility enhances user experience, driving adoption and ultimately contributing to your digital success.</p>
                        {/* <p className='marketing__content-description'> Hit responsible harvest eye to culture now feature opportunity. Move pain cross encourage no-brainer. Baked I functional nobody good users previous. Too one see masking base deep it's only.</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;