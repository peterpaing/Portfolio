import { IoArrowUpSharp } from "react-icons/io5"
import profile from "./../assets/images/profile.png"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"

export default function Intro() {
  return (
    <section className="fade-up mb-16 flex max-w-[1140px] flex-col gap-4 md:mx-auto md:w-7/8 md:flex-row md:items-center md:pt-12">
      <div className="md:w-[55%]">
        <h1 className="font-bebas text-4xl text-shadow-md md:text-6xl">
          hi, i am <br />
          Pyae Sone Paing.
        </h1>

        <p className="mt-2 font-manrope text-base text-neutral-600 text-shadow-md dark:text-neutral-400 md:text-lg">
          A Yangon based front-end developer passionate about building accessible
          and user friendly websites.
        </p>

        <div className="my-4 flex items-center gap-4 md:mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pyaesonepaing104@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Pyae Sone Paing (opens in a new tab)"
            className="flex h-[50px] w-[163px] items-center justify-center gap-2 rounded-3xl bg-[#D98C5F] text-[#111111] text-shadow-md shadow-md transition-all duration-300 motion-reduce:transition-none motion-safe:hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-6"
          >
            Contact Me
            <span
              aria-hidden="true"
              className="flex h-[40px] w-[40px] rotate-[40deg] items-center justify-center rounded-full bg-zinc-900 text-white"
            >
              <IoArrowUpSharp />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/pyae-sone-paing-06a283418/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pyae Sone Paing's LinkedIn profile (opens in a new tab)"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#BDD45F] text-xl text-[#111111] shadow-xl transition-all duration-300 motion-reduce:transition-none motion-safe:hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A] focus-visible:outline-2 focus-visible:outline-[#BDD45F] focus-visible:outline-offset-6"
          >
            <GrLinkedinOption aria-hidden="true" focusable="false" />
          </a>

          <a
            href="https://github.com/peterpaing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pyae Sone Paing's GitHub profile (opens in a new tab)"
            className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#BDD45F] text-xl text-[#111111] shadow-xl transition-all duration-300 motion-reduce:transition-none motion-safe:hover:scale-110 dark:bg-neutral-800 dark:text-[#D3E97A] focus-visible:outline-2 focus-visible:outline-[#BDD45F] focus-visible:outline-offset-6"
          >
            <FaGithub aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>

      <img
        src={profile}
        alt="Pyae Sone Paing, front-end developer"
        className="mx-auto block h-[378px] w-[343px] rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl border-2 object-cover shadow-lg transition-transform duration-300 motion-reduce:transition-none dark:border-zinc-600"
      />
    </section>
  )
}