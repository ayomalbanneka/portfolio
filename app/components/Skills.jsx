'use client'

import React from 'react'
import { motion } from 'motion/react'
import { infoList, toolsData, cloudServicesData } from '@/assets/assets'

const languageRow = infoList.find((i) => i.title === 'Languages')
const educationRow = infoList.find((i) => i.title === 'Education')
const projectsRow = infoList.find((i) => i.title === 'Projects')

const rows = [
    {
        key: '01',
        label: 'languages',
        values: languageRow.description.split(',').map((s) => s.trim()),
    },
    { key: '02', label: 'tools', values: toolsData.map((t) => t.name) },
    { key: '03', label: 'cloud', values: cloudServicesData.map((t) => t.name) },
    { key: '04', label: 'education', values: [educationRow.description] },
    { key: '05', label: 'projects', values: [projectsRow.description] },
    {
        key: '06',
        label: 'certifications',
        values: [
            'Docker (KodeKloud) - Level 1',
            'Terraform (KodeKloud) - Level 1',
            'Terraform (KodeKloud) - Level 2',
            'KodeKloud Engineer - 100 Days of Cloud (Azure)',
            'KodeKloud Engineer - 100 Days of Cloud (AWS)',
            'Docker for Absolute Beginners with Hands on Projects',
            'Introduction to Jenkins LFS167',
            'LFS101: Introduction to Linux',
            'Postman API Fundamentals Student Expert',
            'Introduction to Amazon EC2 Auto Scaling'
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className="w-full px-5 lg:px-10 py-24 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-widest uppercase text-accent mb-3"
                >
                    // stack
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display uppercase text-3xl sm:text-4xl mb-10 text-fg"
                >
                    What I work with
                </motion.h2>

                <div className="border border-border rounded-lg overflow-hidden">
                    {rows.map((row, i) => (
                        <motion.div
                            key={row.key}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 sm:px-8 py-5 border-b border-border last:border-b-0 hover:bg-bg-elevated transition-colors duration-300"
                        >
                            <span className="font-mono text-xs text-fg-muted w-10 shrink-0">
                                {row.key}
                            </span>
                            <span className="font-display uppercase text-sm w-full sm:w-32 shrink-0 text-fg-muted group-hover:text-accent transition-colors duration-300">
                                {row.label}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {row.values.map((v) => (
                                    <span
                                        key={v}
                                        className="text-xs font-mono border border-border rounded px-2.5 py-1 text-fg-muted"
                                    >
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills