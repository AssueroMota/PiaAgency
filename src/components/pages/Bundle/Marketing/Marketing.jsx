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
                        <h2 className='marketing__content-title'> Elevate your brand's unique awareness </h2>
                        <br></br>
                        <p className='marketing__content-description'> Pia expertise in understanding the Importance of Visual Identity transforms mere brands into captivating narratives. We create designs that convey reliability and competence. This commitment is reinforced by our mastery of color psychology, where each shade is carefully chosen to evoke emotions and influence perceptions. With Pia, your brand becomes a canvas for these strategic elements, resulting in an identity that not only catches the eye but also establishes a solid foundation of authenticity in the competitive market.</p>
                        {/* <p className='marketing__content-description'> Hit responsible harvest eye to culture now feature opportunity. Move pain cross encourage no-brainer. Baked I functional nobody good users previous. Too one see masking base deep it's only.</p> */}
                        <br></br>
                        <span className='marketing__content-link'><Link to="#">Free Consultant</Link></span>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Creating brands with Pia </h2>
                        <br></br>
                        <p className='marketing__content-description'>Pia goes beyond mere design; our emphasis lies in crafting narratives that resonate profoundly and wield influence. We tirelessly strive to ensure that each brand's distinctive identity evolves into a high-impact asset, capable of instilling confidence and nurturing recognition within the dynamic and ever-evolving business landscape of today.</p>
                        {/* <p className='marketing__content-description'> Hit responsible harvest eye to culture now feature opportunity. Move pain cross encourage no-brainer. Baked I functional nobody good users previous. Too one see masking base deep it's only.</p> */}
                        <br></br>
                        <span className='marketing__content-link'><Link to="#">Free Consultant</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;