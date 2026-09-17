 
import  { useState } from 'react';
import faq_data2 from '../../data/faq_data';


// data
const categories = [...new Set(faq_data2.map((item) => item.category))];
const FaqArea = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [items, setItems] = useState(faq_data2.filter(item => item.category === categories[0]));

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    const findItems = faq_data2.filter(findItem => findItem.category === cateItem);
    setItems(findItems);
  };
 
  const [faq1, setFaq1] = useState(0); 
  const handleFaq1 = (index: number) => {
    if (faq1 === index) {
      setFaq1(0);
    }
    else { {
      setFaq1(index);
    }
    }
  }


  return (
    <>
      <section className="uxora-section-padding uxora-tab-section">
        <div className="container">
          <div className="uxora-section-title center width-850" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>These FAQs help clients learn about us</h2>
          </div>
          <div className="uxora-tab-wrap" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <ul className="tabs">
              {categories.map((cate, i) => (
                <li
                  key={i}
                  onClick={() => filterItems(cate)}
                  className={`tab-link ${cate === activeCategory ? "current" : ""}`}
                >
                  {cate}
                </li>
              ))}
            </ul>

            {items[0].questions.map((item, i) => (
              <div key={i} id={`tab-${i + 1}`} className="uxora-tab-content current">
              <div className="uxora-faq-wrap1">              
                <div className={`uxora-faq-item ${faq1 === i ? "open" : ""}`} onClick={() => handleFaq1(i)}>
                  <div className="uxora-faq-header">
                    <h3>{item.question}</h3>
                    <div className="uxora-active-icon">
                      <img className="plasicon" src="assets/images/faq/bottom.svg" alt="" />
                    </div>
                  </div>
                  <div className="uxora-faq-body">
                    <p>{item.answer}</p>
                  </div>
                </div> 
              </div>
            </div>
            ))}
           </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;

