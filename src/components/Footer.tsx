'use client'

import { Github, Linkedin, Mail, Download, Calendar } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Footer() {
    const creatureRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        import('animejs').then((animeModule: any) => {
            const anime = animeModule.default || animeModule
            
            const creatureEl = creatureRef.current
            if (!creatureEl) return

            const viewport = { w: window.innerWidth * 0.5, h: window.innerHeight * 0.5 }
            const cursor = { x: 0, y: 0 }
            const rows = 13
            const grid: [number, number] = [rows, rows]
            const from = 'center'

            // Clear any existing children
            creatureEl.innerHTML = ''

            // Create particles
            for (let i = 0; i < (rows * rows); i++) {
                const div = document.createElement('div')
                div.style.transformStyle = 'preserve-3d'
                div.style.position = 'relative'
                div.style.width = '4em'
                div.style.height = '4em'
                div.style.margin = '3em'
                div.style.borderRadius = '2em'
                div.style.willChange = 'transform'
                div.style.mixBlendMode = 'screen'
                creatureEl.appendChild(div)
            }

            const particleEls = Array.from(creatureEl.querySelectorAll('div'))

            // Set initial styles
            creatureEl.style.width = rows * 10 + 'em'
            creatureEl.style.height = rows * 10 + 'em'

            // Initialize particles with stagger
            particleEls.forEach((el, i) => {
                const row = Math.floor(i / rows)
                const col = i % rows
                const centerRow = (rows - 1) / 2
                const centerCol = (rows - 1) / 2
                const distanceFromCenter = Math.sqrt(
                    Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                )
                const maxDistance = Math.sqrt(Math.pow(centerRow, 2) + Math.pow(centerCol, 2))
                const normalizedDistance = distanceFromCenter / maxDistance

                const scale = 2 + (5 - 2) * (1 - normalizedDistance)
                const opacity = 1 - (0.9 * normalizedDistance)
                const lightness = 80 - (60 * normalizedDistance)
                const shadowSize = 8 - (7 * normalizedDistance)

                anime.set(el, {
                    translateX: 0,
                    translateY: 0,
                    scale: scale,
                    opacity: opacity,
                    background: `hsl(210, 100%, ${lightness}%)`,
                    boxShadow: `0px 0px ${shadowSize}em 0px hsl(210, 100%, 60%)`,
                    zIndex: Math.round(rows * rows - i)
                })
            })

            const pulse = () => {
                anime({
                    targets: particleEls,
                    scale: [
                        { value: 5, duration: 150 },
                        { value: (el: any, i: number) => {
                            const row = Math.floor(i / rows)
                            const col = i % rows
                            const centerRow = (rows - 1) / 2
                            const centerCol = (rows - 1) / 2
                            const distanceFromCenter = Math.sqrt(
                                Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                            )
                            const maxDistance = Math.sqrt(Math.pow(centerRow, 2) + Math.pow(centerCol, 2))
                            const normalizedDistance = distanceFromCenter / maxDistance
                            return 2 + (5 - 2) * (1 - normalizedDistance)
                        }, duration: 600 }
                    ],
                    opacity: [
                        { value: 1, duration: 150 },
                        { value: (el: any, i: number) => {
                            const row = Math.floor(i / rows)
                            const col = i % rows
                            const centerRow = (rows - 1) / 2
                            const centerCol = (rows - 1) / 2
                            const distanceFromCenter = Math.sqrt(
                                Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
                            )
                            const maxDistance = Math.sqrt(Math.pow(centerRow, 2) + Math.pow(centerCol, 2))
                            const normalizedDistance = distanceFromCenter / maxDistance
                            return 1 - (0.9 * normalizedDistance)
                        }, duration: 600 }
                    ],
                    delay: anime.stagger(90, { start: 1650, grid, from }),
                    easing: 'easeInOutQuad'
                })
            }

            let animationFrameId: number

            const mainLoop = () => {
                anime({
                    targets: particleEls,
                    translateX: cursor.x,
                    translateY: cursor.y,
                    delay: anime.stagger(40, { grid, from }),
                    duration: anime.stagger(120, { start: 750, easing: 'easeInQuad', grid, from }),
                    easing: 'easeInOut',
                    complete: () => {
                        animationFrameId = requestAnimationFrame(mainLoop)
                    }
                })
            }

            // Auto movement
            let autoMoveX = anime({
                targets: cursor,
                x: [-viewport.w * 0.45, viewport.w * 0.45],
                duration: 3000,
                easing: 'easeInOutExpo',
                direction: 'alternate',
                loop: true,
                begin: pulse,
                loopBegin: pulse
            })

            let autoMoveY = anime({
                targets: cursor,
                y: [-viewport.h * 0.45, viewport.h * 0.45],
                duration: 1000,
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true
            })

            mainLoop()

            let manualTimeout: NodeJS.Timeout

            const followPointer = (e: MouseEvent | TouchEvent) => {
                const event = e.type === 'touchmove' ? (e as TouchEvent).touches[0] : e as MouseEvent
                cursor.x = event.pageX - viewport.w
                cursor.y = event.pageY - viewport.h
                
                autoMoveX.pause()
                autoMoveY.pause()
                
                clearTimeout(manualTimeout)
                manualTimeout = setTimeout(() => {
                    autoMoveX.play()
                    autoMoveY.play()
                }, 1500)
            }

            document.addEventListener('mousemove', followPointer)
            document.addEventListener('touchmove', followPointer)

            return () => {
                document.removeEventListener('mousemove', followPointer)
                document.removeEventListener('touchmove', followPointer)
                cancelAnimationFrame(animationFrameId)
                clearTimeout(manualTimeout)
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
                    opacity: 0.5;
                    z-index: 1;
                }
                .creature {
                    font-size: 0.2vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 150em;
                    height: 150em;
                    flex-wrap: wrap;
                }
            `}</style>
        </footer>
    )
}
