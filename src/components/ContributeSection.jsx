import React from "react";
import Heading from "./ui/heading";
import ContributeTable from "./ui/contribute-table";

const ContributeSection = () => {
  const tableList = [
    {
      number: "01",
      title: "Web Design",
      caption:
        "As a web developer, I craft seamless, high-performing websites using both frontend and backend technologies. Whether it’s custom-coded, I deliver modern digital experiences enriched with smooth interactions and subtle animations.",
      category: "Design",
      tag: [
        "Creative Design",
        "UI Principles",
        "UX Heruistics",
        "Seamless Interaction",
        "UX Writing",
      ],
    },
    {
      number: "02",
      title: "Web Development",
      caption:
        "With a strong focus on clarity and brand storytelling, I transform business visions into visually compelling websites that leave a lasting impression. Every design choice is intentional — guided by UX best practices and a creative direction that brings purpose and personality to every pixel.",
      category: "Develop",
      tag: [
        "JS Frameworks",
        "Responsive Website",
        "Seamless Interaction",
        "Motion & Animations",
      ],
    },
    {
      number: "03",
      title: "Backend & Database",
      caption:
        "Driven by performance, security, and scalability, I architect backend systems that form the backbone of seamless digital experiences. Every technical decision is deliberate — from optimized data structures to robust API integrations — ensuring stability, efficiency, and trust behind every interaction.",
      category: "Build",
      tag: [
        "API Development",
        "Database Design",
        "Authentication",
        "Security",
        "Scalable Architecture",
      ],
    },
  ];
  return (
    <section className="w-[90%] mx-auto font-manrope my-30 text-ink">
      <Heading title="What I Can Contribute" subtitle="[Expertise]" />
      <div className="mt-20"></div>
      {tableList.map((list) => (
        <ContributeTable
          key={list.number}
          number={list.number}
          title={list.title}
          caption={list.caption}
          category={list.category}
          tag={list.tag}
        />
      ))}
    </section>
  );
};

export default ContributeSection;
