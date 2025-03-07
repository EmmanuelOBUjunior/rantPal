'use client'

import { createContext } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

const ThemeContextProvider = () => {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider