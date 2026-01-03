'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Download, Sparkles, Zap, Trophy } from 'lucide-react'

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const valueRef = useRef<HTMLDivElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

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

        // Stats reveal
        tl.fromTo(
            statsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.3'
        )
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center section-padding" data-testid="hero-section">
            <div className="max-w-7xl">
                {/* Name - Large & Bold */}
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-white uppercase leading-none"
                    data-testid="hero-name"
                >
                    <span className="word inline-block mr-4 opacity-0">Hrishikesh</span>
                    <span className="word inline-block opacity-0">Supe</span>
                </h1>

                {/* Value Proposition - SHORT & PUNCHY */}
                <div
                    ref={valueRef}
                    className="mb-8 opacity-0"
                    data-testid="hero-value-prop"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Frontend + 3D Web Specialist
                    </h2>
                    <p className="text-xl lg:text-2xl text-neutral-300 max-w-4xl font-light">
                        I build <span className="text-white font-semibold">performant 3D web experiences</span> with React, Three.js & performance optimization.
                    </p>
                </div>

                {/* Status + CTA - Side by Side */}
                <div
                    ref={statusRef}
                    className="opacity-0 flex flex-wrap items-center gap-4 mb-12"
                    data-testid="hero-status"
                >
                    {/* Availability Badge */}
                    <div className="flex items-center gap-3 px-5 py-3 border-2 border-secondary/50 bg-secondary/10 backdrop-blur-sm">
                        <div className="relative">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                        </div>
                        <span className="text-base font-mono text-white font-semibold">
                            Open to Opportunities
                        </span>
                    </div>

                    {/* Primary CTA - Download Resume */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white font-mono text-base font-semibold uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] group"
                        data-testid="hero-download-resume"
                    >
                        <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                        <span>Download Resume</span>
                    </a>

                    {/* Currently At */}
                    <div className="text-base font-mono text-neutral-400">
                        Currently at <span className="text-white font-semibold">Hanumatrix</span>
                    </div>
                </div>

                {/* Quick Stats - Visual Impact */}
                <div
                    ref={statsRef}
                    className="opacity-0 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
                    data-testid="hero-stats"
                >
                    {/* Stat 1 */}
                    <div className="flex items-start gap-4 p-5 border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors duration-300">
                        <div className="p-2 bg-primary/20 rounded">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">40-60%</div>
                            <div className="text-sm text-neutral-400">Faster Load Times</div>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex items-start gap-4 p-5 border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors duration-300">
                        <div className="p-2 bg-primary/20 rounded">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">60 FPS</div>
                            <div className="text-sm text-neutral-400">3D Rendering</div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex items-start gap-4 p-5 border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors duration-300">
                        <div className="p-2 bg-primary/20 rounded">
                            <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">SIH</div>
                            <div className="text-sm text-neutral-400">National Finalist</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
