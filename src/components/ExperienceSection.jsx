import React from "react";
import FadeInOut from "./animation/fade-in-out";
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
      location: "Design Studio,(Yangon, MM)",
    },
    {
      duration: "Jan 2025 - Mar 2025",
      role: "Web Devloper/Desinger",
      detail: "freelance developer",
      company: "KHH SECCO",
      location: "CBO, (Yangon, MM)",
    },
    {
      duration: "Sep 2025 - present",
      role: "Freelance Web Developer",
      detail: "part-time developer",
      company: "MMSIT",
      location: "Yangon, MM",
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/resume/ChenMyaeKayKhaing_Resume.pdf";
    link.download = "ChenMyaeKayKhaing_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-[90%] mx-auto font-manrope pt-30 text-ink">
      {experienceList.map((el, index) => (
        <FadeInOut key={index}>
          <div className="grid grid-cols-3  text-normal items-center border-t py-7 border-ink/20">
            <div className="flex lg:col-span-1 col-span-3 items-center justify-between lg:justify-start space-x-4">
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
            <div className="max-md:hidden col-span-1 text-neutral-500">
              {el.role}
            </div>
            <div className="col-span-1 max-md:col-span-full max-md:mt-4 text-right ">
              {el.company}
              <span className="text-neutral-500 text-[13px] ms-2">
                {el.location}
              </span>
            </div>
          </div>
        </FadeInOut>
      ))}
      <FadeInOut>
        <div className="grid lg:grid-cols-3  text-normal items-center py-5 ">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <ShinyButton onClick={handleDownload}>
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
