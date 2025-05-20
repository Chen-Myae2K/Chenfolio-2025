import React from "react";
import HorizontalScroll from "./animation/horizontal-scroll-carousel";
import Heading from "./ui/heading";

const RecentProjectSection = () => {
  return (
    <section className="w-[90%] mx-auto font-manrope my-30 text-ink">
      <Heading title="Some of my selected work" subtitle="[Projects]" />
   
      <HorizontalScroll/>
    </section>
  );
};

export default RecentProjectSection;
