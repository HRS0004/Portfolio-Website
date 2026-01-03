'use client'

import { useEffect, useState } from 'react'

export default function StatusBar() {
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            const maxScroll = documentHeight - windowHeight
            if (maxScroll <= 0) {
                setScrollPercentage(0)
                return
            }
            const percentage = Math.round((scrollTop / maxScroll) * 100)
            setScrollPercentage(percentage)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div 
            className="fixed right-6 top-0 bottom-0 w-px z-50 pointer-events-none"
            data-testid="status-bar"
        >
            <div className="relative h-full bg-system-border">
                <div
                    className="absolute top-0 left-0 w-full bg-accent-blue transition-all duration-150"
                    style={{ height: `${scrollPercentage}%` }}
                />
            </div>
        </div>
    )
}