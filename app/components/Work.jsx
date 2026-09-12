'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { workData } from '@/assets/assets'

const Work = () => {
    return (
        <section id="work" className="w-full px-5 lg:px-10 py-24 scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-widest uppercase text-accent mb-3"
                >
                    // work
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display uppercase text-3xl sm:text-4xl mb-4 text-fg"
                >
                    Recent projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-fg-muted text-sm sm:text-base max-w-xl mb-12 leading-relaxed"
                >
                    Some of the things I've built — mostly full stack, occasionally just an
                    excuse to try a new tool.
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-6">
                    {workData.map((project, i) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                            className="group block border border-border rounded-lg overflow-hidden hover:border-accent transition-colors duration-300"
                        >
                            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-bg-elevated">
                                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                <span className="ml-2 text-[10px] text-fg-muted font-mono truncate">
                                    {project.bgImage.replace('/', '')}
                                </span>
                            </div>

                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.bgImage}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                                />
                            </div>

                            <div className="px-5 py-4 bg-bg-elevated">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <h3 className="font-display uppercase text-sm sm:text-base text-fg truncate">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-fg-muted mt-0.5 truncate">
                                            {project.description}
                                        </p>
                                    </div>
                                    <span className="shrink-0 text-xs font-mono text-fg-muted group-hover:text-accent transition-colors duration-300">
                                        [ view → ]
                                    </span>
                                </div>
                                {project.blurb && (
                                    <p className="text-xs text-fg-muted mt-3 pt-3 border-t border-border leading-relaxed">
                                        {project.blurb}
                                    </p>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work