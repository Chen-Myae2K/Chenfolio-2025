import React from "react";
import { Safari } from "./magicui/safari";
import { Link } from "react-router-dom";

const ProjectDetailSection = ({ projectDetail }) => {
  return (
    <section className="w-[90%] mx-auto font-manrope py-30 text-ink">
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
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <p className="text-xl font-medium ">{projectDetail.description}</p>
        </div>
        <div className="col-span-2">
          <p className="pb-5 font-medium text-xl">Description</p>
          <p className="text-xl leading-relaxed text-black">
            {projectDetail.detail.description}
          </p>
          <p className="text-xl font-medium pt-10 py-5">Main activities</p>
          {projectDetail.detail.mainActivities.map((el,index) => (
            <div key={index}>
              <div className="grid grid-cols-2 text-normal items-center border-t py-7 border-ink/20">
                <div className="col-span-1 font-medium ">Role:</div>
                <div className="col-span-1 text-neutral-500">{el.role}</div>
              </div>
              <div className="grid grid-cols-2  text-normal items-center border-t py-7 border-ink/20">
                <div className="col-span-1 font-medium">Service Provided:</div>
                <div className="col-span-1 text-neutral-500">
                  {el.serviceProvided}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative my-10">
        <Safari
          url={projectDetail.title}
          className="size-full"
          imageSrc={projectDetail.showcaseImage[1]}
        />
      </div>
    </section>
  );
};

export default ProjectDetailSection;
