import PricingArea from "./PricingArea"; 
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import BackToTop from "../../common/BackToTop";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../../common/Breadcrumb";
import FooterOne from "../../layouts/footers/FooterOne";

const Pricing = () => {
	return (
		<>
			<HeaderOne />
			<Breadcrumb title="Pricing" subtitle="Pricing" />
			<PricingArea />
			<CtaAreaHomeOne />
			<FooterOne />
			<BackToTop />
		</>
	);
};

export default Pricing;
