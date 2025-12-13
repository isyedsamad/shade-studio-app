import { useBg } from '@/context/BgContext';
import { ChevronRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
    const { setBg } = useBg();
    const resetBg = () => {
        setBg("background: white;")
    }
  return (
    <>
        <div className='flex justify-center items-center py-25 flex-col bg-testcolor'>
            <div className='max-w-2xl flex justify-center items-center flex-col'>
                <h1 className='text-6xl font-medium tracking-tight leading-tight text-center'>Collection of modern,</h1>
                <h1 className='text-6xl font-medium tracking-tight leading-tight text-center bg-gradient-to-r from-black via-gray-400 to-gray-500 bg-clip-text text-transparent'>and powerful ui kit</h1>
                <p className='text-md font-medium text-center mt-5 text-gray-500'>Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.</p>
                <div className='flex justify-center items-center gap-4 mt-5'>
                    <button className='bg-[var(--text-primary)] text-white font-medium px-5 py-2 cursor-pointer hover:bg-black rounded-lg text-sm flex justify-center items-center'>Go to GitHub <ChevronRight className='scale-[0.7]' /></button>
                    <button onClick={resetBg} className='bg-gray-200 text-[var(--text-primary)] font-medium px-5 py-2 cursor-pointer hover:bg-gray-300 rounded-lg text-sm'>Reset Background</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero