import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ShinyButton } from "../magicui/shiny-button";
import { ArrowRight } from "lucide-react";
import nextEcommerce from "../../../public/next-ecommerce-shop-img.png";
import smartPOS from "../../../public/mm-pos-system-img.png";
import khhSecco from "../../../public/khh-secco-web-img.png";
import sense from "../../../public/sense-web-app-img.png";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <section ref={targetRef} className="relative h-[300vh] mt-10 ">
      <div className="sticky top-5 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex space-x-16">
          {cards.map((card) => {
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

        <Link to={`/project-detail/${card.id}`}>
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

const cards = [
  {
    id: 1,
    image: nextEcommerce,
    title: "Next Ecommerce Shop",
    description: "Ecommerce website for clothes shop",
    link: "",
  },
  {
    id: 2,
    image: smartPOS,
    title: "SmartPOS",
    description: "Point of sale system for small business",
    link: "",
  },
  {
    id: 3,
    image: khhSecco,
    title: "KHH SEECO",
    description: "A Portfolio website for desiccant company",
    link: "",
  },
  {
    id: 4,
    image: sense,
    title: "SENSE WEB APP",
    description: "Web application for planning tool software",
    link: "",
  },
];
