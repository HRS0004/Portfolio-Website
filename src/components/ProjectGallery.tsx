'use client';

import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { animate } from 'animejs';
import RevealOnScroll from './ui/RevealOnScroll';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Industrial 3D Viz',
        subtitle: 'Interactive Pump Visualization',
        company: 'Kirloskar @ Hanumatrix',
        impact: '40-60% perf boost',
        description: 'High-performance 3D visualization platform for industrial components. Features real-time rendering, exploded views, and technical specifications integration.',
        tech: ['Next.js', 'R3F', 'GLSL', 'WebGL'],
        year: '2024',
        color: '#3b82f6'
    },
    {
        id: '02',
        title: 'AI Complaints',
        subtitle: 'Intelligent Management System',
        company: 'Smart India Hackathon',
        impact: 'National Finalist',
        description: 'Automated complaint classification and routing system using NLP. Streamlined civic grievance redressal with 95% accuracy in category prediction.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        year: '2024',
        color: '#10b981'
    }
];

export default function ProjectGallery() {
    return (
        <section className="relative py-32 px-4 md:px-12 w-full max-w-7xl mx-auto z-10">

            {/* Section Header */}
            <RevealOnScroll className="mb-24">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-accent-glow font-mono text-xs tracking-widest uppercase">Selected Works</span>
                    <div className="h-[1px] w-12 bg-accent-glow/30"></div>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-glow">Inventions</span>
                </h2>
            </RevealOnScroll>

            {/* Projects Stack */}
            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (cardRef.current) {
            animate(cardRef.current, {
                scale: 1.02,
                duration: 400,
                ease: 'outQuad'
            });
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            animate(cardRef.current, {
                scale: 1,
                duration: 400,
                ease: 'outQuad'
            });
        }
    };

    return (
        <RevealOnScroll delay={index * 200}>
            <div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-12 rounded-3xl bg-glass border border-glass-border hover:border-accent-primary/30 transition-colors duration-500 overflow-hidden"
            >
                {/* Decorative Background Blob */}
                <div
                    className="absolute -right-20 -top-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl group-hover:bg-accent-primary/20 transition-all duration-700 pointer-events-none"
                    style={{ backgroundColor: project.color, opacity: 0.1 }}
                />

                {/* Left Content: Info */}
                <div className="space-y-8 relative z-10">
                    <div className="flex items-baseline gap-4">
                        <span className="font-mono text-accent-glow/60 text-sm">0{project.id}</span>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed max-w-md">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 text-xs font-mono text-accent-glow bg-accent-primary/10 rounded-full border border-accent-primary/20">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <button className="flex items-center gap-2 text-white font-medium group/btn hover:text-accent-primary transition-colors">
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Content: Visual/Stats */}
                <div className="relative h-full min-h-[300px] flex flex-col justify-between bg-black/20 rounded-2xl p-8 border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Company</p>
                            <p className="text-white font-medium">{project.company}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Year</p>
                            <p className="text-white font-medium">{project.year}</p>
                        </div>
                    </div>

                    <div className="mt-auto">
                        <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Impact</p>
                        <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            {project.impact}
                        </div>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
    );
}
