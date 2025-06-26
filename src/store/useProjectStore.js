import { create } from "zustand";
import nextEcommerce from "../../public/next-ecommerce-shop-img.png";
import klickPOS from "../../public/klick-pos-system.png";
import khhSecco from "../../public/khh-secco-web-img.png";
import sense from "../../public/sense-web-app-img.png";
import next1 from "/public/thenext/next1.png";
import next2 from "/public/thenext/next2.png";
import next3 from "/public/next-ecommerce-shop-img.png";
import khh1 from "/public/khhsccco/khh1.png";
import khh2 from "/public/khhsccco/khh2.png";
import klick1 from "/public/klickpos/klick1.png";
import klick2 from "/public/klickpos/klick2.png";
import sense1 from "/public/sense/sense1.png";
import sense2 from "/public/sense/sense2.png";

const useProjectStore = create((set) => ({
  projectList: [
    {
      id: 1,
      image: nextEcommerce,
      title: "Next Ecommerce Shop",
      description: "Ecommerce website for clothes shop",
      link: "",
      slug: "next-ecommerce-shop",
      showcaseImage: [next1, next2],
      detail: {
        overview:
          "A scalable e-commerce site built with Next.js, HeroUI, and ShadCN UI. Includes product listings, wishlist, and a responsive, accessible shopping experience.",
        year: "2024",
        mainActivities: [
          {
            role: "Frontend Developer",
            serviceProvided:
              "Interactive UI Development, E-commerce Features Integration, API integration",
          },
        ],
        description:
          "Next TrendFlow E-commerce is a project where I contributed to the development and enhancement of a cutting-edge online retail platform. My task involved creating intuitive user experiences and dynamic user interfaces, as well as integrating various e-commerce functionalities to ensure a seamless shopping journey. This project focused on building a scalable and visually appealing e-commerce solution designed to drive user engagement and optimize conversion rates for future trends in online retail.",
      },
    },
    {
      id: 2,
      image: klickPOS,
      title: "Klick POS",
      description: "Point of sale system for small business",
      link: "",
      slug: "klick-pos",
      showcaseImage: [klick1, klick2],
      detail: {
        overview:
          "A full-stack POS system using React, Zustand, and Laravel. Features include role-based access, live cart updates, voucher automation.",
        year: "2024",
        mainActivities: [
          {
            role: "Frontend Developer",
            serviceProvided:
              "MVVM Architecture Development, State Management Implementation, Backend API Development, Database Integration",
          },
        ],
        description:
          "Developed a full-stack Point of Sale (POS) system with a clean MVVM architecture. The frontend was built using React.js with Zustand for state management, while the backend API development was done using Laravel with MVC architecture pattern. Key business functionalities such as user role management, a dynamic cart system, and automated voucher generation were implemented to streamline in-store sales processes. The project also involved integrating a MySQL database and building robust RESTful APIs for reliable data operations.",
      },
    },
    {
      id: 3,
      image: khhSecco,
      title: "KHH SECCO Website",
      description: "A Portfolio website for desiccant company",
      link: "",
      slug: "khh-seeco",
      showcaseImage: [khh1, khh2],
      detail: {
        overview:
          "A responsive corporate website built with React. Includes scroll animations via GSAP and Framer Motion to enhance UI.",

        year: "2024",
        mainActivities: [
          {
            role: "Website Developer",
            serviceProvided:
              "Responsive Web Design, UI/UX Development, Animation Implementation",
          },
        ],
        description:
          "Designed and developed a responsive architectural website from scratch using React.js and Tailwind CSS. The primary focus was on enhancing brand presence and performance across all modern devices. The project also involved implementing scroll-based animations and smooth transitions using GSAP and Framer Motion to create an engaging user experience.",
      },
    },
    {
      id: 4,
      image: sense,
      title: "SENSE WEB APP",
      description: "Web application for planning tool software",
      link: "",
      slug: "sense-web-app",
      showcaseImage: [sense1, sense2],
      detail: {
        overview:
          "A fullstack planning tool web app featuring interactive 3D environments built with Three.js. Includes custom backend APIs, database integration, and a smooth user experience for space management tasks.",
        year: "2025",
        mainActivities: [
          {
            role: "Fullstack Developer",
            serviceProvided:
              "3D Planning Tool Development, Web Application, Database Design & Management, Backend Logic Implementation",
          },
        ],
        description:
          "Developed a comprehensive web application for planning tool management, primarily utilizing **Three.js** to create interactive 3D environments. My role as a fullstack developer involved building robust backend APIs for data management and integrating them with the frontend, ensuring seamless functionality and a powerful user experience for complex planning tasks.",
      },
    },
  ],
}));

export default useProjectStore;
