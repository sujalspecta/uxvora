import { Link } from "react-router-dom";

 
 

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="uxora-section-padding position-relative">
        <div className="container" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title max-680">
            <h2>Driven by passion and innovation</h2>
            <div className="uxora-about-shape1">
              <img src="assets/images/about/shape1.svg" alt="" />
            </div>
          </div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-xxl-4 col-xl-12 d-flex align-items-center">
              <div className="uxora-counter-wrap">
                <div className="uxora-counter-item">
                  <h2 className="uxora-counter-data" aria-label="14">14</h2>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Years of experience</p>
                </div>
                <div className="uxora-counter-item">
                  <h2 className="uxora-counter-data" aria-label="6k">6k</h2>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Project completed</p>
                </div>
                <div className="uxora-counter-item">
                  <h2 className="uxora-counter-data" aria-label="80k">80k</h2>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Happy clients</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="uxora-counter-thumb">
                <img src="assets/images/about/thumb1.png" alt="" />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content counter-content">
                <h3>We’re a team of experienced developers, designers and business growth facilitators.</h3>
                <p>We build partnerships based on transparency, trust & tangible results. With years of experience focusing on quality, we turn ideas into reality.</p>
                <p>From cutting-edge designs to results marketing we deliver solutions that make a difference.</p>
                <div className="mt-50">
                  <Link to="/contact-us" className="uxora-default-btn">Explore More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;