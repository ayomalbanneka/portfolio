'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const TRIGGER = 'sudo'

const EasterEgg = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const accent = 'color:#ffb02e; font-family: monospace; font-size: 12px;'
        const muted = 'color:#8a9086; font-family: monospace; font-size: 11px;'
        console.log('%c$ whoami', accent)
        console.log('%c> Ayomal Banneka — Full Stack Engineer, aspiring DevOps', accent)
        console.log('%c$ cat contact.txt', accent)
        console.log('%c> ayomalkaushalya@gmail.com — always open to a conversation.', accent)
        console.log('%c(psst — try typing "sudo" anywhere on this page)', muted)

        let buffer = ''
        const onKeyDown = (e) => {
            // Don't hijack keystrokes while someone's actually typing (e.g. the contact form)
            const tag = document.activeElement?.tagName
            if (tag === 'INPUT' || tag === 'TEXTAREA') return

            buffer = (buffer + e.key).slice(-TRIGGER.length).toLowerCase()
            if (buffer === TRIGGER) {
                setOpen(true)
                buffer = ''
            }
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        if (!open) return
        const onEsc = (e) => e.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onEsc)
        return () => window.removeEventListener('keydown', onEsc)
    }, [open])

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
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
                        <div className="p-6 font-mono text-sm text-fg-muted space-y-2">
                            <p>
                                <span className="text-accent">$</span> sudo access_portfolio
                            </p>
                            <p>
                                <span className="text-accent">&gt;</span> [sudo] password for visitor: ********
                            </p>
                            <p>
                                <span className="text-accent">&gt;</span> Access granted. You found it.
                            </p>
                            <p className="pt-2 text-fg leading-relaxed">
                                Curious, thorough, and types "sudo" into random websites for fun —
                                exactly the kind of person I'd like to work with. Let's talk:
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default EasterEgg