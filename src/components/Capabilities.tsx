'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Box, Gauge, Layers, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: Box,
        title: 'Web-based 3D',
        metric: 'React Three Fiber · GLSL · WebGL',
    },
    {
        icon: Gauge,
        title: 'Performance',
        metric: '40-60% Faster · GPU Optimization',
    },
    {
        icon: Layers,
        title: 'Industrial Viz',
        metric: 'CAD Integration · Product Tours',
    },
    {
        icon: Cpu,
        title: 'Scroll Animation',
        metric: 'GSAP · Framer Motion · Smooth UX',
    },
]

export default function Capabilities() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cards = gsap.utils.toArray('.capability-card')
        gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            }
        )
    }, [])

    return (
        <section
            className="py-20 px-6 lg:px-24 bg-gradient-overlay-blue"
            ref={containerRef}
            data-testid="capabilities-section"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold uppercase mb-4">Core Capabilities</h2>
                    <p className="text-lg text-neutral-400">What I specialize in</p>
                </div>

                {/* Capability Cards - Compact Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon
                        return (
                            <div
                                key={index}
                                className="capability-card group card-base p-6 text-center hover:border-primary/40 transition-all duration-300"
                                data-testid={`capability-card-${index}`}
                            >
                                {/* Icon */}
                                <div className="mb-4 inline-flex p-4 border-2 border-primary/30 bg-primary/5 rounded-lg group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                    {capability.title}
                                </h3>

                                {/* Metric */}
                                <p className="text-xs font-mono text-secondary leading-relaxed">
                                    {capability.metric}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
