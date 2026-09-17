 
 
import  { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolio_data from '../../data/portfolio-data';
import { Link } from 'react-router-dom';


// data
const categories = ["View All Projects", ...new Set(portfolio_data.map((item) => item.category))];

const PortfolioArea = () => {

  const [activeCategory, setActiveCategory] = useState("View All Projects");
  const [items, setItems] = useState(portfolio_data); 

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem); 
    if (cateItem === "View All Projects") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

 


  return (
    <>
      <div className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title center width-850" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Explore the range of completed projects</h2>
          </div>
          <div className="uxora-portfolio-menu">
            <ul id="watch-filter-gallery" className="option-set clear-both" data-option-key="filter">
              {categories.map((cate, i) => (
                <li
                  key={i}
                  onClick={() => filterItems(cate)}
                  className={`wow uxora-default-btn outline-btn fadeInUpX ${cate === activeCategory ? "active" : ""}`}
                >
                  {cate}
                </li>
              ))}
            </ul>
          </div>
          <div className="uxora-portfolio-column" id="uxora-portfolio-grid">
          <ResponsiveMasonry 
            columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 2 }}
          >
            <Masonry gutter="20px">
              {items.map((item, i) => (
                <div key={i} className="collection-grid-item">
                  <div className="uxora-p-wrap">
                    <div className="uxora-p-thumb">
                      <img src={item.image} alt="" />
                      <div className="uxora-p-btn">
                        <Link to="/single-portfolio" className="uxora-default-btn portfolio-btn">View Project</Link>
                      </div>
                      <div className="uxora-p-content">
                        <h3>{item.title}</h3>
                        <p className="max-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              </Masonry>

            </ResponsiveMasonry>
          </div>
        </div>
      </div>

    </>
  );
};

export default PortfolioArea;