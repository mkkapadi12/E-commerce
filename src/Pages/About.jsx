import React from 'react';
import HeroSection from '../components/HeroSection';
// import { useProductContext } from "../Context/ProductContext";

const About = () => {
  // const Bro = useProductContext();
  const data = {
    name: 'Nensi E-commerce',
  };
  return (
    <>
      {/* {Bro} */}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
