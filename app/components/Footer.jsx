import React from 'react'

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/ayomalbanneka' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayomalbanneka/' },
    { label: 'Facebook', href: 'https://web.facebook.com/ayomal.kaushalya' },
    { label: 'Instagram', href: 'https://www.instagram.com/_ayomal____/' },
]

const Footer = () => {
    return (
        <footer className="w-full px-5 lg:px-10 pt-16 pb-8 border-t border-border">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="flex gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        </span>
                        <span className="font-display text-sm tracking-wider text-fg">
                            ayomal<span className="text-accent">@</span>portfolio
                        </span>
                    </div>
                    <a
                        href="mailto:ayomalkaushalya@gmail.com"
                        className="font-mono text-sm text-fg-muted hover:text-accent transition-colors duration-300"
                    >
                        ayomalkaushalya@gmail.com
                    </a>
                    <div className="mt-4">
                        <a
                            href="/now"
                            className="font-mono text-xs border border-border rounded px-3 py-1.5 text-fg-muted hover:border-accent hover:text-accent transition-colors duration-300"
                        >
                            [ /now ]
                        </a>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="font-mono text-xs text-fg-muted">
                        © 2026 Ayomal Banneka. All rights reserved.
                    </p>
                    <ul className="flex flex-wrap items-center justify-center gap-3">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={link.href}
                                    className="font-mono text-xs border border-border rounded px-3 py-1.5 text-fg-muted hover:border-accent hover:text-accent transition-colors duration-300"
                                >
                                    [ {link.label} ]
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer