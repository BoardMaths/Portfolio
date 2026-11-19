import { title } from "framer-motion/client";
import backend from "../assets/backend.png";
import mobile from "../assets/mobile.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import docker from "../assets/docker.png";
import matrix from "../assets/matrix.png";
import aledin from "../assets/aledin.png";
import agromall from "../assets/agromall.png";
import bachel from "../assets/bachel.png";
import promptu from "../assets/promptu.png";
import cread from "../assets/cread.png";
import banza from "../assets/banza.png";
import threejs from "../assets/threejs.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Cyber Security Expert",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
  {
    title: "Web Designer",
    icon: backend,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: " Full Stack Web Developer",
    company_name: " Aledin",
    icon: aledin,
    iconBg: " #383E56",
    date: " March 2022 - present",
    points: [
      "  Developing and maintaining, websites and web applications using React.js, Next.js, Javascript, Python, Java, Node.js, Django, C, C++ and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedbacks to other developers",
    ],
  },
  {
    title: " Frontend Developer",
    company_name: " Agromall",
    icon: agromall,
    iconBg: " #E6DEDD",
    date: " Jan 2021 - Feb 2022",
    points: [
      "  Developing and maintaining  web applications frontend using React.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedbacks to other developers",
    ],
  },
  {
    title: " Web Developer",
    company_name: " Bachel Conglomerates",
    icon: bachel,
    iconBg: "  #383E56",
    date: " Jan 2019 - Jan 2021",
    points: [
      "  Developing and maintaining websites and  web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedbacks to other developers",
    ],
  },
  {
    title: " Full stack Developer",
    company_name: " Matrix holmes",
    icon: matrix,
    iconBg: "   #E6DEDD",
    date: " Feb 2018 - Dec 2018",
    points: [
      "  Developing and maintaining web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedbacks to other developers",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      " I thought it was impossible to make a website as beautiful as our product, but Williams prove me wrong",
    name: " Sara Oladipupo",
    designation: "CFO",
    company: " JIGGA",
    image: " https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      " I have never met a web developer who cares about their clients' success like Williams does",
    name: " Chris Benjamin",
    designation: "COO",
    company: " DEF Corp",
    image: " https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      " After Williams optimized our website, our traffic increased by 50%, we can't thank them enough",
    name: " James Wang",
    designation: "CTO",
    company: " Jagz Entertainment",
    image: " https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Promptu",
    description:
      "Web-based platform that allows users to search, prompts, providing a convenient and efficient way of getting updates for your field of choice.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptu,
    source_code_link: "https://github.com/BoardMaths/promptu",
  },
  {
    name: "Banza",
    description:
      "A comprehensive commercial platform that allow users to shop online, and offers currated recommendations for popular goods.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: banza,
    source_code_link: "https://github.com/BoardMaths/Banza",
  },
  {
    name: "cread",
    description:
      "Web application that allows users to trade, view trading trends, and make informed decisions based on market trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cread,
    source_code_link: "https://github.com/BoardMaths/cread",
  },
];

export { services, technologies, experiences, testimonials, projects };
