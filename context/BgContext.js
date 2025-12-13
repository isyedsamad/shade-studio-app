"use client";
import { createContext, useContext, useState } from "react";
const BgContext = createContext();
export function BgProvider({ children }) {
  const [bg, setBg] = useState("");
  const setThemeLight = () => {
    document.documentElement.style.setProperty("--bg-primary", "#ffffff");
    document.documentElement.style.setProperty("--text-primary", "#141413");
    document.documentElement.style.setProperty("--text-secondary", "#343d4a");
  }
  const setThemeDark = () => {
    document.documentElement.style.setProperty("--bg-primary", "#141413");
    document.documentElement.style.setProperty("--text-primary", "#f5f5f5");
    document.documentElement.style.setProperty("--text-secondary", "#eaeaea");
  }
  return (
    <BgContext.Provider value={{ bg, setBg, setThemeLight, setThemeDark }}>
      {children}
    </BgContext.Provider>
  );
}
export function useBg() {
  return useContext(BgContext);
}
