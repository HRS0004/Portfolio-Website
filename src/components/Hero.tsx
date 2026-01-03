'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const valueRef = useRef<HTMLDivElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Staggered word reveal for title
        if (titleRef.current) {
            const words = titleRef.current.querySelectorAll('.word')
            tl.fromTo(
                words,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                }
            )
        }

        // Value proposition reveal
        tl.fromTo(
            valueRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1 },
            '-=0.4'
        )

        // Status badge reveal
        tl.fromTo(
            statusRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.6 },
            '-=0.5'
        )
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center section-padding" data-testid="hero-section">
            <div className="max-w-6xl">
                {/* Name - Staggered Word Reveal */}
                <h1
                    ref={titleRef}
                    className="heading-primary mb-6 text-white uppercase leading-tight"
                    data-testid="hero-name"
                >
                    <span className="word inline-block mr-4 opacity-0">Hrishikesh</span>
                    <span className="word inline-block opacity-0">Supe</span>
                </h1>

                {/* Value Proposition - Clear & Confident */}
                <div
                    ref={valueRef}
                    className="mb-12 opacity-0"
                    data-testid="hero-value-prop"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-px w-16 bg-primary hidden md:block"></span>
                        <h2 className="text-2xl lg:text-4xl font-bold text-primary">
                            Frontend Developer & 3D Web Specialist
                        </h2>
                    </div>
                    <p className="body-large text-neutral-300 max-w-3xl ml-0 md:ml-20 leading-relaxed">
                        I build <span className="text-white font-semibold">performant 3D web experiences</span> that combine 
                        technical depth with visual storytelling. Specialized in React, Three.js, and 
                        <span className="text-secondary"> performance optimization</span> for interactive applications.
                    </p>
                </div>

                {/* Availability Status - Recruiter Signal */}
                <div
                    ref={statusRef}
                    className="opacity-0 inline-flex items-center gap-4 flex-wrap"
                    data-testid="hero-status"
                >
                    <div className="flex items-center gap-3 px-5 py-3 border border-primary/30 bg-primary/5 backdrop-blur-sm">
                        <div className="relative">
                            <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                            <div className="absolute inset-0 w-2.5 h-2.5 bg-primary rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm font-mono text-neutral-300">
                            Currently at <span className="text-white font-semibold">Hanumatrix</span>
                        </span>
                    </div>
                    <div className="px-5 py-3 border border-secondary/30 bg-secondary/5 backdrop-blur-sm">
                        <span className="text-sm font-mono text-secondary font-semibold">
                            Open to New Opportunities
                        </span>
                    </div>
                </div>

                {/* Subtle technical accent */}
                <div className="mt-16 flex items-center gap-2 text-xs font-mono text-neutral-600">
                    <div className="w-2 h-2 border border-neutral-600"></div>
                    <span>SYSTEM_INITIALIZED</span>
                    <div className="h-px w-12 bg-neutral-800"></div>
                    <span>V1.0_PRODUCTION</span>
                </div>
            </div>
        </section>
    )
}
