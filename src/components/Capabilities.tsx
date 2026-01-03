'use client'

import { useEffect, useRef } from 'react'

const capabilities = [
    { name: 'Web-based 3D', desc: 'React Three Fiber · GLSL Shaders' },
    { name: 'Performance Optimization', desc: 'Load Time & GPU Efficiency' },
    { name: 'Industrial Visualization', desc: 'CAD Integration · Product Tours' },
    { name: 'Scroll Animation', desc: 'GSAP · Smooth Interactions' },
]

export default function Capabilities() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.stagger-item').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fade-up')
                            }, index * 100)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
                    observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="py-32 relative border-t border-system-border" 
            data-testid="capabilities-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Label */}
                <div className="stagger-item checkpoint-label mb-4 opacity-0 text-accent-purple">
                    SPECIALIZATIONS
                </div>

                {/* Section Title */}
                <h2 className="stagger-item text-display-md mb-20 opacity-0">
                    Core Focus Areas
                </h2>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className="stagger-item opacity-0 p-8 border border-system-border bg-system-surface/20 hover:border-accent-purple/30 transition-colors duration-500"
                            data-testid={`capability-${index}`}
                        >
                            <h3 className="text-2xl font-display font-bold mb-3">
                                {capability.name}
                            </h3>
                            <p className="text-sm text-system-muted font-mono">
                                {capability.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
