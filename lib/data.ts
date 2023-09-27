import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import qTripImg from "@/public/QTrip.png";
import TeslaImg from "@/public/Tesla.png";
import TeerexImg from "@/public/Teerex.png";
import QkartImg from "@/public/QKart.png";
import XFlixImg from "@/public/XFlix.png";
import FileUploadImg from "@/public/FileUpload.png";


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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "Government Engineering College, Bilaspur CG",
    description:
      "I completed my engineering in Mechanical",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Post Graduation",
    location: "NIT Arunachal Pradesh",
    description:
      "I completed my Mtech in Renewable Energy",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Customer Solutions Engineer",
    location: "Avant Garde",
    description:
      "I designed On-Grid, Off-Grid, Hybrid Systems for residence and commercial projects. Meanwhile I got interested in web development and started my IT sector journey",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "FullStack (MERN) Fellowship",
    location: "Crio.do",
    description:
      "I learned MERN fullstack web development in 8 months and fetch job at actyv.ai",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "actyv.ai",
    description:
      "I worked as full-stack developer. My stack includes React, Nest.js, TypeScript, AntD, Redux-toolkit and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Mar 2023",
  },
  {
    title: "Backend Developer",
    location: "Digipay Fintech Vault Pvt Ltd",
    description:
      "I am now working as backend developer. My stack includes Nest.js, TypeScript and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "QTrip",
    description:
    "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities and making reservations.",
    tags: ["HTML", "JS", "CSS","Bootstrap", "Frontend"],
    imageUrl: qTripImg,
    demoLink:"https://qtrip-tw.netlify.app/"
  },
  {
    title: "Tesla Clone",
    description:
      "Tesla Clone made using styled component and Redux",
    tags: ["React","CSS","Redux","Frontend"],
    imageUrl: TeslaImg,
    demoLink: "https://tesla-clone-20222.netlify.app/"
  },
  {
    title: "Teerex",
    description:
      "A geektrust challenge - T-shirt shopping app with filtering",
    tags: ["React", "Vanilla CSS", "Frontend"],
    imageUrl: TeerexImg,
    demoLink:"https://teerex-store-an.netlify.app/"
  },
  {
    title: "QKart",
    description:
      "QKart is an e-commerce application with functional cart.",
    tags: ["React", "Material UI", "Node","Express","Mongo","JWT","Fullstack"],
    imageUrl: QkartImg,
    demoLink:"https://crio-qkart-frontend-qa.vercel.app/"
  },{
    title: "XFlix",
    description:
      "XFlix is a video sharing and playing platform, features uploading new videos.",
    tags: ["React", "Material UI", "Node","Express","Mongo","Fullstack"],
      imageUrl: XFlixImg,
    demoLink:"https://xflix-frontend018.netlify.app/"
  },{
    title: "File Upload",
    description:
      "File uploading website to AWS S3 bucket for user with expiration of files",
      tags: ["TypeScript","React","AWS", "Bootstrap", "Node","Nest","Mongo","Fullstack"],
      imageUrl: FileUploadImg,
    demoLink:"https://file-upload-ananya.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux-toolkit",
  "Bootstrap",
  "Material UI",
  "Ant Design",
  "Node.js",
  "Express",
  "Nest,js",
  "MongoDB",
  "MySQL",
  "Git",
  "Postman",
  "Swagger"
] as const;
