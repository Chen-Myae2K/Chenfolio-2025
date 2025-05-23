import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import DateTimeLocation from "./ui/date-time-location";
import ButtonHover from "./animation/button-hover";
import Heading from "./ui/heading";
import FadeInOut from "./animation/fade-in-out";
import myImage from "../../public/my_image.png"

const AboutSection = () => {
  return (
    <section className="w-[90%] mx-auto font-manrope my-30 text-ink">
      <Heading title="What i love to do" subtitle="[About Me]" />
      <div className="my-10">
        <img src={myImage} className="w-xs  object-cover" alt="" />
      </div>
      <div className="flex flex-col w-1/2 mt-30 ms-auto text-3xl leading-snug gap-8">
        <FadeInOut>
          {" "}
          <p>
            Hi, I’m a developer with over 1 year of experience, passionate about
            crafting clean and user-friendly digital experiences. I specialize
            in blending technology with creativity to deliver functional,
            impactful solutions that prioritize simplicity and usability.
          </p>
        </FadeInOut>
        <FadeInOut>
          <p>
            From coding and collaboration to hackathons and volunteering with
            youth empowerment organizations, I’m driven by the goal of creating
            meaningful solutions that resonate with users and make a positive
            impact on communities.
          </p>
        </FadeInOut>
        <FadeInOut>
          <p>Let’s build something extraordinary together.</p>
        </FadeInOut>
        <FadeInOut>
          <ButtonHover text="Drop me a line" />
        </FadeInOut>
      </div>
    </section>
  );
};

export default AboutSection;
