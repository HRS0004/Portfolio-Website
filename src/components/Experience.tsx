'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Line Growth Animation
        gsap.fromTo(lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 70%",
                    scrub: true,
                }
            }
        )

        // Milestone Cards Animation
        const milestones = gsap.utils.toArray('.milestone')
        milestones.forEach((milestone: any) => {
            gsap.fromTo(milestone,
                {
                    opacity: 0,
                    x: milestone.classList.contains('left-side') ? -50 : 50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: milestone,
                        start: "top 80%",
                    }
                }
            )
        })
    }, [])

    const experiences = [
        {
            company: "Hanumatrix",
            role: "Software Engineering Intern",
            period: "2024 - Present",
            description: "Developing client-facing Next.js applications and immersive 3D industrial storytelling platforms. Focus on performance optimization and technical visuals."
        },
        {
            company: "Agnirva Space",
            role: "Research Intern",
            period: "2023 - 2024",
            description: "Working on satellite communication systems and AI/ML models for climate analysis. Bridging the gap between aerospace data and web visualization."
        }
    ]

    return (
        <section className="py-24 px-6 lg:px-24 bg-zinc-950/50" ref={containerRef}>
            <div className="flex items-center gap-4 mb-24">
                <h2 className="text-3xl font-bold tracking-tighter uppercase">Experience</h2>
                <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500 -translate-x-1/2 hidden md:block origin-top"
                />

                <div className="space-y-24">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-center">
                            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#0a0a0a] z-10 hidden md:block"></div>

                            <div className={`milestone w-full md:w-1/2 ${index % 2 === 0 ? 'left-side md:pr-16 md:text-right' : 'right-side md:pl-16 md:ml-auto'}`}>
                                <span className="text-blue-500 font-mono text-sm mb-2 block">{exp.period}</span>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                                <h4 className="text-lg text-zinc-400 font-medium mb-4">{exp.role}</h4>
                                <p className="text-zinc-500 leading-relaxed max-w-lg ml-auto">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
