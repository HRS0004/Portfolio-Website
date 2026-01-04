'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isInSection, setIsInSection] = useState(false)

    const mouseX = useSpring(0, { damping: 30, stiffness: 200 })
    const mouseY = useSpring(0, { damping: 30, stiffness: 200 })

    useEffect(() => {
        let hideTimeout: NodeJS.Timeout

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            
            // Show cursor on movement
            setIsVisible(true)
            
            // Hide after 2 seconds of no movement
            clearTimeout(hideTimeout)
            hideTimeout = setTimeout(() => {
                setIsVisible(false)
            }, 2000)
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            
            // Check if hovering interactive elements
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
            
            // Check if in a major section
            const section = target.closest('section')
            setIsInSection(!!section)
        }

        // Show cursor on scroll start, hide after scroll
        let scrollTimeout: NodeJS.Timeout
        const handleScroll = () => {
            setIsVisible(true)
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                setIsVisible(false)
            }, 1500)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(hideTimeout)
            clearTimeout(scrollTimeout)
        }
    }, [mouseX, mouseY])

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Central Dot */}
            <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Ring - Only visible when hovering or in section transition */}
            <motion.div
                className="absolute border rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 48 : 32,
                    height: isHovering ? 48 : 32,
                    opacity: isVisible && (isHovering || isInSection) ? 0.5 : 0,
                    borderColor: isHovering ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            />
        </div>
    )
}
