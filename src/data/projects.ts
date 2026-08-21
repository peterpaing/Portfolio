import { Javascript,_React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import type { ComponentType } from "react"
import CurrencyExchangeImage from "./../assets/money-exchange.png"

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