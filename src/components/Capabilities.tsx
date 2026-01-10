'use client'

import RevealOnScroll from './ui/RevealOnScroll'
import { Zap, Layout, Box, Monitor } from 'lucide-react'

const capabilities = [
    {
        name: 'Web-based 3D',
        desc: 'Constructing immersive environments using React Three Fiber & customized GLSL shaders.',
        icon: Box
    },
    {
        name: 'Performance Opt.',
        desc: 'Maximizing frame rates and minimizing load times through strict GPU efficiency protocols.',
        icon: Zap
    },
    {
        name: 'Industrial Viz',
        desc: 'Integrating complex CAD pipelines into seamless, interactive product tours.',
        icon: Monitor
    },
    {
        name: 'Motion Systems',
        desc: 'Orchestrating smooth, physics-based interactions with GSAP and Anime.js.',
        icon: Layout
    },
]

export default function Capabilities() {
    return (
        <section className="py-32 relative z-10 bg-void border-t border-acid/10">
            {/* Toxic Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-toxic/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <RevealOnScroll className="mb-20">
                    <div className="flex flex-col gap-4">
                        <span className="text-acid font-mono text-xs tracking-[0.3em] uppercase opacity-80 flex items-center gap-2">
                            <span className="w-2 h-2 bg-acid rounded-full animate-pulse"></span>
                            System Modules
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-mint uppercase tracking-tighter">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-toxic">Capabilities</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {capabilities.map((cap, i) => (
                        <RevealOnScroll key={i} delay={i * 100}>
                            <div className="glass-panel group p-10 h-full relative overflow-hidden transition-all duration-500 hover:border-acid/40 hover:bg-void-light/80">

                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-acid transform group-hover:rotate-12 group-hover:scale-110">
                                    <cap.icon size={64} strokeWidth={1} />
                                </div>

                                <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                                    <div>
                                        <div className="text-acid mb-4">
                                            <cap.icon size={32} />
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-mint mb-2 group-hover:text-white transition-colors">
                                            {cap.name}
                                        </h3>
                                        <p className="font-mono text-sm text-mint/60 leading-relaxed max-w-sm group-hover:text-mint/90">
                                            {cap.desc}
                                        </p>
                                    </div>

                                    <div className="w-full h-px bg-acid/20 group-hover:bg-acid/50 transition-colors relative overflow-hidden">
                                        <div className="absolute inset-0 bg-acid w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}
