'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import NavBar from './components/NavBar'

const NotFound = () => {
    const pathname = usePathname()

    return (
        <>
            <NavBar />
            <main className="min-h-screen flex items-center justify-center px-5 lg:px-10 pt-16 grid-texture">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full border border-border rounded-lg overflow-hidden bg-bg-elevated"
            >
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[10px] text-fg-muted font-mono">bash</span>
                </div>
                <div className="p-6 sm:p-8 font-mono text-sm space-y-2">
                    <p className="text-fg-muted">
                        <span className="text-accent mr-2">$</span>cd {pathname}
                    </p>
                    <p className="text-fg-muted">
                        <span className="text-accent mr-2">&gt;</span>
                        bash: cd: <span className="text-fg">{pathname}</span>: No such file or
                        directory
                    </p>
                    <p className="text-fg-muted pt-2">
                        <span className="text-accent mr-2">$</span>
                        <span className="cursor-blink">_</span>
                    </p>

                    <a
                        href="/"
                        className="inline-flex items-center gap-2 mt-6 text-sm border border-fg rounded px-5 py-2.5 text-fg hover:bg-fg hover:text-bg transition-colors duration-300"
                    >
                        [ cd .. ]
                    </a>
                </div>
            </motion.div>
            </main>
        </>
    )
}

export default NotFound