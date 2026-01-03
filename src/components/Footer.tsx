import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-12 px-6 lg:px-24 border-t border-white/5 bg-[#0a0a0a]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <p className="font-mono text-sm text-zinc-500">
                        © {new Date().getFullYear()} HRISHIKESH SUPE // TECHNICAL_PORTFOLIO_V1
                    </p>
                </div>

                <div className="flex gap-8">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono neon-glow"
                    >
                        <Github size={18} /> GITHUB
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono neon-glow"
                    >
                        <Linkedin size={18} /> LINKEDIN
                    </a>
                    <a
                        href="mailto:contact@example.com"
                        className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono neon-glow"
                    >
                        <Mail size={18} /> CONTACT
                    </a>
                </div>
            </div>

            <div className="mt-12 text-center overflow-hidden">
                <span className="text-[15vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
                    TECHNICAL BLUEPRINT
                </span>
            </div>
        </footer>
    )
}
