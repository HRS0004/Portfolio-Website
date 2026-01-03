'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const capabilities = [
    { name: 'Web-based 3D', desc: 'React Three Fiber · GLSL Shaders' },
    { name: 'Performance Optimization', desc: 'Load Time & GPU Efficiency' },
    { name: 'Industrial Visualization', desc: 'CAD Integration · Product Tours' },
    { name: 'Scroll Animation', desc: 'GSAP · Smooth Interactions' },
]

export default function Capabilities() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect() {
        gsap.registerPlugin(ScrollTrigger)

        // Section header
        gsap.fromTo(headerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    once: true
                }
            }
        )

        // Capability cards stagger
        const cards = cardsRef.current?.querySelectorAll('.capability-card')
        if (cards) {
            gsap.fromTo(cards,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                        once: true
                    }
                }
            )
        }
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="py-32 relative border-t border-system-border" 
            data-testid="capabilities-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Header */}
                <div ref={headerRef} style={{ opacity: 0 }}>
                    <div className="checkpoint-label mb-4 text-accent-purple">
                        SPECIALIZATIONS
                    </div>
                    <h2 className="text-display-md mb-20">
                        Core Focus Areas
                    </h2>
                </div>

                {/* Capabilities Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className="capability-card p-8 border border-system-border bg-system-surface/20 hover:border-accent-purple/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:translate-y-[-4px] transition-all duration-500"
                            style={{ opacity: 0 }}
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
