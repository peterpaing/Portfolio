import {Javascript,Css,_React,TypescriptIcon,NextjsIcon,TailwindIcon} from "@dev.icons/react"
import { FaHtml5 } from "react-icons/fa"
import type { ComponentType } from "react"

type Technology ={
    name : string,
    icon :ComponentType<{ size?: number }>
}

export default function About(){

    const technologies:Technology [] = [
  { name: "CSS", icon: Css },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: _React },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Next.js", icon: NextjsIcon },
]

    return(
    <section className="mx-auto flex w-11/12 flex-col gap-8 border-t border-neutral-400 py-10 dark:border-neutral-700 md:flex-row md:items-center md:gap-12 lg:gap-20">
    <div className="md:w-2/6">
        <h4 className="font-bebas text-4xl uppercase tracking-wide md:text-5xl lg:text-6xl">
        About Me
        </h4>
    </div>

    <div className="md:w-4/6">
        <p className="font-manrope text-lg leading-7 text-neutral-900 dark:text-zinc-100 md:leading-9">
        I am a front-end developer passionate about building modern and
        user-friendly websites. Focused on creating accessible and meaningful
        web experiences.
        </p>

        <p className="mt-4 max-w-3xl font-manrope text-sm leading-5 text-neutral-600 dark:text-neutral-400 md:text-base md:leading-6">
        I enjoy working with React, TypeScript, Next.js, and Tailwind CSS. I’m
        passionate about solving problems, learning new technologies, and
        continuously improving my development skills. I care about accessibility
        and clean, responsive interfaces, while also exploring UI/UX design.
        Outside of coding, I enjoy playing football, photography, and gaming.
        </p>

        <div className="mt-8">
        <h5 className="mb-6 font-manrope text-sm font-semibold uppercase tracking-wide">
            Technologies I work with
        </h5>

        <div className="flex flex-wrap gap-3">
    
        <div className="flex items-center gap-2 rounded-full bg-[#DDE2D8] px-3 py-1.5 text-xs dark:bg-neutral-800">
        <FaHtml5 className="text-[14px] text-[#E34F26]"/>
        <span>HTML</span>
        </div>
      {technologies.map(({ name, icon: Icon }) => (
            <div
            key={name}
            className="flex items-center gap-2 rounded-full bg-[#DDE2D8] px-3 py-1.5 text-xs dark:bg-neutral-800"
            >
            <Icon size={14} />
            <span>{name}</span>
            </div>
        ))}
    </div>
    </div>
    </div>
</section>
    )
}