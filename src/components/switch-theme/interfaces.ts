import { LucideIcon, Moon, Sun } from "lucide-react";

export const ThemeIcon: { [key: string]: LucideIcon} = {
    dark: Sun,
    light: Moon,
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}