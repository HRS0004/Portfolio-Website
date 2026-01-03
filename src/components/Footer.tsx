'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Footer() {
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Footer content fade in
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 85%',
                    once: true
                }
            }
        )
    }, [])

    return (
        <footer ref={sectionRef} className="py-20 relative border-t border-system-border" data-testid="footer">
            <div className="absolute inset-0 grid-texture opacity-20"></div>
            
            <div className="section-container relative z-10" ref={contentRef} style={{ opacity: 0 }}>
                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Left - CTA */}
                    <div className="space-y-6">
                        <div className="checkpoint-label mb-4">
                            CONTACT_AVAILABLE
                        </div>
                        <h3 className="text-display-md">
                            Let's Build<br />Something Great
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-sans font-medium uppercase tracking-wider text-sm hover:bg-white/90 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                                data-testid="download-resume-btn"
                            >
                                Download Resume
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-4 border border-system-border text-system-text font-sans font-medium uppercase tracking-wider text-sm hover:border-white/30 hover:translate-y-[-2px] transition-all duration-300"
                                data-testid="schedule-call-btn"
                            >
                                Schedule Call
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact */}
                    <div className="space-y-8">
                        <div>
                            <div className="checkpoint-label mb-3">
                                EMAIL
                            </div>
                            <a 
                                href="mailto:hrishikesh.supe@example.com" 
                                className="text-lg text-system-text hover:text-accent-blue transition-colors duration-300"
                                data-testid="email-contact"
                            >
                                hrishikesh.supe@example.com
                            </a>
                        </div>

                        <div>
                            <div className="checkpoint-label mb-3">
                                SOCIAL
                            </div>
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-system-muted hover:text-system-text hover:translate-y-[-2px] transition-all duration-300"
                                    data-testid="github-link"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-system-muted hover:text-system-text hover:translate-y-[-2px] transition-all duration-300"
                                    data-testid="linkedin-link"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-system-border">
                    <div className="checkpoint-label">
                        © {new Date().getFullYear()} Hrishikesh Supe · Frontend + 3D Specialist
                    </div>
                    <div className="checkpoint-label">
                        SYSTEM_STATUS_OPERATIONAL
                    </div>
                </div>
            </div>
        </footer>
    )
}
