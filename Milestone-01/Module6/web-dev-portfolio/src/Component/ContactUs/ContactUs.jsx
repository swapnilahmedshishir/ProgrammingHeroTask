import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <section className="contct_us_section">
      <div className="contct_us_div">
        <div className="contct_us_div_text">
          <h2 className="header_Title">Lets Connect</h2>
          <p className="contact_us_des_text">
            Please fill out the form on this section to contact with me or call
            between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
          </p>
          <ul className="social_icon">
            <li>
              <a href="http://">
                <img src="/assets/icons/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a href="http://">
                <img src="/assets/icons/insta.png" alt="" />
              </a>
            </li>
            <li>
              <a href="http://">
                <img src="/assets/icons/twitter.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contct_us_div_text">
          <h2 className="header_Title">Let’s Message me</h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
