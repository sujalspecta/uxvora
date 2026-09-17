
 
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import ProcessAreaHomeOne from '../homes/home-1/ProcessAreaHomeOne';
import TestimonialAreaHomeOne from '../homes/home-1/TestimonialAreaHomeOne';
import ServiceAreaHomeOne from '../homes/home-1/ServiceAreaHomeOne';
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import BackToTop from '../../common/BackToTop';

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service" subtitle="Service" />
      <ServiceAreaHomeOne style_2={true} />
      <ProcessAreaHomeOne />
      <TestimonialAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Service;