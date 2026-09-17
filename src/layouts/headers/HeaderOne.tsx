 
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import useSticky from '../../hooks/use-sticky';
import { Link } from 'react-router-dom';

const HeaderOne = () => { 
  useSticky();
  const [openMenu, setOpenMenu] = useState(false);
  

  return (
    <>
      <header className={`site-header uxora-header-section`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link to="/">
                  <img src="assets/images/logo/logo-dark.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="uxora-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
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
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <a className="uxora-default-btn uxora-header-btn" href="tel:+088">Call Us: (+088) 234-5110</a>
              <div className="uxora-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- Brand Logo--> */}
                  {/* <!-- mobile menu trigger --> */}
                  <button className="uxora-menu-toggle d-inline-block d-lg-none" onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                  </button>
                  {/* <!--/.Mobile Menu Hamburger Ends--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;