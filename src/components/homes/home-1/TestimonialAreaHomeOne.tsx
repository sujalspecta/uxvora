import * as ReactSlickModule from 'react-slick';
import { LazyLoadTypes } from 'react-slick'; 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 💡 This cleanly unwraps the component function out of Vite's module proxy layer
const Slider = (ReactSlickModule.default as any)?.default || ReactSlickModule.default || ReactSlickModule;


// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const {onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-slider-next`}       
      onClick={onClick}
    >
     
    </button>
  );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-slider-prev`} 
      onClick={onClick}
    >
     
    </button>
  );
};

// Slider settings
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  infinite: true,
  speed: 1500, 
  lazyLoad: "ondemand" as LazyLoadTypes,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const TestimonialAreaHomeOne = () => {
 


  return (
    <>
      <div className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title title2 max-680 position-relative" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Hear our client's success stories</h2>
            <div className="uxora-t-shape">
              <img src="assets/images/testimonial/shape1.svg" alt="" />
            </div>
          </div>
          <Slider {...settings} className="uxora-t-slider-init">
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb1.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>Working with them was a game-changer for us</h3>
                <p>“They took the time to understand our vision and delivered a stunning website that exceeded our expectations. The user-friendly design has already improved our customer engagement. They have provided innovative solutions tailored to our business, the results speak for themselves.”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>Smith Align</span> Owner of Sitemark</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb2.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>Highly recommend their expertise!</h3>
                <p>“The team changed our digital marketing strategy. Thanks to their SEO and PPC campaigns, we saw a 60% increase in website traffic and a significant increase in conversions. They were always available to answer our questions and made the whole process smooth and stress free.”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>James Tim</span> Marketing Director</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb3.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>I must say they are the perfect digital partner</h3>
                <p>“We partnered with them to reinvent our brand, and the results were incredible. Their creativity and attention to detail gave us a fresh, modern identity that really resonated with our audience. They designed a sleek, functional site that is easy for our customers to navigate. Sales have never been better!”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>Carlos Vell,</span> CEO of Luminous</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeOne;
 