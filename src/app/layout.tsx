import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-jetbrains'
})

export const metadata: Metadata = {
    title: 'Hrishikesh Supe | Frontend Developer & 3D Web Specialist',
    description: 'Technical Portfolio of Hrishikesh Supe',
}

import CustomCursor from '@/components/CustomCursor'
import StatusBar from '@/components/StatusBar'
import LoadingScreen from '@/components/LoadingScreen'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${jetbrainsMono.variable} font-mono antialiased text-white bg-[#0a0a0a] cursor-none`}>
                <LoadingScreen />
                <CustomCursor />
                <StatusBar />
                <div className="fixed inset-0 technical-grid pointer-events-none z-0" />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    )
}
