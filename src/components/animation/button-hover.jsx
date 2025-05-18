import { ArrowDown } from "lucide-react";
import React from "react";

const ButtonHover = () => {
  return (
    <>
      <button className="group relative h-12 text-xl font-medium w-fit px-5 rounded-full border-[1.5px] border-rose text-rose">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[140%] group-hover:skew-y-12">
            <div className="flex items-center">
              <p>Resume</p> <ArrowDown className="ms-2 text-xl " />
            </div>
          </div>
          <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
           <div className="flex items-center">
              <p>Resume</p> <ArrowDown className="ms-2 text-xl " />
            </div>
          </div>
        </span>
      </button>
    </>
  );
};
export default ButtonHover;
