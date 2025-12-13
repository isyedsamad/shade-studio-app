import { useBg } from '@/context/BgContext'
import { Github, Linkedin, Moon, SunMedium } from 'lucide-react'
import React from 'react'

const Header = () => {
  const { isDarkMode, setIsDarkMode, setBg } = useBg();

  return (
    <>
        <div className='flex flex-col sm:flex-row gap-4 justify-between items-center px-15 py-5'>
            <div>
                <h1 className='font-semibold'>shade.studio</h1>
            </div>
            <div className='flex justify-center items-center gap-5'>
              {isDarkMode ? (
                <SunMedium className='cursor-pointer' onClick={() => {
                  setIsDarkMode(false);
                  setBg("background: linear-gradient(to right bottom, rgb(245, 245, 245), rgb(225, 225, 225));")
                }} />
              ) : (
                <Moon className='cursor-pointer' onClick={() => {
                  setIsDarkMode(true);
                  setBg("background: linear-gradient(to right bottom, rgb(17, 17, 17), rgb(45, 45, 45));")
                }} />
              )}
              <a href='https://github.com/isyedsamad/shade-studio-app' target='_blank'><Github className='cursor-pointer' /></a>
              <a href='https://www.linkedin.com/in/isyedsamad/' target='_blank'><Linkedin className='cursor-pointer' /></a>
            </div>
        </div>
    </>
  )
}

export default Header