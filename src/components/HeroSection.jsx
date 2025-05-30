import React from "react";
import { Letter } from "./animation/text-randomized";
import { FlipWords } from "./animation/flip-words";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import DateTimeLocation from "./ui/date-time-location";

const HeroSection = () => {
  const text = "Chen Myae Kay Khaing";
  const words = ["Frontend", "Backend", "Mobile", "Website"];
  return (
    <section className="h-screen overflow-x-hidden bg-gradient-to-t from-[#5EACFF] via-[#7EBEFF] to-[#C4E1FF] relative">
      <div className="  w-[90%] mx-auto ">
        <div className="  absolute bottom-7 ">
          <div className="text-xl text-semibold w-full lg:w-2/3 lg:text-[35px] leading-11 text-white/80 font-manrope ">
            Meet your trusted <FlipWords words={words} /> developer, building
            dynamic digital experiences for web apps, SaaS, websites, and mobile
            applications.
          </div>
          <h1 className="font-manrope  font-extrabold leading-16  lg:mb-1 lg:leading-tight text-[12vw] lg:text-[8vw] text-nowrap text-white text-whitepointer-events-none whitespace-pre-wrap lg:bg-gradient-to-b  from-9c81ff to-white/90 bg-clip-text lg:text-transparent">
            {/* {text.split("").map((letter, index) => {
              return <Letter letter={letter} key={`${index}-${letter}`} />;
            })} */}
            <TypingAnimation>Chen Myae Kay Khaing</TypingAnimation>
          </h1>
        </div>
        <DateTimeLocation />
      </div>
    </section>
  );
};

export default HeroSection;
