import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  const data = {
    name: "Mayur E-commerce",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
