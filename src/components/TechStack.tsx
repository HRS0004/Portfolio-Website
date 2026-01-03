'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Zap, Sparkles, Trophy } from 'lucide-react'

const techCategories = [
    {
        category: 'Frontend',
        icon: '⚛️',
        techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
        category: '3D & Graphics',
        icon: '🎨',
        techs: ['Three.js', 'React Three Fiber', 'GLSL', 'WebGL', 'Shaders'],
    },
    {
        category: 'Performance',
        icon: '⚡',
        techs: ['Code Splitting', 'Lazy Loading', 'Web Vitals', 'Optimization', 'Caching'],
    },
    {
        category: 'Tools & More',
        icon: '🛠️',
        techs: ['GSAP', 'Framer Motion', 'Git', 'Node.js', 'REST APIs'],
    },
]

const stats = [
    {
        icon: Zap,
        value: '40-60%',
        label: 'Faster Load Times',
        color: 'primary'
    },
    {
        icon: Sparkles,
        value: '60 FPS',
        label: '3D Rendering',
        color: 'primary'
    },
    {
        icon: Trophy,
        value: 'SIH',
        label: 'National Finalist',
        color: 'secondary'
    },
]

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Header animation
        gsap.fromTo(
            '.tech-header',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            }
        )

        // Stats animation
        gsap.fromTo(
            '.stat-card',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 80%',
                },
            }
        )

        // Tech categories animation
        gsap.fromTo(
            '.tech-category',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.tech-grid',
                    start: 'top 75%',
                },
            }
        )
    }, [])

    return (
        <section
            className="py-24 lg:py-32 px-6 lg:px-24 border-y border-white/5 bg-gradient-overlay-blue"
            ref={containerRef}
            data-testid="tech-stack-section"
        >
            <div className="max-w-7xl mx-auto">
                {/* Stats Section - Visual Impact */}
                <div className="stats-container mb-20">
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <div
                                    key={index}
                                    className="stat-card group"
                                    data-testid={`stat-card-${index}`}
                                >
                                    <div className="relative p-8 border border-white/10 bg-neutral-900/50 hover:border-primary/40 transition-all duration-500">
                                        {/* Icon */}
                                        <div className="absolute top-6 right-6 p-3 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="pt-2">
                                            <div className="text-5xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                                                {stat.value}
                                            </div>
                                            <div className="text-base text-neutral-400 font-mono">
                                                {stat.label}
                                            </div>
                                        </div>

                                        {/* Corner accent */}
                                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Header */}
                <div className="tech-header mb-16 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Core technologies I work with daily
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="tech-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {techCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="tech-category group"
                            data-testid={`tech-category-${index}`}
                        >
                            <div className="card-base card-hover p-8 h-full">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                                    <div className="text-4xl">{cat.icon}</div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                                        {cat.category}
                                    </h3>
                                </div>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-3">
                                    {cat.techs.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-2 text-sm font-mono border border-white/20 text-neutral-300 bg-white/5 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-all duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
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
