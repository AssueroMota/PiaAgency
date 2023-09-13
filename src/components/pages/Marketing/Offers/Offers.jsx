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
        title: 'Elevating User Experience',
        description: 'our commitment is to create more than a simple website; we design online platforms that embrace visitors from the first click. Our expertise in intuitive design and responsive layout ensures that your customers can navigate with ease, finding what they need quickly and effectively. Each element is strategically placed to guide the user, crafted into an experience so enjoyable they will come back again and again.',
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Enlightening Purchase Decisions',
        description: 'At Pia, we leave no room for guesswork. When it comes to presenting your products, we are masters at conveying detailed and concise information. Our carefully crafted descriptions, accompanied by clear images, reveal all the details customers need to know. Your clientele will have the confidence to make informed purchasing decisions, increasing conversion and satisfaction.',
        link: '#'
    },
    {
        image: development,
        title: 'Unveiling Reality',
        description: "It's not just static images, it's an interactive experience. With innovative technologies, we allow customers to explore your products from all angles, giving them a tangible sense of what they're getting. Not only does this build customer confidence, but it also brings a unique dimension to your online store.",
        link: '#'
    },
    {
        image: marketing,
        title: 'Shaping Conscious Connections',
        description: 'At Pia, we believe that a brand is not just a business; it is a voice with social impact. We communicate your commitment to social responsibility and sustainability in an engaging way. We turn your efforts into moving stories that resonate with thoughtful customers, creating an authentic and lasting connection.',
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
                            <h1>Surpass your rivals and elevate your online presence <br /> with the Pia unrivaled e-commerce website expertise  <br /> ensuring you stand out in the digital realm. </h1>
                            <p className='offers__description'>Step into the spotlight with Pia e-commerce wizardry. Our experts sculpt captivating online stores that outshine the competition, propelling your brand to digital victory.</p>
                        </>
                    :
                        <>
                            <h1>Surpass your rivals and elevate your online presence <br /> with the Pia unrivaled e-commerce website expertise  <br /> ensuring you stand out in the digital realm. </h1>
                            <p className='offers__description'>Step into the spotlight with Pia e-commerce wizardry. Our experts sculpt captivating online stores that outshine the competition, propelling your brand to digital victory.</p>
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