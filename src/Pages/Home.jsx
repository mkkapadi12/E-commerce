import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import Footer from "../components/Footer";
const Home = () => {
  const data = {
    name: "Mayur Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
