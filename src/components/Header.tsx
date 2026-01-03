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
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">
            <div className="pointer-events-auto logo-container">
                <div className="text-2xl font-bold tracking-tighter border-l-2 border-blue-500 pl-4 logo-hrs">
                    HRS
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-blue-500 uppercase leading-none">SYSTEM_OK</span>
                    <span className="text-[8px] font-mono text-blue-500/50 leading-none">V.1.0</span>
                </div>
            </div>

            <div className="pointer-events-auto text-right font-mono text-[10px] text-zinc-500">
                <div>LAT: 18.5204° N</div>
                <div>LON: 73.8567° E</div>
                <div className="text-blue-500 mt-1">{time}</div>
            </div>
        </header>
    )
}
