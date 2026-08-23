import { IoArrowUpSharp } from "react-icons/io5"
import profile from "./../assets/profile.png"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"

export default function Intro(){
    
    return (
        <section className="max-w-[1140px] fade-up flex flex-col md:flex-row md:items-center mb-16 md:mx-auto gap-4 md:w-7/8 md:pt-12" >
            <div className="md:w-[55%]">
            <h2 className="font-bebas text-4xl md:text-6xl text-shadow-md">hi, i am <br/>Pyae Sone Paing.</h2>
            <p className="mt-2 font-manrope text-neutral-600 dark:text-neutral-400 text-base md:text-lg text-shadow-md">A Yangon based front-end developer passionate about building accessible and user friendly websites.</p>
            <nav className="flex items-center my-4 md:mt-10 gap-4">
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pyaesonepaing104@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[50px] w-[163px] items-center justify-center gap-2 rounded-3xl bg-[#D98C5F] text-[#111111] text-shadow-md shadow-md
            transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
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
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#BDD45F] text-xl text-[#111111] shadow-xl 
            transition-all duration-300 hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A] focus-visible:outline-2 focus-visible:outline-[#BDD45F] focus-visible:outline-offset-6"
            >
            <GrLinkedinOption />
            </a>

            <a
            href="https://github.com/peterpaing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#BDD45F] text-xl text-[#111111] shadow-xl 
            transition-all duration-300 hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A] focus-visible:outline-2 focus-visible:outline-[#BDD45F] focus-visible:outline-offset-6"
            >
            <FaGithub />
            </a>
            </nav>
            </div>
        
        <img
            src={profile}
            alt="Profile image"
            className="
            mx-auto block
            h-[378px] w-[343px]
            rounded-tl-4xl rounded-tr-md
            rounded-bl-md rounded-br-4xl
            border-2 object-cover
            shadow-lg transition-transform duration-300
            dark:border-zinc-600
            "
        />
        </section>
    )
}