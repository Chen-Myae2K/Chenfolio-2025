import SmoothScroll from "@/components/animation/smooth-scroll";
import FooterSection from "@/components/FooterSection";
import NavBarSection from "@/components/NavBarSection";
import ProjectDetailSection from "@/components/ProjectDetailSection";
import GradientFineLine from "@/components/ui/gradient-fine-line";
import useProjectStore from "@/store/useProjectStore";
import Lenis from "lenis";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <SmoothScroll>
      <NavBarSection />
      <GradientFineLine />
      <ProjectDetailSection />
      <FooterSection />
    </SmoothScroll>
  );
};

export default ProjectDetailPage;
