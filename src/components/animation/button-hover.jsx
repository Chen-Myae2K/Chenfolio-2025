import React from "react";

const ButtonHover = ({ text }) => {
  return (
    <>
      <button className="group relative h-12 text-lg font-medium w-fit px-4 rounded-full border-1 border-rose text-rose">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0  transition duration-500 group-hover:-translate-y-[110%] ">
            <div className="flex items-center">
              <p>{text}</p>
            </div>
          </div>
          <div className="absolute translate-y-[110%]  transition duration-500 group-hover:translate-y-0 ">
            <div className="flex items-center">
              <p>{text}</p>
            </div>
          </div>
        </span>
      </button>
    </>
  );
};
export default ButtonHover;
