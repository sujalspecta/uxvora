 
import PortfolioArea from './PortfolioArea'; 
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Portfolio" subtitle="Our Portfolio" />
      <PortfolioArea />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Portfolio;