'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import AnimatedBackground from './AnimatedBackground'

export default function Hero() {
    const nameRef = useRef<HTMLHeadingElement>(null)
    const statusRef = useRef<HTMLDivElement>(null)

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

        // Continue with status line
        tl.fromTo(statusRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.3'
        )
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" data-testid="hero-section">
            <AnimatedBackground />
            {/* Subtle grid texture */}
            <div className="absolute inset-0 grid-texture opacity-40"></div>

            <div className="section-container relative z-10">
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
                    className="flex items-center gap-4 mt-8"
                    ref={statusRef}
                    style={{ opacity: 0 }}
                >
                    <div className="h-px w-12 bg-accent-blue"></div>
                    <p className="text-xl lg:text-2xl text-system-muted font-sans">
                        Frontend Developer specializing in{' '}
                        <span className="text-accent-blue font-semibold">3D Web & Performance</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
