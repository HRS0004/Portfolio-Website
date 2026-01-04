'use client'

import React, { useEffect, useRef } from 'react'
import { animate, createTimeline, createTimer, stagger, utils } from 'animejs'

export default function FooterVisual() {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const creatureRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<(HTMLDivElement | null)[]>([])

    // Animation refs for cleanup
    const timelineRef = useRef<any>(null)
    const loopRef = useRef<any>(null)

    useEffect(() => {
        if (!creatureRef.current || !wrapperRef.current) return

        const creatureEl = creatureRef.current
        const particuleEls = particlesRef.current.filter(Boolean) as HTMLElement[]

        // Configuration
        // Portfolio theme: Blue/Cyan range (210) instead of Red (4)
        // Background dark: #0F1115
        const HUE_BASE = 210
        const rows = 13
        const grid = [rows, rows]
        const from = 'center'

        // Initial measurements
        // We use window dimensions for specific movement logic like the original, 
        // but scoped visually to the footer by CSS overflow.
        const viewport = { w: window.innerWidth * 0.5, h: window.innerHeight * 0.5 }
        const cursor = { x: 0, y: 0 }

        // Staggers
        const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from })
        const opacityStagger = stagger([1, 0.1], { grid, from })
        const bgStagger = stagger([80, 20], {
            grid,
            from,
            modifier: (v: number) => `hsl(${HUE_BASE}, 70%, ${v}%)`
        })
        const shadowStagger = stagger([8, 1], {
            grid,
            from,
            modifier: (v: number) => `0px 0px ${utils.round(v, 0)}em 0px hsla(${HUE_BASE}, 70%, 50%, 0.5)`
        })
        const zIndexStagger = stagger([rows * rows, 1], {
            grid,
            from,
            modifier: (v: number) => utils.round(v, 0)
        })

        // Set Initial Styles
        utils.set(creatureEl, {
            width: rows * 10 + 'em',
            height: rows * 10 + 'em'
        })

        utils.set(particuleEls, {
            x: 0,
            y: 0,
            scale: scaleStagger,
            opacity: opacityStagger,
            background: bgStagger,
            boxShadow: shadowStagger,
            zIndex: zIndexStagger,
        })

        // Pulse Animation
        const pulse = () => {
            // Check if component is still mounted
            if (!creatureRef.current) return

            animate(particuleEls, {
                keyframes: [
                    {
                        scale: 5,
                        opacity: 1,
                        delay: stagger(90, { start: 1650, grid, from }),
                        duration: 150,
                    }, {
                        scale: scaleStagger,
                        opacity: opacityStagger,
                        ease: 'inOutQuad',
                        duration: 600
                    }
                ],
            })
        }

        // Main Loop (Cursor Following)
        const mainLoop = createTimer({
            frameRate: 30, // Optimized from 15 -> 30 for smoother look, or keep 15 if heavily demanding
            onUpdate: () => {
                // Check if component is still mounted
                if (!creatureRef.current) return

                animate(particuleEls, {
                    x: cursor.x,
                    y: cursor.y,
                    delay: stagger(40, { grid, from }),
                    duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
                    ease: 'inOut',
                    composition: 'blend',
                })
            }
        })
        loopRef.current = mainLoop

        // Auto Move Timeline
        const autoMove = createTimeline({
            defaults: {
                // ensure timeline settings if needed
            }
        })
            .add(cursor, {
                x: [-viewport.w * 0.45, viewport.w * 0.45],
                modifier: (x: number) => x + Math.sin(mainLoop.currentTime * 0.0007) * viewport.w * 0.5,
                duration: 3000,
                ease: 'inOutExpo',
                alternate: true,
                loop: true,
                onBegin: pulse,
                onLoop: pulse,
            }, 0)
            .add(cursor, {
                y: [-viewport.h * 0.45, viewport.h * 0.45],
                modifier: (y: number) => y + Math.cos(mainLoop.currentTime * 0.00012) * viewport.h * 0.5,
                duration: 1000,
                ease: 'inOutQuad',
                alternate: true,
                loop: true,
            }, 0)

        timelineRef.current = autoMove

        // Manual Movement Logic
        const manualMovementTimeout = createTimer({
            duration: 1500,
            onComplete: () => autoMove.play(),
        })

        const followPointer = (e: MouseEvent | TouchEvent) => {
            // Check for reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

            const clientX = (e as MouseEvent).clientX || (e as TouchEvent).touches?.[0]?.clientX
            const clientY = (e as MouseEvent).clientY || (e as TouchEvent).touches?.[0]?.clientY

            if (clientX == null || clientY == null) return

            // We calculate cursor relative to the center of the screen to keep original logic behavior
            // But visually it's clipped to footer.
            // Original: cursor.x = event.pageX - viewport.w;
            // Note: viewport.w is half window width. So this centers 0,0 at screen center.

            cursor.x = clientX - viewport.w
            cursor.y = clientY - viewport.h

            autoMove.pause()
            manualMovementTimeout.restart()
        }

        window.addEventListener('mousemove', followPointer)
        window.addEventListener('touchmove', followPointer)

        return () => {
            window.removeEventListener('mousemove', followPointer)
            window.removeEventListener('touchmove', followPointer)
            // Cleanup animejs instances
            if (timelineRef.current) timelineRef.current.pause()
            if (loopRef.current) loopRef.current.pause()
            if (manualMovementTimeout) manualMovementTimeout.pause()
        }
    }, [])

    return (
        <div
            ref={wrapperRef}
            className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none z-0 opacity-40 select-none mix-blend-screen"
            aria-hidden="true"
        >
            <div
                id="creature"
                ref={creatureRef}
                className="flex flex-wrap justify-center items-center"
                style={{
                    fontSize: '2px', // Fixed small scale to fit footer (approx .2vh on 1000px height)
                    width: '150em',
                    height: '150em'
                }}
            >
                {Array.from({ length: 13 * 13 }).map((_, i) => (
                    <div
                        key={i}
                        ref={el => { particlesRef.current[i] = el }}
                        className="relative w-[4em] h-[4em] m-[3em] rounded-[2em] will-change-transform"
                        style={{
                            transformStyle: 'preserve-3d',
                            mixBlendMode: 'plus-lighter'
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
