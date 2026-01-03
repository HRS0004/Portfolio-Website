'use client'

import { Github, Linkedin, Mail, Download, Calendar } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Footer() {
    const creatureRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Dynamically import anime.js
        import('animejs').then((anime) => {
            const { animate, createTimeline, createTimer, stagger, utils } = anime

            const creatureEl = creatureRef.current
            if (!creatureEl) return

            const viewport = { w: window.innerWidth * .5, h: window.innerHeight * .5 }
            const cursor = { x: 0, y: 0 }
            const rows = 13
            const grid = [rows, rows]
            const from = 'center'
            const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from })
            const opacityStagger = stagger([1, .1], { grid, from })

            // Create particles
            for (let i = 0; i < (rows * rows); i++) {
                creatureEl.appendChild(document.createElement('div'))
            }

            const particuleEls = creatureEl.querySelectorAll('div')

            utils.set(creatureEl, {
                width: rows * 10 + 'em',
                height: rows * 10 + 'em'
            })

            utils.set(particuleEls, {
                x: 0,
                y: 0,
                scale: scaleStagger,
                opacity: opacityStagger,
                background: stagger([80, 20], {
                    grid, from,
                    modifier: (v: number) => `hsl(210, 100%, ${v}%)`, // Blue hue
                }),
                boxShadow: stagger([8, 1], {
                    grid, from,
                    modifier: (v: number) => `0px 0px ${utils.round(v, 0)}em 0px hsl(210, 100%, 60%)`,
                }),
                zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
            })

            const pulse = () => {
                animate(particuleEls, {
                    keyframes: [
                        {
                            scale: 5,
                            opacity: 1,
                            delay: stagger(90, { start: 1650, grid, from }),
                            duration: 150,
                        }, {
                            scale: scaleStagger,
                            opacity: opacityStagger,
                            ease: 'inOutQuad',
                            duration: 600
                        }
                    ],
                })
            }

            const mainLoop = createTimer({
                frameRate: 15,
                onUpdate: () => {
                    animate(particuleEls, {
                        x: cursor.x,
                        y: cursor.y,
                        delay: stagger(40, { grid, from }),
                        duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
                        ease: 'inOut',
                        composition: 'blend',
                    })
                }
            })

            const autoMove = createTimeline()
                .add(cursor, {
                    x: [-viewport.w * .45, viewport.w * .45],
                    modifier: (x: number) => x + Math.sin(mainLoop.currentTime * .0007) * viewport.w * .5,
                    duration: 3000,
                    ease: 'inOutExpo',
                    alternate: true,
                    loop: true,
                    onBegin: pulse,
                    onLoop: pulse,
                }, 0)
                .add(cursor, {
                    y: [-viewport.h * .45, viewport.h * .45],
                    modifier: (y: number) => y + Math.cos(mainLoop.currentTime * .00012) * viewport.h * .5,
                    duration: 1000,
                    ease: 'inOutQuad',
                    alternate: true,
                    loop: true,
                }, 0)

            const manualMovementTimeout = createTimer({
                duration: 1500,
                onComplete: () => autoMove.play(),
            })

            const followPointer = (e: MouseEvent | TouchEvent) => {
                const event = e.type === 'touchmove' ? (e as TouchEvent).touches[0] : e as MouseEvent
                cursor.x = event.pageX - viewport.w
                cursor.y = event.pageY - viewport.h
                autoMove.pause()
                manualMovementTimeout.restart()
            }

            document.addEventListener('mousemove', followPointer)
            document.addEventListener('touchmove', followPointer)

            return () => {
                document.removeEventListener('mousemove', followPointer)
                document.removeEventListener('touchmove', followPointer)
            }
        })
    }, [])

    return (
        <footer className="relative py-20 px-6 lg:px-24 border-t-2 border-primary/20 bg-neutral-950 overflow-hidden" data-testid="footer">
            {/* Animated creature background */}
            <div className="creature-wrapper">
                <div ref={creatureRef} className="creature"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 border-2 border-secondary/50 bg-secondary/10 backdrop-blur-sm">
                        <div className="relative">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                        </div>
                        <span className="text-base font-mono text-white font-semibold">
                            Open to New Opportunities
                        </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold mb-3">Let's Work Together</h3>
                    <p className="text-lg text-neutral-400 mb-2">Currently at <span className="text-white font-semibold">Hanumatrix</span></p>
                    <p className="text-base text-neutral-500 mb-10">Exploring opportunities in 3D web development & performance engineering</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-mono text-base font-bold uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] group"
                            data-testid="download-resume-btn"
                        >
                            <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                            <span>Download Resume</span>
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-primary text-primary font-mono text-base font-bold uppercase hover:bg-primary/10 transition-all duration-300 group"
                            data-testid="schedule-call-btn"
                        >
                            <Calendar size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            <span>Schedule Call</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-3 text-xl group">
                        <Mail size={24} className="text-primary" />
                        <a 
                            href="mailto:hrishikesh.supe@example.com" 
                            className="font-mono text-neutral-300 hover:text-white transition-colors duration-300"
                            data-testid="email-contact"
                        >
                            hrishikesh.supe@example.com
                        </a>
                    </div>
                </div>

                <div className="h-px bg-white/10 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="font-mono text-sm text-neutral-500">
                            © {new Date().getFullYear()} Hrishikesh Supe
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
                            data-testid="github-link"
                        >
                            <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-mono text-base">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
                            data-testid="linkedin-link"
                        >
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-mono text-base">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .creature-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    opacity: 0.3;
                }
                .creature {
                    font-size: .2vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 150em;
                    height: 150em;
                    flex-wrap: wrap;
                }
                .creature div {
                    transform-style: preserve-3d;
                    position: relative;
                    width: 4em;
                    height: 4em;
                    margin: 3em;
                    border-radius: 2em;
                    will-change: transform;
                    mix-blend-mode: plus-lighter;
                }
            `}</style>
        </footer>
    )
}
