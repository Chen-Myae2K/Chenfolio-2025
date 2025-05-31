import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-scroll";

const mobileNavItems = [
  { id: "home", navTitle: "home." },
  { id: "about", navTitle: "about." },
  { id: "work", navTitle: "work." },
  { id: "contact", navTitle: "contact." },
];

const NavBarComponent = ({ sections }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev !== undefined) {
      if (latest > prev && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: { delay: 0.15, duration: 1.1, ease: [0.74, 0, 0.19, 1.02] },
    },
    closed: {
      y: "-100%",
      transition: { delay: 0.35, duration: 0.63, ease: [0.74, 0, 0.19, 1.02] },
    },
  };

  const fadeInVariant = {
    opened: { opacity: 1, transition: { delay: 1.2 } },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: { delayChildren: 1, staggerChildren: 0.18 },
    },
    closed: {
      transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.65, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  // const handleScrollToSection = (sectionKey) => {
  //   setMobileNavOpen(false);
  //   sections[sectionKey]?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-5 lg:px-6 lg:py-3 fixed z-50 left-0 w-full top-0"
    >
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="flex justify-between items-center mx-3 lg:mx-10"
      >
        <div className="overflow-hidden mix-blend-difference bg-transparent">
          <motion.div
            variants={hideNavItemsVariant}
            className="font-mono size-6 lg:size-12 rounded-full cursor-pointer"
            onClick={() => handleScrollToSection("home")}
          >
            <img src="/icon.svg" alt="Logo" />
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="uppercase text-sm lg:text-lg font-medium font-monos text-neutral-800/70 cursor-pointer tracking-tight"
          >
            Menu
          </motion.div>
        </div>

        <motion.div
          variants={mobileMenuVariant}
          className="fixed top-0 left-0 flex flex-col items-center w-full h-screen bg-primary-foreground"
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="self-end mt-6 lg:mt-9 mr-9 lg:mr-16 outline-none border-none bg-transparent uppercase text-xs lg:text-lg tracking-tight font-monos font-medium text-primary-bee-black cursor-pointer"
          >
            Close
          </motion.button>

          <div className="flex w-full lg:flex-row justify-between flex-col-reverse lg:ml-10 h-5/6 lg:items-center">
            <motion.ul
              className="px-5 lg:self-end flex lg:flex-col gap-4"
              variants={liVariant}
            >
              <li>
                <a
                  href="https://www.facebook.com/chenmyae.kaykhaing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    color="rgb(82 82 91)"
                    className="text-3xl lg:text-4xl"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chenmyae_kkhaing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram color="rgb(82 82 91)" size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chenmyaekaykhaing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    color="rgb(82 82 91)"
                    className="text-3xl lg:text-4xl"
                  />
                </a>
              </li>
            </motion.ul>

            <motion.ul variants={ulVariant} className="list-none px-6 w-full">
              {mobileNavItems.map((navItem) => (
                <Link to={navItem.id} smooth={true} duration={500}>
                  <motion.li
                    key={navItem.id}
                    // onClick={() => handleScrollToSection(navItem.id)}
                    onClick={() => setMobileNavOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="my-5 text-neutral-600 transition ease-in-out font-semibold opacity-40 hover:opacity-100 font-monos overflow-hidden select-none cursor-pointer"
                  >
                    <motion.div
                      variants={liVariant}
                      className="text-left text-5xl lg:text-7xl"
                    >
                      {navItem.navTitle}
                    </motion.div>
                  </motion.li>
                </Link>
              ))}
            </motion.ul>

            <div className="w-1 h-8" />
          </div>
        </motion.div>
      </motion.nav>
    </motion.nav>
  );
};

export default NavBarComponent;
