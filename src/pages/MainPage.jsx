import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SmoothScroll from "@/components/animation/smooth-scroll";

const MainPage = () => {
  return (
    <main>
      <SmoothScroll>
        <HeroSection />
        <AboutSection />
      </SmoothScroll>
    </main>
  );
};

export default MainPage;
