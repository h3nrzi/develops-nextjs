"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.theme;
    setMode(
      savedTheme === "dark" || savedTheme === "light" ? savedTheme : "system",
    );
  }, []);

  useEffect(() => {
    if (!mode) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const isDarkMode =
      mode === "dark" || (mode === "system" && mediaQuery.matches);

    document.documentElement.classList.toggle("dark", isDarkMode);

    if (mode === "system") {
      const handleChange = () => {
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      };
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
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
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
