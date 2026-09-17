import { Link } from "react-router-dom";

 
const Breadcrumb = ({title, subtitle} : any) => {
  return (
    <>
      <div className="breadcrumb-wrapper" style={{ backgroundImage: "url(/assets/images/breadcrumbs/b1.png)" }}>
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title">{title}</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><img src="assets/images/about/right-arrow.svg" alt="right-arrow" /></li>
                    <li aria-current="page">{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="uxora-breadcrumbs-shape">
              <img src="assets/images/testimonial/shape1.svg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Breadcrumb;