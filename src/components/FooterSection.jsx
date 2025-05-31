import { CircleArrowUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

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
            <CircleArrowUp  size={32} />
          </button>
        </div>
      </div>
      <div className="h-3 bg-gradient-to-r from-[#5FAEFF] via-[#89BCF2] to-[#6ab2ff]"></div>
    </section>
  );
};

export default FooterSection;
