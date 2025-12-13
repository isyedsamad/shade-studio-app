"use client";
import { createContext, useContext, useState } from "react";
const BgContext = createContext();
export function BgProvider({ children }) {
  const [bg, setBg] = useState("");
  return (
    <BgContext.Provider value={{ bg, setBg }}>
      {children}
    </BgContext.Provider>
  );
}
export function useBg() {
  return useContext(BgContext);
}
