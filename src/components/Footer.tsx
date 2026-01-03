'use client'

import { Github, Linkedin, Mail, Download, Calendar } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-20 px-6 lg:px-24 border-t-2 border-primary/20 bg-neutral-950" data-testid="footer">
            <div className="max-w-7xl mx-auto">
                {/* Top Section - Availability & CTA */}
                <div className="text-center mb-16">
                    {/* Availability Badge - Prominent */}
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
                    
                    {/* Primary CTAs - Side by Side */}
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

                    {/* Email - Large & Visible */}
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

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8"></div>

                {/* Bottom Section - Compact */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="font-mono text-sm text-neutral-500">
                            © {new Date().getFullYear()} Hrishikesh Supe
                        </p>
                    </div>

                    {/* Social Links - Larger */}
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
