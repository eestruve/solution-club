/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary-color, #FCEA0E)",
        "navy-deep": "#1B2A4A",
        "background-light": "#f6f8f8",
        "background-dark": "#131f1e",
        "cloud": "#F8F9FA"
      },
      fontFamily: { "display": ["Inter", "sans-serif"] },
      borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
