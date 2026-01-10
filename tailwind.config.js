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
                // Neo-Toxic / Bio-Digital Palette
                system: {
                    bg: '#020402', // Deep Void Green (Almost Black)
                    surface: '#0a120a', // Dark Organic
                    border: 'rgba(57, 255, 20, 0.15)', // Acid Border
                    text: '#ecfccb', // Pale Lime Mist
                    muted: '#4d7c55', // Mossy Green
                },
                void: '#020402',
                'void-light': '#0a120a',
                mint: '#ecfccb',
                acid: '#d9ff00', // High Voltage Lime
                toxic: '#39ff14', // Classic Neon Green
                violet: '#8b5cf6', // Electric Violet (Complementary)
                glass: 'rgba(10, 18, 10, 0.6)',
                'glass-heavy': 'rgba(10, 18, 10, 0.8)',
                accent: {
                    primary: '#39ff14', // ACID
                    glow: '#d9ff00', // LIME
                },
            },
            boxShadow: {
                'neon': '0 0 15px rgba(57, 255, 20, 0.15)',
            },
            fontFamily: {
                display: ['Space Grotesk', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'display-2xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
                'display-xl': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
                'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #2a8af6 360deg)',
            },
            animation: {
                'slow-spin': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-3d': 'float-3d 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shine': 'shine 8s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'float-3d': {
                    '0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotateX(5deg)' },
                },
                shine: {
                    '0%': { backgroundPosition: '200% center' },
                    '100%': { backgroundPosition: '-200% center' },
                },
            },
        },
    },
    plugins: [],
};