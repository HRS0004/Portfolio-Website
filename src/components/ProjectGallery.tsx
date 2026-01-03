'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: "Interactive 3D Pump Visualization",
        description: "Highlight work with Kirloskar pumps using Next.js and React Three Fiber (R3F). Focused on industrial storytelling and interactive mechanical rendering.",
        tags: ["Next.js", "R3F", "Three.js", "GLSL"],
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "AI-Powered Complaint Management System",
        description: "Smart India Hackathon winning project. Leveraged AI/ML to categorize and prioritize municipal complaints automatically.",
        tags: ["Python", "Node.js", "TensorFlow", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    }
]

export default function ProjectGallery() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const projectCards = gsap.utils.toArray('.project-card')

        projectCards.forEach((card: any) => {
            const image = card.querySelector('.project-image')
            const tags = card.querySelectorAll('.tag')

            // Image Zoom Animation
            gsap.fromTo(image,
                { scale: 1 },
                {
                    scale: 1.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            )

            // Tech Tags Staggered Entrance
            gsap.fromTo(tags,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 70%",
                    }
                }
            )
        })
    }, [])

    return (
        <section className="py-24 px-6 lg:px-24" ref={containerRef}>
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter uppercase">Featured Projects</h2>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid gap-24">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="absolute -inset-4 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors duration-500"></div>
                            <div className="relative overflow-hidden aspect-video bg-zinc-900 border border-white/10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image object-cover w-full h-full grayscale hover:grayscale-0 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="text-4xl font-bold tracking-tight">{project.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="tag px-3 py-1 text-xs font-mono border border-blue-500/30 text-blue-500 bg-blue-500/5 neon-glow-sharp"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 mt-6">
                                <a
                                    href={project.link}
                                    className="hover-scan relative overflow-hidden group flex items-center gap-2 text-sm font-mono border border-blue-500/50 px-6 py-2 text-blue-500 hover:text-white hover:bg-blue-500/20 transition-all neon-glow"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        VIEW_PROJECT <ExternalLink size={14} />
                                    </span>
                                    <div className="scan-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
