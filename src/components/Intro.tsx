import { IoArrowUpSharp } from "react-icons/io5"
import profile from "./../assets/profile.png"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"

export default function Intro(){
    
    return (
        <section className="fade-up flex flex-col md:flex-row md:items-center md:mx-auto gap-4 md:w-7/8 lg:w-6/8 md:pt-15" >
            <div>
            <h2 className="font-bebas text-4xl md:text-5xl">hi, i am <br/>Pyae Sone Paing.</h2>
            <p className="mt-2 font-manrope text-base md:text-lg">A Yangon based front-end developer passionate about building accessible and user friendly websites.</p>
            <nav className="flex items-center my-4 md:my-10 gap-4">
            <a
            href="/#contact"
            className="flex h-[50px] w-[163px] items-center justify-center gap-2 rounded-3xl bg-[#D3E97A] text-zinc-900 shadow-md transition-transform duration-300 hover:scale-105"
            >
            Contact Me
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-zinc-900 text-white rotate-[40deg]">
                <IoArrowUpSharp />
            </span>
            </a>

            <a
            href="https://www.linkedin.com/in/pyae-sone-paing-06a283418/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D3E97A] text-xl text-neutral-800 shadow-xl transition-all duration-300 hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A]"
            >
            <GrLinkedinOption />
            </a>

            <a
            href="https://github.com/peterpaing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#D3E97A] text-xl text-neutral-800 shadow-xl transition-all duration-300 hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A]"
            >
            <FaGithub />
            </a>
            </nav>
            </div>

            <img
            src={profile}
            alt="Profile image"
            className="mx-auto block h-[378px] w-[343px] rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl border-2 object-cover shadow-lg transition-transform duration-300"
            />
        </section>
    )
}