"use client"

import type { Experience, Project, Skill } from "@/types"
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiFigma } from "react-icons/si"

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Mobile Application Developer",
    company: "Magnitude plus Co., Ltd.",
    period: "2025",
    description: "Internship project developing a job-ordering/receiving application for trucking companies and an admin dashboard website using React.js, Tailwind CSS, React Native, Node.js, express, and MySQL in collaboration with team members to create applications that meet client needs.",
  },
  // {
  //   id: 2,
  //   role: "Web Developer",
  //   company: "",
  //   period: "2025 - 2026",
  //   description: "Developed a freelance job-matching platform connecting developers with clients as a capstone project, utilizing React, JavaScript, Tailwind CSS, Node.js, Express, and MongoDB.",
  // },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "/freelancefreely/freelancefreely.png",
    description: "A freelance job-matching platform that connects developers with clients seeking tech services.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "https://freelancefreely.vercel.app/",
    screenshots: ["/freelancefreely/1.png", "/freelancefreely/2.png", "/freelancefreely/3.png", "/freelancefreely/4.png", "/freelancefreely/5.png"],
  },
  {
    id: 2,
    title: "AI Crop Prediction System",
    category: "AI / Data Science",
    image: "/Crop_Prediction_System.png",
    description: "An AI system that predicts suitable crops for specific areas using a Decision Tree model trained on weather and soil datasets.",
    tech: ["Python", "Streamlit"],
    link: "https://crop-prediction-system.streamlit.app/",
  },
  {
    id: 3,
    title: "Mask Detection System",
    category: "AI / Computer Vision",
    image: "/Mask_Detection_System.png",
    description: "A real-time mask detection system using YOLOv5 to analyze camera feeds and trigger alerts for unmasked individuals.",
    tech: ["HTML", "JavaScript", "TensorFlow.js"],
    link: "https://thanaphat-ch.github.io/maskDetection/",
  },
  {
    id: 4,
    title: "To-Do List Application",
    category: "Web Application",
    image: "/todo.png",
    description: "A to-do list web application with a secure member system, allowing users to easily manage their daily tasks.",
    tech: ["Next.js", "NextAuth", "Supabase"],
    link: "https://todo-list-thanaphat.vercel.app/",
  },
]

export const SKILLS: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "React Native", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "express.js", icon: SiExpress, color: "text-gray-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-800" },
  // { name: "Figma", icon: SiFigma, color: "text-pink-500" },
]
