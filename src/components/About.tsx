'use client'

import { useRef } from 'react'
// @ts-ignore
import { animate, scroll } from 'animejs' // Using animejs scroll if available, or just intersection observer wrapper
import RevealOnScroll from './ui/RevealOnScroll'
import { ArrowRight, Code2, Cpu, Globe } from 'lucide-react'

export default function About() {
    return (
        <section id="about" className="relative py-32 lg:py-48 bg-void overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-toxic/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Typography & Headline */}
                    <div className="space-y-12">
                        <RevealOnScroll direction="right">
                            <span className="text-acid font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-4">
                                <span className="w-8 h-px bg-acid"></span>
                                The Architect
                            </span>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <h2 className="text-display-md md:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tighter text-mint">
                                Building digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-toxic opacity-90 text-shadow-neon">monoliths</span> that breathe.
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <p className="text-lg md:text-xl text-mint/60 leading-relaxed max-w-lg font-light">
                                I bridge the gap between <strong className="text-mint font-medium">computational logic</strong> and <strong className="text-mint font-medium">aesthetic precision</strong>.
                                As a final-year Computer Engineering student, I don't just write code; I engineer
                                <span className="text-acid"> high-performance</span> interactive systems.
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={600}>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3">
                                    <Cpu className="w-5 h-5 text-acid" />
                                    <span className="font-mono text-sm text-mint/80">System Architecture</span>
                                </div>
                                <div className="glass-panel px-6 py-4 rounded-full flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-toxic" />
                                    <span className="font-mono text-sm text-mint/80">3D Web Experiences</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right: Abstract Visual / Stats */}
                    <div className="relative">
                        <RevealOnScroll direction="left" delay={300}>
                            <div className="glass-panel p-10 rounded-[2rem] border-acid/20 relative overflow-hidden group hover:border-acid/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-acid/10 blur-[80px] rounded-full group-hover:bg-acid/20 transition-all duration-700"></div>

                                <div className="relative z-10 space-y-12">
                                    <div className="flex justify-between items-start">
                                        <Code2 className="w-12 h-12 text-mint/80" />
                                        <span className="font-mono text-[10px] text-acid uppercase tracking-widest border border-acid/20 px-3 py-1 rounded-full bg-void">Status: Active</span>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-5xl font-display font-bold text-mint mb-2">03+</div>
                                            <div className="text-sm font-mono text-acid uppercase tracking-wider">Years Experience</div>
                                        </div>
                                        <div className="h-px w-full bg-acid/20"></div>
                                        <div>
                                            <div className="text-5xl font-display font-bold text-mint mb-2">20+</div>
                                            <div className="text-sm font-mono text-acid uppercase tracking-wider">Projects Shipped</div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <p className="text-sm text-mint/50 leading-relaxed font-mono">
                                            "Optimization is not a step; it is the entire process."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -right-12 -bottom-12 w-full h-full border border-acid/10 rounded-[2rem]"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
