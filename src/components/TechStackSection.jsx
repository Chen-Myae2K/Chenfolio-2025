import React from "react";
import Heading from "./ui/heading";
import { IconCloudDemo } from "./animation/icon-cloud-demo";
import { CloudSun, Code, Database, Dot, Palette, Server } from "lucide-react";
import FadeInOut from "./animation/fade-in-out";

const TechStackSection = () => {
  const skills = [
    {
      id: 1,
      icon: <Code size={24} className="size-4 lg:size-6" color={"#79baff"} />,
      title: "Frontend",
      list: [
        "TypeScript, JavaScript, Unity, Blender",
        "React, Next.js, Tailwind CSS",
        "Zustand, SWR, Context API",
        "React Hook Form, Axios, Expo",
      ],
    },
    {
      id: 2,
      icon: <Server size={24} className="size-4 lg:size-6" color={"#79baff"} />,
      title: "Backend",
      list: ["C Sharp, Php, Python", "Laravel"],
    },
    {
      id: 3,
      icon: (
        <Database size={24} className="size-4 lg:size-6" color={"#79baff"} />
      ),
      title: "Databases",
      list: ["PostgreSQL, MySQL, MongoDB", "AWS S3"],
    },
    {
      id: 4,
      icon: (
        <CloudSun size={24} className="size-4 lg:size-6" color={"#79baff"} />
      ),
      title: "DevOps & Deployment",
      list: ["Vercel, Git, GitHub"],
    },
    {
      id: 5,
      icon: (
        <Palette size={24} className="size-4 lg:size-6" color={"#79baff"} />
      ),
      title: "Tools & Collaboration",
      list: ["Jest, Figma, Postman, Taiga", "Jira, Trello, Notion"],
    },
  ];
  return (
    <section className="w-[90%] mx-auto font-manrope py-30 text-ink">
      <Heading title="The Ingredients" subtitle="[Tech Stack]" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="col-span-1">
          <IconCloudDemo />
        </div>
        <div className="col-span-1 grid grid-cols-2">
          {skills.map((skill) => (
            <FadeInOut key={skill.id} className="mb-10">
              <div className="col-span-1 ">
                <h2 className="flex gap-4 items-center text-xl text-ink mb-4">
                  {skill.icon}
                  {skill.title}
                </h2>
                <ul className="space-y-2 text-neutral-700 list-disc list-inside ">
                  {skill.list.map((item, index) => (
                    <li key={index} className="text-sm lg:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOut>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
