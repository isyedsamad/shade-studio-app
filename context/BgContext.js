"use client";
import { createContext, useContext, useEffect, useState } from "react";
const BgContext = createContext();
export function BgProvider({ children }) {
  const [bg, setBg] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const setThemeLight = () => {
    document.documentElement.style.setProperty("--bg-primary", "linear-gradient(to right bottom, rgb(245, 245, 245), rgb(225, 225, 225));");
    document.documentElement.style.setProperty("--text-primary", "#141413");
    document.documentElement.style.setProperty("--text-secondary", "#343d4a");
  }
  const setThemeDark = () => {
    document.documentElement.style.setProperty("--bg-primary", "linear-gradient(to right bottom, rgb(17, 17, 17), rgb(45, 45, 45));");
    document.documentElement.style.setProperty("--text-primary", "#f5f5f5");
    document.documentElement.style.setProperty("--text-secondary", "#eaeaea");
  }
  useEffect(() => {
    if(isDarkMode) {
        setThemeDark();
    }else {
        setThemeLight();
    }
  }, [isDarkMode])
  
  return (
    <BgContext.Provider value={{ bg, setBg, setThemeLight, setThemeDark, isDarkMode, setIsDarkMode }}>
      {children}
    </BgContext.Provider>
  );
}
export function useBg() {
  return useContext(BgContext);
}
