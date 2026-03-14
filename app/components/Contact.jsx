import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { gooeyToast } from 'goey-toast'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

        const submitPromise = fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        }).then(async (res) => {
            const data = await res.json();
            if (!data.success) throw new Error(data.message || "Submission failed");
            return data;
        });

        gooeyToast.promise(submitPromise, {
            loading: 'Sending your message...',
            success: 'Message sent!',
            error: 'Something went wrong',
            description: {
                success: 'Thanks for reaching out. I\'ll get back to you soon.',
                error: 'Please try again or email me directly.',
            },
        });

        submitPromise.then(() => event.target.reset()).catch(() => {});
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='contact' className='w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
        bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='text-center mb-2 text-lg font-ovo'>
                Connect with Me
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-3xl sm:text-5xl font-ovo'>
                Get in touch
            </motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                Feel free to reach out to me through any of the platforms below, and let's start a conversation!
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>

                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.6 }}
                        type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px]
                     border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' required name='name' />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.1, delay: 0.6 }}
                        type="email" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px]
                     border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90' required name='email' />

                </div>

                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    rows='6' placeholder='Enter your message' required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 
                    rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90' name="message">
                </motion.textarea>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
                 text-white rounded-full mx-auto hover:bg-black 
                 duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover' type='submit'>
                    Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.button>

            </motion.form>
        </motion.div>
    )
}

export default Contact