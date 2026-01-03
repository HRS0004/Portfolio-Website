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
        handleScroll() // Initial check

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed right-0 top-0 bottom-0 w-8 z-50 flex flex-col items-center justify-center pointer-events-none mix-blend-difference">
            <div className="flex flex-col items-center gap-8 py-12 h-full">
                {/* Top Label */}
                <div className="rotate-90 text-[10px] font-mono text-zinc-500 whitespace-nowrap">
                    SCROLL_POS // {scrollPercentage.toString().padStart(3, '0')}%
                </div>

                {/* Progress Bar Container */}
                <div className="flex-1 w-[1px] bg-zinc-800 relative">
                    <div
                        className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-150 ease-out"
                        style={{ height: `${scrollPercentage}%` }}
                    />
                    {/* Tick marks */}
                    {[0, 25, 50, 75, 100].map((tick) => (
                        <div
                            key={tick}
                            className="absolute w-2 h-px bg-zinc-700 -left-1"
                            style={{ top: `${tick}%` }}
                        />
                    ))}
                </div>

                {/* Bottom Label */}
                <div className="rotate-90 text-[10px] font-mono text-zinc-500 whitespace-nowrap">
                    SYSTEM_LINK_ACTIVE
                </div>
            </div>
        </div>
    )
}
