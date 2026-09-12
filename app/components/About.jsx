'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { assets } from '@/assets/assets'

const About = () => {
    return (
        <section id="about" className="w-full px-5 lg:px-10 py-24 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-widest uppercase text-accent mb-3"
                >
                    // about
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display uppercase text-3xl sm:text-4xl mb-12 text-fg"
                >
                    Who's writing this code
                </motion.h2>

                <div className="grid lg:grid-cols-[15rem_1fr] gap-10 lg:gap-14 items-start">
                    {/* Portrait, framed like a small terminal window */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="border border-border rounded-lg overflow-hidden bg-bg-elevated mx-auto lg:mx-0 w-56 sm:w-64 lg:w-full"
                    >
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            <span className="ml-2 text-[10px] text-fg-muted font-mono">
                                portrait.png
                            </span>
                        </div>
                        <Image
                            src={assets.user_image}
                            alt="Ayomal Banneka portrait"
                            className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                    </motion.div>

                    {/* Bio, styled like a README file open in an editor */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="border border-border rounded-lg overflow-hidden bg-bg-elevated"
                    >
                        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
                            <span className="text-accent font-mono text-xs">#</span>
                            <span className="text-xs font-mono text-fg-muted">README.md</span>
                        </div>
                        <div className="p-6 sm:p-8">
                            <p className="text-fg-muted text-sm sm:text-base leading-relaxed">
                                I'm a passionate full stack software engineer with a strong
                                foundation in both frontend and backend development. I have
                                experience working with a variety of technologies and frameworks,
                                and I'm always eager to learn and explore new tools and techniques.
                                <br />
                                <br />
                                I enjoy building beautiful, performant, and accessible web
                                applications that provide real value to users. I'm also an
                                aspiring DevOps Engineer, looking to sharpen my skills in
                                deployment and infrastructure management to create seamless,
                                efficient development workflows.
                                <span className="text-accent cursor-blink ml-1">_</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About