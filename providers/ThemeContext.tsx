'use client'

import { createContext, ReactNode } from "react"

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

const ThemeContextProvider = ({children}:{children:ReactNode}) => {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider