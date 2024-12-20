import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutSection = () => {
  useGSAP(() => {
    // Timeline for animations
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourMisson",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animations
    tl.from(".ourMissonTopHedding", {
      x: -560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    })
      .from(".ourMissonleftSideImage", {
        x: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .from(".ourMissonRightSideText", {
        y: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });

    // Cleanup function for ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="bg-[#F7F9FC] py-20 ourMisson overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12 ourMissonTopHedding">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#011C52]">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            At Tojo Foundation, we aim to support underprivileged communities
            during the harsh winter season. Our mission is to provide warmth and
            comfort to those in need by distributing winter clothing and
            essentials. Together, we can make a difference and bring warmth to
            many lives.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left Side Image */}
          <div className="lg:w-1/2 ourMissonleftSideImage">
            <img
              src="/assets/winter-support.jpg"
              alt="Winter Support"
              className="w-full h-[25rem]  rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side Content */}
          <div className="lg:w-1/2 text-center lg:text-left ourMissonRightSideText">
            <h3 className="text-2xl font-semibold text-[#011C52] mb-4">
              How You Can Contribute
            </h3>
            <p className="text-gray-700 mb-6">
              You can contribute by donating winter clothing, volunteering at
              our collection points, or supporting our cause financially. Every
              little effort counts and can help bring warmth and comfort to
              someone in need.
            </p>
            <button className="btn py-3 px-10 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded-3xl font-extrabold">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
