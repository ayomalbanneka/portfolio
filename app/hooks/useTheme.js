'use client'

import { useEffect, useState } from 'react'

// Self-contained theme hook: initializes from localStorage (falling back to
// OS preference), keeps <html class="dark"> and localStorage in sync, and
// can be dropped into any component without threading state through props.
export function useTheme() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = stored === 'dark' || (!stored && prefersDark)
        setIsDarkMode(shouldBeDark)
        document.documentElement.classList.toggle('dark', shouldBeDark)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode)
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode]
}