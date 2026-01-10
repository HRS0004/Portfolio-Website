'use client'

import React from 'react'
import RevealOnScroll from './ui/RevealOnScroll'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative bg-void pt-32 pb-12 overflow-hidden border-t border-acid/10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-toxic/10 via-void to-void pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Massive CTA */}
                <RevealOnScroll>
                    <div className="mb-24 text-center">
                        <h2 className="text-[10vw] leading-[0.8] font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-mint to-void uppercase tracking-tighter opacity-30 select-none">
                            Init_Link
                        </h2>
                        <div className="relative -mt-[5vw] z-10">
                            <h3 className="text-4xl md:text-6xl font-display font-bold text-mint mb-8">
                                Ready to <span className="text-acid">Deploy?</span>
                            </h3>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <a href="mailto:hrishikesh.supe@example.com" className="px-8 py-4 bg-acid text-black font-bold font-mono uppercase tracking-widest hover:bg-toxic hover:shadow-neon transition-all duration-300">
                                    Initialize_Chat()
                                </a>
                                <a href="#" className="px-8 py-4 border border-acid/30 text-acid font-mono uppercase tracking-widest hover:bg-acid/10 transition-all duration-300">
                                    Download_CV_v2.0
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-mint/10 pt-16">
                    <div className="space-y-4">
                        <h4 className="text-acid font-mono text-sm uppercase tracking-widest">Coordinates</h4>
                        <p className="text-mint/60 font-mono text-sm">
                            Pune, IN<br />
                            Remote Available
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-acid font-mono text-sm uppercase tracking-widest">Connect</h4>
                        <div className="flex gap-4 text-mint/60">
                            <a href="#" className="hover:text-acid transition-colors"><Github /></a>
                            <a href="#" className="hover:text-acid transition-colors"><Linkedin /></a>
                            <a href="#" className="hover:text-acid transition-colors"><Twitter /></a>
                            <a href="#" className="hover:text-acid transition-colors"><Mail /></a>
                        </div>
                    </div>
                    <div className="lg:col-span-2 text-right">
                        <div className="text-[10px] text-acid/40 font-mono uppercase tracking-[0.2em] mb-2">
                            System Status: Nominal
                        </div>
                        <div className="text-[10px] text-mint/20 font-mono uppercase">
                            © {new Date().getFullYear()} Hrishikesh Supe · Built with Next.js & Anime.js
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
