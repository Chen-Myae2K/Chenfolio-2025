import React from "react";
import { TextAnimate } from "../magicui/text-animate";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h4 className="text-xl uppercase ">
        <TextAnimate animation="fadeIn" by="line" as="p">
          {title}
        </TextAnimate>
      </h4>
      <p className="text-sky font-medium text-lg">
        <TextAnimate animation="fadeIn" by="line" as="p">
          {subtitle}
        </TextAnimate>
      </p>
    </div>
  );
};

export default Heading;
