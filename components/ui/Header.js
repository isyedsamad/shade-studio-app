import { Github } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex justify-between items-center px-15 py-5'>
            <div>
                <h1 className='font-semibold'>shade.studio</h1>
            </div>
            <div>
              <Github className='cursor-pointer' />
            </div>
        </div>
    </>
  )
}

export default Header