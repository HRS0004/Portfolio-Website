'use client'

import RevealOnScroll from './ui/RevealOnScroll'

const experiences = [
    {
        company: 'Hanumatrix',
        role: 'Software Engineering Intern',
        period: '2024 — PRESENT',
        achievements: [
            '40-60% faster load times for 3D visualizations',
            '60fps rendering on mid-range devices',
            'Dynamic imports & code splitting'
        ]
    },
    {
        company: 'Agnirva Space',
        role: 'Research Intern',
        period: '2023 — 2024',
        achievements: [
            'Web visualization for satellite telemetry',
            'Real-time data pipelines',
            'Technical documentation'
        ]
    }
]

export default function Experience() {
    return (
        <section className="py-32 relative z-10 bg-void">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

                <RevealOnScroll className="mb-24 flex md:justify-end">
                    <div className="text-right">
                        <span className="text-acid font-mono text-xs tracking-[0.3em] uppercase opacity-80 block mb-2">
                            Chronology
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-mint uppercase tracking-tighter">
                            Active <span className="text-transparent bg-clip-text bg-gradient-to-l from-acid to-toxic">Logs</span>
                        </h2>
                    </div>
                </RevealOnScroll>

                <div className="space-y-16 border-l-2 border-acid/10 ml-4 md:ml-12 pl-8 md:pl-16 relative">
                    {experiences.map((exp, i) => (
                        <RevealOnScroll key={i} delay={i * 200}>
                            <div className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] md:-left-[73px] top-2 w-5 h-5 bg-void border border-acid rounded-full group-hover:bg-acid transition-colors duration-300">
                                    <div className="absolute inset-0 bg-acid/50 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                </div>

                                <div className="glass-panel p-8 md:p-10 rounded-r-3xl rounded-bl-3xl border-l-4 border-l-acid hover:border-l-toxic transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-3xl font-display font-bold text-mint group-hover:text-white transition-colors">
                                                {exp.company}
                                            </h3>
                                            <p className="text-acid font-mono text-sm tracking-wider mt-1">
                                                {exp.role}
                                            </p>
                                        </div>
                                        <div className="text-xs font-mono text-mint/50 border border-mint/10 px-3 py-1 rounded bg-void/50 self-start">
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.achievements.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-mint/70 font-light text-base group-hover:text-mint/90">
                                                <span className="text-acid mt-1.5 text-[10px]">{'>'}{'>'}</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}
