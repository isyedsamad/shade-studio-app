import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex justify-between items-center px-15 py-5'>
            <div>
                <h1 className='font-semibold'>shade.studio</h1>
            </div>
            <div className='flex justify-center items-center gap-5'>
              <a href='https://github.com/isyedsamad/shade-studio-app' target='_blank'><Github className='cursor-pointer' /></a>
              <a href='https://www.linkedin.com/in/isyedsamad/' target='_blank'><Linkedin className='cursor-pointer' /></a>
            </div>
        </div>
    </>
  )
}

export default Header