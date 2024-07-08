import React from "react";

const Experience = () => {
  return (
    <section className="section">
      <div className="exparience_div">
        <div className="exparience_text_div">
          <h2 className="header_Title">What I do</h2>
          <p className="description_text">
            I have more than 10 years experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies i use. Want to find out more about my
            experience? Check out my online resume and project portfolio.
          </p>
        </div>
        <table className="table_style">
          {/* <tr className="description_text">
            <th>Name:</th>
            <th>Email:</th>
            <th>Date of birth:</th>
            <th>From:</th>
          </tr> */}
          <tr className="subtitle">
            <td>
              <img src="\assets\icons\js.png" alt="" />
              <p className="skill_text_style">JavaScript</p>
            </td>
            <td>
              <img src="\assets\icons\react.png" alt="" />
              <p className="skill_text_style">React js</p>
            </td>
            <td>
              <img src="\assets\icons\nodejs.png" alt="" />
              <p className="skill_text_style">Node.js</p>
            </td>
            <td>
              <img src="\assets\icons\mongo.png" alt="" />
              <p className="skill_text_style">MongoDB</p>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Experience;
