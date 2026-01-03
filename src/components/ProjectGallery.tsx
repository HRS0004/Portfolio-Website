'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "Interactive 3D Pump Visualization",
        problem: "Kirloskar needed an engaging digital platform to showcase complex industrial pump mechanisms to clients and stakeholders.",
        approach: "Built an interactive 3D web experience using Next.js and React Three Fiber, enabling real-time exploration of pump internals and technical specifications.",
        tech: ["Next.js", "React Three Fiber", "Three.js", "GLSL Shaders", "Performance Optimization"],
        outcome: "~40-60% faster initial load time through dynamic imports and optimized 3D asset loading. Smooth 60fps rendering on mid-range devices.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        highlight: "3D Performance"
    },
    {
        title: "AI-Powered Complaint Management System",
        problem: "Municipal corporations struggled with manual complaint categorization and priority assignment, leading to delayed citizen response times.",
        approach: "Developed an AI/ML-powered system for Smart India Hackathon that automatically categorizes, prioritizes, and routes complaints using NLP and classification models.",
        tech: ["Python", "Node.js", "TensorFlow", "PostgreSQL", "React", "REST APIs"],
        outcome: "Selected for Smart India Hackathon national finals. System demonstrated measurable improvement in complaint processing efficiency and citizen satisfaction metrics.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        highlight: "AI/ML Integration"
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
            // Card entrance
            gsap.fromTo(
                card,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                }
            )

            // Image subtle zoom on scroll
            const image = card.querySelector('.project-image')
            gsap.fromTo(
                image,
                { scale: 1.05 },
                {
                    scale: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            )

            // Tech tags staggered entrance
            const tags = card.querySelectorAll('.tech-tag')
            gsap.fromTo(
                tags,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 75%',
                    },
                }
            )
        })
    }, [])

    return (
        <section className="section-padding" ref={containerRef} data-testid="projects-section">
            {/* Section Header */}
            <div className="projects-header mb-20">
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="heading-secondary uppercase">Featured Projects</h2>
                    <div className="h-px flex-1 bg-white/10"></div>
                </div>
                <p className="body-large text-neutral-400 max-w-3xl">
                    Case studies showcasing technical problem-solving, performance optimization, and interactive web experiences.
                </p>
            </div>

            {/* Project Cards */}
            <div className="space-y-32">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card grid lg:grid-cols-5 gap-12 items-start"
                        data-testid={`project-card-${index}`}
                    >
                        {/* Image Section */}
                        <div className={`lg:col-span-2 relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            {/* Highlight Badge */}
                            <div className="absolute -top-4 left-0 z-20 px-4 py-1.5 bg-primary text-white text-xs font-mono uppercase tracking-wider">
                                {project.highlight}
                            </div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-video bg-neutral-900 border border-white/10 glow-accent-hover">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-60" />
                                
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 group-hover:border-secondary/60 transition-colors duration-500" />
                            </div>
                        </div>

                        {/* Content Section - Case Study Format */}
                        <div className={`lg:col-span-3 flex flex-col gap-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                            {/* Title */}
                            <div>
                                <h3 className="heading-tertiary mb-3" data-testid={`project-title-${index}`}>
                                    {project.title}
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
                            </div>

                            {/* Problem */}
                            <div>
                                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                                    Problem
                                </h4>
                                <p className="body-regular text-neutral-300">
                                    {project.problem}
                                </p>
                            </div>

                            {/* Approach */}
                            <div>
                                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                                    Approach
                                </h4>
                                <p className="body-regular text-neutral-300">
                                    {project.approach}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="tech-tag px-4 py-2 text-xs font-mono border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Outcome */}
                            <div className="p-6 border-l-2 border-secondary bg-secondary/5">
                                <h4 className="text-sm font-mono text-secondary uppercase tracking-wider mb-3">
                                    Outcome
                                </h4>
                                <p className="body-regular text-neutral-300">
                                    {project.outcome}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-3 px-8 py-3 border-2 border-primary text-primary font-mono text-sm tracking-wider uppercase hover:bg-primary/10 transition-all duration-300 group"
                                    data-testid={`project-link-${index}`}
                                >
                                    <span>View Project</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
