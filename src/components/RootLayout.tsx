import { Outlet } from "react-router"
import { useState } from "react"
import Header from "./Header"

export default function Layout(){
    const [darkMode, setDarkMode] = useState(true)

    return (
        <div
        className={`min-h-screen transition-colors duration-400 ${
            darkMode ? "dark bg-zinc-950 text-white" : "bg-[#FAFAFA] text-black"
        }`}
        >
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <main className="pt-24 px-4">
        <Outlet/>
        </main>
        
            
        </div>
    )
}