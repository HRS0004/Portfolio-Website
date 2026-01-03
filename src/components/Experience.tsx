'use client'

import { useEffect, useRef } from 'react'

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.stagger-item').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('animate-fade-up')
                            }, index * 150)
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            ref={sectionRef}
            className="py-32 relative border-t border-system-border" 
            data-testid="experience-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Label */}
                <div className="stagger-item checkpoint-label mb-4 opacity-0 text-accent-orange">
                    PROFESSIONAL_TIMELINE
                </div>

                {/* Section Title */}
                <h2 className="stagger-item text-display-md mb-20 opacity-0">
                    Work History
                </h2>

                {/* Experience Cards */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="stagger-item opacity-0 grid lg:grid-cols-12 gap-8 p-8 lg:p-12 border border-system-border bg-system-surface/20 hover:border-accent-orange/30 transition-colors duration-500"
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
