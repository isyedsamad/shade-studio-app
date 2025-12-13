import { useBg } from '@/context/BgContext';
import { ChevronRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
    const { setBg, setThemeLight } = useBg();
    const resetBg = () => {
        setBg("background: white;")
        setThemeLight();
    }
  return (
    <>
        <div className='flex justify-center items-center py-25 flex-col bg-testcolor'>
            <div className='max-w-2xl flex justify-center items-center flex-col'>
                <h1 className='text-6xl font-medium tracking-tight leading-tight text-center'>Collection of modern,</h1>
                <h1 className='text-6xl font-medium tracking-tight leading-tight text-center bg-gradient-to-r from-[var(--text-primary)] via-gray-400 to-gray-500 bg-clip-text text-transparent'>and powerful ui kit</h1>
                <p className='text-md font-medium text-center mt-5 text-[var(--text-secondary)]'>Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.</p>
                <div className='flex justify-center items-center gap-4 mt-5'>
                    <a href='https://github.com/isyedsamad/shade-studio-app' target='_blank'><button className='bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium px-5 py-2 cursor-pointer hover:bg-[var(--text-primary)]/80 rounded-lg text-sm flex justify-center items-center'>View GitHub <ChevronRight className='scale-[0.7]' /></button></a>
                    <button onClick={resetBg} className='bg-[var(--text-secondary)]/15 text-[var(--text-primary)] font-medium px-5 py-2 cursor-pointer hover:bg-[var(--text-secondary)]/20 rounded-lg text-sm'>Reset Background</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero