import React from "react";

const AboutMe = () => {
  return (
    <section className="section">
      <div className="about_div">
        <div className="about_text_div">
          <h2 className="header_Title">About Me</h2>
          <p className="description_text">
            I, m a designer & developer with a passion for web design. I enjoy
            developing simple, clean and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            resulfs while working with me. Delivering work within time and
            budget which meets clients requirements in our mata.
          </p>
          <table>
            <tr className="description_text">
              <th>Name:</th>
              <th>Email:</th>
              <th>Date of birth:</th>
              <th>From:</th>
            </tr>
            <tr className="subtitle">
              <td>Swapnil</td>
              <td>ahmedshishirusa@gmail.com</td>
              <td>28 December 2002</td>
              <td>Dhaka, Bangladesh</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
