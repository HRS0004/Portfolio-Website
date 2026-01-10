'use client';

import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import { animate, Timeline, stagger } from 'animejs';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Status text text
    const statusText = "Frontend Developer // 3D Web & Performance";

    useEffect(() => {
        // Title Animation - Slide Up Parts
        const tl = new Timeline({ loop: false });
        tl.add('.name-part', {
            translateY: [100, 0],
            opacity: [0, 1],
            ease: "outExpo",
            duration: 1400,
            delay: stagger(200, { start: 300 })
        });

        // Subtitle Animation
        if (subtitleRef.current) {
            animate(subtitleRef.current, {
                opacity: [0, 1],
                translateY: [20, 0],
                ease: "outExpo",
                duration: 1000,
                delay: 1000
            });
        }

        // Scroll Indicator Animation
        if (scrollRef.current) {
            animate(scrollRef.current, {
                opacity: [0, 1],
                translateY: [0, 10],
                direction: 'alternate',
                loop: true,
                ease: 'inOutQuad',
                duration: 1000,
                delay: 2000
            });
        }

    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <AnimatedBackground />
                <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-void/50 to-void z-10 pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center w-full max-w-[90vw]">

                {/* Main Title - METALLIC SHINE & 3D FLOAT */}
                <h1
                    ref={titleRef}
                    className="hero-title font-display text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-8 uppercase animate-float-3d perspective-1000"
                    style={{ perspective: '1000px' }}
                >
                    <span className="name-part block bg-clip-text text-transparent bg-[linear-gradient(to_right,#ffffff,#a1a1aa,#d9ff00,#a1a1aa,#ffffff)] bg-[length:200%_auto] animate-shine">
                        Hrishikesh
                    </span>
                    <span className="name-part block bg-clip-text text-transparent bg-[linear-gradient(to_right,#ffffff,#a1a1aa,#39ff14,#a1a1aa,#ffffff)] bg-[length:200%_auto] animate-shine">
                        Supe
                    </span>
                </h1>

                {/* Subtitle / Status */}
                <div ref={subtitleRef} className="opacity-0 flex flex-col md:flex-row items-center gap-6 mt-4">
                    <div className="h-[1px] w-24 bg-acid/50 hidden md:block" />
                    <p className="font-mono text-lg md:text-xl text-acid/80 uppercase tracking-widest font-bold">
                        {statusText}
                    </p>
                    <div className="h-[1px] w-24 bg-acid/50 hidden md:block" />
                </div>

            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className="absolute bottom-12 z-20 flex flex-col items-center gap-2 opacity-0 mix-blend-screen"
            >
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </div>

        </section>
    );
}
