import React, { useState } from "react";
import Heading from "./ui/heading";
import FadeInOut from "./animation/fade-in-out";
import { ArrowUpRight } from "lucide-react";
import ButtonHover from "./animation/button-hover";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const contactInfoList = [
    {
      id: 1,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/chenmyaekaykhaing/",
    },
    {
      id: 2,
      title: "GitHub",
      link: "https://github.com/Chen-Myae2K",
    },
    {
      id: 3,
      title: "Behance",
      link: "https://www.behance.net/chenmyaekaykhaing",
    },
    {
      id: 4,
      title: "Daily.dev",
      link: "https://app.daily.dev/chenmyaekaykhaing",
    },
  ];
  return (
    <section
      id="contact"
      className="w-[90%] mx-auto font-manrope pt-30 text-ink"
    >
      <Heading title="Let's Connect, Thank you" subtitle="[Contacts]" />
      <div className="grid lg:grid-cols-2 ">
        <div className="col-span-1"></div>
        <div
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="col-span-1 mt-10"
        >
          {contactInfoList.map((item) => (
            <FadeInOut key={item.id}>
              <Link
                to={item.link}
                target="_blank"
                key={item.id}
                className={`flex border-b  w-full border-gray-500    text-sky items-center gap-2 py-2 ${
                  item.id == 1 ? "border-t" : ""
                }`}
              >
                <ButtonHover>
                  <div className="flex">
                    <p className="text-neutral-700 text-lg">{item.title}</p>
                    <ArrowUpRight strokeWidth={1} weight="light" size={28} />
                  </div>
                </ButtonHover>
              </Link>
            </FadeInOut>
          ))}
        </div>
      </div>
      <FadeInOut>
        <div className="grid grid-cols-2 mt-20 items-center">
          <div className="col-span-1">
            <Heading title="" subtitle="[Email]" />
          </div>
          <div className="col-span-1 border-b border-gray-500 py-5">
            <Link
              to="mailto:tracycmkk@gmail.com"
              className="lg:text-3xl text-lg  "
            >
              tracycmkk@gmail.com
            </Link>
          </div>
        </div>
      </FadeInOut>
    </section>
  );
};

export default ContactSection;
