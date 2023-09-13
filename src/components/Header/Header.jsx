import React, { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Bar from '../../assets/icons/icon_Menu/icon-menu.svg';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import ServiceOff from './ServiceOff';


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  //trocar com o david
  const PiaAgency = useMemo(() => <img src={Bar} alt="Pia Agency bar" />, []);
  const PiaLogo = useMemo(() => <img src={Logo} alt="Pia Agency logo" />, []);

  const onHandleSubmenu = () => {
    setSubMenu(!subMenu);
  }

  const onHandleServiceOff = () => {
    setSubMenu(false);
    const selectedOption = location.pathname.replace('/', '');
    if (selectedOption === 'development' || selectedOption === 'bundle' || selectedOption === 'marketing' || selectedOption === 'branding' || selectedOption === 'business') {
      window.location.reload();
    }
  }

  const subMenuRef = useRef(null);

  const closeSubMenu = (event) => {
    if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
      setSubMenu(false);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener('click', closeSubMenu);
    return () => {
      document.removeEventListener('click', closeSubMenu);
    };
  }, []);

 


  return (
    <section className='main_header'>
      <ServiceOff
        onClick={onHandleServiceOff}
      />
      {openMenu && window.innerWidth < 1024 ?
        <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        :
        <header className='header'>
          {
            window.innerWidth < 1024 ?
              <div className='header__container' ref={subMenuRef}>
                <div className='header__column-left'>
                  <span onClick={() => { setOpenMenu(!openMenu) }}>{PiaAgency}</span>
                  <span className='header__logo'>{PiaLogo}</span>
                </div>
                <div className='header__column-right'>
                  <Link to="/consulting">Free Consultation</Link>
                </div>
              </div>
              :
              <div className='header__container' ref={subMenuRef}>
                <div className='header__column-left'>
                  <Link to="/"><span className='header__logo'>{PiaLogo}</span></Link>
                  <div className='header__list'>
                    <ul className='header__list-item'>
                      <li><Link to="/about">About</Link></li>
                      <li>
                        <span className='header__services' onClick={onHandleSubmenu}>Services</span>
                      </li>
                      {/* <li><Link to="#">Portfolio</Link></li> */}
                      <li><Link to="/consulting">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='header__column-right'>{window.innerWidth > 1024 && <>
                  <Link to="#"></Link>
                  {/* <Link to="#">Sign in</Link> */}
                  <Link to="tel:19177892469">+1 (917) 789-2469</Link></>}<Link to="/consulting" className='header__consultation-link'>Free Consultation </Link></div></div>}
        </header>
      }
      <div className='header__submenu-item' >
        {
          subMenu &&
          <ul className='header__submenu-level-1' onClick={onHandleServiceOff}>
            <li className='development'><Link to="/development">Website Design</Link></li>
            <li className='bundle'><Link to="/bundle">Logo & Brand</Link></li>
            <li className='digital'><Link to="/marketing">E-Commerce Website</Link></li>
            <li className='branding'><Link to="/branding">Graphic Design</Link></li>
            <li className='business'><Link to="/business">Web Application</Link></li>
          </ul>
        }
      </div>
    </section>
  )
}

export default Header;