/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#090b0f',
          secondary: '#0d1018',
          tertiary:  '#131620',
          card:      '#0f1219',
        },
        border: {
          DEFAULT: '#1c2030',
          strong:  '#252a3a',
        },
        accent: {
          cyan:  '#00e0ff',
          blue:  '#0077ff',
          glow:  'rgba(0,224,255,0.12)',
        },
        text: {
          primary:   '#dde2f0',
          secondary: '#8a94b0',
          muted:     '#545c78',
        },
        success: '#25d366',
      },
      fontFamily: {
        sans:    ['DM Sans', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        btn:  '8px',
        pill: '50px',
      },
      animation: {
        'fade-up':  'fadeUp 0.35s ease both',
        'spin-slow': 'spin 0.7s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
