import icon1 from '../../../../assets/icons/core_values/icon-1.svg';
import icon2 from '../../../../assets/icons/core_values/icon-2.svg';
import icon3 from '../../../../assets/icons/core_values/icon-3.svg';


const cards = [
    {
        image: icon1,
        title: 'Integrity',
        content: "This is who we are. Determination is one of our main core values. Together we will destroy any challenges we can face to deliver your website, web application, e-commerce website, logo, or graphic design."
        // content: "Concentrating on our customers' requests first. We understand the value of providing high-quality service to our clients. We strive to obtain the best results possible by keeping our clients’ goals in mind and tailoring our services to their unique needs."
    },
    {
        image: icon2,
        title: 'Driven',
        // content: "We operate with strong moral principles that guide our decisions and actions. Integrity is the core of everything we do in BigApplePia. That’s why we only use the best technology and tools available to create the best possible products for our clients operating as one team, one soul."
        content: "This is who we are. We operate with strong moral principles that guide our decisions and actions. Integrity is the core of everything we do in Pia."
    },
    {
        image: icon3,
        title: 'Results',
        content: "We live by this rule. The best idea wins, and the result reviews the best idea. Concentrating on your business we focus on delivery websites and web applications that have a beautiful design and user experience. So, you can get more free time, spend less time in consultations and close more sales using very little time and effort."
    }
    // content: "Ready to face any negative situation we may encounter in the technological path of the industry. Through our progressive process we’ll conquer any seo challenges for our customers' benefit in the way."
]

const CoreAbout = () => {
    return (
        <section className="core__about">
            <div className='core__about-container'>
                <div className="core__about-row-1">
                    <h2 className="core__about-row-1-title">
                        {
                            window.innerWidth < 1024 ?
                                <span>Our Core values</span>
                                :
                                <span>Our Core values</span>
                        }
                    </h2>
                    <p className="core__about-row-1-content">In Pia we define excellency by practicing:</p>
                </div>

                <section className="core__about-cards">
                    {
                        cards?.map((card, id) => (
                            <div key={id} className="card">
                                <div className='card__icon-title'>
                                    {/* <span className='card__icon'><img src={card.image} alt="Icone" /></span> */}
                                    <p className="card__customer">{card.title}</p>
                                </div>
                                <div className="card__content">
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </section>
    )
}

export default CoreAbout;