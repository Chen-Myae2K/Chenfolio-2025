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
    const lenis = new Lenis();

    // Scroll to the top after Lenis initializes
    setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
    }, 100);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const { slug } = useParams();
  const { projectList } = useProjectStore();

  const projectDetail = projectList.find((el) => el.slug === slug);
  return (
    <SmoothScroll>
      <NavBarSection />
      <GradientFineLine />
      <ProjectDetailSection
        key={projectDetail.id}
        projectDetail={projectDetail}
      />
      <FooterSection />
    </SmoothScroll>
  );
};

export default ProjectDetailPage;
