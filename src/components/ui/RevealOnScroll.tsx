'use client';

import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { animate } from 'animejs';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
    fullWidth?: boolean;
}

export default function RevealOnScroll({
    children,
    className = "",
    direction = 'up',
    delay = 0,
    duration = 1000,
    fullWidth = false
}: RevealOnScrollProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;

                    let translateY = 0;
                    let translateX = 0;

                    switch (direction) {
                        case 'up': translateY = 50; break;
                        case 'down': translateY = -50; break;
                        case 'left': translateX = 50; break;
                        case 'right': translateX = -50; break;
                    }

                    animate(el, {
                        opacity: [0, 1],
                        translateY: [translateY, 0],
                        translateX: [translateX, 0],
                        ease: 'outExpo',
                        duration: duration,
                        delay: delay,
                    });

                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [direction, delay, duration]);

    return (
        <div ref={elementRef} className={`${className} opacity-0 ${fullWidth ? 'w-full' : ''}`}>
            {children}
        </div>
    );
}
