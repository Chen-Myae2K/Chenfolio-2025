import React from "react";
import { TextAnimate } from "./magicui/text-animate";
import DateTimeLocation from "./ui/date-time-location";
import ButtonHover from "./animation/button-hover";

const AboutSection = () => {
  return (
    <section className="w-[90%] mx-auto font-manrope my-30 text-ink">
      <div>
        <h4 className="text-xl ">WHAT I LOVE TO DO*</h4>
        <p className="text-rose font-medium text-lg">[About Me]</p>
      </div>
      <div className="my-10">
        <img src="/public/my_image.png" className="w-xs  object-cover" alt="" />
      </div>
      <div className="flex flex-col w-1/2 mt-30 ms-auto text-3xl leading-snug gap-8">
        <TextAnimate animation="fadeIn" by="line" as="p">
          {`Hi, I’m a developer with over 1 year of experience, passionate about
          crafting clean and user-friendly digital experiences. I specialize in
          blending technology with creativity to deliver functional, impactful
          solutions that prioritize simplicity and usability.`}
        </TextAnimate>
        <TextAnimate animation="fadeIn" by="line" as="p">
          {`From coding and collaboration to hackathons and volunteering with
          youth empowerment organizations, I’m driven by the goal of creating
          meaningful solutions that resonate with users and make a positive
          impact on communities.`}
        </TextAnimate>
        <TextAnimate animation="fadeIn" by="line" as="p">
          {`Let’s build something extraordinary together.`}
        </TextAnimate>

        <ButtonHover />
      </div>
    </section>
  );
};

export default AboutSection;
