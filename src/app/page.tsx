import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectGallery from '@/components/ProjectGallery'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <ProjectGallery />
            <Experience />
            <Footer />
        </main>
    )
}
