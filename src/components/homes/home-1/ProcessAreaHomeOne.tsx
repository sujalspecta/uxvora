 
const ProcessAreaHomeOne = () => {
  return (
    <>
        <div className="uxora-section-padding section" style={{backgroundImage: 'url(/assets/images/shape/bg1.png)'}}>
    <div className="container">
      <div className="uxora-section-title center max-width-750" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
        <h2>We follow a simple working process</h2>
      </div>
      <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="uxora-process-wrap">
            <div className="uxora-process-number">
              <h3>1</h3>
            </div>
            <div className="uxora-process-shape">
              <img src="assets/images/shape/shape3.svg" alt="" />
            </div>
            <div className="uxora-process-content">
              <h3>Discovery & Strategy</h3>
              <p>Understanding client needs and developing a tailored plan and a detailed strategy document.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="uxora-process-wrap pt-32">
            <div className="uxora-process-number">
              <h3>2</h3>
            </div>
            <div className="uxora-process-shape">
              <img src="assets/images/shape/shape2.svg" alt="" />
            </div>
            <div className="uxora-process-content">
              <h3>Design & Development</h3>
              <p>Creating and implementing solutions that meet client objectives. Build a fully functional website.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="uxora-process-wrap pt-31">
            <div className="uxora-process-number">
              <h3>3</h3>
            </div>
            <div className="uxora-process-content">
              <h3>Launch & Optimization</h3>
              <p>Deploying the project and ensuring its ongoing success. A live project with measurable results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default ProcessAreaHomeOne;