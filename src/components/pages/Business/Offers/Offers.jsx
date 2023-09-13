// import bannerImage from '../../assets/images/banner.png';
import { Link } from 'react-router-dom';

import businnes from '../../../../assets/icons/business-marketing.svg';
import brandDesign from '../../../../assets/icons/brand-design-marketing.svg';
import development from '../../../../assets/icons/development-marketing.svg';
import marketing from '../../../../assets/icons/development-marketing.svg';

const items = [
    {
        image: businnes,
        title: 'Competitive Advantage',
        description: "With AgencyPia, we don't just develop web applications; we craft digital tools that propel your brand ahead of the competition. Our tailored solutions are strategically designed to position your business as a leader in the digital realm, ensuring that you stand out in an increasingly competitive market. By leveraging our expertise, you gain a strategic advantage that not only drives growth but also solidifies your position as an industry frontrunner.",
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Scalability',
        description: " The ability to grow without compromising performance is vital, particularly for companies with future expansion plans. we understand that your ambitions know no limits. Our web applications are built with scalability in mind, ensuring that as your business flourishes, your digital infrastructure effortlessly keeps pace.",
        link: '#'
    },
    {
        image: development,
        title: 'Cross-Device Compatibility',
        description: 'In a world where users access the internet from various platforms, guaranteeing that your web applications function seamlessly across different devices is paramount. AgencyPia ensures that your digital presence remains cohesive regardless of whether your customers are on desktops, tablets, or smartphones.',
        link: '#'
    },
    {
        image: marketing,
        title: 'Seamless User Experience',
        description: "A smooth user experience is the foundation upon which the acceptance and adoption of your web applications rest. we're dedicated to creating digital experiences that captivate and delight users. Our web applications are designed to not just meet user expectations, but to exceed them, fostering brand loyalty and driving conversions.",
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
                            <h1>Elevate Performance <br /> Through <br /> Optimized Web Design. </h1>
                            <p className='offers__description'>If you want to enhance your online presence and gain a competitive edge, our optimized website design is the solution. Let us assist you in creating a digital platform that not only looks incredible but also achieves tangible results. Get in touch with us today and discover how we can turn your vision into a website that truly shines in the digital world.</p>
                        </>
                    :
                        <>
                            <h1>Elevate Performance <br /> Through Optimized Web Design. </h1>
                            <p className='offers__description'>If you want to enhance your online presence and gain a competitive edge, our optimized website design is the solution. Let us assist you in creating a digital platform that not only looks incredible but also achieves tangible results. Get in touch with us today and discover how we can turn your vision into a website that truly shines in the digital world.</p>
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