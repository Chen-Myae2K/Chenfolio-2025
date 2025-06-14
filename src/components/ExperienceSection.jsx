import React from "react";
import FadeInOut from "./animation/fade-in-out";
import ButtonHover from "./animation/button-hover";
import { ShinyButton } from "./magicui/shiny-button";
import { ArrowDown } from "lucide-react";

const ExperienceSection = () => {
  const experienceList = [
    {
      duration: "Apr 2025 - present",
      role: "Event Volunteer",
      detail: "full-time, volunteer",
      company: "Heartware Youthbank",
      location: "Charity,(Singapore,SG)",
    },
    {
      duration: "Feb 2025 - present",
      role: "Design & Development Support",
      detail: "full-time, volunteer",
      company: "The Explorers",
      location: "Design Studio,(Bangkok,TH)",
    },
    {
      duration: "Jan 2025 - Mar 2025",
      role: "Web Devloper/Desinger",
      detail: "freelance developer",
      company: "KHH SECCO",
      location: "CBO, (Yangon, MM)",
    },
    {
      duration: "Dec 2024 - present",
      role: "Freelance Web Developer",
      detail: "",
      company: "",
      location: "",
    },
  ];
  return (
    <section className="w-[90%] mx-auto font-manrope py-30 text-ink">
      {experienceList.map((el, index) => (
        <FadeInOut key={index}>
          <div className="grid grid-cols-3  text-normal items-center border-t py-7 border-ink/20">
            <div className="flex col-span-1 items-center  justify-start space-x-4">
              <p>{el.duration}</p>
              <div
                className={
                  el.detail === ""
                    ? "hidden"
                    : "text-neutral-500 px-4 py-1 rounded-full bg-neutral-200/60"
                }
              >
                {el.detail}
              </div>
            </div>
            <div className="col-span-1 text-neutral-500">{el.role}</div>
            <div className="col-span-1">
              {el.company}
              <span className="text-neutral-500 text-[13px] ms-2">
                {el.location}
              </span>
            </div>
          </div>
        </FadeInOut>
      ))}
      <FadeInOut>
        <div className="grid grid-cols-3  text-normal items-center py-7 ">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <ShinyButton>
              <div className="flex justify-between gap-2 font-medium sm:text-xs lg:text-base items-center  text-ink">
                <p>DOWNLOAD RESUME</p>
                <ArrowDown strokeWidth={1} weight="light" />
              </div>
            </ShinyButton>
          </div>
        </div>
      </FadeInOut>
    </section>
  );
};

export default ExperienceSection;
