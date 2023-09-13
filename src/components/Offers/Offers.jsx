// import bannerImage from '../../assets/images/banner.webp';
import { Link } from 'react-router-dom';
import businnes from '../../assets/icons/business.svg';
import brandDesign from '../../assets/icons/Brand.svg';
import development from '../../assets/icons/development.svg';
import marketing from '../../assets/icons/marketing.svg';
import CoreAbout from '../pages/About/CoreAbout/CoreAbout';

const items = [
    {
        image: development,
        title: 'Website Design',
        description: 'Our New York City agency will create a website for your business that will combining a beautiful design and great user experience to drive more conversions for your leads.',
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Logo & Brand',
        description: 'Beautiful designs that make you proud. UI/UX design, Graphic design, Logo and Branding, Business card design and more.',
        link: '#'
    },
    {
        image: marketing,
        title: 'E-commerce Website',
        description: 'Our team has many years of experience on large scale E-commerce websites on the Vtex platform. Now we offer WordPress (WooCommerce) and Shopify websites. As always with beautiful UI/UX design.',
        link: '#'
    },
    {
        image: businnes,
        title: 'Web Application',
        description: 'We can build a custom web application system for your business so you can have more free time, more sales and higher profit margins.',
        link: '#'
    }
]

const Offers = () => {
    const renderTitleAndDescription = () => {
        const title = 'Developing online tools and websites that help your business to close more sales with a higher profit margin';
        const description = `We leverage digital marketing strategies to boost your sales, and our innovative design team creates impactful concepts. Moreover, our dedication to efficient development expands your profit margins, enhances customer satisfaction, and grants you more free time.`;

        return (
            <>
                <h1>{title}</h1>
                <p className='offers__description'>{description}</p>
            </>
        );
    };
    return (
        <section className='offers'>
            <div className='offers__title-content'>
                <span className='offers__line'></span>
                {renderTitleAndDescription()}
            </div>
       

            <div className='offers__column-right offers__home'>
                {
                    items?.map((item, index) => (
                        <div key={index} className='card'>
                            <div className='offers__img'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h2 className='title'>{item.title}</h2>
                            <p className='content'>{item.description}</p>
                            {/* <Link to={item.link}>Show more</Link> */}
                            <div className='MoreAbout'>
                                {/* <Link to={item.link}>Show more about {item.title}</Link> */}
                                <Link to={item.link}>More about </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='offers__link'>
                <Link to="/consulting">Free Consultation</Link>
            </div>
        </section>
    )
}

export default Offers;