
import TeamArea from './TeamArea'; 
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne'; 
import HeaderOne from '../../layouts/headers/HeaderOne';
import Breadcrumb from '../../common/Breadcrumb';
import FooterOne from '../../layouts/footers/FooterOne';
import BackToTop from '../../common/BackToTop';
const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Team" subtitle="Our Team" />
      <TeamArea />
      <CtaAreaHomeOne />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Team;