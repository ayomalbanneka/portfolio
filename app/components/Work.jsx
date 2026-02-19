import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'>
                My Portfolio
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>
                My Latest Work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Here are some of the projects I've worked on.
                I'm always looking for new opportunities to collaborate and create amazing things,
                so if you have a project in mind, feel free to reach out!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-6 dark:text-black'>

                {workData.map((project, index) => (

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='aspect-video rounded-lg relative cursor-pointer group overflow-hidden shadow-lg'>
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                            className='object-cover object-top rounded-lg'
                        />
                        <div className='bg-white/95 w-11/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center gap-2 group-hover:bottom-5 duration-500 z-10'>
                            <div className='flex-1 min-w-0'>
                                <h2 className='font-semibold text-sm sm:text-base leading-snug'>{project.title}</h2>
                                <p className='text-xs sm:text-sm text-gray-700 leading-tight mt-0.5 line-clamp-2'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 min-w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='w-full h-full flex items-center justify-center'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                ))}
            </motion.div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href="" className='w-max flex items-center justify-center gap-2
                 text-gray-700 border-[0.5px] border-gray-700 
                 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover 
                 duration-500 dakr:text-white dark:border-white dark:hover:bg-dark-hover dark:text-white'>
                show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4' />
            </motion.a>
        </motion.div>
    )
}

export default Work