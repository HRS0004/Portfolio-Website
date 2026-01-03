'use client'

import { useEffect, useRef } from 'react'

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
            data-testid="projects-section"
        >
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10">
                {/* Section Label */}
                <div className="stagger-item checkpoint-label mb-4 opacity-0 text-accent-green">
                    COMPLETED_PROJECTS
                </div>

                {/* Section Title */}
                <h2 className="stagger-item text-display-md mb-20 opacity-0">
                    Key Achievements
                </h2>

                {/* Project Cards */}
                <div className="space-y-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="stagger-item opacity-0 grid lg:grid-cols-12 gap-8 p-8 lg:p-12 border border-system-border bg-system-surface/20 hover:border-accent-green/30 transition-colors duration-500"
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
                                            className="px-3 py-1 text-xs font-mono border border-system-border text-system-muted"
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
