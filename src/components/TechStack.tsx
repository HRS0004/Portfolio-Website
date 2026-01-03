'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const techCategories = [
    {
        category: 'Frontend',
        techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        category: '3D & Graphics',
        techs: ['Three.js', 'React Three Fiber', 'GLSL', 'WebGL'],
    },
    {
        category: 'Performance',
        techs: ['Code Splitting', 'Lazy Loading', 'Web Vitals', 'Optimization'],
    },
    {
        category: 'Tools & More',
        techs: ['GSAP', 'Framer Motion', 'Git', 'Node.js'],
    },
]

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            '.tech-category',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            }
        )
    }, [])

    return (
        <section
            className="py-16 px-6 lg:px-24 border-y border-white/5"
            ref={containerRef}
            data-testid="tech-stack-section"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase mb-2">
                        Tech Stack
                    </h2>
                    <p className="text-neutral-500 font-mono text-sm">CORE_TECHNOLOGIES</p>
                </div>

                {/* Tech Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="tech-category"
                            data-testid={`tech-category-${index}`}
                        >
                            <h3 className="text-sm font-mono text-primary uppercase mb-4 tracking-wider">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.techs.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1.5 text-xs font-mono border border-white/20 text-neutral-300 bg-white/5 hover:border-primary/50 hover:text-white transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
