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
        title: 'Visual Identity Importance',
        description: 'As a company specialized in branding, Agência Pia works hard to create visual identities that simply transcend the aesthetic aspect. Every visual element, from the unique logo to the precisely chosen colors, is strategically selected to express your brands core values ​​and intrinsic personality.',
        link: '#'
    },
    {
        image: brandDesign,
        title: 'Creation of specialized brands',
        description: 'Merging creativity and strategy, our team crafts more than just visual symbols – we forge emotional bonds. Each stroke, color, and form is meticulously chosen to swiftly narrate your brands story, culminating in a logo design that not only catches the eye but also captures hearts and minds, laying a sturdy foundation for your brands success.',
        link: '#'
    },
    {
        image: development,
        title: 'Mastering Color Psychology',
        description: 'Unlock the power of the psychology of colors with us. Dive into a world where every hue holds a purpose, where the right combination can evoke emotions, influence decisions, and etch memories. Our mastery of color psychology is your strategic advantage – a palette of persuasion that transforms your brand into an irresistible force.',
        link: '#'
    },
    {
        image: marketing,
        title: 'Credibility and Professionalism',
        description: 'Pia crafts a visual identity that exudes trust and professionalism. Our designs resonate authenticity, embodying your brands expertise. Elevate your reputation with Pia – where credibility becomes a promise fulfilled.',
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
                            <h1>Elevate Performance  <br /> Through Optimized Web Design.</h1>
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