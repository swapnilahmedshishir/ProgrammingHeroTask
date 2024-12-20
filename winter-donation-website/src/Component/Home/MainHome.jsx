import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import HelpHand from "./HelpHand";
import PARTNERS from "./PARTNERS";
import AboutSection from "./AboutSection";
import HowItWorksSection from "./HowItWorksSection";
import WinterStories from "./WinterStories";
import FeaturedCampaignsSection from "./Projects";

const MainHome = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowItWorksSection />
      <FeaturedCampaignsSection />
      <WinterStories />
      <HelpHand></HelpHand>
      <PARTNERS></PARTNERS>
    </>
  );
};

export default MainHome;
