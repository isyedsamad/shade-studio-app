import { useBg } from '@/context/BgContext';
import React from 'react'

const Card = (props) => {
    const { setBg, setIsDarkMode, isDarkMode } = useBg();
    const handleApply = () => {
        const raw = props.data.style_code;
        setBg(raw); // store in context
        if(props.data.isDark) {
            setIsDarkMode(true);
        }else {
            setIsDarkMode(false);
        }
    };
    function cssStringToObject(cssString) {
        return cssString.split(";").reduce((acc, style) => {
            const [key, value] = style.split(":");
            if (!key || !value) return acc;
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            acc[camelKey] = value.trim();
            return acc;
        }, {});
    }
  return (
    <div className="rounded-sm shadow-md w-70 h-60">
        {/* <div className={`group w-full h-full rounded-md flex justify-between flex-col ${props.data.code}`}> */}
        <div className="group w-full h-full rounded-md flex justify-between flex-col"
            style={ cssStringToObject(props.data.style_code) }>
            <div className='m-3 flex justify-start items-center gap-1 opacity-100 visible group-hover:opacity-100 group-hover:visible'>
                <div className='flex duration-300 cursor-pointer
                    px-2 py-1 bg-black/50 rounded-md'>
                    <h3 className='font-medium text-white text-xs' onClick={handleApply}>preview</h3>
                </div>
                <div className='flex duration-300 cursor-pointer
                    px-2 py-1 bg-black/50 rounded-md'>
                    <h3 className='font-medium text-white text-xs'>copy code</h3>
                </div>
            </div>
            <div className={`flex duration-300
                opacity-100 visible group-hover:opacity-100 group-hover:visible
                justify-start items-start flex-col px-4 py-3 ${props.data.isDark ? 'bg-black/60' : isDarkMode ? 'bg-black/60' : 'bg-[var(--bg-primary)]/60'} m-3 rounded-lg`}>
                <h3 className={`font-semibold ${props.data.isDark ? 'text-white' : 'text-[var(--text-primary)]'} text-sm`}>{props.data.title}</h3>
                <p className={`font-medium ${props.data.isDark ? 'text-gray-200' : 'text-[var(--text-secondary)]'} text-xs`}>{props.data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card