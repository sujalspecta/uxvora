import { Link } from "react-router-dom";

 
const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-hero-section section" style={{ backgroundImage: 'url(/assets/images/hero/hero-bg1.png)' }}>
        <div className="container">
          <div className="uxora-hero-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h1 className="title">We bring ideas to your digital life</h1>
            <p>We combine creativity, technology and strategy to help businesses achieve their digital potential. From cutting-edge design to results-driven marketing campaigns.</p>
            <div className="mt-50 hero-btn-wrap">
              <Link className="uxora-default-btn hero-btn" to="/contact-us">Get In Touch</Link>
              <Link className="uxora-default-btn hero-btn outline-btn" to="/portfolio">Our Portfolio</Link>
            </div>
            <div className="uxora-hero-shape">
              <img src="assets/images/hero/shape2.svg" alt="" />
            </div>
            <div className="uxora-hero-shape2">
              <img src="assets/images/hero/shape1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="uxora-hero-thumb">
          <img src="assets/images/hero/hero-thumb1.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;