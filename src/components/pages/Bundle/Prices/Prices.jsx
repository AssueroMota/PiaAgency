
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const cards = [

    {
        title: 'Bronze',
        description: 'Our in-house logo design experts at Pia, a premium logo design agency in Toronto will hand-craft your logo from scratch.',
        subtitle: 'Logo Package Details',
        technologies: [
            'Consultation',
            'Client Brainstorm',
            'Three Initial Logo Designs',
            'Preparing Multiple Colors',
            'Two Rounds of Revisions',
            'Finalization of Logo',
            'Files Provided: JPEG, PNG, Vector'
        ],
        price: '$1,500',
        plan: 'Bronze Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $3,400',
        itemTwoPrice: '5 Page Site $4,000',
        itemThreePrice: '10 Page Site $5,500',
        SubtitlePrice: '($300 per additional website page)'
    },
    {
        title: 'Silver',
        description: 'Our in-house logo design experts at Pia, a premium logo design agency in Toronto will hand-craft your logo from scratch.',
        subtitle: 'Logo Package Details',
        technologies: [
            'Consultation',
            'Client Brainstorm',
            'Research the Competition',
            'Five Initial Logo Designs',
            'Preparing Multiple Colors',
            'Composition Variations',
            'Three Rounds of Revisions',
            'Finalization of Logo',
            'Files Provided: JPEG, PNG, Vector'
        ],
        price: '$2,500',
        plan: 'Silver Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $3,400',
        itemTwoPrice: '5 Page Site $4,000',
        itemThreePrice: '10 Page Site $5,500',
        SubtitlePrice: '($300 per additional website page)'
    },
    {
        title: 'Gold',
        description: 'Our in-house logo design experts at Pia, a premium logo design agency in Toronto will hand-craft your logo from scratch.',
        subtitle: 'Logo & Style Guide Package',
        technologies: [
            'Consultation',
            'Client Brainstorm',
            'Research the Competition',
            'Ten Initial Logo Designs',
            'Preparing Multiple Colors',
            'Composition Variations',
            'Three Rounds of Revisions',
            'Vertical & Horizontal Logo Lockup',
            'Style Guide (Outlining Fonts, Colors, Etc)',
           'Files Provided: JPEG, PNG, Vector'
        ],
        price: '$5,000',
        plan: 'Gold Package',
        ForExample: 'For Example: ',
        itemOnePrice: '3 Page Site $3,400',
        itemTwoPrice: '5 Page Site $4,000',
        itemThreePrice: '10 Page Site $5,500',
        SubtitlePrice: '($300 per additional website page)'
    }
]

const Prices = () => {
    return (

        <section className="price">
            <div className="price__title">
                {
                    window.innerWidth < 1024 ?
                        <h2 className="price__content-title">Our Logo & Brand <br /> princing</h2>
                        :
                        <h2 className="price__content-title">Our Logo & Brand princing</h2>
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