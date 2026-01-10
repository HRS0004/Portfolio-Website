'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const bootSequence = [
    "INITIALIZING_KERNEL...",
    "LOADING_BIO_DIGITAL_ASSETS...",
    "BYPASSING_SECURITY_PROTOCOLS...",
    "MOUNTING_VIRTUAL_DOM...",
    "SYSTEM_READY."
]

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    const [bootTextIndex, setBootTextIndex] = useState(0)

    useEffect(() => {
        const duration = 2200
        const interval = 25
        const steps = duration / interval
        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            const newProgress = Math.min((currentStep / steps) * 100, 100)
            setProgress(newProgress)

            // Cycle through boot text based on progress intervals
            if (newProgress > 20 && newProgress < 40) setBootTextIndex(1)
            if (newProgress > 40 && newProgress < 70) setBootTextIndex(2)
            if (newProgress > 70 && newProgress < 90) setBootTextIndex(3)
            if (newProgress >= 95) setBootTextIndex(4)

            if (currentStep >= steps) {
                clearInterval(timer)
                setTimeout(() => setIsLoading(false), 400)
            }
        }, interval)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(20px)",
                        scale: 1.1,
                        transition: { duration: 0.8, ease: "circIn" }
                    }}
                    className="fixed inset-0 z-[200] bg-void flex flex-col items-center justify-center overflow-hidden cursor-none"
                    data-testid="loading-screen"
                >
                    {/* Scanlines Overlay */}
                    <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
                    <div className="absolute inset-0 z-0 animate-pulse opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-acid via-transparent to-transparent" />

                    <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-md px-6">

                        {/* Central Glitch Logo / Text */}
                        <div className="text-center space-y-2">
                            <div className="relative">
                                <motion.h1
                                    className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-acid to-toxic tracking-tighter"
                                    animate={{
                                        textShadow: ["0 0 10px #d9ff00", "0 0 20px #39ff14", "0 0 10px #d9ff00"],
                                        skewX: [0, 5, -5, 0],
                                    }}
                                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    HZ_01
                                </motion.h1>
                                <span className="absolute -top-4 -right-8 text-xs font-mono text-acid/60">V.2.5.0</span>
                            </div>
                        </div>

                        {/* Data Matrix / Progress */}
                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-end font-mono text-xs text-acid/80 tracking-widest">
                                <span>{bootSequence[bootTextIndex]}</span>
                                <span>{Math.floor(progress).toString().padStart(2, '0')}%</span>
                            </div>

                            {/* Custom Glitch Progress Bar */}
                            <div className="h-1 w-full bg-void-light border border-acid/20 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-acid box-shadow-neon"
                                    style={{ width: `${progress}%` }}
                                />
                                {/* Scannner Head */}
                                <motion.div
                                    className="absolute top-0 w-2 h-full bg-white mix-blend-overlay"
                                    style={{ left: `${progress}%` }}
                                />
                            </div>

                            <div className="flex justify-between font-mono text-[10px] text-mint/40 uppercase">
                                <span>Mem: 64TB_OK</span>
                                <span>Gpu: OPTIMIZED</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
