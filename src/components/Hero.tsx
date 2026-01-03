'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
    const nameRef = useRef<HTMLDivElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)
    const metricRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const elements = [nameRef, statusRef, metricRef, ctaRef]
        
        elements.forEach((ref, index) => {
            if (ref.current) {
                setTimeout(() => {
                    ref.current?.classList.add('animate-fade-up')
                }, index * 150)
            }
        })
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" data-testid="hero-section">
            {/* Subtle grid texture */}
            <div className="absolute inset-0 grid-texture opacity-40"></div>
            
            <div className="section-container relative z-10">
                {/* Checkpoint Label */}
                <div className="checkpoint-label mb-8 opacity-0" ref={nameRef}>
                    SYSTEM_CHECKPOINT_2024
                </div>

                {/* Name - Geometric Display */}
                <h1 
                    className="text-display-xl text-system-text mb-6 opacity-0"
                    style={{ animationDelay: '150ms' }}
                    ref={statusRef}
                    data-testid="hero-name"
                >
                    HRISHIKESH<br />SUPE
                </h1>

                {/* Status Line - Single Accent */}
                <div 
                    className="flex items-center gap-4 mb-12 opacity-0"
                    style={{ animationDelay: '300ms' }}
                    ref={metricRef}
                >
                    <div className="h-px w-12 bg-accent-blue"></div>
                    <p className="text-xl lg:text-2xl text-system-muted font-sans">
                        Frontend Developer specializing in{' '}
                        <span className="text-accent-blue font-semibold">3D Web & Performance</span>
                    </p>
                </div>

                {/* Primary Metric - System Readout */}
                <div 
                    className="mb-16 opacity-0"
                    style={{ animationDelay: '450ms' }}
                    ref={ctaRef}
                >
                    <div className="inline-flex items-baseline gap-4 p-6 border border-system-border bg-system-surface/50">
                        <div className="metric-display text-accent-blue">
                            60
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-system-text font-medium">FPS</span>
                            <span className="text-xs text-system-muted">3D Rendering Performance</span>
                        </div>
                    </div>
                </div>

                {/* Single CTA */}
                <div className="opacity-0" style={{ animationDelay: '600ms' }}>
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white font-sans font-medium uppercase tracking-wider text-sm hover:bg-accent-blue/90 transition-all duration-300"
                        data-testid="hero-cta"
                    >
                        View Full Report
                    </a>
                </div>

                {/* Minimal status indicator */}
                <div className="mt-24 flex items-center gap-3 opacity-0" style={{ animationDelay: '750ms' }}>
                    <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse"></div>
                    <span className="checkpoint-label">Available for opportunities</span>
                </div>
            </div>
        </section>
    )
}
