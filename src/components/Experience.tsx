'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Briefcase } from 'lucide-react'

const experiences = [
    {
        company: "Hanumatrix",
        role: "Software Engineering Intern",
        period: "2024 - Present",
        description: "Next.js apps & 3D industrial platforms. Performance optimization & React Three Fiber.",
        achievements: [
            "40-60% faster load times for 3D visualizations",
            "60fps rendering on mid-range devices",
            "Dynamic imports & code splitting for assets"
        ]
    },
    {
        company: "Agnirva Space",
        role: "Research Intern",
        period: "2023 - 2024",
        description: "Satellite systems & AI/ML for climate analysis. Web-based data visualization.",
        achievements: [
            "Web visualization tools for satellite telemetry",
            "Real-time data pipelines (Python/Node.js)",
            "Technical documentation for engineering teams"
        ]
    }
]

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const milestones = gsap.utils.toArray('.milestone')
        milestones.forEach((milestone: any, index) => {
            gsap.fromTo(
                milestone,
                { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: milestone,
                        start: 'top 80%',
                    },
                }
            )
        })
    }, [])

    return (
        <section 
            className="py-20 px-6 lg:px-24 bg-gradient-overlay-blue" 
            ref={containerRef}
            data-testid="experience-section"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold uppercase mb-4">Experience</h2>
                    <p className="text-lg text-neutral-400">Where I've worked</p>
                </div>

                {/* Experience Cards - Simplified */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="milestone card-base card-hover p-8 relative group"
                            data-testid={`experience-card-${index}`}
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                                {exp.company}
                                            </h3>
                                            <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-neutral-400 font-medium">{exp.role}</h4>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-300 mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Achievements - Compact bullets */}
                                    <div className="space-y-2">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-neutral-400">
                                                    {achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
