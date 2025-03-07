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
        
    },[])

  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider