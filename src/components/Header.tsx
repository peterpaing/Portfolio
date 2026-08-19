import { NavLink } from "react-router"
import { MdDarkMode } from "react-icons/md"
import { CgSun } from "react-icons/cg"

type HeaderProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ darkMode,setDarkMode}: HeaderProps){
    return (
        <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-3 md:px-6 py-4 transition-colors duration-300 text-neutral-800 dark:text-neutral-300">
            <h1 className="font-bebas text-lg md:text-xl tracking-wider">Pyae Sone Paing</h1>
            <nav className="flex items-center gap-4 font-inter text-sm">
                <button onClick={() => setDarkMode(prev => !prev)}
                className="text-base">
                {darkMode ? (<CgSun/>) : (<MdDarkMode/>)}
                </button>
               <NavLink to='/certificate'>Certificate</NavLink> 
               <a href="/#contact">Contact</a>
            </nav>
        </header>
    )
}