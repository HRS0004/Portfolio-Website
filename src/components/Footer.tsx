'use client'

import { Github, Linkedin, Mail, Download, Calendar } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="section-padding border-t border-white/5 bg-neutral-950" data-testid="footer">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto">
                {/* Top Section - CTA & Contact */}
                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    {/* Left - Personal Statement & Status */}
                    <div className="space-y-6">
                        <h3 className="heading-tertiary mb-6">Let's Build Something Exceptional</h3>
                        <p className="body-regular text-neutral-400 leading-relaxed max-w-xl">
                            I'm passionate about creating web experiences that blend technical excellence with 
                            visual storytelling. Currently exploring opportunities to work on innovative 3D web 
                            projects and performance-critical applications.
                        </p>
                        <div className="flex items-center gap-3 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                                </div>
                                <span className="text-sm font-mono text-secondary">Open to New Opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Primary & Secondary CTAs */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-6">
                                Get in Touch
                            </h4>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                {/* Primary CTA - Download Resume */}
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-mono text-sm tracking-wider uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] group"
                                    data-testid="download-resume-btn"
                                >
                                    <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                                    <span>Download Resume</span>
                                </a>

                                {/* Secondary CTA - Schedule Call */}
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary font-mono text-sm tracking-wider uppercase hover:bg-primary/10 transition-all duration-300 group"
                                    data-testid="schedule-call-btn"
                                >
                                    <Calendar size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Schedule Call</span>
                                </a>
                            </div>

                            {/* Email Contact */}
                            <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-300 group">
                                <Mail size={18} className="text-primary" />
                                <a 
                                    href="mailto:hrishikesh.supe@example.com" 
                                    className="font-mono text-sm"
                                    data-testid="email-contact"
                                >
                                    hrishikesh.supe@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-12"></div>

                {/* Bottom Section - Social Links & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left - Copyright */}
                    <div className="space-y-2">
                        <p className="font-mono text-sm text-neutral-500">
                            © {new Date().getFullYear()} Hrishikesh Supe
                        </p>
                        <p className="font-mono text-xs text-neutral-600">
                            TECHNICAL_PORTFOLIO // V1.0_PRODUCTION
                        </p>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex gap-8">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
                            data-testid="github-link"
                        >
                            <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-mono text-sm">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
                            data-testid="linkedin-link"
                        >
                            <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-mono text-sm">LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Large Background Text */}
                <div className="mt-20 overflow-hidden text-center">
                    <span className="text-[12vw] lg:text-[8vw] font-bold text-white/[0.02] whitespace-nowrap select-none tracking-tighter">
                        FRONTEND · 3D · PERFORMANCE
                    </span>
                </div>
            </div>
        </footer>
    )
}
