import { IoArrowUpSharp } from "react-icons/io5"
import profile from "./../assets/profile.jpg"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"

export default function Intro(){
    
    return (
        <section className="flex flex-col gap-4" >
            <div>
            <h2 className="font-bebas text-4xl md:text-5xl">hi, i am <br/>Pyae Sone Paing.</h2>
            <p className="mt-2 font-manrope text-base md:text-lg">A Yangon based front-end developer passionate about building accessible and user friendly websites.</p>
            <nav className="flex items-center mt-4 gap-4">
            <a href="/#contact" className="block flex bg-[#D3E97A] w-[163px] h-[50px] rounded-3xl flex items-center justify-center text-zinc-900 gap-2 shadow-md">Contact Me
            <span className="bg-zinc-900 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center rotate-[40deg]"><IoArrowUpSharp/></span></a>
            <a href="" 
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D3E97A] text-xl text-neutral-800 shadow-xl dark:bg-neutral-800 dark:text-[#D3E97A]"><GrLinkedinOption/></a>
            <a href=""
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D3E97A] text-xl text-neutral-800 shadow-xl dark:bg-neutral-800 dark:text-[#D3E97A]"
            ><FaGithub /></a>
            </nav>
            </div>

            <img src={profile} alt="Profile image" className="w-[373px] h-[378px] mt-6 mx-auto rounded-lg object-cover shadow-md"/>
        </section>
    )
}