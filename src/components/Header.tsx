import { NavLink } from "react-router"
import { MdDarkMode } from "react-icons/md"
import { CgSun } from "react-icons/cg"
import { useEffect, useState } from "react"

type HeaderProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ darkMode,setDarkMode}: HeaderProps){
    const [contactActive, setContactActive] = useState(false)

    useEffect(() => {
    const contactSection = document.getElementById("contact")

    if (!contactSection) return

    const observer = new IntersectionObserver(
        ([entry]) => {
        setContactActive(entry.isIntersecting)
        },
        {
        threshold: 0.3,
        }
    )

    observer.observe(contactSection)

    return () => observer.disconnect()
    }, [])

    return (
        <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-4 md:px-6 py-4 transition-colors duration-300 bg-[#E8ECE6] dark:bg-zinc-950 text-neutral-800 dark:text-neutral-300 border-b-1 border-neutral-300 dark:border-neutral-700">
            <h1 className="text-neutral-800 dark:text-zinc-300 font-bebas text-lg tracking-wider">Pyae Sone Paing</h1>
            <nav className="flex items-center gap-4 font-inter text-sm">
                <button onClick={() => setDarkMode(prev => !prev)}
                className="text-base transition-transform duration-300 hover:scale-[1.1]">
                {darkMode ? (<CgSun/>) : (<MdDarkMode/>)}
                </button>
               <NavLink
                to="/certificates"
                className={({ isActive }) =>
                    isActive
                    ? "text-[#D98C5F] underline underline-offset-6 decoration-[#D98C5F]"
                    : "text-neutral-900 hover:text-[#D98C5F] hover:underline hover:underline-offset-6 hover:decoration-[#D98C5F] dark:text-zinc-300 "
                }
                >
                Certificates
                </NavLink>

                <a
                 href="#contact"
                className={
                    contactActive
                    ? "text-[#D98C5F] underline underline-offset-6 decoration-[#D98C5F]"
                    : "text-neutral-900 hover:text-[#D98C5F] hover:underline hover:underline-offset-6 hover:decoration-[#D98C5F] dark:text-zinc-300 "
                }>
                Contact
                </a>
            </nav>
        </header>
    )
}