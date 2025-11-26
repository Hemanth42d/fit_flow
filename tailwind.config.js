/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matte: { black: '#0c0c0d', dark: '#141415', card: '#1a1a1b', border: '#2a2a2b' },
        accent: { cyan: '#22d3ee', green: '#4ade80', amber: '#fbbf24', red: '#f87171', purple: '#a78bfa' },
        light: { bg: '#fafafa', card: '#ffffff', border: '#e5e5e5' }
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.2)',
        'glow-green': '0 0 15px rgba(74, 222, 128, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
