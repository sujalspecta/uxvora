import { Link } from "react-router-dom"; 
import HeaderOne from "./layouts/headers/HeaderOne"; 
import FooterOne from "./layouts/footers/FooterOne";
import CtaAreaHomeOne from "./components/homes/home-1/CtaAreaHomeOne";
import BackToTop from "./common/BackToTop";
const NotFound = () => {
	return (
		<>
			<HeaderOne /> 
			<section className="uxora-section-padding uxora-error-page">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 mx-auto text-center wow fadeIn">
							<img src="assets/images/404.svg" alt="404" />
							<h2>Page not found: /error</h2>
							<p>Please try searching for some other page.</p>
							<Link to="/" className="uxora-default-btn uxora-header-btn">
								Back To Home
							</Link>
						</div>
					</div>
				</div>
			</section>
			<CtaAreaHomeOne />
			<FooterOne />
			<BackToTop />
		</>
	);
};

export default NotFound;
