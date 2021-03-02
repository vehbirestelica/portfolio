import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Skills } from "../components/Skills";
import ContactMe from "../components/ContactMe";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Skills />
      {/* <InfoSection {...homeObjTwo} /> */}
      <Services />
      {/* <InfoSection {...homeObjThree} /> */}
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
