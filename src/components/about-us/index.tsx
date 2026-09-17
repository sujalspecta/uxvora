
 
import AboutArea from './AboutArea';
import AboutTeam from './AboutTeam'; 
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import AboutFaq from './AboutFaq';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import BackToTop from '../../common/BackToTop';

const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutArea />
      <AboutTeam />
      <AboutFaq />
      <CtaAreaHomeOne />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Aboutus;