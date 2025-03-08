'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

export const ThemeContextProvider = ({children}:{children:ReactNode}) => {
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
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(context === undefined){
        throw new Error('useTheme must be used within a ThemeContextProvider')
    }
}
