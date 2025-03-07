'use client'

type ThemeContextType = {
    darkMode: boolean,
    toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemContextType | undefined >(undefined)

const ThemeContextProvider = () => {
  return (
    <div>ThemeContext</div>
  )
}

export default ThemeContextProvider