 
 
 
import { Link } from "react-router-dom";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const setting = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
}

const setting2 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 0,
  arrows: false,
  rtl: true,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }]
}


const PortfolioAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-section-padding2 section">
        <div className="container">
          <div className="uxora-section-title center" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <h2>See some of our favorite projects</h2>
          </div>
        </div>
        <Slider {...setting} className="uxora-p-slider-init">
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p1.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p className="max-400">A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img className="img2" src="assets/images/portfolio/p2.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p6.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p1.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p className="max-400">A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img className="img2" src="assets/images/portfolio/p2.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p6.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p1.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p className="max-400">A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img className="img2" src="assets/images/portfolio/p2.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p6.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
        </Slider>
        <Slider {...setting2} className="uxora-p-slider-init">
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p4.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p5.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p10.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p4.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p5.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p10.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p4.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p5.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
          <div className="uxora-p-wrap">
            <div className="uxora-p-thumb">
              <img src="assets/images/portfolio/p10.png" alt="" />
              <div className="uxora-p-btn">
                <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
              </div>
              <div className="uxora-p-content">
                <h3>BrandSphere</h3>
                <p>A comprehensive branding solution for startups, including logo design, visual identity.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PortfolioAreaHomeOne;