import React from "react";
import { TextAnimate } from "../magicui/text-animate";
import FadeInOut from "../animation/fade-in-out";

const ContributeTable = ({ number, title, caption, category, tag }) => {
  return (
      <FadeInOut>
        <div className="flex justify-between items-start py-10 text-ink border-b border-ink/50">
          <div className="text-rose font-medium text-lg">[{number}]</div>
          <div className="space-y-5 w-1/2">
            <div className="flex items-baseline justify-between">
              <p className="uppercase text-xl">{title}</p>
              <p className="text-base font-medium text-rose text-right">
                [{category}]
              </p>
            </div>
            <p className="text-lg">{caption}</p>
            <div>
              {tag.map((item, index) => (
                <span
                  key={index}
                  className="inline-block me-2 mb-2 text-nowrap rounded-full border-1 border-ink/50 px-4 py-1.5 text-base"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeInOut>
  );
};

export default ContributeTable;
