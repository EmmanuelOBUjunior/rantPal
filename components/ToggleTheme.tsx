"use client";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
  };

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 text-yellow-400 dark:text-blue-300 hover:bg-gray-600 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    ></button>
  );
};

export default ToggleTheme;
