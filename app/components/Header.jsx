'use client'

import React from 'react'
import { motion } from 'motion/react'

const terminalLines = [
    { prompt: '~$', text: 'whoami' },
    { prompt: '>', text: 'Ayomal Banneka — Full Stack Software Engineer' },
    { prompt: '~$', text: 'cat status.txt' },
    { prompt: '>', text: 'Aspiring DevOps Engineer, based in Sri Lanka' },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16, delayChildren: 0.35 } },
}

const lineVariant = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const Header = () => {
    return (
        <header
            id="top"
            className="relative min-h-screen flex items-center px-5 lg:px-10 pt-28 pb-16 overflow-hidden grid-texture"
        >
            {/* Ambient glow behind the headline */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                <div className="w-xl h-144 rounded-full bg-accent-soft blur-[110px]" />
            </div>

            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-[11px] tracking-widest uppercase text-fg-muted mb-8"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    available for work
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="font-mono text-sm sm:text-base text-fg-muted space-y-1 mb-8"
                >
                    {terminalLines.map((l, i) => (
                        <motion.p key={i} variants={lineVariant}>
                            <span className="text-accent mr-2">{l.prompt}</span>
                            {l.text}
                        </motion.p>
                    ))}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.15 }}
                    className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-fg"
                >
                    Building
                    <br />
                    reliable systems
                    <span className="text-accent cursor-blink">_</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.55 }}
                    className="mt-6 max-w-xl text-fg-muted text-sm sm:text-base leading-relaxed"
                >
                    I'm an undergraduate full stack software engineer in Sri Lanka, building
                    performant, accessible web applications — and learning to ship and run them
                    the way a DevOps engineer would.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.75 }}
                    className="flex flex-wrap items-center gap-4 mt-10"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm border border-fg rounded px-6 py-3 text-fg hover:bg-fg hover:text-bg transition-colors duration-300"
                    >
                        [ contact_me ]
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 text-sm border border-border rounded px-6 py-3 text-fg-muted hover:border-accent hover:text-accent transition-colors duration-300"
                    >
                        ↓ resume.pdf
                    </a>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-muted"
            >
                <span className="text-[10px] tracking-widest uppercase">scroll</span>
                <motion.span
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-accent"
                >
                    ▾
                </motion.span>
            </motion.div>
        </header>
    )
}

export default Header