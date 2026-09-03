import { Javascript,_React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import type { ComponentType } from "react"
import CurrencyExchangeImage from "./../assets/projects/money-exchange.png"
import KanbanTaskManagementImage from "./../assets/projects/KanbanTaskManagement.png"
import FrontEnd from "./../assets/certificates/Front-end.png"
import JavaScript from "./../assets/certificates/JavaScript.png"
import React from "./../assets/certificates/React.png"
import Nextjs from "./../assets/certificates/Nextjs.png"
import Tailwind from "./../assets/certificates/tailwind.png"
import TypeScript from "./../assets/certificates/TypeScript.png"
import Responsive from "./../assets/certificates/Responsive.png"
import Git from "./../assets/certificates/Git.png"
import Vite from "./../assets/certificates/Vite.png"
import AiEngineering from "./../assets/certificates/Ai-engineering.png"

type Technology = {
  name: string;
  icon?: ComponentType<{ size?: number }>
}

type Link ={
    demo : string,
    github : string,
}

export type Project = {
  id: number;
  image:string
  title: string;
  description: string;
  year: number;
  role: string;
  technologies: Technology[]
  link : Link
}

export const projects:Project[] =[
    {
        id:1,
        image: CurrencyExchangeImage,
        title:'Currency Exchange App',
        description:'A responsive currency exchange app built to make checking and comparing exchange rates simple. Users can convert currencies, compare multiple currencies, save favorite pairs, and view their conversion history.',
        year:2026,
        role:'Front-end Developer',
        technologies: [
            {
              name: "JavaScript",
              icon: Javascript,
            },
            {
              name: "React",
              icon: _React,
            },
            {
              name: "TypeScript",
              icon: TypescriptIcon,
            },
            {
              name: "Next.js",
              icon: NextjsIcon,
            },
            {
              name: "Tailwind CSS",
              icon: TailwindIcon,
            },
            {
              name: "Frankfurter API",
            },
        ],
        link: {
            demo : 'https://currency-exchange-dashboard-puce.vercel.app/',
            github:'https://github.com/peterpaing/currency-exchange-dashboard.git'

        }
    },
    {
          id: 2,
          image: KanbanTaskManagementImage,
          title: "Kanban Task Management App",
          description:
            "A responsive Kanban task management app for organizing work across custom boards and columns. Users can create, edit, and delete boards and tasks, manage subtasks, update task statuses, switch between light and dark mode, and keep their data saved in browser local storage.",
          year: 2026,
          role: "Front-end Developer",
          technologies: [
            {
              name: "React",
              icon: _React,
            },
            {
              name: "TypeScript",
              icon: TypescriptIcon,
            },
            {
              name: "Next.js",
              icon: NextjsIcon,
            },
            {
              name: "Tailwind CSS",
              icon: TailwindIcon,
            },
            {
              name: "Local Storage",
            },
          ],
          link: {
            demo: 'https://kanban-task-management-nine-rho.vercel.app/',
            github:'https://github.com/peterpaing/kanban-task-management.git',
          },
    },
]

export const certificates = [
  {
    title: "Learn Next.js",
    image: Nextjs,
    month: "August",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXADevcWYwtycSjPFt6T7YzfkqQ"
  },
  {
    title: "Learn Tailwind CSS",
    image: Tailwind,
    month: "August",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qvw8tvN4tdyUJ664U"
  },
  {
    title: "Learn React",
    image: React,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfqFQfj4jHFyX2cEL"
  },
  {
    title: "Front-End Developer Career Path",
    image: FrontEnd,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfrVKc8WhjECs6WFr"
  },
  {
    title: "Learn TypeScript",
    image: TypeScript,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qyLkGYHVUewP1z9Gv"
  },
  {
    title: "Learn Git",
    image: Git,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXCLJ3AdyVfjZjFtayBmTuMtbVT"
  },
  {
    title: "Intro to Vite",
    image: Vite,
    month: "July",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2ffentAFPFfDHTUTVhUMXAG5y5VvWg6eZM91HQSbCJHyTo"
  },
  {
    title: "Learn JavaScript",
    image: JavaScript,
    month: "June",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert24zAwPPowYSZ13jz4hsZrfuTurhb3CkkuBWG4"
  },
  {
    title: "Intro to AI Engineering",
    image: AiEngineering,
    month: "June",
    year: "2026",
    link: "https://scrimba.com/@PyaeSonePaing-104:certs;cert2JbLs3qgBjmnFD6isMRp8qy8bXM86wU38DwLrY"
  },
  {
    title: "Responsive Web Design",
    image: Responsive,
    month: "May",
    year: "2026",
    link: "https://www.freecodecamp.org/certification/guanqt/responsive-web-design-v9"
  },
]