'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)

    const mouseX = useSpring(0, { damping: 20, stiffness: 200 })
    const mouseY = useSpring(0, { damping: 20, stiffness: 200 })

    const ringX = useSpring(0, { damping: 30, stiffness: 100 })
    const ringY = useSpring(0, { damping: 30, stiffness: 100 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            ringX.set(e.clientX)
            ringY.set(e.clientY)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [mouseX, mouseY, ringX, ringY])

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Central Crosshair */}
            <motion.div
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Technical Ring */}
            <motion.div
                className="absolute border border-blue-500/50 rounded-full"
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    opacity: 1,
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            >
                {/* Ring Accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-blue-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-blue-500" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-blue-500" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-blue-500" />
            </motion.div>

            {/* Lagging Dots */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-blue-500/30 rounded-full"
                    style={{
                        x: mouseX,
                        y: mouseY,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    transition={{
                        type: 'spring',
                        damping: 40 + i * 10,
                        stiffness: 100 - i * 20,
                    }}
                />
            ))}
        </div>
    )
}
