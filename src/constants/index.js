import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  web2,
  web3,
  web4,
  RentO,
  ResPro,
  citizen,
} from "../assets";

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
    title: "Web Developer",
    icon: web2,
  },
  {
    title: "React Native Developer",
    icon: web3,
  },
  {
    title: "Backend Developer",
    icon: web4,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
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
];

const aboutMe = {
  desc: `
        I'm Mahima Mukhi, a passionate and skilled coder with 1.5 years of hands-on experience in Java. I recently graduated from a Web and Mobile Development course, expanding my expertise in JS, HTML, CSS, React Native, React, MongoDB, and NodeJS. I've explored frameworks like Next.js and Three.js and am diving into Python for AI. Aspiring to be a full-stack developer, I'm committed to continuous learning and contributing to the future of technology. I thrive on creating efficient solutions, embracing new languages, frameworks, and technologies to make a positive impact.`,
};

const workDesc = {
  desc: `Below are projects that exemplify my skills and practical experience, providing real-world examples of my work. Each project is succinctly described, accompanied by links to their respective code repositories. These showcase my proficiency in tackling intricate problems, adeptness with various technologies, and effective project management capabilities.`,
};
const experiences = [
  {
    title: "Software Developer",
    company_name: "TCS",
    iconBg: "#000000",
    date: "Jul 2020 - Apr 2022",
    points: [
      "Built RESTful APIs and Microservices for a web application of a healthcare service company by using  Spring Boot and Java for efficient and scalable communication between different parts of an application.",
      "Constructed JUnit Test Cases for health care service website by using Spock framework to ensure each input of methods returned expected outcomes.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Three Gee Solution Pvt. Ltd.sla",
    iconBg: "#000000",
    date: "Feb 2020 - Jun 2020",
    points: [
      "Conducting thorough functionality testing of web-based application, identifying and documenting UI issues such as broken links, incorrect form validation, and inconsistent navigation.",
      "Interacted with clients on Zoom for daily Scrum meetings to present the progress of tasks, manage backlog tasks, and plan for the next sprint using the Jira board",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Tecore Labs Pvt. Ltd.",
    iconBg: "#000000",
    date: "Oct 2018 - Feb 2020",
    points: [
      "Redesigned organic fruits website's interface and architecture by collaborating with a team of 3 UI designers and 4 backend developers",
      "Collaborated with a team of 4 developers to design and implement Object-Oriented Programming techniques for a web-based retail application using Java and SpringBoot framework in order to maintain code libraries and reusable components",
      "Participated in team Scrum meetings, and contributed to planning, analysis, and retrospectives to make smooth deliveries of products to clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Mahima optimized our website, our traffic increased by 10%. We can't thank her enough!",
    name: "Atul Sharma",
    designation: "Product Manager",
    company: "Tecore Labs Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RentO",
    description:
      "Mobile app enhancing user experience for those seeking a new home in Vancouver. Our platform offers landlords a seamless way to showcase rentals through immersive panoramic views and AI-assisted descriptions.",
    tags: [
      {
        name: "React  Native",
        color: "text-lime-200",
      },
      {
        name: "MongoDB",
        color: "text-lime-200",
      },
      {
        name: "CSS",
        color: "text-lime-200",
      },
    ],
    image: RentO,
    source_code_link: "https://github.com/madhuneupane/RentO",
  },
  {
    name: "RestaurantPro",
    description:
      "A web app build for restaurant task tracking and employee performance management. With streamlined workflows, seamless task allocation, and enhanced team efficiency, RestaurantPro transforms restaurant operations.",
    tags: [
      {
        name: "React",
        color: "text-lime-200",
      },
      {
        name: "RestAPI",
        color: "text-lime-200",
      },
      {
        name: "NodeJS",
        color: "text-lime-200",
      },
    ],
    image: ResPro,
    source_code_link: "https://github.com/ansonsow/restaurantPro",
  },
  {
    name: "Citizen",
    description:
      "Citizen is an online application that enables users to notify the city authorities of issues so they can act quickly. Additionaly, users can fetch the reports that are posted around their areas and comment on them as it can help to resolve the problem faster.",
    tags: [
      {
        name: "JS",
        color: "text-lime-200",
      },
      {
        name: "HTML",
        color: "text-lime-200",
      },
      {
        name: "Firebase",
        color: "text-lime-200",
      },
    ],
    image: citizen,
    source_code_link: "https://github.com/ObikaKelvin/team06_pwa",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  aboutMe,
  workDesc,
};
