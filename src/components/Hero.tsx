'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const roleRef = useRef<HTMLHeadingElement>(null)
    const descRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Staggered word reveal for name
        if (titleRef.current) {
            const words = titleRef.current.querySelectorAll('.word')
            tl.fromTo(
                words,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                }
            )
        }

        // Role reveal
        tl.fromTo(
            roleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2 },
            '-=0.6'
        )

        // Description reveal
        tl.fromTo(
            descRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1 },
            '-=0.8'
        )
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-32" data-testid="hero-section">
            <div className="max-w-6xl mx-auto text-center">
                {/* Name - Clean & Bold */}
                <h1
                    ref={titleRef}
                    className="text-7xl md:text-8xl lg:text-9xl font-bold mb-12 text-white uppercase leading-none tracking-tight"
                    data-testid="hero-name"
                >
                    <span className="word inline-block mr-6 opacity-0">Hrishikesh</span>
                    <span className="word inline-block opacity-0">Supe</span>
                </h1>

                {/* Role - Clear Hierarchy */}
                <h2
                    ref={roleRef}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-8 opacity-0"
                    data-testid="hero-role"
                >
                    Frontend + 3D Web Specialist
                </h2>

                {/* Description - Calm & Concise */}
                <p
                    ref={descRef}
                    className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed opacity-0"
                    data-testid="hero-description"
                >
                    I build performant 3D web experiences with React, Three.js & performance optimization.
                </p>
            </div>
        </section>
    )
}
