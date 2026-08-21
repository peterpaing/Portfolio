import { FaGithub } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"


export default function Footer(){
    return (
        <section id="contact" className="mx-auto w-11/12 border-t-1 border-neutral-400 dark:border-neutral-700 py-10 flex flex-col justify-center items-center gap-3">
            <h4 className="font-bebas text-3xl md:text-4xl uppercase tracking-wide">Let’s connect</h4>
            <p className="text-neutral-800 dark:text-neutral-400">
            Say hello at{" "}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pyaesonepaing104@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-7 decoration-[#B9683F] text-black dark:text-white hover:text-[#B9683F]"
            >
                pyaesonepaing104@gmail.com
            </a>
            </p>
            <p className="leading-5 text-neutral-800 dark:text-neutral-400">For more info, here’s my{" "}
             <a className="underline underline-offset-3 decoration-[#B9683F] text-black dark:text-white hover:text-[#B9683F]">resume</a></p>
            <div className="flex items-center gap-4 text-xl mt-3 text-[#B9683F] text-shadow-md">
                <a className="transition-all duration-300 hover:scale-110" target="_blank"
                href="https://github.com/peterpaing" rel="noopener noreferrer"><FaGithub/></a>
                <a className="transition-all duration-300 hover:scale-110" target="_blank"
                href="https://www.tiktok.com/@guanqt?is_from_webapp=1&sender_device=pc" rel="noopener noreferrer"><FaTiktok/></a>
                <a className="transition-all duration-300 hover:scale-110" target="_blank"
                href="https://www.instagram.com/peter_is4_shar" rel="noopener noreferrer"><FaInstagram/></a>
                <a className="transition-all duration-300 hover:scale-110" target="_blank"
                href="https://www.linkedin.com/in/pyae-sone-paing-06a283418/" rel="noopener noreferrer"><FaLinkedinIn/></a>
                <a className="transition-all duration-300 hover:scale-110" target="_blank"
                href="https://t.me/guanqt" rel="noopener noreferrer"><FaTelegram/></a>
            </div>
        </section>
    )
}