 
import  { useState } from 'react';
import faq_data from '../../data/faq-data';

const AboutFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="uxora-section-padding">
        <div className="container">
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-lg-6">
              <div className="uxora-default-content faq-title">
                <h2>Frequently asked questions</h2>
                <div className="faq-shape">
                  <img src="assets/images/faq/shape1.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-faq-wrap1">
                {faq_data.map((item, i) => (
                  <div key={i} className={`uxora-faq-item ${activeIndex === i ? 'open' : ''}`}>
                    <div className="uxora-faq-header" onClick={() => toggleFAQ(i)}>
                      <h3>{item.question}</h3>
                      <div className="uxora-active-icon">
                        <img className="plasicon" src="assets/images/faq/bottom.svg" alt="" />
                      </div>
                    </div>
                    <div className="uxora-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFaq;