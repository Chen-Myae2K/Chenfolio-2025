import React, { useEffect } from "react";
import { Safari } from "./magicui/safari";
import { Link, useParams } from "react-router-dom";
import FadeInOut from "./animation/fade-in-out";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ShinyButton } from "./magicui/shiny-button";
import useProjectStore from "@/store/useProjectStore";

const ProjectDetailSection = () => {
  const { slug } = useParams();
  const { projectList } = useProjectStore();

  const { id: currentIndex } = projectList.find(
    (project) => project.slug === slug
  );

  const projectDetail = projectList.find((el) => el.slug === slug);
  const nextProject = projectList[currentIndex];
  const isLastProject = currentIndex === projectList.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);
  return (
    <section className="w-[90%] mx-auto font-manrope py-30 text-ink">
      <FadeInOut>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3 ">
            <p className="text-4xl ">{projectDetail.title}</p>
            <p className="text-xl text-neutral-500">
              Deployment Date : {projectDetail.detail.year}
            </p>
          </div>
          <div className="text-lg text-ink">
            <p className="text-neutral-500">OVERVIEW</p>
            <p>{projectDetail.detail.overview}</p>
          </div>
        </div>
        <div className="relative my-10">
          <Safari
            url={projectDetail.title}
            className="size-full"
            imageSrc={projectDetail.showcaseImage[0]}
          />
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="grid grid-cols-3 py-10 gap-5">
          <div className="col-span-1">
            <p className="text-xl font-medium ">{projectDetail.description}</p>
          </div>
          <div className="col-span-2">
            <p className="pb-5 font-medium text-xl">Description</p>
            <p className="text-xl leading-relaxed text-black">
              {projectDetail.detail.description}
            </p>
            <p className="text-xl font-medium pt-10 py-5">Main activities</p>
            {projectDetail.detail.mainActivities.map((el, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 text-normal items-center border-t py-7 border-ink/20">
                  <div className="col-span-1 font-medium ">Role:</div>
                  <div className="col-span-1 text-neutral-500">{el.role}</div>
                </div>
                <div className="grid grid-cols-2  text-normal items-center border-t py-7 border-ink/20">
                  <div className="col-span-1 font-medium">
                    Service Provided:
                  </div>
                  <div className="col-span-1 text-neutral-500">
                    {el.serviceProvided}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInOut>
      <FadeInOut>
        <div className="relative my-10">
          <Safari
            url={projectDetail.title}
            className="size-full"
            imageSrc={projectDetail.showcaseImage[1]}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/">
            <ShinyButton>
              <div className="flex justify-between gap-2 font-medium sm:text-xs lg:text-base items-center  text-ink">
                <ArrowLeft strokeWidth={1} weight="light" />
                <p>Home</p>
              </div>
            </ShinyButton>
          </Link>
          <Link to={isLastProject ? "" : `/project-detail/${nextProject.slug}`}>
            <ShinyButton
              className={isLastProject && "hidden"}
              disabled={isLastProject}
            >
              <div className="flex justify-between gap-2 font-medium sm:text-xs lg:text-base items-center text-ink">
                <p>Next</p>
                <ArrowRight strokeWidth={1} weight="light" />
              </div>
            </ShinyButton>
          </Link>
        </div>
      </FadeInOut>
    </section>
  );
};

export default ProjectDetailSection;
