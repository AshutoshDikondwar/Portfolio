import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import disney from "@/public/disneyclone.png";
import flinx from "@/public/flinx.png";
import ecom from "@/public/ecom.png";
import discord from "@/public/discord.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const educationData = [
  {
    title: "Bachelor of Engineering",
    location: "Nagpur, Maharashtra",
    description:
      "After completion of degree took admission in CDAC diploma cource",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },

  {
    title: "Full-Stack Developer",
    location: "Pune, Maharashtra",
    description:
      "Completede PG-DAC diploma cource from CDAC Pune. I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Flinx Saas",
    description:
      "Flinx is a white-label multitenant SaaS application for efficient multi-vendor B2B2B management.",
    tags: ["React", "Next.js", "Prisma", "Supabase", "Tailwind", "Stripe"],
    imageUrl: flinx,
    github: 'https://github.com/AshutoshDikondwar/Flinx',
    live: 'https://flinxproduction.vercel.app/'

  },

  {
    title: "Disney Plus Clone",
    description:
      "Developed a Disney Plus clone project to emulate the user experience and content delivery system of the streaming platform, showcasing skills in front-end development and UI design.",
    tags: ["React", "Firebase", "JWT", "Redux"],
    imageUrl: disney,
    github: 'https://github.com/AshutoshDikondwar/disney-clone',
    live: 'https://disneyplus-clone-b8ff8.web.app'
  },

  {
    title: "Discord Server",
    description:
      "Created a Discord server project to replicate the communication features of the popular messaging platform, demonstrating proficiency in backend development and real-time messaging protocols.",
    tags: ["React", "Next.js", "Prisma", "Supabase", "Tailwind", "Web sockets"],
    imageUrl: discord,
    github: 'https://github.com/AshutoshDikondwar/Discord-clone',
    live: 'https://discord-clone-delta-five.vercel.app/'

  },

  {
    title: "ShopEasy",
    description:
      "Developed ShopEasy, an ecommerce web application with intuitive UI/UX, robust product management, and streamlined user experience.",
    tags: ["React", "MongoDB", "Node.Js", "Redux", "Stripe"],
    imageUrl: ecom,
    github: 'https://github.com/AshutoshDikondwar/Ecommerce-MERN',
    live: ''
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SQL",
  "Linux",
  "Redux",
  "Express",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Framer Motion",
  "Material UI"
] as const;