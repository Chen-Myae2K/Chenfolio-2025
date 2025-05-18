import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SmoothScroll from "@/components/animation/smooth-scroll";
import ContributeSection from "@/components/ContributeSection";

const MainPage = () => {
  return (
    <main>
      <SmoothScroll>
        <HeroSection />
        <AboutSection />
        <ContributeSection/> 
      </SmoothScroll>
    </main>
  );
};

export default MainPage;
