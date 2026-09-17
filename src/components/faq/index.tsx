 
import FaqArea from './FaqArea'; 
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import BackToTop from '../../common/BackToTop';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';

const Faq = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Faq" subtitle="Faq" />
    <FaqArea />
    <CtaAreaHomeOne />
    <FooterOne />  
    <BackToTop />    
    </>
  );
};

export default Faq;