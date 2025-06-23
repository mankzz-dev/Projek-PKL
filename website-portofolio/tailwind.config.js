// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        secondary: '#ffffff',
      },
      animation: {
        scrollIn: 'scrollIn 0.4s ease-in-out',
        fadeScale: 'fadeScale 0.3s ease-out forwards',
      },
      keyframes: {
        scrollIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeScale: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}