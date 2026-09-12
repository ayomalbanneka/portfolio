'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const COMMANDS = [
    { match: 'sudo', run: (setMode) => setMode('sudo') },
    { match: 'help', run: (setMode) => setMode('help') },
    { match: 'cd about', run: () => scrollToId('about') },
    { match: 'cd work', run: () => scrollToId('work') },
    { match: 'cd contact', run: () => scrollToId('contact') },
    { match: 'cd ~', run: () => scrollToId('top') },
]

const KONAMI = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a',
]

const MAX_BUFFER = 24
const IDLE_RESET_MS = 1800
const MATRIX_DURATION_MS = 4500

// Full-screen digital-rain overlay, drawn on canvas for performance.
// Respects prefers-reduced-motion by rendering a single static frame instead
// of an animation loop.
const MatrixRain = ({ onDone }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        const fontSize = 16
        let columns = Math.floor(width / fontSize)
        let drops = new Array(columns).fill(1)
        const chars = 'アイウエオカキクケコサシスセソ0123456789<>/[]{}#$%&_'.split('')

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        const drawFrame = () => {
            ctx.fillStyle = 'rgba(10, 13, 10, 0.08)'
            ctx.fillRect(0, 0, width, height)
            ctx.fillStyle = '#ffb02e'
            ctx.font = `${fontSize}px monospace`
            drops.forEach((y, i) => {
                const text = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillText(text, i * fontSize, y * fontSize)
                if (y * fontSize > height && Math.random() > 0.975) drops[i] = 0
                drops[i] += 1
            })
            animationId = requestAnimationFrame(drawFrame)
        }

        if (prefersReduced) {
            ctx.fillStyle = '#0a0d0a'
            ctx.fillRect(0, 0, width, height)
            ctx.fillStyle = '#ffb02e'
            ctx.font = `${fontSize}px monospace`
            ctx.fillText('// konami code accepted', 24, 40)
        } else {
            animationId = requestAnimationFrame(drawFrame)
        }

        const doneTimeout = setTimeout(onDone, MATRIX_DURATION_MS)

        const onResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
            columns = Math.floor(width / fontSize)
            drops = new Array(columns).fill(1)
        }
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(animationId)
            clearTimeout(doneTimeout)
            window.removeEventListener('resize', onResize)
        }
    }, [onDone])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onDone}
            className="fixed inset-0 z-998 cursor-pointer"
        >
            <canvas ref={canvasRef} className="w-full h-full block" />
        </motion.div>
    )
}

const EasterEgg = () => {
    const [mode, setMode] = useState(null) // null | 'sudo' | 'help'
    const [matrixOn, setMatrixOn] = useState(false)
    const bufferRef = useRef('')
    const idleTimer = useRef(null)
    const konamiIndexRef = useRef(0)

    useEffect(() => {
        const accent = 'color:#ffb02e; font-family: monospace; font-size: 12px;'
        const muted = 'color:#8a9086; font-family: monospace; font-size: 11px;'
        console.log('%c$ whoami', accent)
        console.log('%c> Ayomal Banneka — Full Stack Engineer, aspiring DevOps', accent)
        console.log('%c$ cat contact.txt', accent)
        console.log('%c> ayomalkaushalya@gmail.com — always open to a conversation.', accent)
        console.log('%c(psst — try typing "help" anywhere on this page)', muted)

        const onKeyDown = (e) => {
            // Don't hijack keystrokes while someone's actually typing (e.g. the contact form)
            const tag = document.activeElement?.tagName
            if (tag === 'INPUT' || tag === 'TEXTAREA') return

            // Konami code — works with arrow keys plus b/a, tracked independently
            // of the word-buffer below since arrow keys aren't single characters.
            const expected = KONAMI[konamiIndexRef.current]
            const keyMatches = e.key === expected || e.key.toLowerCase() === expected.toLowerCase()
            if (keyMatches) {
                konamiIndexRef.current += 1
                if (konamiIndexRef.current === KONAMI.length) {
                    setMatrixOn(true)
                    konamiIndexRef.current = 0
                }
            } else {
                konamiIndexRef.current = e.key === KONAMI[0] ? 1 : 0
            }

            // Word-command buffer (help / sudo / cd ...)
            if (e.key.length === 1) {
                clearTimeout(idleTimer.current)
                idleTimer.current = setTimeout(() => {
                    bufferRef.current = ''
                }, IDLE_RESET_MS)

                bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-MAX_BUFFER)

                const hit = COMMANDS.find((c) => bufferRef.current.endsWith(c.match))
                if (hit) {
                    hit.run(setMode)
                    bufferRef.current = ''
                }
            }
        }

        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(idleTimer.current)
        }
    }, [])

    useEffect(() => {
        if (!mode && !matrixOn) return
        const onEsc = (e) => {
            if (e.key !== 'Escape') return
            setMode(null)
            setMatrixOn(false)
        }
        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [mode, matrixOn])

    return (
        <>
            <AnimatePresence>
                {matrixOn && <MatrixRain onDone={() => setMatrixOn(false)} />}
            </AnimatePresence>

            <AnimatePresence>
                {mode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMode(null)}
                        className="fixed inset-0 z-999 bg-bg/95 backdrop-blur-sm flex items-center justify-center px-6 cursor-pointer"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-md w-full border border-accent rounded-lg overflow-hidden bg-bg-elevated cursor-auto"
                        >
                            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                <span className="ml-2 text-[10px] text-fg-muted font-mono">root@ayomal</span>
                            </div>

                            {mode === 'sudo' && (
                                <div className="p-6 font-mono text-sm text-fg-muted space-y-2">
                                    <p>
                                        <span className="text-accent">$</span> sudo access_portfolio
                                    </p>
                                    <p>
                                        <span className="text-accent">&gt;</span> [sudo] password for
                                        visitor: ********
                                    </p>
                                    <p>
                                        <span className="text-accent">&gt;</span> Access granted. You
                                        found it.
                                    </p>
                                    <p className="pt-2 text-fg leading-relaxed">
                                        Curious, thorough, and types commands into random websites
                                        for fun — exactly the kind of person I'd like to work with.
                                        Let's talk:
                                    </p>
                                    <a
                                        href="mailto:ayomalkaushalya@gmail.com"
                                        className="inline-block text-accent hover:underline"
                                    >
                                        ayomalkaushalya@gmail.com
                                    </a>
                                    <p className="pt-2 text-xs text-fg-muted">
                                        (press esc or click anywhere to close)
                                    </p>
                                </div>
                            )}

                            {mode === 'help' && (
                                <div className="p-6 font-mono text-sm text-fg-muted space-y-3">
                                    <p>
                                        <span className="text-accent">$</span> help
                                    </p>
                                    <p className="text-fg">available commands:</p>
                                    <ul className="space-y-1.5 pl-1">
                                        <li>
                                            <span className="text-accent">cd about</span> — jump to
                                            the about section
                                        </li>
                                        <li>
                                            <span className="text-accent">cd work</span> — jump to
                                            projects
                                        </li>
                                        <li>
                                            <span className="text-accent">cd contact</span> — jump
                                            to the contact form
                                        </li>
                                        <li>
                                            <span className="text-accent">cd ~</span> — back to top
                                        </li>
                                        <li>
                                            <span className="text-accent">sudo</span> — you'll see
                                        </li>
                                        <li>
                                            <span className="text-accent">↑↑↓↓←→←→ b a</span> — you'll
                                            also see
                                        </li>
                                    </ul>
                                    <p className="pt-2 text-xs text-fg-muted">
                                        (press esc or click anywhere to close)
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default EasterEgg