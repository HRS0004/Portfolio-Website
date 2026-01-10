'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default')

    // Physics configuration for smooth movement
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 } // Stiff for the dot
    const trailConfig = { damping: 30, stiffness: 200, mass: 0.8 }  // Looser for the ring

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    const trailX = useSpring(mouseX, trailConfig)
    const trailY = useSpring(mouseY, trailConfig)

    useEffect(() => {
        let hideTimeout: NodeJS.Timeout
        let scrollTimeout: NodeJS.Timeout

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            if (!isVisible) setIsVisible(true)

            clearTimeout(hideTimeout)
            hideTimeout = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const tagName = target.tagName.toLowerCase()

            // Detect interactive elements
            const isLink = tagName === 'a' || target.closest('a')
            const isButton = tagName === 'button' || target.closest('button')
            const isInput = tagName === 'input' || tagName === 'textarea' || target.isContentEditable

            // Check for data-cursor attributes
            const customCursor = target.getAttribute('data-cursor')

            if (isInput || customCursor === 'text') {
                setCursorType('text')
                setIsHovering(true)
            } else if (isLink || isButton || customCursor === 'pointer') {
                setCursorType('pointer')
                setIsHovering(true)
            } else {
                setCursorType('default')
                setIsHovering(false)
            }
        }

        const handleScroll = () => {
            // Optional: Hide cursor on scroll or keep it visible
            if (!isVisible) setIsVisible(true)
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
                // logic if we wanted to hide it
            }, 1000)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('scroll', handleScroll)

        // Initial cursor placement
        mouseX.set(window.innerWidth / 2)
        mouseY.set(window.innerHeight / 2)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(hideTimeout)
            clearTimeout(scrollTimeout)
        }
    }, [isVisible, mouseX, mouseY])

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-exclusion">
            {/* Primary Dot - Sharp Precision */}
            <motion.div
                className="absolute w-2 h-2 bg-acid rounded-full shadow-[0_0_10px_#d9ff00]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isClicking ? 0.8 : (isHovering ? 0 : 1),
                }}
                transition={{ duration: 0.1 }}
            />

            {/* Trailing Ring - Technical HUD */}
            <motion.div
                className="absolute border border-acid flex items-center justify-center"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    width: isHovering ? 60 : 24,
                    height: isHovering ? 60 : 24,
                    borderRadius: isHovering ? '50%' : '2px', // Square to Circle
                    backgroundColor: isHovering ? 'rgba(217, 255, 0, 0.05)' : 'transparent',
                    borderColor: isHovering ? 'rgba(217, 255, 0, 0.8)' : 'rgba(57, 255, 20, 0.4)',
                    rotate: isHovering ? 90 : 45, // Diamond to Square roll
                    scale: isClicking ? 0.9 : 1,
                }}
                transition={{
                    width: { type: 'spring', damping: 20, stiffness: 200 },
                    height: { type: 'spring', damping: 20, stiffness: 200 },
                    rotate: { duration: 0.4, ease: "backOut" }
                }}
            >
                {/* Crosshair accents only visible on hover */}
                {isHovering && (
                    <>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute w-1 h-1 bg-toxic rounded-full"
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '120%' }}
                            className="absolute w-full h-[1px] bg-acid/30"
                        />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: '120%' }}
                            className="absolute h-full w-[1px] bg-acid/30"
                        />
                    </>
                )}
            </motion.div>
        </div>
    )
}
