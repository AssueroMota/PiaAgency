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
        title: 'Modern and Attractive Design',
        description: 'Imagine a website that greets visitors with a clean and intuitive layout, accompanied by captivating images that reflect the brand\'s identity. From the moment users access the page, they are drawn in by the harmonious color palette, elegant typography, and strategically placed calls to action.',
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Enhanced User Experience (UX)',
        description: 'Enhanced User Experience (UX) transcends aesthetics; its about tailoring an experience to match user needs. Imagine a website where every interaction feels intuitive, forms are effortless, and content is seamlessly accessible. Enhanced UX makes users feel understood, like a friendly guide leading them effortlessly. This fosters positivity and loyalty, as users gravitate toward convenient, comfortable experiences.',
        link: '#'
    },
    {
        image: development,
        title: 'Optimized Performance',
        description: 'A PIA excels in optimized performance. Imagine a website that seamlessly loads and engages users effortlessly, underscoring our commitment to user experience and search engine visibility. With a focus on efficient coding, image optimization, and streamlined functionality, we minimize bounce rates and drive conversions.',
        link: '#'
    },
    {
        image: marketing,
        title: 'E-Commerce Excellence',
        description: "A PIA is dedicated to achieving e-commerce excellence. Our focus is on crafting visually captivating and functionally seamless online stores that enhance customer experiences and drive conversions. With a commitment to tailored solutions, we empower businesses to thrive in the digital marketplace, solidifying their success and growth.",
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
                            <h1>Get the best dev on the market today with PIA </h1>
                            <p className='offers__description'>At PIA, we know that having a clean and effective web presence is crucial to standing out in today's competitive market. That's why we work tirelessly to create stunning and responsive websites that reflect your brand and showcase your message. Let PIA take your brand to the next level, one pixel at a time.</p>
                        </>
                    :
                        <>
                            <h1>Get the best dev on the market <br /> today with PIA </h1>
                            <p className='offers__description'>At PIA, we know that having a clean and effective web presence is crucial to standing out in today's competitive market. That's why we work tirelessly to create stunning and responsive websites that reflect your brand and showcase your message. Let PIA take your brand to the next level, one pixel at a time.</p>
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