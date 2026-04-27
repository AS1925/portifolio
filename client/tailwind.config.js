module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0f172a",
        "dark-secondary": "#1e293b",
        "dark-tertiary": "#334155",
        "accent": "#a78bfa",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in",
        "slide-up": "slideUp 0.8s ease-out",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(167, 139, 250, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(167, 139, 250, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};