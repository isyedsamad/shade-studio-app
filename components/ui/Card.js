import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-transparent rounded-sm shadow-md w-70 h-60'>
        <div className='group w-full h-full rounded-md bg-red-300 flex justify-between flex-col'>
            <div className='m-3 flex justify-start items-center gap-1 opacity-100 visible group-hover:opacity-100 group-hover:visible'>
                <div className='flex duration-300 cursor-pointer
                    px-2 py-1 bg-black/60 rounded-md'>
                    <h3 className='font-semibold text-white text-xs'>Preview</h3>
                </div>
                <div className='flex duration-300 cursor-pointer
                    px-2 py-1 bg-black/60 rounded-md'>
                    <h3 className='font-semibold text-white text-xs'>Copy Code</h3>
                </div>
            </div>
            <div className='flex duration-300
                opacity-100 visible group-hover:opacity-100 group-hover:visible
                justify-start items-start flex-col px-4 py-3 bg-white/60 m-3 rounded-md'>
                <h3 className='font-semibold text-[var(--text-primary)] text-sm'>{props.data.title}</h3>
                <p className='font-medium text-[var(--text-secondary)] text-xs'>this is a basic background for div designed for neon effect in a div.</p>
            </div>
        </div>
    </div>
  )
}

export default Card