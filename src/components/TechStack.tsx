'use client'

import { useEffect, useRef } from 'react'

const metrics = [
    { value: '40-60%', label: 'Load Time Reduction', unit: 'PERFORMANCE' },
    { value: '60', label: 'FPS 3D Rendering', unit: 'GRAPHICS' },
    { value: '169', label: 'Projects Completed', unit: 'DELIVERY' },
]

const stack = [
    'React', 'Next.js', 'TypeScript', 'Three.js', 'GLSL', 
    'Tailwind CSS', 'GSAP', 'Framer Motion', 'WebGL'
]

export default function TechStack() {
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
            data-testid="tech-stack-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Label */}
                <div className="stagger-item checkpoint-label mb-4 opacity-0">
                    TECHNICAL_CAPABILITIES
                </div>

                {/* Section Title */}
                <h2 className="stagger-item text-display-md mb-20 opacity-0">
                    System Performance
                </h2>

                {/* Metrics Grid - Cyan Accent */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="stagger-item opacity-0 p-8 border border-system-border bg-system-surface/30"
                            data-testid={`metric-${index}`}
                        >
                            <div className="checkpoint-label text-accent-cyan mb-4">
                                {metric.unit}
                            </div>
                            <div className="metric-display text-system-text mb-2">
                                {metric.value}
                            </div>
                            <div className="text-sm text-system-muted">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack - Minimal Pills */}
                <div>
                    <div className="stagger-item checkpoint-label mb-6 opacity-0">
                        CORE_TECHNOLOGIES
                    </div>
                    <div className="stagger-item flex flex-wrap gap-3 opacity-0">
                        {stack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm font-mono border border-system-border text-system-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
