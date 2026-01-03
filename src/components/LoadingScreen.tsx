'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate loading progress - FAST (1 second)
        const duration = 1000 // 1 second for quick access
        const interval = 20
        const steps = duration / interval
        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            const newProgress = (currentStep / steps) * 100
            setProgress(newProgress)

            if (currentStep >= steps) {
                clearInterval(timer)
                setTimeout(() => setIsLoading(false), 100)
            }
        }, interval)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[200] bg-neutral-950 flex items-center justify-center"
                    data-testid="loading-screen"
                >
                    {/* Background technical grid */}
                    <div className="absolute inset-0 technical-grid opacity-30" />

                    {/* Main content */}
                    <div className="relative z-10 flex flex-col items-center gap-12">
                        {/* HRS Logo with geometric lines */}
                        <div className="relative">
                            {/* Animated corner brackets */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="relative"
                            >
                                {/* Top-left corner */}
                                <motion.div
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                                    className="absolute -top-6 -left-6 w-12 h-12"
                                >
                                    <svg width="48" height="48" viewBox="0 0 48 48">
                                        <motion.path
                                            d="M 12 0 L 0 0 L 0 12"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, delay: 0.3 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Top-right corner */}
                                <motion.div className="absolute -top-6 -right-6 w-12 h-12">
                                    <svg width="48" height="48" viewBox="0 0 48 48">
                                        <motion.path
                                            d="M 36 0 L 48 0 L 48 12"
                                            stroke="#06b6d4"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Bottom-left corner */}
                                <motion.div className="absolute -bottom-6 -left-6 w-12 h-12">
                                    <svg width="48" height="48" viewBox="0 0 48 48">
                                        <motion.path
                                            d="M 0 36 L 0 48 L 12 48"
                                            stroke="#06b6d4"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Bottom-right corner */}
                                <motion.div className="absolute -bottom-6 -right-6 w-12 h-12">
                                    <svg width="48" height="48" viewBox="0 0 48 48">
                                        <motion.path
                                            d="M 48 36 L 48 48 L 36 48"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* HRS Text */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-8xl font-bold tracking-tighter text-white"
                                >
                                    HRS
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Loading bar */}
                        <div className="w-64 flex flex-col gap-2">
                            <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary to-secondary"
                                    style={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>

                            {/* Loading text */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-between items-center text-xs font-mono text-neutral-500"
                            >
                                <span>INITIALIZING_SYSTEM</span>
                                <span>{Math.round(progress)}%</span>
                            </motion.div>
                        </div>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-sm font-mono text-primary"
                        >
                            FRONTEND + 3D WEB SPECIALIST
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
