import { useMemo, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Bar from '../../assets/icons/icon_Menu/icon-close.svg';
import { Link } from 'react-router-dom'
import facebookIconMenu from '../../assets/icons/menu/facebook.svg'
import instagramIconMenu from '../../assets/icons/menu/instagram.svg'
import linkedinIconMenu from '../../assets/icons/menu/linkedin.svg'
import youtubeIconMenu from '../../assets/icons/menu/youtube.svg'
const Menu = ({ setOpenMenu, openMenu }) => {
    const onHandleCloseMenu = () => {
        setOpenMenu(false)
    }

    const PiaAgencyBar = useMemo(() => <img src={Bar} alt="Pia Agency bar" />, []);
    const PiaAgencyLogo = useMemo(() => <img src={Logo} alt="Pia Agency logo" />, []);
    const FacebookIcon = useMemo(() => <img src={facebookIconMenu} alt="Facebook icon menu" />, []);
    const InstagramIcon = useMemo(() => <img src={instagramIconMenu} alt="Instagram icon menu" />, []);
    const LinkeDin = useMemo(() => <img src={linkedinIconMenu} alt="Linkedin icon menu" />, []);
    const YouTube = useMemo(() => <img src={youtubeIconMenu} alt="Youtube icon menu" />, []);

    return (
        <>
            {
                openMenu &&
                <section className='menu'>
                    <div className='menu__container'>
                        <div className='menu__column-left'>
                            <span className='menu__close' onClick={onHandleCloseMenu}>{PiaAgencyBar}</span>
                            <span className='menu__logo'>{PiaAgencyLogo}</span>
                        </div>
                        <div className='menu__column-right'>
                            <Link to="/">Free Consultation</Link>
                        </div>
                    </div>
                    <div className='menu__list'>
                        <ul className='menu__list-item'>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/development">Website Design</Link></li>
                            <li><Link to="/bundle">Logo & Brand</Link></li>
                            <li><Link to="/marketing">E-commerce</Link></li>
                            <li><Link to="/branding">Graphic Design</Link></li>
                            <li><Link to="/business">Web Application</Link></li>
                            <li><Link to="/consulting">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='menu__social-media'>
                        <ul className='menu__social-media-list'>
                            <li>
                                <Link to="https://www.facebook.com" target={'_blank'}>{FacebookIcon}</Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com" target={'_blank'}>{InstagramIcon}</Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com" target={'_blank'}>{LinkeDin}</Link>
                            </li>
                            <li>
                                <Link to="https://www.youtube.com" target={'_blank'}>{YouTube}</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            }
        </>
    )
}
export default Menu;