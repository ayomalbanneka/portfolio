'use client'

import React from 'react'
import { motion } from 'motion/react'
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

        submitPromise.then(() => event.target.reset()).catch(() => { });
    };

    return (
        <section id="contact" className="w-full px-5 lg:px-10 py-24 scroll-mt-20 grid-texture">
            <div className="max-w-2xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-mono text-xs tracking-widest uppercase text-accent mb-3 text-center"
                >
                    // contact
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display uppercase text-3xl sm:text-4xl mb-4 text-fg text-center"
                >
                    Get in touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-fg-muted text-sm sm:text-base text-center max-w-lg mx-auto mb-12 leading-relaxed"
                >
                    Always open to discussing new projects, ideas, or opportunities. Fill out the
                    fields below and I'll get back to you.
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    onSubmit={onSubmit}
                    className="border border-border rounded-lg bg-bg-elevated p-6 sm:p-8"
                >
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <label className="block">
                            <span className="font-mono text-xs text-accent">name:</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="jane_doe"
                                required
                                className="w-full mt-2 bg-transparent border-b border-border py-2 text-sm text-fg placeholder:text-fg-muted/60 outline-none focus:border-accent transition-colors duration-300"
                            />
                        </label>

                        <label className="block">
                            <span className="font-mono text-xs text-accent">email:</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="jane@example.com"
                                required
                                className="w-full mt-2 bg-transparent border-b border-border py-2 text-sm text-fg placeholder:text-fg-muted/60 outline-none focus:border-accent transition-colors duration-300"
                            />
                        </label>
                    </div>

                    <label className="block mb-8">
                        <span className="font-mono text-xs text-accent">message:</span>
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                            className="w-full mt-2 bg-transparent border-b border-border py-2 text-sm text-fg placeholder:text-fg-muted/60 outline-none focus:border-accent transition-colors duration-300 resize-none"
                        />
                    </label>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-max mx-auto flex items-center justify-center gap-2 text-sm border border-fg rounded px-8 py-3 text-fg hover:bg-fg hover:text-bg transition-colors duration-300"
                    >
                        [ submit_now ]
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}

export default Contact