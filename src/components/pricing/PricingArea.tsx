 
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const PricingArea = () => {

 
  useEffect(() => {
    const toggleBtn = document.querySelector<HTMLDivElement>("#l5-pricing-btn .toggle-btn");
    const pricingTriggers = document.querySelectorAll<HTMLElement>("[data-pricing-trigger]");

    // Toggle between monthly-active and yearly-active
    const handleToggleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const parent = target.closest("#l5-pricing-btn");
      if (!parent) return;

      const isMonthly = parent.classList.contains("monthly-active");

      target.classList.toggle("clicked");
      parent.classList.remove(isMonthly ? "monthly-active" : "yearly-active");
      parent.classList.add(isMonthly ? "yearly-active" : "monthly-active");
    };

    // Handle pricing trigger toggle
    const handlePricingTriggerClick = (e: Event) => {
      const trigger = e.currentTarget as HTMLElement;
      const siblings = Array.from(trigger.parentElement?.children || []);

      siblings.forEach((sibling) => {
        (sibling as HTMLElement).classList.remove("active");
      });
      trigger.classList.add("active");

      const targetSelector = trigger.getAttribute("data-target");
      if (!targetSelector) return;

      const targetElement = document.querySelector<HTMLElement>(targetSelector);
      if (!targetElement) return;

      const isMonthly = targetElement.getAttribute("data-value-active") === "monthly";
      console.log("Currently monthly:", isMonthly);
      targetElement.setAttribute("data-value-active", isMonthly ? "yearly" : "monthly");
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", handleToggleClick);
    }

    pricingTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handlePricingTriggerClick);
    });

    // Cleanup on unmount
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleToggleClick);
      }
      pricingTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handlePricingTriggerClick);
      });
    };
  }, []);



  return (
    <>
      <section className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title center max-width-750" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Pick from one of our ready packages</h2>
          </div>
          <div className="pricing-btn">
            <label>Billed Monthly</label>
            <div className="toggle-btn">
              <input className="form-check-input btn-toggle price-deck-trigger" type="checkbox" id="flexSwitchCheckDefault" data-pricing-trigger data-target="#table-price-value" defaultChecked />
            </div>
            <label>Billed Annually (10% Discount)</label>
          </div>
          <div className="row" id="table-price-value" data-pricing-dynamic data-value-active="monthly">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <h4>Web Design Package</h4>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$19" data-monthly="$19" data-yearly="$38"></div>
                  <p className="dynamic-value"></p>
                </div>
                <div className="uxora-pricing-body">
                  <p>Web design packages offered a range of services and features to create websites</p>
                  <ul>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Consultation & Discovery</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Responsive Design</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />E-commerce Integration</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Custom Web Design</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Testing and Quality Assurance</li>
                  </ul>
                </div>
                <div className="uxora-pricing-footer">
                  <Link className="uxora-default-btn d-block uxora-pricing-btn outline-btn" to="/contact-us">Purchase Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <h4>UX/UI Package</h4>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$49" data-monthly="$49" data-yearly="$99"></div>
                  <p className="dynamic-value"></p>
                </div>
                <div className="uxora-pricing-body">
                  <p>UX/UI package offered a set of services aimed at designing user-friendly UI/UX</p>
                  <ul>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Information Architecture</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Wireframing & Prototyping</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Usability Testing</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Visual Design</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />User Interface (UI) Design</li>
                  </ul>
                </div>
                <div className="uxora-pricing-footer">
                  <Link className="uxora-default-btn d-block uxora-pricing-btn" to="/contact-us">Get started now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="uxora-pricing-wrap">
                <div className="uxora-pricing-header">
                  <h4>Branding Package</h4>
                </div>
                <div className="uxora-pricing-price">
                  <div className="ux-price-value dynamic-value" data-active="$29" data-monthly="$29" data-yearly="$58"></div>
                  <p className="dynamic-value"></p>
                </div>
                <div className="uxora-pricing-body">
                  <p>Branding package typically includes a comprehensive set of brand's identity</p>
                  <ul>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Brand Guidelines</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Stationery & Website Design</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Social Media Assets</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Signage & Packaging Design</li>
                    <li><img src="assets/images/pricing/arrow.svg" alt="" />Brand Launch Support</li>
                  </ul>
                </div>
                <div className="uxora-pricing-footer">
                  <Link className="uxora-default-btn d-block uxora-pricing-btn outline-btn" to="/contact-us">Get started now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;