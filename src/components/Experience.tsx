'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const experiences = [
    {
        company: 'Hanumatrix',
        role: 'Software Engineering Intern',
        period: '2024 — Present',
        achievements: [
            '40-60% faster load times for 3D visualizations',
            '60fps rendering on mid-range devices',
            'Dynamic imports & code splitting'
        ]
    },
    {
        company: 'Agnirva Space',
        role: 'Research Intern',
        period: '2023 — 2024',
        achievements: [
            'Web visualization for satellite telemetry',
            'Real-time data pipelines',
            'Technical documentation'
        ]
    }
]

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Section header
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

        // Experience cards stagger
        const cards = cardsRef.current?.querySelectorAll('.experience-card')
        if (cards) {
            cards.forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            once: true
                        },
                        delay: index * 0.2
                    }
                )
            })
        }
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="py-32 relative border-t border-system-border" 
            data-testid="experience-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Header */}
                <div ref={headerRef} style={{ opacity: 0 }}>
                    <div className="checkpoint-label mb-4 text-accent-orange">
                        PROFESSIONAL_TIMELINE
                    </div>
                    <h2 className="text-display-md mb-20">
                        Work History
                    </h2>
                </div>

                {/* Experience Cards */}
                <div ref={cardsRef} className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-card grid lg:grid-cols-12 gap-8 p-8 lg:p-12 border border-system-border bg-system-surface/20 hover:border-accent-orange/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:translate-y-[-4px] transition-all duration-500"
                            style={{ opacity: 0 }}
                            data-testid={`experience-${index}`}
                        >
                            {/* Period */}
                            <div className="lg:col-span-3">
                                <div className="checkpoint-label text-accent-orange">
                                    {exp.period}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-9 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-2">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm text-system-muted">
                                        {exp.role}
                                    </p>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <div key={achIndex} className="flex items-start gap-3">
                                            <div className="w-1 h-1 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-system-muted">
                                                {achievement}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
