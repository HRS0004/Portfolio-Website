'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Home, Folder, User, Mail } from 'lucide-react';
// @ts-ignore
import { animate, stagger } from 'animejs';

export default function FloatingNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            animate('.nav-item', {
                translateY: [20, 0],
                opacity: [0, 1],
                delay: stagger(100),
                ease: 'outExpo'
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* Floating Trigger Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={toggleMenu}
                    className="w-14 h-14 rounded-full bg-void-light/80 backdrop-blur-md border border-acid/20 flex items-center justify-center text-acid shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:bg-acid hover:text-black transition-all duration-300 group"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} className="group-hover:rotate-90 transition-transform" />}
                </button>
            </div>

            {/* Sidebar / Overlay Menu */}
            <div
                className={`fixed inset-y-0 right-0 w-80 bg-void/95 backdrop-blur-xl border-l border-acid/10 z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col justify-center h-full p-12 space-y-8">
                    <div className="nav-item opacity-0">
                        <span className="text-xs font-mono text-accent-glow mb-2 block">01.</span>
                        <a href="#" className="text-3xl font-display font-bold text-white hover:text-accent-primary transition-colors">Home</a>
                    </div>
                    <div className="nav-item opacity-0">
                        <span className="text-xs font-mono text-accent-glow mb-2 block">02.</span>
                        <a href="#work" className="text-3xl font-display font-bold text-white hover:text-accent-primary transition-colors">Work</a>
                    </div>
                    <div className="nav-item opacity-0">
                        <span className="text-xs font-mono text-accent-glow mb-2 block">03.</span>
                        <a href="#about" className="text-3xl font-display font-bold text-white hover:text-accent-primary transition-colors">About</a>
                    </div>
                    <div className="nav-item opacity-0">
                        <span className="text-xs font-mono text-accent-glow mb-2 block">04.</span>
                        <a href="#contact" className="text-3xl font-display font-bold text-white hover:text-accent-primary transition-colors">Contact</a>
                    </div>
                </div>

                <div className="absolute bottom-12 left-12">
                    <p className="text-xs text-white/30 font-mono">© 2026 HRS.DEV</p>
                </div>
            </div>
        </>
    );
}
