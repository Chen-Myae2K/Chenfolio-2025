import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-10 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
    <div key={card.id} className="group h-[700px] w-[800px] overflow-hidden ">
      <img
        src={card.url}
        className="w-full h-[540px]  object-cover bg-white border rounded-2xl shadow-2xs "
        alt=""
      />
      <p className="text-ink font-medium text-lg">{card.title}</p>
      <p className="text-neutral-500 text-normal">{card.description}</p>
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "/public/next-ecommerce-shop-img.png",
    id: 1,
    title: "Next Ecommerce Shop",
    description: "Ecommerce website for clothes shop",
    link: "",
  },
  {
    url: "/public/mm-pos-system-img.png",
    id: 2,
    title: "SmartPOS",
    description: "Point of sale system for small business",
    link: "",
  },
  {
    url: "/public/khh-secco-web-img.png",
    id: 3,
    title: "KHH SEECO",
    description: "A Portfolio website for desiccant company",
    link: "",
  },
  {
    url: "/public/sense-web-app-img.png",
    id: 4,
    title: "SENSE WEB APP",
    description: "Web application for planning tool software",
    link: "",
  },
];
