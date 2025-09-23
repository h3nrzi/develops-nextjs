"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (localStorage.theme === "dark") setMode("dark");
    else if (localStorage.theme === "light") setMode("light");
    else setMode("system");
  };

  useEffect(() => {
    handleThemeChange();
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const isDarkSystem = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (mode === "dark" || (mode === "system" && isDarkSystem)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    if (mode) {
      applyTheme();

      if (mode === "system") {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", applyTheme);
        return () => mediaQuery.removeEventListener("change", applyTheme);
      }
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
