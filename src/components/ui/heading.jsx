import React from "react";
import { TextAnimate } from "../magicui/text-animate";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-xl uppercase ">
        <TextAnimate animation="fadeIn" by="line" as="p">
          {title}
        </TextAnimate>
      </div>
      <div className="text-sky font-medium text-lg">
        <TextAnimate animation="fadeIn" by="line" as="p">
          {subtitle}
        </TextAnimate>
      </div>
    </div>
  );
};

export default Heading;
