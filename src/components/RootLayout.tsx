import { Outlet } from "react-router"
import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(){
    const [darkMode, setDarkMode] = useState(false)
    
     useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode])

    return (
        <div
        className={`min-h-screen transition-colors duration-300 ${
            darkMode ? "dark bg-zinc-950 text-white" : "bg-[#E8ECE5] text-black"
        }`}
        >
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <main className="pt-24 px-4">
        <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}