
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Offers from './Offers/Offers';
import Marketing from './Marketing/Marketing';
import Prices from './Prices/Prices';
import Questions from './Questions/Questions';
import Banner from './Banner/Banner';

const MarketingSection = () => {
    return(
        <>
            <Header />
            <Banner />
            <Marketing />
            <Offers />
            <Prices />
            <Questions />
            <Footer />
        </>
    )
}

export default MarketingSection;