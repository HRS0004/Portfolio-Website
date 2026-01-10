'use client'

import { useRef } from 'react'
import RevealOnScroll from './ui/RevealOnScroll'

const stack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Three.js', category: '3D' },
    { name: 'R3F', category: '3D' },
    { name: 'WebGL', category: 'Core' },
    { name: 'Tailwind', category: 'Style' },
    { name: 'GSAP', category: 'Motion' },
    { name: 'Framer Motion', category: 'Motion' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'TensorFlow', category: 'AI' }
]

export default function TechStack() {
    return (
        <section id="stack" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <RevealOnScroll className="mb-16 text-center">
                    <span className="text-accent-glow font-mono text-xs tracking-[0.3em] uppercase opacity-70">
                        Arsenal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
                        Technologies
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {stack.map((tech, i) => (
                        <RevealOnScroll key={tech.name} delay={i * 50}>
                            <div className="group relative glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-accent-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-default">
                                <span className="text-white font-medium text-lg group-hover:text-accent-primary transition-colors">{tech.name}</span>
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{tech.category}</span>

                                <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}
