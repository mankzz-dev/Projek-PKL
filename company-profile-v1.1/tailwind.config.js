module.exports = {
  darkMode: "class", // Mode gelap berdasarkan class
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Biru lebih dalam untuk kesan elegan
        secondary: "#D97706", // Jingga lebih muted agar tidak terlalu mencolok
        background: "#0F172A", // Abu gelap untuk latar belakang utama
        card: "#1E293B", // Warna untuk card atau section
        textPrimary: "#F8FAFC", // Warna teks utama (putih terang)
        textSecondary: "#94A3B8", // Warna teks sekunder (abu-abu kebiruan)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "soft-glow": "0 4px 10px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
