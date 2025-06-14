import React from "react";
import NavBarComponent from "./ui/nav-bar-component";

const NavBarSection = ({ sections}) => {
  return (
    <section className="w-[90%] mx-auto font-manrope">
      <NavBarComponent  />
    </section>
  );
};

export default NavBarSection;
