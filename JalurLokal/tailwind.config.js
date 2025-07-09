// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sesuaikan dengan struktur project kamu
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26C3AE", // Warna utama seperti di desain kamu
        secondary: "#1C1C1C",
        light: "#FAFAFA",
        dark: "#0E0E0E",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        25: "6.25rem", // digunakan di padding kanan navigasi misal pr-25
      },
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,0.1)",
        hover: "0 12px 24px rgba(0,0,0,0.15)",
      },
      clipPath: {
        custom: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-custom": {
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
        },
      });
    }),
  ],
  darkMode: "class",
};