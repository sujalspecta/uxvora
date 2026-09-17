import { Link } from "react-router-dom";
 

const ServiceAreaHomeOne = ({style_2} : any) => {
  return (
    <>
      <section className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title max-750 position-relative" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>We offer all unique digital services</h2>
            {style_2 ? null :
            <div className="uxora-service-shape">
              <img src="assets/images/shape/shape1.svg" alt="" />
            </div>
            
            }
          </div>
          <div className="uxora-service-table-wrap">
            <div className="uxora-service-table-item">
              <div className="uxora-service-table-title">
                <h3>Website Design & Development:</h3>
              </div>
              <div className="uxora-service-table-body">
                <p>We create stunning, user-friendly websites tailored to your brand and optimized for performance</p>
              </div>
              <div className="uxora-service-table-btn">
                <Link className="uxora-default-btn outline-btn" to="/single-service">Explore More</Link>
              </div>
            </div>
            <div className="uxora-service-table-item">
              <div className="uxora-service-table-title">
                <h3>SEO & Digital Marketing:</h3>
              </div>
              <div className="uxora-service-table-body">
                <p>Drive more traffic, generate quality leads & boost your ROI with our targeted SEO and marketing campaigns</p>
              </div>
              <div className="uxora-service-table-btn">
                <Link className="uxora-default-btn outline-btn" to="/single-service">Explore More</Link>
              </div>
            </div>
            <div className="uxora-service-table-item">
              <div className="uxora-service-table-title">
                <h3>Branding & Creative Solutions:</h3>
              </div>
              <div className="uxora-service-table-body">
                <p>From logo design to brand messaging, we craft a unique identity that resonates with your audience</p>
              </div>
              <div className="uxora-service-table-btn">
                <Link className="uxora-default-btn outline-btn" to="/single-service">Explore More</Link>
              </div>
            </div>
            <div className="uxora-service-table-item">
              <div className="uxora-service-table-title">
                <h3>Social Media Management:</h3>
              </div>
              <div className="uxora-service-table-body">
                <p>Engage, inspire, and grow your community with curated content and strategic social media campaigns</p>
              </div>
              <div className="uxora-service-table-btn">
                <Link className="uxora-default-btn outline-btn" to="/single-service">Explore More</Link>
              </div>
            </div>
            <div className="uxora-service-table-item">
              <div className="uxora-service-table-title">
                <h3>Performance Marketing:</h3>
              </div>
              <div className="uxora-service-table-body">
                <p>Maximize advertising spend with data-driven campaigns that deliver measurable results</p>
              </div>
              <div className="uxora-service-table-btn">
                <Link className="uxora-default-btn outline-btn" to="/single-service">Explore More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;