import { NavLink } from "react-router"
import { MdDarkMode } from "react-icons/md"
import { CgSun } from "react-icons/cg"
import { useEffect, useState } from "react"

type HeaderProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [contactActive, setContactActive] = useState(false)

  useEffect(() => {
    const contactSection = document.getElementById("contact")

    if (!contactSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactActive(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(contactSection)

    return () => observer.disconnect()
  }, [])

  const focusStyles =
    "focus-visible:outline-2 focus-visible:outline-[#D4804E] focus-visible:outline-offset-3"

  const inactiveLinkStyles =
    "text-neutral-900 hover:text-[#D98C5F] hover:underline hover:underline-offset-6 hover:decoration-[#D98C5F] dark:text-zinc-300"

  const activeLinkStyles =
    "text-[#D98C5F] underline underline-offset-6 decoration-[#D98C5F]"

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-neutral-300 bg-[#E8ECE6] px-4 py-4 text-neutral-800 transition-colors duration-300 motion-reduce:transition-none dark:border-neutral-700 dark:bg-zinc-950 dark:text-neutral-300 md:px-6">
      <p className="font-bebas text-lg tracking-wider text-neutral-800 dark:text-zinc-300">
        Pyae Sone Paing
      </p>

      <nav aria-label="Primary navigation" className="flex items-center gap-4 font-inter text-sm">
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
          className={`rounded-md text-base motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.1] ${focusStyles}`}
        >
          {darkMode ? (
            <CgSun aria-hidden="true" focusable="false" />
          ) : (
            <MdDarkMode aria-hidden="true" focusable="false" />
          )}
        </button>

        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            `rounded-md ${focusStyles} ${
              isActive ? activeLinkStyles : inactiveLinkStyles
            }`
          }
        >
          Certificates
        </NavLink>

        <a
          href="#contact"
          className={`rounded-md ${focusStyles} ${
            contactActive ? activeLinkStyles : inactiveLinkStyles
          }`}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}