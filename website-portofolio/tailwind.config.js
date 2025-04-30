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
      },
      keyframes: {
        scrollIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}