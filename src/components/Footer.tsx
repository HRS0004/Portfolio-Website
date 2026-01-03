'use client'

import { Github, Linkedin, Mail, Download, Calendar } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Footer() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        const particles: Array<{
            x: number
            y: number
            size: number
            baseX: number
            baseY: number
            density: number
            opacity: number
        }> = []

        const mouse = { x: 0, y: 0, radius: 100 }

        const initParticles = () => {
            particles.length = 0
            const rows = 8
            const cols = 10
            const spacingX = canvas.width / cols
            const spacingY = canvas.height / rows

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * spacingX + spacingX / 2
                    const y = i * spacingY + spacingY / 2
                    particles.push({
                        x,
                        y,
                        size: 3,
                        baseX: x,
                        baseY: y,
                        density: Math.random() * 30 + 1,
                        opacity: Math.random() * 0.5 + 0.3
                    })
                }
            }
        }

        initParticles()

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        canvas.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle, index) => {
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const forceDirectionX = dx / distance
                const forceDirectionY = dy / distance
                const maxDistance = mouse.radius
                const force = (maxDistance - distance) / maxDistance

                if (distance < mouse.radius) {
                    particle.x -= forceDirectionX * force * particle.density * 0.6
                    particle.y -= forceDirectionY * force * particle.density * 0.6
                } else {
                    if (particle.x !== particle.baseX) {
                        const dx = particle.x - particle.baseX
                        particle.x -= dx / 10
                    }
                    if (particle.y !== particle.baseY) {
                        const dy = particle.y - particle.baseY
                        particle.y -= dy / 10
                    }
                }

                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 3
                )
                
                if (index % 2 === 0) {
                    gradient.addColorStop(0, `rgba(59, 130, 246, ${particle.opacity})`)
                    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
                } else {
                    gradient.addColorStop(0, `rgba(6, 182, 212, ${particle.opacity})`)
                    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
                }

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()

                particles.forEach((particle2, index2) => {
                    if (index === index2) return
                    const dx = particle.x - particle2.x
                    const dy = particle.y - particle2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        const opacity = (1 - distance / 120) * 0.15
                        ctx.strokeStyle = index % 3 === 0 
                            ? `rgba(59, 130, 246, ${opacity})` 
                            : `rgba(6, 182, 212, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(particle2.x, particle2.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            canvas.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <footer className="relative py-20 px-6 lg:px-24 border-t-2 border-primary/20 bg-neutral-950 overflow-hidden" data-testid="footer">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-40"
                style={{ mixBlendMode: 'screen' }}
            />

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
        </footer>
    )
}
