import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import ProjectGallery from '@/components/ProjectGallery'
import Capabilities from '@/components/Capabilities'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <TechStack />
            <ProjectGallery />
            <Capabilities />
            <Experience />
            <Footer />
        </main>
    )
}
