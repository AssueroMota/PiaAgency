
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const cards = [
    {
        title: 'Bronze',
        description: 'We will create a WordPress website that matches your chosen sample templates, following our beautiful UI/UX design guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'UI/UX design',
            'WordPress Template',
            '1 Hour Brainstorm',
            'Customization of Theme',
            'Mobile Responsive',
            'Social Media Integration',
            'Google Maps',
            'Mailing List Plugin',
            'Contact Form',
            'Photo Sourcing',
            '2 Rounds of Revisions'
        ],
        price: '$2,500',
        plan: 'Bronze Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $3,400',
        itemTwoPrice: '5 Page Site $4,000',
        itemThreePrice: '10 Page Site $5,500',
        SubtitlePrice: '($300 per additional website page)',
    },
    {
        title: 'Silver',
        description: 'We will create a WordPress website that matches your chosen sample templates, following our beautiful UI/UX design guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'Customized WP Theme',
            '1 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            'Custom Icons',
            'Google Maps',
            'Mailing List Plugin',
            'Contact Form',
            'Photo Sourcing',
            'Google Analytics',
            'Social Sharing',
            '404 Redirect',
            'XML Sitemap',
            '3 Rounds of Revisions',

        ],
        price: '$5,000',
        plan: 'Silver Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $5,900',
        itemTwoPrice: '5 Page Site $6,500',
        itemThreePrice: '10 Page Site $8,000',
        SubtitlePrice: '($300 per additional website page)'
    },
    {
        title: 'Gold',
        description: 'We will build a JS React website from scratch using a custom UI/UX project specific to your needs.',
        subtitle: 'Website Package Details',
        technologies: [
            'Custom UI/UX project',
            'JS React Website from Scratch',
            '2 Page Custom Mock-up',
            'Up to 3 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            'Google Maps',
            'Contact Form',
            'Social Sharing',
            'Photo Sourcing',
            '404 Redirect',
            'XML Sitemap',
            'Google Analytics',
            '3 Rounds of Revisions'
        ],
        price: '$10,000',
        plan: 'Gold Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $10,900',
        itemTwoPrice: '5 Page Site $11,500',
        itemThreePrice: '10 Page Site $13,000',
        SubtitlePrice: '($300 per additional website page)'
    }

]

const Prices = () => {
    return (

        <section className="price">
            <div className="price__title">
                {
                    window.innerWidth < 1024 ?
                        <h2 className="price__content-title">Our Website Design <br /> princing</h2>
                        :
                        <h2 className="price__content-title">Our Website Design princing</h2>
                }
            </div>
            <div className="price__cards">
                {
                    cards?.map((card, index) => (
                        <div key={index} className="price__card">
                            <h3 className="price__card-main-title">{card.title}</h3>
                            <p className="price__card-small-description">{card.description}</p>
                            <h4 className="price__card-subtitle">{card.subtitle}</h4>
                            <ul className="price__card-list">
                                {
                                    card?.technologies?.map((c, index) => (
                                        <li key={index}>{c}</li>
                                    ))
                                }
                            </ul>
                            <div className="price__card-item-1">
                                <div className="price__card-price">
                                    <p className="price">{card.price}</p>
                                    <div className="price-details">
                                        <p className="ForExample">{card.ForExample}</p>
                                        <p className="itemOnePrice">{card.itemOnePrice}</p>
                                        <p className="SubtitlePrice">{card.SubtitlePrice}</p>
                                        <p className="itemTwoPrice">{card.itemTwoPrice}</p>
                                        <p className="SubtitlePrice">{card.SubtitlePrice}</p>
                                        <p className="itemThreePrice">{card.itemThreePrice}</p>
                                        <p className="SubtitlePrice">{card.SubtitlePrice}</p>
                                    </div>
                                </div>
                                <small className="tag">{card.plan}</small>
                            </div>
                            <div className="price__card-item-2">
                                <Link to="tel:19177892469">Contact Us</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Prices;