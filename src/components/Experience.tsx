'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const experiences = [
    {
        company: "Hanumatrix",
        role: "Software Engineering Intern",
        period: "2024 - Present",
        description: "Developing client-facing Next.js applications and immersive 3D industrial storytelling platforms. Focus on performance optimization, React Three Fiber implementations, and technical visualization for engineering products.",
        achievements: [
            "Built interactive 3D product visualizations with 40-60% faster load times",
            "Optimized GPU performance for smooth 60fps rendering on mid-range devices",
            "Implemented dynamic imports and code splitting for 3D asset management"
        ]
    },
    {
        company: "Agnirva Space",
        role: "Research Intern",
        period: "2023 - 2024",
        description: "Working on satellite communication systems and AI/ML models for climate analysis. Bridging the gap between aerospace data and web visualization through interactive dashboards and data storytelling.",
        achievements: [
            "Developed web-based data visualization tools for satellite telemetry",
            "Implemented real-time data processing pipelines using Python and Node.js",
            "Created technical documentation and training materials for engineering teams"
        ]
    }
]

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Animate section header
        gsap.fromTo(
            '.experience-header',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.experience-header',
                    start: 'top 80%',
                },
            }
        )

        // Vertical line growth animation
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: 'power2.out',
                duration: 1.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom 70%',
                    scrub: 1,
                },
            }
        )

        // Milestone cards animation
        const milestones = gsap.utils.toArray('.milestone')
        milestones.forEach((milestone: any, index) => {
            gsap.fromTo(
                milestone,
                {
                    opacity: 0,
                    x: milestone.classList.contains('left-side') ? -60 : 60,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: milestone,
                        start: 'top 80%',
                    },
                    delay: index * 0.15,
                }
            )
        })
    }, [])

    return (
        <section 
            className="section-padding bg-gradient-overlay-blue relative" 
            ref={containerRef}
            data-testid="experience-section"
        >
            {/* Section Header */}
            <div className="experience-header mb-24">
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="heading-secondary uppercase">Experience</h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <p className="body-large text-neutral-400 max-w-3xl">
                    Professional journey focused on frontend development, 3D web technologies, and performance optimization.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Vertical Timeline Lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 hidden md:block" />
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 bottom-0 w-px bg-primary -translate-x-1/2 hidden md:block origin-top"
                />

                {/* Experience Cards */}
                <div className="space-y-32">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="relative flex flex-col md:flex-row items-center"
                            data-testid={`experience-card-${index}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-neutral-950 z-10 hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>

                            {/* Content Card */}
                            <div
                                className={`milestone w-full md:w-1/2 ${
                                    index % 2 === 0
                                        ? 'left-side md:pr-12 lg:pr-16'
                                        : 'right-side md:pl-12 lg:pl-16 md:ml-auto'
                                }`}
                            >
                                <div className="card-base card-hover p-8 lg:p-10 relative group">
                                    {/* Period Badge */}
                                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/10 border border-primary/30">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        <span className="text-primary font-mono text-sm">{exp.period}</span>
                                    </div>

                                    {/* Company & Role */}
                                    <h3 className="heading-tertiary mb-2 group-hover:text-primary transition-colors duration-300">
                                        {exp.company}
                                    </h3>
                                    <h4 className="text-lg text-neutral-400 font-medium mb-6">{exp.role}</h4>

                                    {/* Description */}
                                    <p className="body-regular text-neutral-300 mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="space-y-3 pt-6 border-t border-white/5">
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <div key={achIndex} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-sm text-neutral-400 leading-relaxed">
                                                    {achievement}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Corner accent */}
                                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20 group-hover:border-secondary/40 transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-24 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
        </section>
    )
}
