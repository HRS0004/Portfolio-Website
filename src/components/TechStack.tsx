'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const metrics = [
    { value: 50, label: 'Load Time Reduction', unit: 'PERFORMANCE', suffix: '%' },
    { value: 60, label: 'FPS 3D Rendering', unit: 'GRAPHICS', suffix: '' },
    { value: 169, label: 'Projects Completed', unit: 'DELIVERY', suffix: '' },
]

const stack = [
    'React', 'Next.js', 'TypeScript', 'Three.js', 'GLSL', 
    'Tailwind CSS', 'GSAP', 'Framer Motion', 'WebGL'
]

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const metricsRef = useRef<HTMLDivElement>(null)
    const stackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Section header animation
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

        // Metric cards stagger
        const metricCards = metricsRef.current?.querySelectorAll('.metric-card')
        if (metricCards) {
            gsap.fromTo(metricCards,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: metricsRef.current,
                        start: 'top 75%',
                        once: true
                    },
                    onComplete: function() {
                        // Animate number count-up for each metric
                        metricCards.forEach((card, index) => {
                            const numberEl = card.querySelector('.metric-number')
                            if (numberEl) {
                                gsap.fromTo(numberEl,
                                    { textContent: 0 },
                                    {
                                        textContent: metrics[index].value,
                                        duration: 1.5,
                                        ease: 'power2.out',
                                        snap: { textContent: 1 },
                                        delay: index * 0.1
                                    }
                                )
                            }
                        })
                    }
                }
            )
        }

        // Stack pills stagger
        gsap.fromTo(stackRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: stackRef.current,
                    start: 'top 85%',
                    once: true
                }
            }
        )
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="py-32 relative border-t border-system-border" 
            data-testid="tech-stack-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Header */}
                <div ref={headerRef} style={{ opacity: 0 }}>
                    <div className="checkpoint-label mb-4">
                        TECHNICAL_CAPABILITIES
                    </div>
                    <h2 className="text-display-md mb-20">
                        System Performance
                    </h2>
                </div>

                {/* Metrics Grid - Cyan Accent */}
                <div ref={metricsRef} className="grid md:grid-cols-3 gap-8 mb-32">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="metric-card p-8 border border-system-border bg-system-surface/30 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:translate-y-[-4px] transition-all duration-500"
                            style={{ opacity: 0 }}
                            data-testid={`metric-${index}`}
                        >
                            <div className="checkpoint-label text-accent-cyan mb-4">
                                {metric.unit}
                            </div>
                            <div className="metric-display text-system-text mb-2">
                                <span className="metric-number">0</span>{metric.suffix}
                            </div>
                            <div className="text-sm text-system-muted">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack - Minimal Pills */}
                <div ref={stackRef} style={{ opacity: 0 }}>
                    <div className="checkpoint-label mb-6">
                        CORE_TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {stack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm font-mono border border-system-border text-system-muted hover:text-accent-cyan hover:border-accent-cyan/30 hover:translate-y-[-2px] transition-all duration-300 cursor-default"
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
