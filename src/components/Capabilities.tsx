'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Cpu, Gauge, Box, Layers } from 'lucide-react'

const capabilities = [
    {
        icon: Box,
        title: 'Web-based 3D',
        description: 'Interactive Three.js/R3F experiences with industrial-grade rendering and mechanical visualizations.',
        metrics: 'React Three Fiber · GLSL Shaders · Custom Geometries',
    },
    {
        icon: Gauge,
        title: 'Performance Optimization',
        description: '40-60% faster initial load times using dynamic imports, code splitting, and asset optimization.',
        metrics: 'GPU Load Reduction · Lazy Loading · Web Vitals',
    },
    {
        icon: Layers,
        title: 'Industrial Visualization',
        description: 'Technical storytelling for engineering products with accurate 3D models and interactive demos.',
        metrics: 'CAD Integration · Real-time Updates · Product Tours',
    },
    {
        icon: Cpu,
        title: 'Scroll-driven Storytelling',
        description: 'Smooth scroll animations and transitions that guide users through complex technical narratives.',
        metrics: 'GSAP · Framer Motion · Lenis Smooth Scroll',
    },
]

export default function Capabilities() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Animate capability cards on scroll
        const cards = gsap.utils.toArray('.capability-card')
        cards.forEach((card: any, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                    delay: index * 0.1,
                }
            )
        })

        // Animate section header
        gsap.fromTo(
            '.capabilities-header',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.capabilities-header',
                    start: 'top 80%',
                },
            }
        )
    }, [])

    return (
        <section
            className="section-padding bg-gradient-overlay-blue relative"
            ref={containerRef}
            data-testid="capabilities-section"
        >
            {/* Section Header */}
            <div className="capabilities-header mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="heading-secondary uppercase">3D & Interactive Web Capabilities</h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <p className="body-large text-neutral-400 max-w-3xl">
                    Specialized in building performant, interactive web experiences that combine technical depth with visual storytelling.
                </p>
            </div>

            {/* Capability Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl">
                {capabilities.map((capability, index) => {
                    const Icon = capability.icon
                    return (
                        <div
                            key={index}
                            className="capability-card group card-base card-hover p-8 lg:p-10 relative overflow-hidden"
                            data-testid={`capability-card-${index}`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 gradient-overlay-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 inline-flex p-3 border border-primary/30 bg-primary/5 rounded">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="heading-tertiary mb-4 group-hover:text-primary transition-colors duration-300">
                                    {capability.title}
                                </h3>

                                {/* Description */}
                                <p className="body-regular text-neutral-400 mb-6 leading-relaxed">
                                    {capability.description}
                                </p>

                                {/* Metrics/Tech Stack */}
                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-sm font-mono text-secondary">
                                        {capability.metrics}
                                    </p>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
                        </div>
                    )
                })}
            </div>

            {/* Bottom accent line */}
            <div className="mt-20 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
        </section>
    )
}
