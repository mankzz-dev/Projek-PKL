import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      colors: {
        base: '#000000',
        darkPurple: '#3e003e',
        midPurple: '#7c007c',
        magenta: '#ba00ba',
        neonPink: '#f800f8',
      },

      boxShadow: {
        glow: '0 0 6px #f800f8',
        'glow-sm': '0 0 4px #f800f8',
        'glow-lg': '0 0 10px #f800f8',
      },
    },
  },
  plugins: [],
}
export default config