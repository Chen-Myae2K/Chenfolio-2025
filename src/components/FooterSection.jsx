import { CircleArrowUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import GradientFineLine from "./ui/gradient-fine-line";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section>
      <div className="w-[90%] mx-auto font-manrope py-5 font-medium lg:text-lg text-neutral-500">
        <div className="flex justify-between items-center">
          <p>Chen Myae Kay Khaing © {new Date().getFullYear()}</p>
          <button className="cursor-pointer" onClick={scrollToTop}>
            <CircleArrowUp size={32} />
          </button>
        </div>
      </div>
      <GradientFineLine />
    </section>
  );
};

export default FooterSection;
