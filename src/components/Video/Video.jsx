import bannerImage from '../../assets/images/video.webp';
import bannerImageDesktop from '../../assets/images/video-banner.webp';

const Banner = () => {
    return (
        <section className='video'>
            <div className='video__container'>
                <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia Agency banner" />
            </div>
        </section>
    )
}

export default Banner;