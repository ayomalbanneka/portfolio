import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div>
            <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-ovo'>
                    My Portfolio
                </h4>
                <h2 className='text-center text-5xl font-ovo'>
                    My Work
                </h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    Here are some of the projects I've worked on.
                    I'm always looking for new opportunities to collaborate and create amazing things,
                    so if you have a project in mind, feel free to reach out!
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
                    {workData.map((project, index) => (
                        <div key={index}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group   '
                            style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-small text-gray-700'>{project.description}</p>
                                </div>
                                <div  className='border rounded-full border-black w-9 aspect-square flex items-center 
                                justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="" className='w-max flex items-center justify-center gap-2
                 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500'>
                    show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Work