/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Section-specific accents
                accent: {
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                    green: '#10b981',
                    purple: '#a855f7',
                    orange: '#f97316',
                },
                // Neutral system
                system: {
                    bg: '#0a0a0a',
                    surface: '#141414',
                    border: 'rgba(255, 255, 255, 0.08)',
                    text: '#ffffff',
                    muted: '#6b7280',
                },
            },
            fontFamily: {
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display-xl': ['7rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'stagger-in': 'fadeUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};