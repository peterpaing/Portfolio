import { _React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import type { ComponentType } from "react"

type Technology = {
  name: string;
  icon?: ComponentType<{ size?: number }>
}

export type Project = {
  id: number;
  title: string;
  description: string;
  year: number;
  role: string;
  technologies: Technology[]
}

export const projects:Project[] =[
    {
        id:1,
        title:'Currency Exchange App',
        description:'A responsive currency exchange app built to make checking and comparing exchange rates simple. Users can convert currencies, compare multiple currencies, save favorite pairs, and view their conversion history.',
        year:2026,
        role:'Front-end Developer',
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
                name: "Frankfurter API",
            },
        ],
    }
]