
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const cards = [

    { 
        title: 'Enterprise',
        description: 'We will build a web application system with the front and back end JS from scratch using a custom UI/UX project specific to your needs.',
        subtitle: 'Website Package Details',
        technologies: [

            'Different access levels',
            'Data Base',
            'Backend server',
            'Detail briefing of the project ',
            'Custom UI/UX project',
            'JS React Website from Scratch',
            'Contact Form',
            '2 Page Custom Mock-up',
            'Up to 20 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            '3 Rounds of Revisions',
            'Google Maps',
            'Contact Form',
            'Social Sharing',
            'Photo Sourcing',
            '404 Redirect',
            'XML Sitemap',
            'Google Analytics',
            '3 Rounds of Revisions'
        ],
        price: '$50,000 Plus',
        plan: 'Gold Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $3,400',
        itemTwoPrice: '5 Page Site $4,000',
        itemThreePrice: '10 Page Site $5,500',
        SubtitlePrice: '($300 per additional website page)'
    }
   
]

const Prices = () => {
    return(

        <section className="price">
            <div className="price__title">
                {
                    window.innerWidth < 1024 ?
                        <h2 className="price__content-title">Our Web Application <br/> princing</h2>
                    :
                        <h2 className="price__content-title">Our Web Application princing</h2>
                }
            </div>
            <div className="price__cards">
                {
                    cards?.map((card,index) => (
                        <div key={index} className="price__card">
                            <h3 className="price__card-main-title">{card.title}</h3>
                            <p className="price__card-small-description">{card.description}</p>
                            <h4 className="price__card-subtitle">{card.subtitle}</h4>
                            <ul className="price__card-list">
                                {
                                    card?.technologies?.map((c,index) => (
                                        <li key={index}>{c}</li>
                                    ))
                                }
                            </ul>
                            {/* <div className="price__card-item-1">
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
                            </div> */}
                            <div className="price__card-item-new">
                                <div className="price__card-price-1">
                                    <p className="price-1">{card.price}</p>
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