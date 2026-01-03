'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)

    const mouseX = useSpring(0, { damping: 25, stiffness: 250 })
    const mouseY = useSpring(0, { damping: 25, stiffness: 250 })

    const ringX = useSpring(0, { damping: 35, stiffness: 120 })
    const ringY = useSpring(0, { damping: 35, stiffness: 120 })

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
            {/* Central Dot */}
            <motion.div
                className="absolute w-1 h-1 rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    backgroundColor: isHovering ? '#06b6d4' : '#3b82f6',
                }}
            />

            {/* Technical Ring */}
            <motion.div
                className="absolute border rounded-full"
                animate={{
                    width: isHovering ? 64 : 32,
                    height: isHovering ? 64 : 32,
                    opacity: 1,
                    borderColor: isHovering ? '#06b6d4' : '#3b82f6',
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            >
                {/* Ring Accent Markers */}
                <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5"
                    style={{ backgroundColor: isHovering ? '#06b6d4' : '#3b82f6' }}
                />
                <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5"
                    style={{ backgroundColor: isHovering ? '#06b6d4' : '#3b82f6' }}
                />
                <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5"
                    style={{ backgroundColor: isHovering ? '#06b6d4' : '#3b82f6' }}
                />
                <motion.div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-0.5"
                    style={{ backgroundColor: isHovering ? '#06b6d4' : '#3b82f6' }}
                />
            </motion.div>

            {/* Trailing Dots - Subtle */}
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 rounded-full"
                    style={{
                        x: mouseX,
                        y: mouseY,
                        translateX: '-50%',
                        translateY: '-50%',
                        backgroundColor: isHovering ? '#06b6d4' : '#3b82f6',
                        opacity: 0.3 - i * 0.1,
                    }}
                    transition={{
                        type: 'spring',
                        damping: 45 + i * 15,
                        stiffness: 100 - i * 30,
                    }}
                />
            ))}
        </div>
    )
}
