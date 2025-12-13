'use client'
import Card from "@/components/ui/Card";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
  useEffect(() => {
    loadDataFromDB();
  }, [])
  return (
    <>
      <div className="text-[var(--text-primary)] bg-[var(--bg-primary)]">
        <Header />
        <Hero />
        <div className="mx-auto flex flex-wrap justify-center items-center gap-5 py-5">
          {isLoading ? 
            'Loading data...'
            :
            bgData.length > 0 ?
            bgData.map(element => (
              <Card data={element} />
            ))
            :
            'No Item Found!'
          }
        </div>
      </div>
    </>
  );
}
