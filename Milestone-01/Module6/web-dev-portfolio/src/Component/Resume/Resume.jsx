import React from "react";
import { FaDownload } from "react-icons/fa6";
import SmallReume from "./SmallReume";

const Resume = () => {
  return (
    <section className="section">
      <div className="exparience_div">
        <div className="exparience_text_div">
          <h2 className="header_Title">A summary of My Resume</h2>
        </div>
        <table className="resume_table_style">
          <SmallReume />
          <SmallReume />
          <SmallReume />
        </table>
        <div className="resume_btn_div">
          <button type="button" className="btn">
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
