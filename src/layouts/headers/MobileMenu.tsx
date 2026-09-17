 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({openMenu, setOpenMenu} : any) => {
  const [openSubMenu, setOpenSubMenu] = useState(false); 

  const handleWrapperClick = () => {
    setOpenMenu(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <> 
      <div className={`uxora-menu-wrapper ${openMenu ? 'uxora-body-visible' : ''}`} onClick={handleWrapperClick}>
     
        <div className="uxora-menu-area text-center" onClick={stopPropagation}>
          <div className="uxora-menu-mobile-top">
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="uxora-menu-toggle mobile" onClick={() => setOpenMenu(!openMenu)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        
          <div className="uxora-mobile-menu">          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li className={`menu-item-has-children uxora-item-has-children ${openSubMenu ? 'uxora-active' : ''}`}>
                <a style={{cursor: "pointer"}} onClick={() => setOpenSubMenu(!openSubMenu)}>Pages
                <span className="uxora-mean-expand"></span>
                </a>
                <ul className={`sub-menu uxora-submenu ${openSubMenu ? 'uxora-open' : ''}`} style={{display: openSubMenu ? 'block' : 'none'}}>
                  <li><Link to="/service">Service</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/faq">Faq</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                </ul>
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>
          <div className="uxora-mobile-menu-btn">
            <Link className="uxora-default-btn sm-size" to="/contact-us">Get in Touch</Link>
            <Link className="uxora-default-btn sm-size" to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MobileMenu;