import React from "react";
import { FaBoxOpen, FaMapMarkerAlt, FaListUl } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const HowItWorksSection = () => {
  useGSAP(() => {
    // Timeline for animations
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".HowYouCanHelp",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animations
    tl.from(".ourMissonTopHedding2", {
      x: -560,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    })
      .from(".PrepareYourDonation", {
        x: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .from(".DropOffAtCollectionPoints", {
        y: 560,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .from(".SupportedDivisions", {
        y: -560,
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
    <section className="bg-gray-100 py-20 HowYouCanHelp overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div className="ourMissonTopHedding2">
          <h2 className="text-4xl font-bold text-[#012A4A] mb-8">
            How You Can Help
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Make a meaningful difference this winter by donating essential
            clothing items to those in need. Follow the steps below to support
            our initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 PrepareYourDonation">
          {/* Step 1: Prepare Your Donation */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-left">
            <FaBoxOpen className="text-[#012A4A] text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#012A4A] mb-4">
              Step 1: Prepare Your Donation
            </h3>
            <p className="text-gray-700">
              Collect any winter clothing items you want to donate, such as
              jackets, sweaters, scarves, gloves, and blankets. Make sure the
              items are clean and in good condition before donating.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Need help? Contact our support team at <br />
              <span className="font-bold">+880-1234-567890</span>.
            </p>
          </div>

          {/* Step 2: Drop Off at Collection Points */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-left DropOffAtCollectionPoints">
            <FaMapMarkerAlt className="text-[#012A4A] text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#012A4A] mb-4">
              Step 2: Drop Off at Collection Points
            </h3>
            <p className="text-gray-700 mb-4">
              Visit any of our collection points across the country. Each
              location is staffed by volunteers who will accept your donations
              and sort them for distribution. Our collection points are located
              in:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Community centers</li>
              <li>Local charities</li>
              <li>Designated donation centers</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Find the nearest collection point on our website under the
              “Collection Centers” section.
            </p>
          </div>

          {/* Step 3: Supported Divisions */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-left SupportedDivisions">
            <FaListUl className="text-[#012A4A] text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#012A4A] mb-4">
              Step 3: Supported Divisions
            </h3>
            <p className="text-gray-700 mb-4">
              We currently serve communities in the following divisions:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Dhaka</li>
              <li>Chittagong</li>
              <li>Rajshahi</li>
              <li>Sylhet</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Donations collected in each division are distributed locally to
              ensure support reaches those in nearby communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
