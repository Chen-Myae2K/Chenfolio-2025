import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ShinyButton } from "../magicui/shiny-button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useProjectStore from "@/store/useProjectStore";

const HorizontalScroll = () => {
  const navigate = useNavigate();
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);
  const { projectList } = useProjectStore();

  return (
    <section ref={targetRef} className="relative h-[300vh] mt-10 ">
      <div className="sticky top-5 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex space-x-16">
          {projectList.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group h-[650px]  w-[800px] overflow-hidden ">
      <img
        src={card.image}
        className="w-full h-[540px]  object-cover bg-white border rounded-2xl shadow-2xs "
        alt=""
      />
      <div className="flex justify-between items-center mt-4 mx-0.5">
        <div className="">
          <p className="text-ink font-medium text-lg">{card.title}</p>
          <p className="text-neutral-500 text-normal">{card.description}</p>
        </div>

        <Link to={`/project-detail/${card.slug}`}>
          <ShinyButton>
            <div className="flex justify-between gap-2 font-medium sm:text-xs lg:text-base items-center  text-ink">
              <p>VIEW</p>
              <ArrowRight strokeWidth={1} weight="light" />
            </div>
          </ShinyButton>
        </Link>
      </div>
    </div>
  );
};

export default HorizontalScroll;
