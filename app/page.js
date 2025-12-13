'use client'
import Card from "@/components/ui/Card";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import { useBg } from "@/context/BgContext";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { bg } = useBg();
  const [bgData, setBgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadDataFromDB = async () => {
    try {
      const db_data = await axios.get('/api/bg-design');
      setBgData(db_data.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error while loading data: ' + error);
    }
  }
  function cssStringToObject(cssString) {
    return cssString.split(";").reduce((acc, style) => {
      const [key, value] = style.split(":");
      if (!key || !value) return acc;
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[camelKey] = value.trim();
      return acc;
    }, {});
  }
  useEffect(() => {
    loadDataFromDB();
  }, [])
  return (
    <>
      <div style={{
            ...cssStringToObject(bg.replace("background:", "backgroundImage:") || "backgroundImage: var(--bg-primary);"),
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="text-[var(--text-primary)]">
        <Header />
        <Hero />
        <div className="mx-auto flex flex-wrap justify-center items-center gap-5 py-5">
          {isLoading ? 
            'Loading data...'
            :
            bgData.length > 0 ?
            bgData.map(element => (
              <Card key={element._id} data={element} />
            ))
            :
            'No Item Found!'
          }
        </div>
        <Footer />
      </div>
    </>
  );
}
