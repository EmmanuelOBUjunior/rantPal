'use client'
import { useEffect, useState } from "react"

const ToggleTheme = () => {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(()=>{
        const isDarkMode = localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setDarkMode(isDarkMode)
        updateTheme(isDarkMode)
    },[])

    const toggleDarkMode = ()=>{
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)
        updateTheme(newDarkMode)
        localStorage.setItem('darkMode', String(newDarkMode))
    }

    const updateTheme = (isDark:boolean)=>{

    }
  return (
    <div>ToggleTheme</div>
  )
}

export default ToggleTheme