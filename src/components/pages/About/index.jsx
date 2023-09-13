import Header from "../../Header/Header";
import BannerAbout from "./BannerAbout/BannerAbout";
import CoreAbout from "./CoreAbout/CoreAbout";
import Offers from "../../Offers/Offers";
import Footer from '../../Footer/Footer';
import Members from "./Members/Members";

const About = () => {
    return(
        <section>
            <Header />
            <BannerAbout />
            <CoreAbout />
            <Offers />
            {/* <Members /> */}
            <Footer />
        </section>
    )
}

export default About;