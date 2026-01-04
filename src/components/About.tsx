'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const lineScale = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

    return (
        <section ref={sectionRef} id="about" className="py-24 lg:py-48 relative border-y border-system-border bg-system-bg overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/[0.03] to-transparent pointer-events-none"></div>

            <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
                {/* Heading Area */}
                <div className="lg:col-span-5 sticky top-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                        <span className="checkpoint-label mb-6 block text-accent-blue font-mono tracking-[0.3em]">
                            01 // RECONNAISSANCE
                        </span>
                        <h2 className="text-display-md text-system-text mb-6 leading-[0.9] uppercase font-bold">
                            The Builder <br />
                            <span className="text-system-muted/40">Architecture</span>
                        </h2>
                        <div className="h-px w-24 bg-accent-blue/40 mb-6"></div>
                        <p className="text-xl text-system-muted font-sans leading-relaxed max-w-sm">
                            Bridging computational logic with aesthetic precision.
                        </p>
                    </motion.div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-7 space-y-16 relative">
                    {/* Animated vertical line */}
                    <motion.div
                        style={{ scaleY: lineScale, originY: 0 }}
                        className="absolute -left-8 lg:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-blue/50 via-accent-blue/10 to-transparent hidden lg:block"
                    />

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            <p className="text-2xl lg:text-3xl text-system-text leading-[1.3] font-sans tracking-tight">
                                I am a <span className="font-semibold text-white underline decoration-accent-blue/30 underline-offset-[12px] decoration-2">final-year Computer Engineering student</span> focused on high-performance architecture. I build <span className="text-accent-blue font-bold tracking-tight">AI</span>-powered systems, modern full-stack apps, and interactive <span className="text-accent-blue font-bold tracking-tight">3D</span> web experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                        >
                            <p className="text-lg lg:text-xl text-system-muted leading-relaxed font-sans max-w-2xl">
                                My process is driven by a builder’s mindset: learning through execution and iterating until shipping. By prioritizing <span className="text-accent-blue font-bold uppercase tracking-wider text-sm">Performance</span>, clean architecture, and user experience, I architect digital environments that are as robust as they are visually compelling.
                            </p>
                        </motion.div>
                    </div>

                    {/* Meta Info Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-2 lg:grid-cols-3 gap-8 pt-12 border-t border-system-border"
                    >
                        <div className="flex flex-col">
                            <span className="text-accent-blue/60 font-mono text-[10px] mb-2 tracking-[0.2em] uppercase">Status</span>
                            <span className="text-system-text font-display text-sm tracking-wide">SYSTEM_READY</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-accent-blue/60 font-mono text-[10px] mb-2 tracking-[0.2em] uppercase">Focus</span>
                            <span className="text-system-text font-display text-sm tracking-wide">CORE_ENGINEERING</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-accent-blue/60 font-mono text-[10px] mb-2 tracking-[0.2em] uppercase">Origin</span>
                            <span className="text-system-text font-display text-sm tracking-wide">PUNE (IN)</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
