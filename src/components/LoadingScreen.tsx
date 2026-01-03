'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 1500
        const interval = 20
        const steps = duration / interval
        let currentStep = 0

        const timer = setInterval(() => {
            currentStep++
            const newProgress = (currentStep / steps) * 100
            setProgress(newProgress)

            if (currentStep >= steps) {
                clearInterval(timer)
                setTimeout(() => setIsLoading(false), 200)
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
                    className="fixed inset-0 z-[200] bg-system-bg flex items-center justify-center"
                    data-testid="loading-screen"
                >
                    <div className="absolute inset-0 grid-texture opacity-20" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* System Label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="checkpoint-label"
                        >
                            INITIALIZING_SYSTEM
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="w-64">
                            <div className="h-0.5 bg-system-border overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent-blue"
                                    style={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-xs font-mono text-system-muted">
                                    {Math.round(progress)}%
                                </span>
                                <span className="text-xs font-mono text-system-muted">
                                    CHECKPOINT_2024
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
