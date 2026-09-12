'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from '../hooks/useTheme'

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useTheme()
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    // On any page other than the homepage, section hashes need to point back
    // at "/" first (e.g. "/#about") so they actually navigate somewhere.
    const prefix = pathname === '/' ? '' : '/'
    const links = [
        { href: `${prefix}#top`, label: '01_home' },
        { href: `${prefix}#about`, label: '02_about' },
        { href: `${prefix}#work`, label: '03_work' },
        { href: `${prefix}#contact`, label: '04_contact' },
    ]

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 px-5 lg:px-10 transition-colors duration-300
            ${isScrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
                {/* Logo — window-chrome dots + text prompt, no image asset needed */}
                <a href={`${prefix}#top`} className="flex items-center gap-2 shrink-0">
                    <span className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </span>
                    <span className="ml-2 font-display text-xs sm:text-sm tracking-wider text-fg">
                        ayomal<span className="text-accent">@</span>portfolio
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1 text-xs tracking-wide">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="px-4 py-2 text-fg-muted hover:text-accent transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 sm:gap-4">
                    {/* Theme toggle — sliding terminal cursor between L / D */}
                    <button
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        className="relative w-12 h-6 rounded-full border border-border flex items-center px-0.5 text-[9px] font-mono uppercase tracking-wider cursor-pointer"
                        aria-label="Toggle theme"
                        aria-pressed={isDarkMode}
                    >
                        <motion.span
                            layout
                            transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                            className="absolute top-0.5 bottom-0.5 w-5 rounded-full bg-accent"
                            style={{ left: isDarkMode ? 'calc(100% - 1.375rem)' : '0.125rem' }}
                        />
                        <span className={`w-1/2 text-center z-10 ${!isDarkMode ? 'text-bg' : 'text-fg-muted'}`}>L</span>
                        <span className={`w-1/2 text-center z-10 ${isDarkMode ? 'text-bg' : 'text-fg-muted'}`}>D</span>
                    </button>

                    <a
                        href={`${prefix}#contact`}
                        className="hidden lg:inline-block text-xs font-mono border border-border rounded px-4 py-2 text-fg-muted hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                        [ contact ]
                    </a>

                    {/* Mobile trigger */}
                    <button
                        className="md:hidden text-2xl leading-none text-fg"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        ≡
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-bg/95 backdrop-blur-sm z-50 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <motion.ul
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                            className="absolute right-0 top-0 bottom-0 w-64 bg-bg-elevated border-l border-border p-8 flex flex-col gap-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="self-end text-2xl leading-none text-fg-muted mb-4"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                            {links.map((link) => (
                                <li key={link.href} className="list-none">
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-display text-sm tracking-wide text-fg hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default NavBar