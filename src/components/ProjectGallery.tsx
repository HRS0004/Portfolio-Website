'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const projects = [
    {
        id: '01',
        title: 'Interactive 3D Pump Visualization',
        company: 'Kirloskar @ Hanumatrix',
        impact: '40-60% faster load times',
        tech: ['Next.js', 'React Three Fiber', 'GLSL'],
        year: '2024'
    },
    {
        id: '02',
        title: 'AI-Powered Complaint Management',
        company: 'Smart India Hackathon',
        impact: 'National Finalist Selection',
        tech: ['Python', 'TensorFlow', 'React'],
        year: '2024'
    }
]

export default function ProjectGallery() {
    const sectionRef = useRef<HTMLElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

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

        // Project cards stagger
        const projectCards = projectsRef.current?.querySelectorAll('.project-card')
        if (projectCards) {
            projectCards.forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
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
            data-testid="projects-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Header */}
                <div ref={headerRef} style={{ opacity: 0 }}>
                    <div className="checkpoint-label mb-4 text-accent-green">
                        COMPLETED_PROJECTS
                    </div>
                    <h2 className="text-display-md mb-20">
                        Key Achievements
                    </h2>
                </div>

                {/* Project Cards */}
                <div ref={projectsRef} className="space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card grid lg:grid-cols-12 gap-8 p-8 lg:p-12 border border-system-border bg-system-surface/20 hover:border-accent-green/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:translate-y-[-4px] transition-all duration-500"
                            style={{ opacity: 0 }}
                            data-testid={`project-${project.id}`}
                        >
                            {/* Project Number */}
                            <div className="lg:col-span-2">
                                <div className="text-6xl font-display font-bold text-accent-green/30">
                                    {project.id}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-display font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-system-muted">
                                        {project.company}
                                    </p>
                                </div>

                                {/* Impact */}
                                <div className="inline-flex items-center gap-3 px-4 py-2 border-l-2 border-accent-green bg-accent-green/5">
                                    <span className="text-sm font-medium text-accent-green">
                                        {project.impact}
                                    </span>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-mono border border-system-border text-system-muted hover:text-accent-green hover:border-accent-green/30 hover:translate-y-[-2px] transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Year */}
                            <div className="lg:col-span-3 flex lg:justify-end items-start">
                                <div className="checkpoint-label">
                                    {project.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
