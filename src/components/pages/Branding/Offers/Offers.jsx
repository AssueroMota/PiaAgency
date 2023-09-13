// import bannerImage from '../../assets/images/banner.png';
import { Link } from 'react-router-dom';

// import businnes from '../../../assets/icons/businnes-marketing.svg';
// import brandDesign from '../../../assets/icons/brand-design-marketing.svg';
// import development from '../../../assets/icons/development-marketing.svg';
// import marketing from '../../../assets/icons/marketing-marketing.svg';

import businnes from '../../../../assets/icons/business-marketing.svg';
import brandDesign from '../../../../assets/icons/brand-design-marketing.svg';
import development from '../../../../assets/icons/development-marketing.svg';
import marketing from '../../../../assets/icons/development-marketing.svg';

const items = [
    {
        image: businnes,
        title: 'Graphic Design Trends',
        description: "Your company deserves cutting-edge design. At PIA, we embrace the latest trends to elevate your visual identity and make you stand out.",
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Typography and Readability',
        description: "Clarity is paramount. At PIA, we meticulously choose typography to ensure your message is easily understood, reinforcing your company's unique identity.",
        link: '#'
    },
    {
        image: development,
        title: 'Turning Ideas into Images',
        description: "Bring your ideas to life. Through creative collaboration, PIA transforms your visions into impactful designs, while preserving the original essence.",
        link: '#'
    },
    {
        image: marketing,
        title: 'The Art of Visual Communication',
        description: "Visual communication is an art we excel in. PIA strategically blends visual elements to tell your company's story in a visually appealing manner, forging a direct connection with your target audience.",
        link: '#'
    }
]

const Offers = () => {
    return (
        <section className='offers__template'>
            <div className='offers__title-content'>
                {
                    window.innerWidth < 1024 ? 
                        <>
                            <h1>Secure top-tier development services in the market today with PIA Solutions.</h1>
                            <p className='offers__description'>At PIA, we know that having a clean and effective web presence is crucial to standing out in today's competitive market. That's why we work tirelessly to create stunning and responsive websites that reflect your brand and showcase your message. But we don't stop at web design - we specialize in all aspects of brand design, from creative logos to digital graphics. Let PIA take your brand to the next level, one pixel at a time.</p>
                        </>
                    :
                        <>
                            <h1>Secure top-tier development services in the <br /> market today with PIA Solutions.</h1>
                            <p className='offers__description'>At PIA, we know that having a clean and effective web presence is crucial to standing out in today's competitive market. That's why we work tirelessly to create stunning and responsive websites that reflect your brand and showcase your message. But we don't stop at web design - we specialize in all aspects of brand design, from creative logos to digital graphics. Let PIA take your brand to the next level, one pixel at a time.</p>
                        </>
                }
                
            </div>
            <div className='offers__column-right'>
                {
                    items?.map((item,index) => (
                        <div key={index} className='card'>
                            <h2 className='title'>{item.title}</h2>
                            <p className='content'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='offers__link'>
                <Link to="/">Free Consultation</Link>
            </div>
        </section>
    )
}

export default Offers;