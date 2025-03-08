'use client'

import { createContext, ReactNode, useEffect, useState } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

const ThemeContextProvider = ({children}:{children:ReactNode}) => {
    const [darkMode, setDarkMode] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        //Only run this on the client side
        setMounted(true)

        //Check for user preference in localStorage or system preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

        setDarkMode(isDarkMode)
        updateTheme(isDarkMode)
    },[])

    const toggleDarkMode = () =>{
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        updateTheme(newDarkMode);
        localStorage.setItem('darkMode',String(newDarkMode))
    }

    const updateTheme = (isDark:boolean)=>{
        if(isDark){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }

    //Avoid rendering with incorrect theme
    if(!mounted){
        return null
    }

  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider