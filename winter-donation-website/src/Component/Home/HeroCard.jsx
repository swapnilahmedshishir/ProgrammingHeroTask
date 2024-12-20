import React from "react";
import PropTypes from "prop-types";

const HeroCard = (props) => {
  // props
  const { img, title, description } = props.services;
  return (
    <div className="relative w-full xl:w-[24rem] h-[28rem]">
      {/* Card content */}
      <div className="bg-white rounded-3xl text-center p-4 bg-[url('/assets/icons/Group60.png')] bg-no-repeat bg-top w-full h-full flex flex-col justify-between relative">
        {/* Card Upper Content */}
        <div className="relative flex-grow flex flex-col justify-center">
          <img
            src={`/assets/icons/${img}`}
            alt="education"
            className="absolute top-9 left-1/2 transform -translate-x-1/2 h-16 z-[2]" /* Center the icon */
          />
          <div className="mt-28">
            <h2 className="text-blue1 font-bold text-2xl mb-2">{title}</h2>
            <p className="text-paragraph text-[18px]">{description}</p>
          </div>
        </div>

        {/* Gradient Background at the Bottom */}
        <div className="flex items-center justify-center w-full h-5 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-b-2xl font-extrabold opacity-100"></div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  services: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroCard;
