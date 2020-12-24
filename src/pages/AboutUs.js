import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import GlobalStyled from "../components/GlobalStyled";

const AboutUs = () => {
  return (
    <div>
      <GlobalStyled />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default AboutUs;
