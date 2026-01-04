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
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none" data-testid="header">
            <div className="section-container py-6 flex justify-between items-center">
                <div className="pointer-events-auto">
                    <div className="checkpoint-label">HRSHIKESH_SUPE</div>
                </div>

                <div className="pointer-events-auto checkpoint-label">
                    {time}
                </div>
            </div>
        </header>
    )
}