 

const ContactusArea = () => {
  return (
    <>

      <div className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title center">
            <h2>Reach out and connect with us</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              <div className="uxora-contact-wraper">
                <div className="uxora-contact-info-wrap">
                  <div className="uxora-contact-info-icon">
                    <img src="assets/images/contact/call.svg" alt="" />
                  </div>
                  <div className="uxora-contact-info-content">
                    <h3>Call us directly</h3>
                    <ul>
                      <li>
                        <a href="tel:+088">(+088) 234-5110</a>
                        <a href="tel:+088">(+088) 456-3217</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="uxora-contact-info-wrap">
                  <div className="uxora-contact-info-icon">
                    <img src="assets/images/contact/email.svg" alt="" />
                  </div>
                  <div className="uxora-contact-info-content">
                    <h3>Email us</h3>
                    <ul>
                      <li>
                        <a href="tel:+088">example@gmail.com</a>
                        <a href="tel:+088">mthemeus@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="uxora-contact-info-wrap">
                  <div className="uxora-contact-info-icon">
                    <img src="assets/images/contact/call.svg" alt="" />
                  </div>
                  <div className="uxora-contact-info-content">
                    <h3>Our office address</h3>
                    <ul>
                      <li>4132 Thornridge City, New York.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="uxora-contact-box box2">
                <p className="text">Fill in the form below and we will get back to you as soon as possible.</p>
                <form >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="uxora-main-field field2">
                        <p>Your Name</p>
                        <input type="text" placeholder="Adam Smith" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="uxora-main-field field2">
                        <p>Email Address</p>
                        <input type="text" placeholder="example@gmail.com" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="uxora-main-field field2">
                        <p>Phone Number</p>
                        <input type="text" placeholder="+235-5678-9010" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="uxora-main-field field2">
                        <p>Subject</p>
                        <input type="text" placeholder="Business" />
                      </div>
                    </div>
                  </div>
                  <p>Message</p>

                  <div className="uxora-main-field-textarea textarea2">
                    <textarea name="textarea" placeholder="Write your message here..."></textarea>
                  </div>

                  <button className="uxora-default-btn" type="button">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusArea;