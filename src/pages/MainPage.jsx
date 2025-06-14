import React, { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SmoothScroll from "@/components/animation/smooth-scroll";
import ContributeSection from "@/components/ContributeSection";
import RecentProjectSection from "@/components/RecentProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import NavBarSection from "@/components/NavBarSection";
import FooterSection from "@/components/FooterSection";
import Lenis from "lenis";

const MainPage = () => {
  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
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
        <FooterSection />
      </SmoothScroll>
    </main>
  );
};

export default MainPage;
