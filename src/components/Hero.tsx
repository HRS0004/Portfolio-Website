'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const nameRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!nameRef.current) return

        const text = nameRef.current.innerText
        nameRef.current.innerHTML = ''
        nameRef.current.setAttribute('data-text', text)

        const chars = text.split('').map(char => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char
            span.className = 'opacity-0 inline-block'
            nameRef.current?.appendChild(span)
            return span
        })

        const tl = gsap.timeline()

        tl.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: {
                amount: 0.5,
                from: "random"
            },
            ease: "power2.out",
            onComplete: () => {
                nameRef.current?.classList.add('glitch-text')
                // Remove glitch after a short burst to keep it clean
                setTimeout(() => {
                    nameRef.current?.classList.remove('glitch-text')
                }, 2000)
            }
        })
            .fromTo(subtitleRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 1, ease: 'power4.out' },
                "-=0.2"
            )
    }, [])

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24">
            <div className="max-w-4xl">
                <h1
                    ref={nameRef}
                    className="text-6xl md:text-8xl font-bold tracking-[0.05em] text-white uppercase mb-4 relative inline-block text-outer-glow"
                >
                    Hrishikesh Supe
                </h1>

                <div
                    ref={subtitleRef}
                    className="flex items-center gap-4 text-blue-500 font-mono text-lg md:text-xl"
                >
                    <span className="h-px w-12 bg-blue-500 hidden md:block"></span>
                    <p>Frontend Developer & 3D Web Specialist</p>
                </div>
            </div>
        </section>
    )
}
