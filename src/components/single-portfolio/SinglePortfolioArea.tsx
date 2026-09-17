import { Link } from "react-router-dom";
 

const SinglePortfolioArea = () => {
  return (
    <>
       
  
<section className="uxora-section-padding">
    <div className="container">
      <div className="uxora-service-d-wrap" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
        <div className="uxora-service-d-thumb">
          <img src="assets/images/portfolio/p9.png" alt="" />
          <div className="uxora-p-d-data-wrap">
            <ul>
              <li><span>Client:</span> ZMultinational Company</li>
              <li><span>Category:</span> Branding & Identity Development</li>
              <li><span>Duration:</span> 2 Months</li>
            </ul>
          </div>
        </div>
        <div className="uxora-service-d-content">
          <h3>Project overview</h3>
          <p>BrandSphere is a comprehensive branding project aimed at transforming how businesses present themselves in today’s competitive market. For this project, we partnered with ZMultinational to build a cohesive and memorable brand identity that resonates with their target audience.</p>
          <p>Our goal was to create a visually appealing, strategically sound brand foundation that enhances recognition, drives engagement, and fosters loyalty.</p>
        </div>
        <div className="uxora-service-d-content content2 pt-30">
          <h3>Scope of work</h3>
          <p>Conducted in-depth consultations to understand the client’s vision, mission, and unique value proposition. Analyzed market trends and competitors to identify opportunities for differentiation.</p>
          <ul>
            <li><span>Brand Discovery:</span> Developed a brand positioning strategy tailored to target audience.</li>
            <li><span>Visual Identity Design:</span> Designed business cards, letterheads & other brand collateral.</li>
            <li><span>Brand Guidelines Development:</span> Provided guidance for maintaining brand consistency.</li>
            <li><span>Digital Integration:</span> Delivered social media templates and visuals for online branding.</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="uxora-service-d-thumb2">
              <img src="assets/images/portfolio/p7.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="uxora-service-d-thumb2 thumb3">
              <img src="assets/images/portfolio/p8.png" alt="" />
            </div>
          </div>
        </div>
        <div className="uxora-service-d-content content2 pt-30">
          <h3>Key deliverables</h3>
          <ul>
            <li><span>Logo and Icon Set</span></li>
            <li><span>Brand Color Palette and Typography System</span></li>
            <li><span>Business Stationery (business cards, letterheads, etc.)</span></li>
            <li><span>Brand Style Guide</span></li>
            <li><span>Social Media Templates</span></li>
          </ul>
        </div>
        <div className="uxora-service-d-content pt-30">
          <h3>Results</h3>
          <p>The BrandSphere project resulted in a professional, cohesive brand identity that positioned [Client Name] as a credible and modern player in their industry. The new branding boosted recognition and established a strong foundation for future marketing efforts.</p>
          <p className="data">Client Feedback:</p>
          <p className="mb-0"> "They did an incredible job bringing our vision to life. The branding materials are stunning, and the style guide makes it easy for us to stay consistent across platforms."</p>
          <p> — CEO @ZMultinational Company</p>
        </div>

        
        <div className="mt-50">
          <Link className="uxora-default-btn" to="/contact-us">View Website</Link>
        </div>




      </div>
    </div>
  </section>
    </> 
  );
};

export default SinglePortfolioArea;