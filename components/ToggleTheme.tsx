"use client";
import { useEffect, useState } from "react";
import { SunIcon,MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/providers/ThemeContext";

const ToggleTheme = () => {
  const {darkMode, toggleDarkMode} = useTheme() 
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 text-yellow-400 dark:text-blue-300 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
        {darkMode ? (
            <SunIcon className="h-5 w-5"/>
        ):(
            <MoonIcon className="h-5 w-5"/>
        )}
    </button>
  );
};

export default ToggleTheme;
