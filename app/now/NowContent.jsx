'use client'

import React from 'react'
import { motion } from 'motion/react'

const sections = [
    {
        tag: 'building',
        items: [
            "OpenShelf — a full-stack, open-source reading platform. Past the security-hardening and OAuth phases, now into contributor tooling: Stripe support tiers, BullMQ/Redis background jobs, and ClamAV upload scanning.",
        ],
    },
    {
        tag: 'learning',
        items: [
            'Go, through a self-recorded Sinhala-language series — through closures so far, moving next into arrays, slices, maps, structs, and pointers.',
            'Moving deliberately from full stack toward DevOps — infrastructure, deployment, and the tooling that keeps systems running.',
        ],
    },
    {
        tag: 'certified',
        items: ['KodeKloud Terraform — Level 2', 'KodeKloud Docker — Level 1'],
    },
    {
        tag: 'studying',
        items: [
            'HND in Software Engineering — Java Institute of Advanced Technology (Kandy, Athena batch)',
            'BSc (Hons) Software Engineering — Birmingham City University',
        ],
    },
]

const NowContent = () => {
    return (
        <main className="min-h-screen px-5 lg:px-10 pt-16 pb-24 grid-texture">
            <div className="max-w-2xl mx-auto pt-12">
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-mono text-fg-muted hover:text-accent transition-colors duration-300 mb-10"
                >
                    ← cd ..
                </a>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border border-border rounded-lg overflow-hidden bg-bg-elevated"
                >
                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
                        <span className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        </span>
                        <span className="ml-2 text-xs font-mono text-fg-muted">now.md</span>
                    </div>

                    <div className="p-6 sm:p-10">
                        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
                            // now
                        </p>
                        <h1 className="font-display uppercase text-3xl sm:text-4xl text-fg mb-2">
                            What I'm doing
                        </h1>
                        <p className="text-fg-muted text-sm mb-10">
                            A snapshot, not a résumé — updated when something actually changes.
                        </p>

                        <div className="space-y-8">
                            {sections.map((section, i) => (
                                <motion.div
                                    key={section.tag}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                >
                                    <h2 className="font-mono text-xs uppercase tracking-widest text-fg-muted mb-3">
                                        <span className="text-accent">#</span> {section.tag}
                                    </h2>
                                    <ul className="space-y-2">
                                        {section.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-sm text-fg leading-relaxed"
                                            >
                                                <span className="text-accent shrink-0">›</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

export default NowContent