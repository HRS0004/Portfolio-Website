'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink, Zap, Award } from 'lucide-react'

const projects = [
    {
        title: "Interactive 3D Pump Visualization",
        company: "Kirloskar @ Hanumatrix",
        outcome: "40-60% faster load • 60fps rendering",
        problem: "Needed engaging digital platform for complex industrial pump mechanisms.",
        tech: ["Next.js", "R3F", "Three.js", "GLSL"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        highlight: "3D Performance",
        icon: Zap
    },
    {
        title: "AI-Powered Complaint System",
        company: "Smart India Hackathon",
        outcome: "National Finalist • Measurable efficiency gains",
        problem: "Municipal corporations struggled with manual complaint categorization.",
        tech: ["Python", "TensorFlow", "Node.js", "React"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        highlight: "AI/ML",
        icon: Award
    }
]

export default function ProjectGallery() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Animate section header
        gsap.fromTo(
            '.projects-header',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-header',
                    start: 'top 80%',
                },
            }
        )

        // Animate project cards
        const projectCards = gsap.utils.toArray('.project-card')
        projectCards.forEach((card: any, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                }
            )
        })
    }, [])

    return (
        <section className="py-20 px-6 lg:px-24" ref={containerRef} data-testid="projects-section">
            {/* Section Header */}
            <div className="projects-header mb-16 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold uppercase mb-4">Featured Work</h2>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                    Real projects, real impact, real metrics
                </p>
            </div>

            {/* Project Cards - Compact & Scannable */}
            <div className="max-w-7xl mx-auto space-y-16">
                {projects.map((project, index) => {
                    const Icon = project.icon
                    return (
                        <div
                            key={index}
                            className="project-card grid lg:grid-cols-2 gap-8 items-center"
                            data-testid={`project-card-${index}`}
                        >
                            {/* Image with badges */}
                            <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                {/* Highlight Badge */}
                                <div className="absolute -top-3 left-4 z-20 px-4 py-2 bg-primary text-white text-sm font-mono uppercase tracking-wider shadow-lg flex items-center gap-2">
                                    <Icon size={16} />
                                    {project.highlight}
                                </div>

                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-video bg-neutral-900 border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* Content - Compact */}
                            <div className={`flex flex-col gap-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                {/* Title & Company */}
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-2" data-testid={`project-title-${index}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-mono text-primary">{project.company}</p>
                                </div>

                                {/* Outcome - BIG & BOLD */}
                                <div className="p-4 border-l-4 border-secondary bg-secondary/5">
                                    <p className="text-lg font-semibold text-white leading-relaxed">
                                        {project.outcome}
                                    </p>
                                </div>

                                {/* Problem - Short */}
                                <p className="text-neutral-400 leading-relaxed">
                                    {project.problem}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-mono border border-primary/30 text-primary bg-primary/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div>
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-primary hover:text-white font-mono text-sm uppercase transition-colors duration-300 group"
                                        data-testid={`project-link-${index}`}
                                    >
                                        <span>View Details</span>
                                        <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
