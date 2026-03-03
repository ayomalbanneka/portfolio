import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <footer className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Ayomal Banneka logo' className='w-36 mx-auto mb-2' />

                <address className='w-max flex items-center justify-center gap-2 mx-auto not-italic'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email' className='w-6' />
                    <a href='mailto:ayomalkaushalya@gmail.com'>ayomalkaushalya@gmail.com</a>
                </address>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[5%] sm:mx-[10%] mt-12 py-6'>
                <p>© 2026 Ayomal Banneka. All rights reserved.</p>
                <ul className='flex flex-wrap items-center gap-4 sm:gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/ayomalbanneka">GitHub</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/ayomalbanneka/">LinkedIn</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://web.facebook.com/ayomal.kaushalya">Facebook</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/_ayomal____/">Instagram</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer