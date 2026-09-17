import { Link } from "react-router-dom";

 
const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-cta-section">
        <div className="uxora-cta-shape2">
          <img src="assets/images/cta/shape2.svg" alt="" />
        </div>
        <div className="uxora-cta-shape1">
          <img src="assets/images/cta/shape3.svg" alt="" />
        </div>
        <div className="uxora-cta-title" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 600});">
          <h2>Ready to make your brand legendary?</h2>
          <div className="uxora-cta-btn">
            <Link className="uxora-default-btn outline-btn2" to="/pricing">View Pricing</Link>
            <Link className="uxora-default-btn outline-btn2" to="/contact-us">Let's Talk</Link>
          </div>
          <div className="uxora-cta-shape3">
            <img src="assets/images/cta/shape1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;