'use client';

import { HTMLAttributes, HtmlHTMLAttributes, useState } from "react";
import { Theme, ThemeIcon } from "./interfaces";

interface SwitchThemeButton extends HTMLAttributes<HTMLButtonElement> {}

const getStoredTheme = () => localStorage.getItem('theme')

export default function SwitchThemeButton ({ ...props }: SwitchThemeButton) {
    const [theme, setTheme] = useState(getStoredTheme() || Theme.LIGHT);
    const Icon = ThemeIcon[theme];

    const onSwitchClick = () => {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    
        if (newTheme === Theme.DARK) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
    }

    return (
        <button {...props} className="p-2 rounded-full text-slate-700 hover:bg-gray-500 hover:text-white dark:text-white" onClick={onSwitchClick}>
            <Icon />
        </button>
    )
}