import { Outlet } from "react-router"
import { useState } from "react"
import Header from "./Header"

export default function Layout(){
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div
        className={`min-h-screen transition-colors duration-300 ${
            darkMode ? "dark bg-zinc-950 text-white" : "bg-white text-black"
        }`}
        >
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Outlet/>
            
        </div>
    )
}