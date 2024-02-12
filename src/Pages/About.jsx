import React from "react";
import HeroSection from "../components/HeroSection";
// import { useProductContext } from "../Context/ProductContext";

const About = () => {
  // const Bro = useProductContext();
  const data = {
    name: "Mayur E-commerce",
  };
  return (
    <>
      {/* {Bro} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
