import { Javascript,_React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import type { ComponentType } from "react"
import CurrencyExchangeImage from "./../assets/projects/money-exchange.png"
import FrontEnd from "./../assets/certificates/Front-end.png"
import JavaScript from "./../assets/certificates/JavaScript.png"
import React from "./../assets/certificates/React.png"
import Nextjs from "./../assets/certificates/Nextjs.png"
import Tailwind from "./../assets/certificates/tailwind.png"
import TypeScript from "./../assets/certificates/TypeScript.png"
import Responsive from "./../assets/certificates/Responsive.png"
import Git from "./../assets/certificates/Git.png"
import Vite from "./../assets/certificates/Vite.png"

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
    
]

export const certificates = [
    {
        title: "Front-End Developer",
        image: FrontEnd,
        month: "Month",
        year: "Year",
    },
    {
        title: "JavaScript",
        image: JavaScript,
        month: "Month",
        year: "Year",
    },
    {
        title: "React",
        image: React,
        month: "Month",
        year: "Year",
    },
    {
        title: "Next.js",
        image: Nextjs,
        month: "Month",
        year: "Year",
    },
    {
        title: "Tailwind CSS",
        image: Tailwind,
        month: "Month",
        year: "Year",
    },
    {
        title: "TypeScript",
        image: TypeScript,
        month: "Month",
        year: "Year",
    },
    {
        title: "Responsive Web Design",
        image: Responsive,
        month: "Month",
        year: "Year",
    },
    {
        title: "Git",
        image: Git,
        month: "Month",
        year: "Year",
    },
    {
        title: "Vite",
        image: Vite,
        month: "Month",
        year: "Year",
    },
];