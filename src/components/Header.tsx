'use client'

import { useEffect, useState } from 'react'

export default function Header() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', { hour12: false }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none" data-testid="header">
            <div className="pointer-events-auto logo-container">
                <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold tracking-tighter border-l-2 border-primary pl-4 text-white hover:text-primary transition-colors duration-300">
                        HRS
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-primary uppercase leading-none tracking-wider">SYSTEM_OK</span>
                        <span className="text-[8px] font-mono text-primary/50 leading-none">V.1.0_PROD</span>
                    </div>
                </div>
            </div>

            <div className="pointer-events-auto text-right font-mono text-[10px] text-neutral-500 space-y-0.5">
                <div className="text-neutral-600">LAT: 18.5204° N</div>
                <div className="text-neutral-600">LON: 73.8567° E</div>
                <div className="text-primary mt-1.5 tracking-wider">{time}</div>
            </div>
        </header>
    )
}
