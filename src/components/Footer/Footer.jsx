import { Link } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import logoFooter from '../../assets/icons/logo-footer.svg';
import facebookIcon from '../../assets/icons/footer/facebook.svg';
import instagramIcon from '../../assets/icons/footer/instagram.svg';
import linkedinIcon from '../../assets/icons/footer/linkedin.svg';
import youtubeIcon from '../../assets/icons/footer/youtube.svg';
const Header = () => {
    const FacebookIcon = useMemo(() => <img src={facebookIcon} alt="Facebook icon" />, []);
    const InstagramIcon = useMemo(() => <img src={instagramIcon} alt="Instagram icon" />, []);
    const LinkDinIcon = useMemo(() => <img src={linkedinIcon} alt="Linkedin icon" />, []);
    const YouTubeIcon = useMemo(() => <img src={youtubeIcon} alt="Youtube icon" />, []);
    return(
        <header className='footer'>
            <div className='footer__container'>
                <div className='footer__column-left'>
                    {
                        window.innerWidth < 1024 ? 
                            <h4>We are a digital brand that listens to you.</h4>
                        : 
                            <h4>We are a digital brand <br /> that listens to you.</h4>
                            
                    }
                    <p><Link to="mailto:rick@bigapplepia.com">rick@bigapplepia.com</Link></p>
                    <p><Link to="tel:19177892469">+1 (917) 789-2469</Link></p>
                </div>
                <div className='footer__column-right'>
                    <div className='footer__column-right-container'>
                        <ul className='footer__list'>
                            <li>
                                <Link to="https://www.facebook.com" target={'_blank'}  rel='noopener noreferrer'>{FacebookIcon}</Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com" target={'_blank'} rel='noopener noreferrer'>{InstagramIcon}</Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com" target={'_blank'} rel='noopener noreferrer'>{LinkDinIcon}</Link>
                            </li>
                            <li>
                                <Link to="https://www.youtube.com" target={'_blank'} rel='noopener noreferrer'>{YouTubeIcon}</Link>
                            </li>
                        </ul>
                        <span className="footer__column-right-link"><Link to="/consulting">Free consultation</Link></span>
                    </div>
                    <div className='footer__copy'>
                        <p>Made with love <br/> by <span className='link'>Pia </span></p>
                        <Link to="/"><span><img src={logoFooter} alt="Pia Solutions logo" /></span></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;