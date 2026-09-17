 
import SinglePortfolioArea from "./SinglePortfolioArea";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";

const SinglePortfolio = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Portfolio Details" subtitle="Portfolio Details" />
      <SinglePortfolioArea />
			<CtaAreaHomeOne />
			<FooterOne />
			<BackToTop />
		</>
	);
};

export default SinglePortfolio;
