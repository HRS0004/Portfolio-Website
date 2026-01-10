import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGallery from '@/components/ProjectGallery'
import Capabilities from '@/components/Capabilities'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import FloatingNav from '@/components/FloatingNav' // New Nav

export default function Home() {
    return (
        <main className="min-h-screen bg-void text-mint selection:bg-acid/50 selection:text-black">
            <FloatingNav />

            <div className="relative">
                <Hero />

                {/* Continuous Flow Wrapper */}
                <div className="relative z-10 flex flex-col gap-0 pb-32">
                    <About />
                    <TechStack />
                    <ProjectGallery />
                    <Capabilities />
                    <Experience />
                </div>

                <Footer />
            </div>
        </main>
    )
}
