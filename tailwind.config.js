/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Baby blue & coral palette ("gold" tokens now carry coral so
      // existing class names keep working).
      colors: {
        navy: {
          DEFAULT: "#0E3456",
          deep: "#0B2A47",
          soft: "#1A4A77",
        },
        ocean: {
          DEFAULT: "#4D9FDB",
          bright: "#6FB5E6",
          mist: "#BBDDF2",
        },
        gold: {
          DEFAULT: "#F4775C",
          light: "#F89C86",
          deep: "#DE5B40",
        },
        sand: "#EAF4FB",
        foam: "#F7FBFE",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        hero: ["var(--font-hero)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      animation: {
        "pulse-ring": "pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(11,42,71,0.35) 0%, rgba(11,42,71,0.15) 40%, rgba(11,42,71,0.75) 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #F4775C, transparent)",
      },
    },
  },
  plugins: [],
};
