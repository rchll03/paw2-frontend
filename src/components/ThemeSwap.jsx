import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const [isDark, setIsDark] = useState(true);

    const handleTheme = (value) => {
        setIsDark(!isDark)
    }

    useEffect(() => {
    document.documentElement.dataset.theme =  isDark ? 'retro' : 'valentine'
    },[isDark])

    if(isDark) {
        return <button className='btn btn-circle' onClick={handleTheme}>
            <Sun/>
        </button>
    }
    
    return <div>
            <button className='btn btn-circle' onClick={handleTheme}>
                <Moon/>
            </button>
        </div>
}

export default ThemeSwap;
