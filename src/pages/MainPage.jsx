import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SmoothScroll from "@/components/animation/smooth-scroll";
import ContributeSection from "@/components/ContributeSection";
import RecentProjectSection from "@/components/RecentProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import NavBarSection from "@/components/NavBarSection";

const MainPage = () => {
  return (
    <main>
      <SmoothScroll>
        <NavBarSection />
        <HeroSection />
        <AboutSection />
        <ContributeSection />
        <RecentProjectSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />
      </SmoothScroll>
    </main>
  );
};

export default MainPage;
