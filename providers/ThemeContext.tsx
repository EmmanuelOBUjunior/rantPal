'use client'

import { createContext, ReactNode, useState } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

const ThemeContextProvider = ({children}:{children:ReactNode}) => {
    const [darkMode, setDarkMode] = useState(true)
    const [mounted, setMounted] = useState(false)

  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider