import React from "react";

const ButtonHover = ({children}) => {
  return (
    <>
      <button className="group relative py-1 text-lg font-medium w-fit  ">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0  transition duration-500 group-hover:-translate-y-[110%] ">
            <div className="flex items-center">
              <div>{children}</div>
            </div>
          </div>
          <div className="absolute translate-y-[110%]  transition duration-500 group-hover:translate-y-0 ">
            <div className="flex items-center">
              <div>{children}</div>
            </div>
          </div>
        </span>
      </button>
    </>
  );
};
export default ButtonHover;
