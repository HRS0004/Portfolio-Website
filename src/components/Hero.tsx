'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const nameRef = useRef<HTMLHeadingElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)
    const metricRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const availRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Split name into individual letters for animation
        const nameElement = nameRef.current
        if (nameElement) {
            const text = nameElement.textContent || ''
            nameElement.innerHTML = text.split('').map((char, index) => 
                char === ' ' 
                    ? '<span class="letter" style="display: inline-block; width: 1rem;"></span>'
                    : `<span class="letter" style="display: inline-block; opacity: 0;">${char}</span>`
            ).join('')
        }

        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

        // Letter-by-letter reveal for name
        const letters = nameRef.current?.querySelectorAll('.letter')
        if (letters) {
            tl.fromTo(letters,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.05,
                    stagger: {
                        amount: 0.8,
                        from: 'start'
                    }
                }
            )
        }

        // Continue with other elements
        tl.fromTo(statusRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.3'
        )
        .fromTo(metricRef.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8 },
            '-=0.5'
        )
        .fromTo(ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.3'
        )
        .fromTo(availRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            '-=0.2'
        )

        // Animate number count-up
        const metricNumber = metricRef.current?.querySelector('.metric-number')
        if (metricNumber) {
            gsap.fromTo(metricNumber,
                { textContent: 0 },
                {
                    textContent: 60,
                    duration: 1.5,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    delay: 1.2
                }
            )
        }
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" data-testid="hero-section">
            {/* Subtle grid texture */}
            <div className="absolute inset-0 grid-texture opacity-40"></div>
            
            <div className="section-container relative z-10">
                {/* Checkpoint Label */}
                <div className="checkpoint-label mb-8 opacity-0" style={{ animation: 'fadeIn 0.6s ease-out forwards' }}>
                    SYSTEM_CHECKPOINT_2024
                </div>

                {/* Name - Single Line with Letter Animation */}
                <h1 
                    ref={nameRef}
                    className="text-display-xl text-system-text mb-6 whitespace-nowrap"
                    data-testid="hero-name"
                >
                    HRISHIKESH SUPE
                </h1>

                {/* Status Line - Single Accent */}
                <div 
                    className="flex items-center gap-4 mb-12"
                    ref={statusRef}
                    style={{ opacity: 0 }}
                >
                    <div className="h-px w-12 bg-accent-blue"></div>
                    <p className="text-xl lg:text-2xl text-system-muted font-sans">
                        Frontend Developer specializing in{' '}
                        <span className="text-accent-blue font-semibold">3D Web & Performance</span>
                    </p>
                </div>

                {/* Primary Metric - System Readout with hover */}
                <div 
                    className="mb-16 inline-block"
                    ref={metricRef}
                    style={{ opacity: 0 }}
                >
                    <div className="inline-flex items-baseline gap-4 p-6 border border-system-border bg-system-surface/50 hover:border-accent-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-500">
                        <div className="metric-display text-accent-blue">
                            <span className="metric-number">0</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-system-text font-medium">FPS</span>
                            <span className="text-xs text-system-muted">3D Rendering Performance</span>
                        </div>
                    </div>
                </div>

                {/* Single CTA with hover */}
                <div ref={ctaRef} style={{ opacity: 0 }}>
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white font-sans font-medium uppercase tracking-wider text-sm hover:bg-accent-blue/90 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                        data-testid="hero-cta"
                    >
                        View Full Report
                    </a>
                </div>

                {/* Minimal status indicator */}
                <div className="mt-24 flex items-center gap-3" style={{ opacity: 0 }} ref={availRef}>
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
                    <span className="checkpoint-label">Available for opportunities</span>
                </div>
            </div>
        </section>
    )
}
