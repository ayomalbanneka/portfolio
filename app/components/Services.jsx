'use client'

import React from 'react'
import { motion } from 'motion/react'
import { serviceData } from '@/assets/assets'

const Services = () => {
    return (
        <section id="services" className="w-full px-5 lg:px-10 py-24 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-widest uppercase text-accent mb-3"
                >
                    // services
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display uppercase text-3xl sm:text-4xl mb-4 text-fg"
                >
                    What I offer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-fg-muted text-sm sm:text-base max-w-xl mb-12 leading-relaxed"
                >
                    A range of services spanning the full stack — from the interfaces people use,
                    to the infrastructure that keeps them running.
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-5">
                    {serviceData.map(({ title, description }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="group border border-border rounded-lg p-6 sm:p-8 hover:border-accent transition-colors duration-300"
                        >
                            <div className="flex items-start justify-between">
                                <span className="font-mono text-xs text-fg-muted">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <motion.span
                                    className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                    whileHover={{ x: 4 }}
                                >
                                    →
                                </motion.span>
                            </div>
                            <h3 className="font-display uppercase text-lg sm:text-xl mt-4 mb-3 text-fg group-hover:text-accent transition-colors duration-300">
                                {title}
                            </h3>
                            <p className="text-fg-muted text-sm leading-relaxed">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services